/* ===========================================================================
   Ziyarat — directory home page, interaction layer.

   Everything here is progressive: the page is complete and navigable with
   JavaScript switched off. Nothing below invents content or blocks rendering.

   Honoured throughout: prefers-reduced-motion. When it is set, reveals resolve
   immediately and the pointer-tracking effects never bind.
   =========================================================================== */

(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* ------------------------------------------------------------- mobile nav */

  const burger = $('#burger');
  const nav = $('#nav');

  if (burger && nav) {
    const setNav = (open) => {
      nav.dataset.open = String(open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    burger.addEventListener('click', () => setNav(nav.dataset.open !== 'true'));

    nav.addEventListener('click', (e) => {
      if (e.target.closest('a') && window.matchMedia('(max-width: 860px)').matches) {
        setNav(false);
      }
    });

    // Escape closes the drawer and returns focus to the control that opened it.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.dataset.open === 'true') {
        setNav(false);
        burger.focus();
      }
    });
  }

  /* --------------------------------------------------------- scroll reveals */

  const revealables = $$('[data-reveal]');

  // Stagger is per group of siblings, so each row of cards cascades on its own
  // rather than inheriting a delay from whatever came before it in the document.
  const groups = new Map();
  revealables.forEach((el) => {
    const parent = el.parentElement;
    const seen = groups.get(parent) || 0;
    el.style.setProperty('--i', String(seen));
    groups.set(parent, seen + 1);
  });

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-revealed'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target); // reveal once; re-animating on scroll-up is noise
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    revealables.forEach((el) => io.observe(el));
  }

  /* ------------------------------------- scroll progress, header, back-to-top */

  const bar = $('#progressBar');
  const masthead = $('.masthead');
  const toTop = $('#toTop');

  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    if (masthead) masthead.classList.toggle('is-stuck', y > 12);
    if (toTop) toTop.classList.toggle('is-shown', y > window.innerHeight * 0.7);

    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(onScroll);
    },
    { passive: true }
  );
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  /* ------------------------------------------------------------- scroll spy */

  const navLinks = $$('.masthead__nav a[href^="#"]');
  const targets = navLinks
    .map((a) => ({ link: a, section: document.getElementById(a.getAttribute('href').slice(1)) }))
    .filter((t) => t.section);

  if (targets.length && 'IntersectionObserver' in window) {
    const visible = new Set();

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));

        // Topmost visible section wins, so passing a short section on the way
        // down does not leave a stale link lit.
        const current = targets
          .filter((t) => visible.has(t.section))
          .sort((a, b) => a.section.getBoundingClientRect().top - b.section.getBoundingClientRect().top)[0];

        targets.forEach(({ link }) => {
          if (current && link === current.link) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-30% 0px -55% 0px' }
    );

    targets.forEach((t) => spy.observe(t.section));
  }

  /* ------------------------------------------------------- hero count-up */

  const counters = $$('[data-count]');

  if (counters.length) {
    const run = (el) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;

      if (reduced) {
        el.textContent = String(target);
        return;
      }

      const duration = 900;
      const start = performance.now();

      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased));
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      const co = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            run(e.target);
            co.unobserve(e.target);
          });
        },
        { threshold: 0.6 }
      );
      counters.forEach((el) => co.observe(el));
    } else {
      counters.forEach(run);
    }
  }

  /* --------------------------------------------- pointer spotlight and tilt */

  // Coarse pointers get none of this: there is no hover, and the handlers would
  // only fire on tap, which reads as a glitch.
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (fine && !reduced) {
    $$('[data-spot]').forEach((card) => {
      card.addEventListener(
        'pointermove',
        (e) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
          card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
        },
        { passive: true }
      );
    });

    const MAX_TILT = 4; // degrees — past about six this stops reading as depth

    $$('[data-tilt]').forEach((card) => {
      let frame = 0;

      card.addEventListener('pointerenter', () => card.classList.add('is-tilting'));

      card.addEventListener(
        'pointermove',
        (e) => {
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            card.style.setProperty('--ry', `${px * MAX_TILT * 2}deg`);
            card.style.setProperty('--rx', `${-py * MAX_TILT * 2}deg`);
          });
        },
        { passive: true }
      );

      const reset = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        card.classList.remove('is-tilting');
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      };

      card.addEventListener('pointerleave', reset);
      card.addEventListener('blur', reset, true);
    });
  }

  /* --------------------------------------------------------- copy the link */

  // A shrine's page is something people pass on. Copying beats retyping.
  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const url = new URL(btn.dataset.copy, location.href).href;
      const label = btn.querySelector('[data-copy-label]') || btn;
      const original = label.textContent;

      try {
        await navigator.clipboard.writeText(url);
        label.textContent = 'Link copied';
      } catch {
        label.textContent = url; // clipboard blocked — show it so it can be copied by hand
      }

      btn.classList.add('is-copied');
      window.setTimeout(() => {
        label.textContent = original;
        btn.classList.remove('is-copied');
      }, 2000);
    });
  });
})();
