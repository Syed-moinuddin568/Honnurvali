/* Interaction layer. Independent of script.js so the i18n engine is untouched.
   Everything here degrades to nothing: no element is required to exist, and
   prefers-reduced-motion short-circuits the animated parts. */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ready = (fn) =>
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn)
      : fn();

  ready(() => {
    const header = document.querySelector('.site-header');
    const bar = document.querySelector('.scroll-progress');
    const toTop = document.getElementById('toTop');
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));

    /* ---- one rAF-throttled scroll handler drives four things ------------ */
    let ticking = false;

    /* The floating launcher sits below the header, and the header's height
       changes with the utility bar, wrapping and the condense-on-scroll state.
       Publishing it as a custom property keeps them from ever overlapping. */
    const syncHeaderHeight = () => {
      if (!header) return;
      document.documentElement.style.setProperty(
        '--header-h',
        `${Math.round(header.getBoundingClientRect().height)}px`
      );
    };

    const onScroll = () => {
      ticking = false;
      syncHeaderHeight();
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      bar?.style.setProperty('--progress', max > 0 ? (y / max).toFixed(4) : '0');
      header?.classList.toggle('is-scrolled', y > 40);
      toTop?.classList.toggle('is-shown', y > 600);

      // the last section whose top has crossed the upper third of the viewport
      let current = '';
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) current = s.id;
      }
      navLinks.forEach((a) =>
        a.classList.toggle('is-active', a.getAttribute('href') === `#${current}`)
      );
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(onScroll);
        }
      },
      { passive: true }
    );
    onScroll();
    syncHeaderHeight();
    window.addEventListener('resize', syncHeaderHeight, { passive: true });

    toTop?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });

    /* ---- pointer spotlight; skipped on touch and for reduced motion ----- */
    if (!reduce && window.matchMedia('(hover: hover)').matches) {
      document
        .querySelectorAll('.card-panel, .info-card, .visit-card, .bio-points article')
        .forEach((card) => {
          card.addEventListener(
            'pointermove',
            (event) => {
              const r = card.getBoundingClientRect();
              card.style.setProperty('--mx', `${event.clientX - r.left}px`);
              card.style.setProperty('--my', `${event.clientY - r.top}px`);
            },
            { passive: true }
          );
        });
    }

    /* ---- staggered reveals: children arrive in reading order ------------ */
    const groups = Array.from(document.querySelectorAll('.stagger'));
    groups.forEach((group) => {
      Array.from(group.children).forEach((child, i) =>
        child.style.setProperty('--i', String(i))
      );
    });

    if (reduce || !('IntersectionObserver' in window)) {
      groups.forEach((g) => g.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );
      groups.forEach((g) => observer.observe(g));
    }
  });
})();
