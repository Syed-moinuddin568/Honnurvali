const init = () => {
  try {
  const body = document.body;
  const menuToggles = document.querySelectorAll('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.querySelector('.mobile-menu__overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const heroButton = document.querySelector('.play-button');
  const form = document.getElementById('duaForm');
  const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));
  const i18nPlaceholderElements = Array.from(document.querySelectorAll('[data-i18n-placeholder]'));
  const i18nAriaElements = Array.from(document.querySelectorAll('[data-i18n-aria]'));

  // Languages written right-to-left. Drives the <html dir> attribute.
  const RTL_LANGUAGES = ['ur'];

  let currentLanguage = document.documentElement.lang || 'en';

  const translations = {
    en: {
      languageToast: 'Language selected: English',
      navVisit: 'Visit Us',
      navPrayer: 'Prayer',
      navServices: 'Services',
      utilHelpline: 'Helpline',
      backToDirectory: 'All shrines',
      utilEmail: 'Email',
      utilPrayer: 'Prayer Timings',
      heroTagline: 'A place of faith, peace, devotion and service — at D. Honnur, Anantapur district, Andhra Pradesh.',
      quickPrayer: 'Prayer Timings',
      quickPrayerNote: 'Fajr to Isha, daily',
      quickEvents: 'Urs & Events',
      quickEventsNote: 'Annual and special programmes',
      quickLocation: 'Location & Directions',
      quickLocationNote: 'Bommanahal Mandal, Anantapur',
      quickStay: 'Stay & Facilities',
      quickStayNote: 'Ask at the dargah office',
      readHistory: 'Read Our History',
      announceLabel: 'Important Announcement',
      viewAll: 'View All',
      labelPrayerSection: 'Prayer',
      prayerHeading: 'Prayer Timings',
      prayerPending: 'The five daily prayers are observed from Fajr to Isha. Exact timings shift through the year and are announced at the dargah — please confirm locally before travelling.',
      prayerFajr: 'Fajr',
      prayerDhuhr: 'Dhuhr',
      prayerAsr: 'Asr',
      prayerMaghrib: 'Maghrib',
      prayerIsha: 'Isha',
      labelServicesSection: 'Services',
      servicesHeading: 'Our Services',
      servicesNote: 'Availability varies — please confirm with the dargah office before you travel.',
      svcCharity: 'Charity',
      svcLangar: 'Langar',
      svcStay: 'Accommodation',
      svcVolunteer: 'Volunteer',
      svcRequests: 'Dua Requests',
      svcHelp: 'Help Desk',
      galleryNote: 'Views of the shrine at Honnur — the gateway, the minarets and the courtyard. More photographs will be added as they are shared by the dargah.',
      labelVisitSection: 'Visiting',
      visitHeading: 'Visitor Information',
      visitReach: 'How to Reach',
      visitReachText: 'D. Honnur, Bommanahal Mandal, Anantapur District, Andhra Pradesh 515812. The village lies in the north of the district, close to the Karnataka border and the Bellary region.',
      visitHours: 'Visiting Hours',
      visitHoursText: 'Open all day, every day of the year, for ziyarat. Mornings and evenings are cooler and quieter; Thursday evenings and the days of urs are the busiest.',
      visitParking: 'Parking',
      visitParkingText: 'Vehicles are usually left near the approach to the dargah. Please ask at the office on arrival, especially during urs when the area is crowded.',
      visitGuide: 'Visitor Guidelines',
      visitGuideText: 'Dress modestly, remove footwear before entering, and keep the shrine quiet during prayers.',
      visitMedical: 'Medical Help',
      visitMedicalText: 'The nearest facilities are at Bommanahal, with larger hospitals in Anantapur. Ask at the office for help in an emergency.',
      visitEmergency: 'Emergency Contact',
      visitEmergencyText: 'A contact number will be published once confirmed by the dargah.',
      labelUpdatesSection: 'Notices',
      updatesHeading: 'Latest Updates',
      updatesPending: 'No notices at present. Announcements from the dargah will appear here.',
      labelContactSection: 'Contact',
      contactHeading: 'Contact Us',
      contactAddressLabel: 'Address',
      contactPhoneLabel: 'Phone',
      contactEmailLabel: 'Email',
      contactAddress: 'D. Honnur, Bommanahal Mandal, Anantapur District, Andhra Pradesh 515812',
      openInMaps: 'Open in Google Maps',
      ariaUtilityLinks: 'Quick contact',

      darshanComingSoon: 'Live Darshan feature coming soon.',
      thankYou: 'Thank you',
      duaSubmitted: 'Your dua request has been submitted.',

      // navigation
      navHome: 'Home',
      navAbout: 'About',
      navHistory: 'History',
      navSaint: 'Saint',
      navEvents: 'Events',
      navGallery: 'Gallery',
      navLive: 'Live',
      navContact: 'Contact',
      bookVisit: 'Book Visit',
      brandName: 'Dargah Honnur',
      brandTagline: 'Anantapur · Andhra Pradesh',
      eventsPending: 'Urs and event dates are announced at the dargah. Please contact the dargah for the current schedule.',
      contactPending: 'Phone and email are being confirmed by the dargah.',
      duaNotice: 'This form is not connected to the dargah yet — nothing is sent. Please contact the dargah directly.',
      duaNotSent: 'Nothing was sent — this form is not connected to the dargah yet.',
      mobileLanguageLabel: 'Language',
      mobileStoriesLabel: 'Spiritual Stories',

      // hero
      welcome: 'Welcome to',
      heroTitle: 'Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini Chishty Al Quadri (R.A)',
      heroText: 'The resting place of a Sufi saint who travelled from Bijapur across the Deccan and chose Honnur for his final years — a sanctuary of prayer, unity and devotion in Anantapur district, Andhra Pradesh.',
      viewHistory: 'View History',
      watchLive: 'Watch Live',
      scrollLabel: 'Scroll',
      visitCardStatus: 'Open all day for ziyarat',
      planVisit: 'Plan Your Visit',
      statLocationLabel: 'Location',
      statLocationValue: 'D. Honnur, Anantapur',
      statLocationNote: 'Andhra Pradesh 515812',
      statPrayerLabel: 'Prayer Timings',
      statPrayerValue: 'Fajr - Isha',
      statPrayerNote: 'Daily schedule',
      statSajjadaLabel: 'Sajjada Nasheen',
      statSajjadaNote: 'Leading prayers',

      // section labels
      labelSpiritualStories: 'Spiritual Stories',
      labelAboutSection: 'About Dargah Honnur',
      labelHistorySection: 'History',
      labelEventsSection: 'Urs & Events',
      labelWatchLiveSection: 'Watch Live',
      labelSaintSection: 'Saint Biography',
      labelGallerySection: 'Gallery',
      labelDuaSection: 'Dua Request',
      labelSupportSection: 'Support Dargah Activities',

      // about + history
      aboutHeading: 'A Legacy of Faith and Spiritual Harmony',
      aboutText: 'Dargah Honnur is the revered shrine of Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini Chishty Al Quadri (R.A), who carried the teachings of the Chishti and Qadri orders through the Deccan. Pilgrims travel from across Anantapur district and neighbouring Karnataka — especially the Bellary region — to seek peace, attend qawwali gatherings and offer dua.',
      readMore: 'Read More',
      historyHeading: 'From Bijapur to Honnur',
      historyText: 'Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini set out from Bijapur to carry the teachings of Islam through the Deccan, and chose the village of Honnur as the place to spend his final years. The shrine raised over his resting place has drawn seekers ever since.',
      historyCard1Title: 'Bijapur',
      historyCard1Text: 'The saint began his journey in Bijapur, the Deccan sultanate country that shaped the region’s Sufi traditions.',
      historyCard2Title: 'The Deccan',
      historyCard2Text: 'He travelled through the Deccan carrying the teachings of the Chishti and Qadri silsilas, gathering followers along the way.',
      historyCard3Title: 'Honnur',
      historyCard3Text: 'He chose Honnur for his final years, and the dargah built over his grave remains open to pilgrims every day.',
      exploreEvents: 'Explore Events',

      // events + live
      upcomingEvents: 'Upcoming Events',
      liveDarshan: 'Live Darshan',
      liveBadge: 'LIVE',
      watchLiveNow: 'Watch Live Now',

      // biography
      saintBioHeading: 'Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini Chishty Al Quadri (R.A)',
      biographyText: 'Remembered for humility, service and devotion, the saint is honoured in both the Chishti and Qadri silsilas — his full title, Chishty Al Quadri, records that dual initiation. His shrine at Honnur remains a place of prayer, qawwali and spiritual solace.',
      bioPoint1Title: 'Chishti and Qadri',
      bioPoint1Text: 'Initiated in both silsilas, reflected in the title Chishty Al Quadri carried at the shrine.',
      bioPoint2Title: 'Teacher in the Deccan',
      bioPoint2Text: 'Carried his teaching from Bijapur through the Deccan, drawing followers across communities.',
      bioPoint3Title: 'Rest at Honnur',
      bioPoint3Text: 'Chose Honnur for his final years; the dargah over his grave is the village’s enduring landmark.',
      visitShrine: 'Visit the Shrine',

      // gallery
      galleryHeading: 'Moments of Blessings',
      galleryPending: 'Photographs of the dargah will be published here.',

      // dua request
      duaRequestHeading: 'Submit for Dargah Updates',
      labelFullName: 'Full Name',
      labelCity: 'City',
      labelPhone: 'Mobile Number',
      labelDuaRequest: 'Your Dua Request',
      submitDua: 'Submit Dua',
      supportHeading: 'Meet the Sajjada Nasheen',
      meetText: 'The Sajjada Nasheen welcomes devotees and visitors for blessings, guidance and spiritual support.',
      sajjadaName: 'Syed Shah Shabbir Badesha Hussaini Chishti',
      requestMeeting: 'Request a Meeting',


      // sawane hayat
      exploreSawane: 'Sawane Hayat',
      sawaneDropdownTitle: 'Sawane Hayat',
      sawaneHeading: 'Sawane Hayat & Karamat',
      sawaneItem1: 'Early Life and Blessings',
      sawaneItem2: 'Miracles and Karamat',
      sawaneItem3: 'Legacy of Service',
      infoItemSawane: 'Sawane Hayat',
      infoItemKaramat: 'Karamat',
      infoPanelFooter: 'Select a story to view its details.',
      modalSawaneTitle: 'Sawane Hayat',
      modalSawaneText: 'Sawane Hayat captures the life journey, teachings, and spiritual milestones of Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini — from Bijapur, through the Deccan, to his final years at Honnur.',
      modalKaramatTitle: 'Karamat',
      modalKaramatText: 'Karamat describes the miraculous stories and divine signs associated with the shrine and its devotees. These accounts reflect the spiritual power, compassion, and grace experienced by pilgrims and seekers who visited Dargah Honnur.',
      modalHeritageTitle: 'Legacy of Service',
      modalHeritageText: 'The legacy of service at Dargah Honnur is built on seva, community care, and devotion. Pilgrims find comfort and purpose through charitable gatherings and the shrine’s deep spiritual heritage.',

      // footer
      footerAbout: 'Dargah Honnur, the shrine of Hazrat Khwaja Syed Shah Sufi Sarmasth Hussaini Chishty Al Quadri (R.A), is a place of prayer, harmony and spiritual devotion.',
      footerQuickLinks: 'Quick Links',
      footerAboutLink: 'About Dargah',
      footerHistoryLink: 'History',
      footerEventsLink: 'Events',
      footerGalleryLink: 'Gallery',
      footerServices: 'Services',
      footerLiveDarshan: 'Live Darshan',
      footerDuaRequest: 'Dua Request',
      footerCommunityEvents: 'Community Events',
      footerContact: 'Contact',
      footerContactAddress: 'D. Honnur, Bommanahal Mandal, Anantapur District, Andhra Pradesh 515812',
      footerCopyright: '© 2026 Dargah Honnur. All Rights Reserved.',
      backToTop: 'Back to Top',

      // placeholders + aria
      placeholderFullName: 'Enter your full name',
      placeholderCity: 'Enter your city',
      placeholderPhone: 'Enter mobile number',
      placeholderDuaRequest: 'Type your dua request...',
      ariaLanguageSelection: 'Language selection',
      ariaPrimaryNavigation: 'Primary navigation',
      ariaOpenMenu: 'Open navigation menu',
      ariaCloseMenu: 'Close menu',
      ariaMobileNavigation: 'Mobile navigation',
      ariaScrollAbout: 'Scroll to about section',
      ariaPlayLiveDarshan: 'Play live darshan',
      ariaVisitDetails: 'Visit details',
      ariaCloseSawane: 'Close sawane list',
      ariaCloseSidebar: 'Close sidebar',
      ariaCloseDetails: 'Close details',

      // ---- expanded section content ----
      heroFact1: 'Open every day for ziyarat',
      heroFact2: 'Bommanahal Mandal, Anantapur district',
      heroFact3: 'English · اردو · हिन्दी',
      quickHistory: 'Sawane Hayat',
      quickHistoryNote: 'The saint’s life and lineage',
      quickGallery: 'Photo Gallery',
      quickGalleryNote: 'Views of the shrine',
      aboutText2: 'A dargah is the tomb-shrine of a Sufi saint, and for centuries it has served the people around it as much as the pilgrims who travel to it. Visitors come to offer fatiha, tie a thread of intention, listen to qawwali and share in langar. The doors are open to everyone, of every faith — that openness is the oldest custom of the Deccan shrines.',
      silsilaHeading: 'The two silsilas',
      silsila1Title: 'Chishti',
      silsila1Text: 'Brought to the subcontinent by Khwaja Moinuddin Chishti of Ajmer, the Chishti order is known for love of God expressed through service to people, for sama — devotional music — and for accepting all who come, without distinction of creed or caste.',
      silsila2Title: 'Qadri',
      silsila2Text: 'The Qadri order traces itself to Shaikh Abdul Qadir Jilani of Baghdad. It holds to the sharia alongside the inner path, and reached the Deccan through scholars and travellers who settled across the sultanates.',
      nameHeading: 'Reading the name',
      name1Title: 'Khwaja',
      name1Text: 'A title of respect for a Sufi master and teacher.',
      name2Title: 'Syed',
      name2Text: 'A descendant of the family of the Prophet Muhammad ﷺ.',
      name3Title: 'Sarmasth',
      name3Text: 'One absorbed in divine love — a title given to those lost in the remembrance of God.',
      name4Title: 'Hussaini',
      name4Text: 'Of the line of Imam Hussain, grandson of the Prophet ﷺ.',
      name5Title: 'Chishty Al Quadri',
      name5Text: 'The two Sufi orders whose teachings he carried and passed on.',
      name6Title: '(R.A)',
      name6Text: 'Short for Radi Allahu Anhu — “may God be pleased with him”.',
      ursHeading: 'What happens at an Urs',
      ursIntro: 'An urs marks the anniversary of a saint’s passing — remembered not as a death but as a union with the Divine. The observances below are those kept at Chishti and Qadri shrines across the Deccan. Dates for Honnur are announced at the dargah itself.',
      urs1Title: 'Sandal',
      urs1Text: 'Sandalwood paste is ceremonially applied to the tomb, opening the days of the urs.',
      urs2Title: 'Chadar & flowers',
      urs2Text: 'Pilgrims offer a chadar — an embroidered cloth — along with flowers and incense at the tomb.',
      urs3Title: 'Qawwali & sama',
      urs3Text: 'Devotional singing continues late into the night — the Chishti way of turning the heart towards God.',
      urs4Title: 'Langar & fatiha',
      urs4Text: 'Food is cooked and shared with everyone present, and fatiha is recited for the saint and for the departed.',
      prayerWhenHeading: 'The five daily prayers',
      prayerFajrWhen: 'Before sunrise, in the first light of dawn.',
      prayerDhuhrWhen: 'After the sun passes its highest point at midday.',
      prayerAsrWhen: 'In the late afternoon, before the light begins to fade.',
      prayerMaghribWhen: 'Just after the sun has set.',
      prayerIshaWhen: 'At night, once the last of the twilight has gone.',
      prayerJumuah: 'On Friday the midday prayer is replaced by Jumu‘ah, prayed in congregation. Thursday evening — the eve of Jumu‘ah — is traditionally the busiest time for ziyarat at a dargah.',
      svcCharityText: 'Alms and help gathered for those who come in need.',
      svcLangarText: 'A shared meal cooked at the dargah and offered to every visitor alike.',
      svcStayText: 'Simple lodging for pilgrims travelling from a distance.',
      svcVolunteerText: 'Khidmat — hands are welcome at langar, at the gate and during the urs.',
      svcRequestsText: 'Names and intentions carried to the shrine so that dua may be offered.',
      svcHelpText: 'Ask at the dargah office for directions, timings or anything you need.',
      galCap1: 'The dargah seen from the approach road.',
      galCap2: 'Minarets rising above the decorated perimeter wall.',
      galCap3: 'The gateway, painted and garlanded.',
      galCap4: 'The shrine entrance, hung with a floral curtain.',
      galCap5: 'Rooflines around the courtyard.',
      galCap6: 'The decorated arcade above the courtyard.',
      visitRoad: 'Getting here',
      visitRoadText: 'The dargah is reached by road through Bommanahal. Bus and share-auto routes change with the season — ask locally, or at the office, for the current connection.',
      visitDress: 'What to wear',
      visitDressText: 'Modest clothing covering the shoulders and knees. Women are asked to cover the head inside the shrine; a scarf is enough.',
      visitPhoto: 'Photography',
      visitPhotoText: 'Photographs of the buildings are welcome. Please do not photograph people at prayer, and put the phone away inside the tomb chamber.',
      ziyaratHeading: 'Your ziyarat, step by step',
      zStep1Title: 'Footwear at the door',
      zStep1Text: 'Remove your shoes at the entrance; a place is kept for them. Wash the hands and face if you can.',
      zStep2Title: 'Salaam and fatiha',
      zStep2Text: 'Face the tomb, offer salaam, and recite fatiha quietly. There is no fixed form — the intention is what matters.',
      zStep3Title: 'Chadar and flowers',
      zStep3Text: 'Many pilgrims offer a chadar, flowers or incense. Ask at the dargah where these may be obtained.',
      zStep4Title: 'Sit a while',
      zStep4Text: 'Stay for the qawwali if there is any, and share in the langar. Nobody is turned away, and nothing is asked of you.',
      updatesIntro: 'Notices from the dargah appear here — urs announcements, changes to timings, and news of repairs or building work. Nothing is posted unless the dargah sends it.',
      contactAskHeading: 'What you can ask about',
      ask1Title: 'Visiting and timings',
      ask1Text: 'Prayer timings for the day, the best hours to come, and access for elderly or disabled pilgrims.',
      ask2Title: 'Urs dates and programmes',
      ask2Text: 'The dates of the annual urs, the qawwali programme, and arrangements during the days of the gathering.',
      ask3Title: 'Langar, stay and khidmat',
      ask3Text: 'Meals, lodging for those travelling far, and how to offer your time as a volunteer.',
    },

    hi: {
      languageToast: 'भाषा सेट कर दी गई: हिंदी',
      navVisit: 'दर्शन',
      navPrayer: 'नमाज़',
      navServices: 'सेवाएँ',
      utilHelpline: 'हेल्पलाइन',
      backToDirectory: 'सभी दरगाहें',
      utilEmail: 'ईमेल',
      utilPrayer: 'नमाज़ का समय',
      heroTagline: 'आस्था, शांति, भक्ति और सेवा का स्थान — डी. होंनूर, अनंतपुर ज़िला, आंध्र प्रदेश।',
      quickPrayer: 'नमाज़ का समय',
      quickPrayerNote: 'प्रतिदिन फ़ज्र से इशा तक',
      quickEvents: 'उर्स और कार्यक्रम',
      quickEventsNote: 'वार्षिक और विशेष आयोजन',
      quickLocation: 'स्थान और मार्ग',
      quickLocationNote: 'बोम्मनहाल मंडल, अनंतपुर',
      quickStay: 'ठहरने की सुविधा',
      quickStayNote: 'दरगाह कार्यालय से पूछें',
      readHistory: 'हमारा इतिहास पढ़ें',
      announceLabel: 'महत्वपूर्ण सूचना',
      viewAll: 'सभी देखें',
      labelPrayerSection: 'नमाज़',
      prayerHeading: 'नमाज़ का समय',
      prayerPending: 'पाँच वक़्त की नमाज़ फ़ज्र से इशा तक अदा की जाती है। सटीक समय वर्ष भर बदलता रहता है और दरगाह पर घोषित किया जाता है — यात्रा से पहले कृपया स्थानीय रूप से पुष्टि करें।',
      prayerFajr: 'फ़ज्र',
      prayerDhuhr: 'ज़ुहर',
      prayerAsr: 'अस्र',
      prayerMaghrib: 'मग़रिब',
      prayerIsha: 'इशा',
      labelServicesSection: 'सेवाएँ',
      servicesHeading: 'हमारी सेवाएँ',
      servicesNote: 'उपलब्धता बदलती रहती है — यात्रा से पहले कृपया दरगाह कार्यालय से पुष्टि करें।',
      svcCharity: 'दान-पुण्य',
      svcLangar: 'लंगर',
      svcStay: 'ठहरने की व्यवस्था',
      svcVolunteer: 'स्वयंसेवा',
      svcRequests: 'दुआ अनुरोध',
      svcHelp: 'सहायता केंद्र',
      galleryNote: 'हौनूर की दरगाह के दृश्य — प्रवेश द्वार, मीनारें और सहन। जैसे-जैसे दरगाह से तस्वीरें मिलेंगी, और जोड़ी जाएँगी।',
      labelVisitSection: 'दर्शन',
      visitHeading: 'आगंतुक जानकारी',
      visitReach: 'कैसे पहुँचें',
      visitReachText: 'डी. हौनूर, बोम्मनहाल मंडल, अनंतपुर ज़िला, आंध्र प्रदेश 515812। यह गाँव ज़िले के उत्तर में, कर्नाटक की सरहद और बेल्लारी इलाक़े के क़रीब है।',
      visitHours: 'दर्शन का समय',
      visitHoursText: 'ज़ियारत के लिए साल के हर दिन, पूरे दिन खुला। सुबह और शाम ठंडी और शांत रहती हैं; जुमेरात की शाम और उर्स के दिन सबसे व्यस्त होते हैं।',
      visitParking: 'पार्किंग',
      visitParkingText: 'गाड़ियाँ आम तौर पर दरगाह के रास्ते के पास खड़ी की जाती हैं। पहुँचने पर दफ़्तर में ज़रूर पूछें, ख़ासकर उर्स के दिनों में जब भीड़ रहती है।',
      visitGuide: 'आगंतुक दिशानिर्देश',
      visitGuideText: 'शालीन वस्त्र पहनें, प्रवेश से पहले जूते उतारें, और नमाज़ के समय शांति बनाए रखें।',
      visitMedical: 'चिकित्सा सहायता',
      visitMedicalText: 'सबसे नज़दीकी सुविधाएँ बोम्मनहाल में हैं, और बड़े अस्पताल अनंतपुर में। आपात स्थिति में मदद के लिए दफ़्तर में पूछें।',
      visitEmergency: 'आपातकालीन संपर्क',
      visitEmergencyText: 'दरगाह द्वारा पुष्टि होने पर संपर्क नंबर प्रकाशित किया जाएगा।',
      labelUpdatesSection: 'सूचनाएँ',
      updatesHeading: 'नवीनतम अपडेट',
      updatesPending: 'फ़िलहाल कोई सूचना नहीं। दरगाह की घोषणाएँ यहाँ दिखाई देंगी।',
      labelContactSection: 'संपर्क',
      contactHeading: 'संपर्क करें',
      contactAddressLabel: 'पता',
      contactPhoneLabel: 'फ़ोन',
      contactEmailLabel: 'ईमेल',
      contactAddress: 'डी. होंनूर, बोम्मनहाल मंडल, अनंतपुर ज़िला, आंध्र प्रदेश 515812',
      openInMaps: 'गूगल मैप्स में खोलें',
      ariaUtilityLinks: 'त्वरित संपर्क',

      darshanComingSoon: 'लाइव दर्शन सुविधा शीघ्र ही आ रही है।',
      thankYou: 'धन्यवाद',
      duaSubmitted: 'आपका दुआ अनुरोध प्रस्तुत किया गया है।',

      // navigation
      navHome: 'होम',
      navAbout: 'के बारे में',
      navHistory: 'इतिहास',
      navSaint: 'संत',
      navEvents: 'ईवेंट्स',
      navGallery: 'गैलरी',
      navLive: 'लाइव',
      navContact: 'संपर्क',
      bookVisit: 'बुक विजिट',
      brandName: 'दरगाह होंनूर',
      brandTagline: 'अनंतपुर · आंध्र प्रदेश',
      eventsPending: 'उर्स और कार्यक्रमों की तिथियाँ दरगाह पर घोषित की जाती हैं। वर्तमान कार्यक्रम के लिए कृपया दरगाह से संपर्क करें।',
      contactPending: 'फ़ोन और ईमेल की पुष्टि दरगाह द्वारा की जा रही है।',
      duaNotice: 'यह फ़ॉर्म अभी दरगाह से जुड़ा नहीं है — कुछ भी नहीं भेजा जाता। कृपया दरगाह से सीधे संपर्क करें।',
      duaNotSent: 'कुछ भी नहीं भेजा गया — यह फ़ॉर्म अभी दरगाह से जुड़ा नहीं है।',
      mobileLanguageLabel: 'भाषा',
      mobileStoriesLabel: 'आध्यात्मिक कथाएँ',

      // hero
      welcome: 'आपका स्वागत है',
      heroTitle: 'हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी चिश्ती अल क़ादरी (र.अ.)',
      heroText: 'उस सूफ़ी संत की विश्रामस्थली, जो बीजापुर से दकन की यात्रा करते हुए होंनूर पहुँचे और यहीं अपने अंतिम वर्ष बिताए — अनंतपुर ज़िला, आंध्र प्रदेश में प्रार्थना, एकता और भक्ति का पवित्र स्थान।',
      viewHistory: 'इतिहास देखें',
      watchLive: 'लाइव देखें',
      scrollLabel: 'स्क्रॉल',
      visitCardStatus: 'ज़ियारत के लिए पूरे दिन खुला',
      planVisit: 'अपनी यात्रा की योजना बनाएँ',
      statLocationLabel: 'स्थान',
      statLocationValue: 'डी. होंनूर, अनंतपुर',
      statLocationNote: 'आंध्र प्रदेश 515812',
      statPrayerLabel: 'नमाज़ का समय',
      statPrayerValue: 'फ़ज्र - इशा',
      statPrayerNote: 'दैनिक कार्यक्रम',
      statSajjadaLabel: 'सज्जादा नशीन',
      statSajjadaNote: 'नमाज़ का नेतृत्व',

      // section labels
      labelSpiritualStories: 'आध्यात्मिक कथाएँ',
      labelAboutSection: 'दरगाह होंनूर के बारे में',
      labelHistorySection: 'इतिहास',
      labelEventsSection: 'उर्स और कार्यक्रम',
      labelWatchLiveSection: 'लाइव देखें',
      labelSaintSection: 'संत जीवनी',
      labelGallerySection: 'गैलरी',
      labelDuaSection: 'दुआ अनुरोध',
      labelSupportSection: 'दरगाह गतिविधियों में सहयोग',

      // about + history
      aboutHeading: 'विश्वास और आध्यात्मिक सद्भाव की विरासत',
      aboutText: 'दरगाह होंनूर हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी चिश्ती अल क़ादरी (र.अ.) का पूजनीय तीर्थस्थल है, जिन्होंने चिश्ती और क़ादरी सिलसिलों की शिक्षाएँ दकन में पहुँचाईं। अनंतपुर ज़िले और पड़ोसी कर्नाटक — विशेषकर बेल्लारी क्षेत्र — से तीर्थयात्री शांति पाने, क़व्वाली में शामिल होने और दुआ माँगने आते हैं।',
      readMore: 'और पढ़ें',
      historyHeading: 'बीजापुर से होंनूर तक',
      historyText: 'हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी बीजापुर से निकलकर दकन में इस्लाम की शिक्षाएँ लेकर गए और अपने अंतिम वर्षों के लिए होंनूर गाँव को चुना। उनकी विश्रामस्थली पर बनी दरगाह तब से साधकों को आकर्षित करती रही है।',
      historyCard1Title: 'बीजापुर',
      historyCard1Text: 'संत ने अपनी यात्रा बीजापुर से शुरू की, उस दकनी भूमि से जिसने क्षेत्र की सूफ़ी परंपराओं को आकार दिया।',
      historyCard2Title: 'दकन',
      historyCard2Text: 'वे चिश्ती और क़ादरी सिलसिलों की शिक्षाएँ लेकर दकन में विचरे और मार्ग में अनुयायी जुटाते गए।',
      historyCard3Title: 'होंनूर',
      historyCard3Text: 'उन्होंने अपने अंतिम वर्षों के लिए होंनूर चुना; उनकी क़ब्र पर बनी दरगाह आज भी प्रतिदिन तीर्थयात्रियों के लिए खुली है।',
      exploreEvents: 'इवेंट्स खोजें',

      // events + live
      upcomingEvents: 'आगामी कार्यक्रम',
      liveDarshan: 'लाइव दर्शन',
      liveBadge: 'लाइव',
      watchLiveNow: 'अभी लाइव देखें',

      // biography
      saintBioHeading: 'हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी चिश्ती अल क़ादरी (र.अ.)',
      biographyText: 'विनम्रता, सेवा और भक्ति के लिए स्मरण किए जाने वाले संत चिश्ती और क़ादरी दोनों सिलसिलों में सम्मानित हैं — उनकी पूरी उपाधि "चिश्ती अल क़ादरी" इसी दोहरी दीक्षा का प्रमाण है। होंनूर स्थित उनकी दरगाह प्रार्थना, क़व्वाली और आध्यात्मिक शांति का केंद्र बनी हुई है।',
      bioPoint1Title: 'चिश्ती और क़ादरी',
      bioPoint1Text: 'दोनों सिलसिलों में दीक्षित, जिसका प्रमाण दरगाह पर प्रयुक्त उपाधि "चिश्ती अल क़ादरी" है।',
      bioPoint2Title: 'दकन के शिक्षक',
      bioPoint2Text: 'बीजापुर से दकन तक अपनी शिक्षाएँ पहुँचाईं और सभी समुदायों से अनुयायी जोड़े।',
      bioPoint3Title: 'होंनूर में विश्राम',
      bioPoint3Text: 'अंतिम वर्षों के लिए होंनूर चुना; उनकी क़ब्र पर बनी दरगाह गाँव की स्थायी पहचान है।',
      visitShrine: 'तीर्थस्थल पर जाएँ',

      // gallery
      galleryHeading: 'बरकत के पल',
      galleryPending: 'दरगाह की तस्वीरें यहाँ प्रकाशित की जाएँगी।',

      // dua request
      duaRequestHeading: 'दरगाह अपडेट के लिए सबमिट करें',
      labelFullName: 'पूरा नाम',
      labelCity: 'शहर',
      labelPhone: 'मोबाइल नंबर',
      labelDuaRequest: 'आपकी दुआ प्रार्थना',
      submitDua: 'दुआ सबमिट करें',
      supportHeading: 'सज्जादा नशीन से मिलें',
      meetText: 'सज्जादा नशीन भक्तों और आगंतुकों का आशीर्वाद, मार्गदर्शन और आध्यात्मिक समर्थन के लिए स्वागत करते हैं।',
      sajjadaName: 'सैय्यद शाह शब्बीर बादेशा हुसैनी चिश्ती',
      requestMeeting: 'मुलाकात का अनुरोध करें',


      // sawane hayat
      exploreSawane: 'सवाने हयात',
      sawaneDropdownTitle: 'सवाने हयात',
      sawaneHeading: 'सवाने हयात और करामात',
      sawaneItem1: 'प्रारंभिक जीवन और बरकतें',
      sawaneItem2: 'चमत्कार और करामात',
      sawaneItem3: 'सेवा की विरासत',
      infoItemSawane: 'सवाने हयात',
      infoItemKaramat: 'करामात',
      infoPanelFooter: 'विवरण देखने के लिए एक कथा चुनें।',
      modalSawaneTitle: 'सवाने हयात',
      modalSawaneText: 'सवाने हयात हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी के जीवन-पथ, शिक्षाओं और आध्यात्मिक पड़ावों को समेटे हुए है — बीजापुर से, दकन होते हुए, होंनूर में उनके अंतिम वर्षों तक।',
      modalKaramatTitle: 'करामात',
      modalKaramatText: 'करामात दरगाह और उसके भक्तों से जुड़ी चमत्कारी कथाओं और दैवीय संकेतों का वर्णन करती है। ये वृत्तांत उस आध्यात्मिक शक्ति, करुणा और कृपा को दर्शाते हैं जिसे दरगाह होंनूर आने वाले तीर्थयात्रियों ने अनुभव किया।',
      modalHeritageTitle: 'सेवा की विरासत',
      modalHeritageText: 'दरगाह होंनूर की सेवा-विरासत सेवा, सामुदायिक देखभाल और भक्ति पर आधारित है। तीर्थयात्रियों को परोपकारी सभाओं और दरगाह की गहरी आध्यात्मिक विरासत से सुकून और उद्देश्य मिलता है।',

      // footer
      footerAbout: 'दरगाह होंनूर, हज़रत ख्वाजा सैय्यद शाह सूफी सरमस्त हुसैनी चिश्ती अल क़ादरी (र.अ.) का तीर्थस्थल, प्रार्थना, सद्भाव और आध्यात्मिक भक्ति का स्थान है।',
      footerQuickLinks: 'त्वरित लिंक',
      footerAboutLink: 'दरगाह के बारे में',
      footerHistoryLink: 'इतिहास',
      footerEventsLink: 'कार्यक्रम',
      footerGalleryLink: 'गैलरी',
      footerServices: 'सेवाएँ',
      footerLiveDarshan: 'लाइव दर्शन',
      footerDuaRequest: 'दुआ अनुरोध',
      footerCommunityEvents: 'समुदाय कार्यक्रम',
      footerContact: 'संपर्क',
      footerContactAddress: 'डी. होंनूर, बोम्मनहाल मंडल, अनंतपुर ज़िला, आंध्र प्रदेश 515812',
      footerCopyright: '© 2026 दरगाह होंनूर। सर्वाधिकार सुरक्षित।',
      backToTop: 'ऊपर जाएँ',

      // placeholders + aria
      placeholderFullName: 'अपना पूरा नाम दर्ज करें',
      placeholderCity: 'अपना शहर दर्ज करें',
      placeholderPhone: 'मोबाइल नंबर दर्ज करें',
      placeholderDuaRequest: 'अपनी दुआ प्रार्थना दर्ज करें...',
      ariaLanguageSelection: 'भाषा चयन',
      ariaPrimaryNavigation: 'मुख्य नेविगेशन',
      ariaOpenMenu: 'नेविगेशन मेन्यू खोलें',
      ariaCloseMenu: 'मेन्यू बंद करें',
      ariaMobileNavigation: 'मोबाइल नेविगेशन',
      ariaScrollAbout: 'अबाउट अनुभाग पर स्क्रॉल करें',
      ariaPlayLiveDarshan: 'लाइव दर्शन चलाएँ',
      ariaVisitDetails: 'यात्रा विवरण',
      ariaCloseSawane: 'सवाने सूची बंद करें',
      ariaCloseSidebar: 'साइडबार बंद करें',
      ariaCloseDetails: 'विवरण बंद करें',

      // ---- expanded section content ----
      heroFact1: 'ज़ियारत के लिए हर दिन खुला',
      heroFact2: 'बोम्मनहाल मंडल, अनंतपुर ज़िला',
      heroFact3: 'English · اردو · हिन्दी',
      quickHistory: 'सवाने हयात',
      quickHistoryNote: 'बुज़ुर्ग का जीवन और सिलसिला',
      quickGallery: 'फ़ोटो गैलरी',
      quickGalleryNote: 'दरगाह के दृश्य',
      aboutText2: 'दरगाह किसी सूफ़ी बुज़ुर्ग का मज़ार होती है, और सदियों से यह आसपास के लोगों की उतनी ही सेवा करती आई है जितनी दूर से आने वाले ज़ायरीन की। लोग यहाँ फ़ातिहा पढ़ने, मन्नत का धागा बाँधने, क़व्वाली सुनने और लंगर में शामिल होने आते हैं। दरवाज़े हर मज़हब के हर व्यक्ति के लिए खुले हैं — यही दक्कन की दरगाहों की सबसे पुरानी रिवायत है।',
      silsilaHeading: 'दो सिलसिले',
      silsila1Title: 'चिश्ती',
      silsila1Text: 'अजमेर के ख़्वाजा मुईनुद्दीन चिश्ती द्वारा उपमहाद्वीप में लाया गया चिश्ती सिलसिला ख़ुदा से मुहब्बत को इंसानों की ख़िदमत के ज़रिए ज़ाहिर करने, समा — यानी रूहानी संगीत — और बिना किसी मज़हब या जाति के भेद के सबको क़ुबूल करने के लिए जाना जाता है।',
      silsila2Title: 'क़ादरी',
      silsila2Text: 'क़ादरी सिलसिला बग़दाद के शैख़ अब्दुल क़ादिर जीलानी से जुड़ता है। यह बातिनी राह के साथ-साथ शरीअत की पाबंदी पर ज़ोर देता है, और उन आलिमों और सैलानियों के ज़रिए दक्कन तक पहुँचा जो यहाँ की सल्तनतों में आकर बसे।',
      nameHeading: 'नाम को समझना',
      name1Title: 'ख़्वाजा',
      name1Text: 'सूफ़ी बुज़ुर्ग और उस्ताद के लिए एहतराम का ख़िताब।',
      name2Title: 'सैयद',
      name2Text: 'पैग़म्बर मुहम्मद ﷺ के ख़ानदान के वंशज।',
      name3Title: 'सरमस्त',
      name3Text: 'जो ख़ुदा की मुहब्बत में डूबा हो — यह ख़िताब उन्हें दिया जाता है जो ज़िक्र में खो जाएँ।',
      name4Title: 'हुसैनी',
      name4Text: 'इमाम हुसैन के सिलसिले से, जो पैग़म्बर ﷺ के नवासे थे।',
      name5Title: 'चिश्ती अल क़ादरी',
      name5Text: 'वे दो सूफ़ी सिलसिले जिनकी तालीम उन्होंने उठाई और आगे पहुँचाई।',
      name6Title: '(र.अ.)',
      name6Text: 'रज़ी अल्लाहु अन्हु का संक्षेप — “ख़ुदा उनसे राज़ी हो”।',
      ursHeading: 'उर्स में क्या होता है',
      ursIntro: 'उर्स किसी बुज़ुर्ग के विसाल की सालगिरह है — इसे मौत नहीं, बल्कि ख़ुदा से मिलन के रूप में याद किया जाता है। नीचे दी गई रस्में दक्कन की चिश्ती और क़ादरी दरगाहों में निभाई जाती हैं। हौनूर की तारीख़ें दरगाह से ही ऐलान की जाती हैं।',
      urs1Title: 'संदल',
      urs1Text: 'मज़ार पर रस्मी तौर पर चंदन का लेप चढ़ाया जाता है, जिससे उर्स के दिनों की शुरुआत होती है।',
      urs2Title: 'चादर और फूल',
      urs2Text: 'ज़ायरीन मज़ार पर चादर — कढ़ाई वाला कपड़ा — के साथ फूल और लोबान पेश करते हैं।',
      urs3Title: 'क़व्वाली और समा',
      urs3Text: 'रातभर रूहानी गायन चलता है — दिल को ख़ुदा की तरफ़ मोड़ने का चिश्ती तरीक़ा।',
      urs4Title: 'लंगर और फ़ातिहा',
      urs4Text: 'खाना पकाकर वहाँ मौजूद हर शख़्स में बाँटा जाता है, और बुज़ुर्ग व मरहूमीन के लिए फ़ातिहा पढ़ी जाती है।',
      prayerWhenHeading: 'पाँच वक़्त की नमाज़',
      prayerFajrWhen: 'सूरज निकलने से पहले, पौ फटते ही।',
      prayerDhuhrWhen: 'दोपहर में सूरज के ढलना शुरू होने के बाद।',
      prayerAsrWhen: 'तीसरे पहर, रोशनी ढलने से पहले।',
      prayerMaghribWhen: 'सूरज डूबने के तुरंत बाद।',
      prayerIshaWhen: 'रात में, जब शफ़क़ पूरी तरह ख़त्म हो जाए।',
      prayerJumuah: 'जुमे के दिन ज़ुहर की जगह जुमा की नमाज़ जमाअत के साथ अदा की जाती है। जुमेरात की शाम — जुमे की रात — दरगाह पर ज़ियारत के लिए रिवायती तौर पर सबसे भीड़ वाला वक़्त होता है।',
      svcCharityText: 'ज़रूरतमंदों के लिए जमा की गई ख़ैरात और मदद।',
      svcLangarText: 'दरगाह पर पका साझा खाना, जो हर ज़ायर को बराबरी से पेश किया जाता है।',
      svcStayText: 'दूर से आने वाले ज़ायरीन के लिए सादा ठहरने की जगह।',
      svcVolunteerText: 'ख़िदमत — लंगर, दरवाज़े पर और उर्स के दौरान मदद के हाथों का स्वागत है।',
      svcRequestsText: 'नाम और मन्नतें मज़ार तक पहुँचाई जाती हैं ताकि दुआ की जा सके।',
      svcHelpText: 'रास्ता, वक़्त या किसी भी ज़रूरत के लिए दरगाह के दफ़्तर में पूछें।',
      galCap1: 'रास्ते से दिखती दरगाह।',
      galCap2: 'सजी हुई चारदीवारी के ऊपर उठती मीनारें।',
      galCap3: 'रंगा और फूलों से सजा प्रवेश द्वार।',
      galCap4: 'फूलों के पर्दे से सजा मज़ार का दरवाज़ा।',
      galCap5: 'सहन के चारों ओर की छतें।',
      galCap6: 'सहन के ऊपर सजा हुआ बरामदा।',
      visitRoad: 'यहाँ कैसे आएँ',
      visitRoadText: 'दरगाह तक सड़क के रास्ते बोम्मनहाल होकर पहुँचा जाता है। बस और शेयर-ऑटो के रूट मौसम के साथ बदलते हैं — मौजूदा साधन के लिए स्थानीय लोगों या दफ़्तर से पूछ लें।',
      visitDress: 'क्या पहनें',
      visitDressText: 'शालीन कपड़े जो कंधे और घुटने ढकें। मज़ार के अंदर ख़वातीन से सर ढकने की गुज़ारिश है; एक दुपट्टा काफ़ी है।',
      visitPhoto: 'फ़ोटोग्राफ़ी',
      visitPhotoText: 'इमारतों की तस्वीरें लेने में कोई हर्ज नहीं। नमाज़ या दुआ में मशग़ूल लोगों की तस्वीर न लें, और मज़ार के अंदर फ़ोन रख दें।',
      ziyaratHeading: 'ज़ियारत, क़दम दर क़दम',
      zStep1Title: 'दरवाज़े पर जूते',
      zStep1Text: 'दरवाज़े पर जूते उतार दें; उनके लिए जगह बनी हुई है। हो सके तो हाथ-मुँह धो लें।',
      zStep2Title: 'सलाम और फ़ातिहा',
      zStep2Text: 'मज़ार की तरफ़ रुख़ करें, सलाम पेश करें और आहिस्ता से फ़ातिहा पढ़ें। कोई तय तरीक़ा नहीं — नीयत ही असल है।',
      zStep3Title: 'चादर और फूल',
      zStep3Text: 'बहुत से ज़ायरीन चादर, फूल या लोबान पेश करते हैं। ये कहाँ मिलेंगे, यह दरगाह में पूछ लें।',
      zStep4Title: 'कुछ देर बैठें',
      zStep4Text: 'अगर क़व्वाली हो रही हो तो कुछ देर बैठें, और लंगर में शामिल हों। किसी को लौटाया नहीं जाता, और आपसे कुछ माँगा नहीं जाता।',
      updatesIntro: 'दरगाह की ओर से जारी सूचनाएँ यहाँ दिखेंगी — उर्स के ऐलान, वक़्त में तबदीली, और मरम्मत या तामीर की ख़बरें। जब तक दरगाह से न आए, यहाँ कुछ नहीं डाला जाता।',
      contactAskHeading: 'आप किस बारे में पूछ सकते हैं',
      ask1Title: 'ज़ियारत और वक़्त',
      ask1Text: 'दिन की नमाज़ों का वक़्त, आने के लिए बेहतर घंटे, और बुज़ुर्ग या दिव्यांग ज़ायरीन के लिए सहूलत।',
      ask2Title: 'उर्स की तारीख़ें और प्रोग्राम',
      ask2Text: 'सालाना उर्स की तारीख़ें, क़व्वाली का प्रोग्राम, और मजमे के दिनों के इंतज़ामात।',
      ask3Title: 'लंगर, क़याम और ख़िदमत',
      ask3Text: 'खाना, दूर से आने वालों के लिए ठहरने का इंतज़ाम, और ख़िदमत के लिए वक़्त देने का तरीक़ा।',
    },

    ur: {
      languageToast: 'زبان منتخب کی گئی: اردو',
      navVisit: 'زیارت',
      navPrayer: 'نماز',
      navServices: 'خدمات',
      utilHelpline: 'ہیلپ لائن',
      backToDirectory: 'تمام درگاہیں',
      utilEmail: 'ای میل',
      utilPrayer: 'نماز کے اوقات',
      heroTagline: 'ایمان، سکون، عقیدت اور خدمت کا مقام — ڈی. ہونور، ضلع اننت پور، آندھرا پردیش۔',
      quickPrayer: 'نماز کے اوقات',
      quickPrayerNote: 'روزانہ فجر سے عشاء تک',
      quickEvents: 'عرس اور تقریبات',
      quickEventsNote: 'سالانہ اور خصوصی پروگرام',
      quickLocation: 'مقام اور راستہ',
      quickLocationNote: 'بومن ہال منڈل، اننت پور',
      quickStay: 'قیام اور سہولیات',
      quickStayNote: 'درگاہ کے دفتر سے دریافت کریں',
      readHistory: 'ہماری تاریخ پڑھیں',
      announceLabel: 'اہم اعلان',
      viewAll: 'سب دیکھیں',
      labelPrayerSection: 'نماز',
      prayerHeading: 'نماز کے اوقات',
      prayerPending: 'پانچ وقت کی نماز فجر سے عشاء تک ادا کی جاتی ہے۔ اوقات سال بھر بدلتے رہتے ہیں اور درگاہ پر اعلان کیے جاتے ہیں — سفر سے پہلے براہ کرم مقامی طور پر تصدیق کر لیں۔',
      prayerFajr: 'فجر',
      prayerDhuhr: 'ظہر',
      prayerAsr: 'عصر',
      prayerMaghrib: 'مغرب',
      prayerIsha: 'عشاء',
      labelServicesSection: 'خدمات',
      servicesHeading: 'ہماری خدمات',
      servicesNote: 'دستیابی مختلف ہو سکتی ہے — سفر سے پہلے براہ کرم درگاہ کے دفتر سے تصدیق کریں۔',
      svcCharity: 'خیرات',
      svcLangar: 'لنگر',
      svcStay: 'قیام',
      svcVolunteer: 'رضاکارانہ خدمت',
      svcRequests: 'دعا کی درخواستیں',
      svcHelp: 'مدد ڈیسک',
      galleryNote: 'ہونور کی درگاہ کے مناظر — دروازہ، مینار اور صحن۔ جیسے جیسے درگاہ سے تصاویر ملیں گی، مزید شامل کی جائیں گی۔',
      labelVisitSection: 'زیارت',
      visitHeading: 'زائرین کی معلومات',
      visitReach: 'کیسے پہنچیں',
      visitReachText: 'ڈی۔ ہونور، بوماناہال منڈل، ضلع اننت پور، آندھرا پردیش 515812۔ یہ گاؤں ضلعے کے شمال میں، کرناٹک کی سرحد اور بلاری علاقے کے قریب ہے۔',
      visitHours: 'زیارت کے اوقات',
      visitHoursText: 'زیارت کے لیے سال کے ہر دن، سارا دن کھلا۔ صبح اور شام ٹھنڈی اور پرسکون ہوتی ہیں؛ جمعرات کی شام اور عرس کے دن سب سے مصروف ہوتے ہیں۔',
      visitParking: 'پارکنگ',
      visitParkingText: 'گاڑیاں عام طور پر درگاہ کے راستے کے قریب کھڑی کی جاتی ہیں۔ پہنچنے پر دفتر میں ضرور پوچھیں، خاص طور پر عرس کے دنوں میں جب رش ہوتا ہے۔',
      visitGuide: 'زائرین کے لیے ہدایات',
      visitGuideText: 'باوقار لباس پہنیں، داخل ہونے سے پہلے جوتے اتاریں، اور نماز کے دوران خاموشی رکھیں۔',
      visitMedical: 'طبی امداد',
      visitMedicalText: 'قریب ترین سہولیات بوماناہال میں ہیں، اور بڑے اسپتال اننت پور میں۔ ہنگامی حالت میں مدد کے لیے دفتر میں پوچھیں۔',
      visitEmergency: 'ہنگامی رابطہ',
      visitEmergencyText: 'درگاہ کی تصدیق کے بعد رابطہ نمبر شائع کیا جائے گا۔',
      labelUpdatesSection: 'اطلاعات',
      updatesHeading: 'تازہ ترین اپڈیٹس',
      updatesPending: 'فی الحال کوئی اطلاع نہیں۔ درگاہ کے اعلانات یہاں ظاہر ہوں گے۔',
      labelContactSection: 'رابطہ',
      contactHeading: 'ہم سے رابطہ کریں',
      contactAddressLabel: 'پتہ',
      contactPhoneLabel: 'فون',
      contactEmailLabel: 'ای میل',
      contactAddress: 'ڈی. ہونور، بومن ہال منڈل، ضلع اننت پور، آندھرا پردیش 515812',
      openInMaps: 'گوگل میپس میں کھولیں',
      ariaUtilityLinks: 'فوری رابطہ',

      darshanComingSoon: 'لائیو درشن فیچر جلد آ رہا ہے۔',
      thankYou: 'شکریہ',
      duaSubmitted: 'آپ کی دعا کی درخواست جمع کر دی گئی ہے۔',

      // navigation
      navHome: 'ہوم',
      navAbout: 'تعارف',
      navHistory: 'تاریخ',
      navSaint: 'ولی',
      navEvents: 'تقریبات',
      navGallery: 'گیلری',
      navLive: 'لائیو',
      navContact: 'رابطہ',
      bookVisit: 'ملاقات بک کریں',
      brandName: 'درگاہ ہونور',
      brandTagline: 'اننت پور · آندھرا پردیش',
      eventsPending: 'عرس اور تقریبات کی تاریخیں درگاہ پر اعلان کی جاتی ہیں۔ موجودہ شیڈول کے لیے براہ کرم درگاہ سے رابطہ کریں۔',
      contactPending: 'فون اور ای میل کی تصدیق درگاہ کی جانب سے کی جا رہی ہے۔',
      duaNotice: 'یہ فارم ابھی درگاہ سے منسلک نہیں ہے — کچھ ارسال نہیں ہوتا۔ براہ کرم درگاہ سے براہِ راست رابطہ کریں۔',
      duaNotSent: 'کچھ ارسال نہیں ہوا — یہ فارم ابھی درگاہ سے منسلک نہیں ہے۔',
      mobileLanguageLabel: 'زبان',
      mobileStoriesLabel: 'روحانی کہانیاں',

      // hero
      welcome: 'خوش آمدید',
      heroTitle: 'حضرت خواجہ سید شاہ صوفی سرمست حسینی چشتی القادری (رحمۃ اللہ علیہ)',
      heroText: 'اُس صوفی بزرگ کی آرام گاہ جو بیجاپور سے دکن کا سفر کرتے ہوئے ہونور پہنچے اور یہیں اپنے آخری سال گزارے — ضلع اننت پور، آندھرا پردیش میں دعا، اتحاد اور عقیدت کا مقدس مقام۔',
      viewHistory: 'تاریخ دیکھیں',
      watchLive: 'لائیو دیکھیں',
      scrollLabel: 'سکرول',
      visitCardStatus: 'زیارت کے لیے سارا دن کھلا',
      planVisit: 'اپنی زیارت کی منصوبہ بندی کریں',
      statLocationLabel: 'مقام',
      statLocationValue: 'ڈی. ہونور، اننت پور',
      statLocationNote: 'آندھرا پردیش 515812',
      statPrayerLabel: 'نماز کے اوقات',
      statPrayerValue: 'فجر - عشاء',
      statPrayerNote: 'روزانہ کا شیڈول',
      statSajjadaLabel: 'سجادہ نشین',
      statSajjadaNote: 'امامت فرماتے ہیں',

      // section labels
      labelSpiritualStories: 'روحانی کہانیاں',
      labelAboutSection: 'درگاہ ہونور کے بارے میں',
      labelHistorySection: 'تاریخ',
      labelEventsSection: 'عرس اور تقریبات',
      labelWatchLiveSection: 'لائیو دیکھیں',
      labelSaintSection: 'سوانح حیات',
      labelGallerySection: 'گیلری',
      labelDuaSection: 'دعا کی درخواست',
      labelSupportSection: 'درگاہ کی سرگرمیوں میں تعاون',

      // about + history
      aboutHeading: 'ایمان اور روحانی ہم آہنگی کی میراث',
      aboutText: 'درگاہ ہونور حضرت خواجہ سید شاہ صوفی سرمست حسینی چشتی القادری (ر.ا.) کی معزز درگاہ ہے، جنہوں نے چشتی اور قادری سلسلوں کی تعلیمات دکن تک پہنچائیں۔ ضلع اننت پور اور پڑوسی کرناٹک — خاص طور پر بلاری کے علاقے — سے زائرین سکون پانے، قوالی میں شرکت کرنے اور دعا مانگنے آتے ہیں۔',
      readMore: 'مزید پڑھیں',
      historyHeading: 'بیجاپور سے ہونور تک',
      historyText: 'حضرت خواجہ سید شاہ صوفی سرمست حسینی بیجاپور سے روانہ ہوئے اور دکن میں اسلام کی تعلیمات پہنچائیں، اور اپنے آخری سالوں کے لیے ہونور گاؤں کا انتخاب کیا۔ ان کی آرام گاہ پر بنی درگاہ تب سے متلاشیوں کو اپنی جانب کھینچتی رہی ہے۔',
      historyCard1Title: 'بیجاپور',
      historyCard1Text: 'بزرگ نے اپنا سفر بیجاپور سے شروع کیا، اُسی دکنی سرزمین سے جس نے خطے کی صوفی روایات کو تشکیل دیا۔',
      historyCard2Title: 'دکن',
      historyCard2Text: 'وہ چشتی اور قادری سلسلوں کی تعلیمات لے کر دکن میں پھرے اور راستے میں پیروکار جمع کرتے گئے۔',
      historyCard3Title: 'ہونور',
      historyCard3Text: 'انہوں نے اپنے آخری سالوں کے لیے ہونور کو چنا؛ ان کی قبر پر بنی درگاہ آج بھی روزانہ زائرین کے لیے کھلی ہے۔',
      exploreEvents: 'تقریبات تلاش کریں',

      // events + live
      upcomingEvents: 'آنے والی تقریبات',
      liveDarshan: 'لائیو درشن',
      liveBadge: 'لائیو',
      watchLiveNow: 'ابھی لائیو دیکھیں',

      // biography
      saintBioHeading: 'حضرت خواجہ سید شاہ صوفی سرمست حسینی چشتی القادری (ر.ا.)',
      biographyText: 'عاجزی، خدمت اور عقیدت کے لیے یاد کیے جانے والے بزرگ چشتی اور قادری دونوں سلسلوں میں معزز ہیں — ان کا پورا لقب "چشتی القادری" اسی دوہری بیعت کی گواہی دیتا ہے۔ ہونور میں ان کی درگاہ دعا، قوالی اور روحانی سکون کا مرکز ہے۔',
      bioPoint1Title: 'چشتی اور قادری',
      bioPoint1Text: 'دونوں سلسلوں میں بیعت، جس کا ثبوت درگاہ پر استعمال ہونے والا لقب "چشتی القادری" ہے۔',
      bioPoint2Title: 'دکن کے معلم',
      bioPoint2Text: 'بیجاپور سے دکن تک اپنی تعلیم پہنچائی اور ہر برادری سے پیروکار جوڑے۔',
      bioPoint3Title: 'ہونور میں آرام',
      bioPoint3Text: 'آخری سالوں کے لیے ہونور کا انتخاب کیا؛ ان کی قبر پر بنی درگاہ گاؤں کی مستقل پہچان ہے۔',
      visitShrine: 'درگاہ کا دورہ کریں',

      // gallery
      galleryHeading: 'برکتوں کے لمحات',
      galleryPending: 'درگاہ کی تصاویر یہاں شائع کی جائیں گی۔',

      // dua request
      duaRequestHeading: 'درگاہ اپڈیٹس کے لیے جمع کروائیں',
      labelFullName: 'پورا نام',
      labelCity: 'شہر',
      labelPhone: 'موبائل نمبر',
      labelDuaRequest: 'آپ کی دعا کی درخواست',
      submitDua: 'دعا جمع کریں',
      supportHeading: 'سجادہ نشین سے ملیں',
      meetText: 'سجادہ نشین زائرین کو برکتوں، رہنمائی اور روحانی مدد کے لیے خوش آمدید کہتے ہیں۔',
      sajjadaName: 'سید شاہ شبیر بادیشا حسینی چشتی',
      requestMeeting: 'ملاقات کی درخواست کریں',


      // sawane hayat
      exploreSawane: 'سوانح حیات',
      sawaneDropdownTitle: 'سوانح حیات',
      sawaneHeading: 'سوانح حیات و کرامات',
      sawaneItem1: 'ابتدائی زندگی اور برکات',
      sawaneItem2: 'معجزات اور کرامات',
      sawaneItem3: 'خدمت کی میراث',
      infoItemSawane: 'سوانح حیات',
      infoItemKaramat: 'کرامات',
      infoPanelFooter: 'تفصیل دیکھنے کے لیے کوئی کہانی منتخب کریں۔',
      modalSawaneTitle: 'سوانح حیات',
      modalSawaneText: 'سوانح حیات میں حضرت خواجہ سید شاہ صوفی سرمست حسینی کے سفرِ حیات، تعلیمات اور روحانی مراحل بیان ہوئے ہیں — بیجاپور سے، دکن ہوتے ہوئے، ہونور میں ان کے آخری سالوں تک۔',
      modalKaramatTitle: 'کرامات',
      modalKaramatText: 'کرامات درگاہ اور اس کے عقیدت مندوں سے وابستہ معجزاتی واقعات اور الٰہی نشانیوں کو بیان کرتی ہیں۔ یہ روایات اس روحانی قوت، رحمت اور فیض کی عکاسی کرتی ہیں جس کا تجربہ درگاہ ہونور آنے والے زائرین نے کیا۔',
      modalHeritageTitle: 'خدمت کی میراث',
      modalHeritageText: 'درگاہ ہونور کی خدمت کی میراث خدمتِ خلق، برادری کی دیکھ بھال اور عقیدت پر قائم ہے۔ زائرین فلاحی محافل اور درگاہ کی گہری روحانی وراثت سے سکون اور مقصد پاتے ہیں۔',

      // footer
      footerAbout: 'درگاہ ہونور، حضرت خواجہ سید شاہ صوفی سرمست حسینی چشتی القادری (ر.ا.) کی درگاہ، دعا، ہم آہنگی اور روحانی عقیدت کی جگہ ہے۔',
      footerQuickLinks: 'فوری روابط',
      footerAboutLink: 'درگاہ کے بارے میں',
      footerHistoryLink: 'تاریخ',
      footerEventsLink: 'تقریبات',
      footerGalleryLink: 'گیلری',
      footerServices: 'خدمات',
      footerLiveDarshan: 'لائیو درشن',
      footerDuaRequest: 'دعا کی درخواست',
      footerCommunityEvents: 'برادری کی تقریبات',
      footerContact: 'رابطہ',
      footerContactAddress: 'ڈی. ہونور، بومن ہال منڈل، ضلع اننت پور، آندھرا پردیش 515812',
      footerCopyright: '© 2026 درگاہ ہونور۔ جملہ حقوق محفوظ ہیں۔',
      backToTop: 'اوپر جائیں',

      // placeholders + aria
      placeholderFullName: 'اپنا پورا نام درج کریں',
      placeholderCity: 'اپنا شہر درج کریں',
      placeholderPhone: 'موبائل نمبر درج کریں',
      placeholderDuaRequest: 'اپنی دعا کی درخواست درج کریں...',
      ariaLanguageSelection: 'زبان کا انتخاب',
      ariaPrimaryNavigation: 'اہم نیویگیشن',
      ariaOpenMenu: 'نیویگیشن مینو کھولیں',
      ariaCloseMenu: 'مینو بند کریں',
      ariaMobileNavigation: 'موبائل نیویگیشن',
      ariaScrollAbout: 'تعارف کے حصے پر سکرول کریں',
      ariaPlayLiveDarshan: 'لائیو درشن چلائیں',
      ariaVisitDetails: 'زیارت کی تفصیلات',
      ariaCloseSawane: 'سوانح فہرست بند کریں',
      ariaCloseSidebar: 'سائیڈ بار بند کریں',
      ariaCloseDetails: 'تفصیلات بند کریں',

      // ---- expanded section content ----
      heroFact1: 'زیارت کے لیے ہر روز کھلا',
      heroFact2: 'بوماناہال منڈل، ضلع اننت پور',
      heroFact3: 'English · اردو · हिन्दी',
      quickHistory: 'سوانح حیات',
      quickHistoryNote: 'بزرگ کی زندگی اور سلسلہ',
      quickGallery: 'تصویری گیلری',
      quickGalleryNote: 'درگاہ کے مناظر',
      aboutText2: 'درگاہ کسی صوفی بزرگ کا مزار ہوتی ہے، اور صدیوں سے یہ گرد و نواح کے لوگوں کی اتنی ہی خدمت کرتی آئی ہے جتنی دور سے آنے والے زائرین کی۔ لوگ یہاں فاتحہ پڑھنے، منت کا دھاگہ باندھنے، قوالی سننے اور لنگر میں شریک ہونے آتے ہیں۔ دروازے ہر مذہب کے ہر شخص کے لیے کھلے ہیں — یہی دکن کی درگاہوں کی سب سے پرانی روایت ہے۔',
      silsilaHeading: 'دو سلسلے',
      silsila1Title: 'چشتی',
      silsila1Text: 'اجمیر کے خواجہ معین الدین چشتی کے ذریعے برصغیر میں آنے والا چشتی سلسلہ خدا سے محبت کو انسانوں کی خدمت کے ذریعے ظاہر کرنے، سماع — یعنی روحانی موسیقی — اور بغیر کسی مذہب یا ذات کے فرق کے سب کو قبول کرنے کے لیے جانا جاتا ہے۔',
      silsila2Title: 'قادری',
      silsila2Text: 'قادری سلسلہ بغداد کے شیخ عبدالقادر جیلانی سے جا ملتا ہے۔ یہ باطنی راہ کے ساتھ ساتھ شریعت کی پابندی پر زور دیتا ہے، اور اُن علما اور سیاحوں کے ذریعے دکن تک پہنچا جو یہاں کی سلطنتوں میں آ کر بسے۔',
      nameHeading: 'نام کو سمجھنا',
      name1Title: 'خواجہ',
      name1Text: 'صوفی بزرگ اور استاد کے لیے احترام کا خطاب۔',
      name2Title: 'سید',
      name2Text: 'پیغمبر محمد ﷺ کے خاندان کے فرزند۔',
      name3Title: 'سرمست',
      name3Text: 'جو خدا کی محبت میں ڈوبا ہو — یہ خطاب اُنہیں دیا جاتا ہے جو ذکر میں کھو جائیں۔',
      name4Title: 'حسینی',
      name4Text: 'امام حسین کے سلسلے سے، جو پیغمبر ﷺ کے نواسے تھے۔',
      name5Title: 'چشتی القادری',
      name5Text: 'وہ دو صوفی سلسلے جن کی تعلیم اُنہوں نے اٹھائی اور آگے پہنچائی۔',
      name6Title: '(رضی اللہ عنہ)',
      name6Text: 'رضی اللہ عنہ کا اختصار — ”خدا اُن سے راضی ہو“۔',
      ursHeading: 'عرس میں کیا ہوتا ہے',
      ursIntro: 'عرس کسی بزرگ کے وصال کی سالگرہ ہے — اسے موت نہیں بلکہ خدا سے ملن کے طور پر یاد کیا جاتا ہے۔ نیچے دی گئی رسمیں دکن کی چشتی اور قادری درگاہوں میں نبھائی جاتی ہیں۔ ہونور کی تاریخیں درگاہ ہی سے اعلان کی جاتی ہیں۔',
      urs1Title: 'صندل',
      urs1Text: 'مزار پر رسمی طور پر صندل کا لیپ چڑھایا جاتا ہے، جس سے عرس کے دنوں کا آغاز ہوتا ہے۔',
      urs2Title: 'چادر اور پھول',
      urs2Text: 'زائرین مزار پر چادر — کڑھائی والا کپڑا — کے ساتھ پھول اور لوبان پیش کرتے ہیں۔',
      urs3Title: 'قوالی اور سماع',
      urs3Text: 'رات بھر روحانی گائیکی جاری رہتی ہے — دل کو خدا کی طرف موڑنے کا چشتی طریقہ۔',
      urs4Title: 'لنگر اور فاتحہ',
      urs4Text: 'کھانا پکا کر وہاں موجود ہر شخص میں تقسیم کیا جاتا ہے، اور بزرگ اور مرحومین کے لیے فاتحہ پڑھی جاتی ہے۔',
      prayerWhenHeading: 'پانچ وقت کی نماز',
      prayerFajrWhen: 'سورج نکلنے سے پہلے، پو پھٹتے ہی۔',
      prayerDhuhrWhen: 'دوپہر میں سورج کے ڈھلنا شروع ہونے کے بعد۔',
      prayerAsrWhen: 'سہ پہر، روشنی ڈھلنے سے پہلے۔',
      prayerMaghribWhen: 'سورج غروب ہونے کے فوراً بعد۔',
      prayerIshaWhen: 'رات میں، جب شفق مکمل طور پر ختم ہو جائے۔',
      prayerJumuah: 'جمعہ کے دن ظہر کی جگہ نمازِ جمعہ باجماعت ادا کی جاتی ہے۔ جمعرات کی شام — شبِ جمعہ — درگاہ پر زیارت کے لیے روایتی طور پر سب سے مصروف وقت ہوتا ہے۔',
      svcCharityText: 'ضرورت مندوں کے لیے جمع کی گئی خیرات اور مدد۔',
      svcLangarText: 'درگاہ پر پکا مشترکہ کھانا، جو ہر زائر کو یکساں پیش کیا جاتا ہے۔',
      svcStayText: 'دور سے آنے والے زائرین کے لیے سادہ قیام کی جگہ۔',
      svcVolunteerText: 'خدمت — لنگر، دروازے پر اور عرس کے دوران مدد کے ہاتھوں کا خیرمقدم ہے۔',
      svcRequestsText: 'نام اور منتیں مزار تک پہنچائی جاتی ہیں تاکہ دعا کی جا سکے۔',
      svcHelpText: 'راستہ، وقت یا کسی بھی ضرورت کے لیے درگاہ کے دفتر میں پوچھیں۔',
      galCap1: 'راستے سے دکھائی دیتی درگاہ۔',
      galCap2: 'سجی ہوئی چار دیواری کے اوپر اٹھتے مینار۔',
      galCap3: 'رنگا ہوا اور پھولوں سے سجا دروازہ۔',
      galCap4: 'پھولوں کے پردے سے سجا مزار کا دروازہ۔',
      galCap5: 'صحن کے چاروں طرف کی چھتیں۔',
      galCap6: 'صحن کے اوپر سجا ہوا برآمدہ۔',
      visitRoad: 'یہاں کیسے پہنچیں',
      visitRoadText: 'درگاہ تک سڑک کے راستے بوماناہال ہو کر پہنچا جاتا ہے۔ بس اور شیئر آٹو کے روٹ موسم کے ساتھ بدلتے رہتے ہیں — موجودہ ذریعے کے لیے مقامی لوگوں یا دفتر سے پوچھ لیں۔',
      visitDress: 'کیا پہنیں',
      visitDressText: 'باوقار لباس جو کندھے اور گھٹنے ڈھانپے۔ مزار کے اندر خواتین سے سر ڈھانپنے کی گزارش ہے؛ ایک دوپٹہ کافی ہے۔',
      visitPhoto: 'عکاسی',
      visitPhotoText: 'عمارتوں کی تصاویر لینے میں کوئی حرج نہیں۔ نماز یا دعا میں مصروف لوگوں کی تصویر نہ لیں، اور مزار کے اندر فون رکھ دیں۔',
      ziyaratHeading: 'زیارت، قدم بہ قدم',
      zStep1Title: 'دروازے پر جوتے',
      zStep1Text: 'دروازے پر جوتے اتار دیں؛ اُن کے لیے جگہ بنی ہوئی ہے۔ ہو سکے تو ہاتھ منہ دھو لیں۔',
      zStep2Title: 'سلام اور فاتحہ',
      zStep2Text: 'مزار کی طرف رخ کریں، سلام پیش کریں اور آہستہ سے فاتحہ پڑھیں۔ کوئی مقررہ طریقہ نہیں — نیت ہی اصل ہے۔',
      zStep3Title: 'چادر اور پھول',
      zStep3Text: 'بہت سے زائرین چادر، پھول یا لوبان پیش کرتے ہیں۔ یہ کہاں ملیں گے، یہ درگاہ میں پوچھ لیں۔',
      zStep4Title: 'کچھ دیر بیٹھیں',
      zStep4Text: 'اگر قوالی ہو رہی ہو تو کچھ دیر بیٹھیں، اور لنگر میں شریک ہوں۔ کسی کو واپس نہیں کیا جاتا، اور آپ سے کچھ نہیں مانگا جاتا۔',
      updatesIntro: 'درگاہ کی طرف سے جاری اطلاعات یہاں دکھائی دیں گی — عرس کے اعلانات، اوقات میں تبدیلی، اور مرمت یا تعمیر کی خبریں۔ جب تک درگاہ سے نہ آئے، یہاں کچھ شائع نہیں کیا جاتا۔',
      contactAskHeading: 'آپ کس بارے میں پوچھ سکتے ہیں',
      ask1Title: 'زیارت اور اوقات',
      ask1Text: 'دن کی نمازوں کا وقت، آنے کے لیے بہترین اوقات، اور بزرگ یا معذور زائرین کے لیے سہولت۔',
      ask2Title: 'عرس کی تاریخیں اور پروگرام',
      ask2Text: 'سالانہ عرس کی تاریخیں، قوالی کا پروگرام، اور اجتماع کے دنوں کے انتظامات۔',
      ask3Title: 'لنگر، قیام اور خدمت',
      ask3Text: 'کھانا، دور سے آنے والوں کے لیے قیام کا انتظام، اور خدمت کے لیے وقت دینے کا طریقہ۔',
    },
  };

  i18nElements.forEach((element) => {
    if (!element.dataset.i18nOriginal) {
      element.dataset.i18nOriginal = element.textContent.trim();
    }
  });

  i18nPlaceholderElements.forEach((element) => {
    if (!element.dataset.i18nPlaceholderOriginal) {
      element.dataset.i18nPlaceholderOriginal = element.placeholder || '';
    }
  });

  i18nAriaElements.forEach((element) => {
    if (!element.dataset.i18nAriaOriginal) {
      element.dataset.i18nAriaOriginal = element.getAttribute('aria-label') || '';
    }
  });

  const createToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });

    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 200);
    }, 2800);
  };

  /* ---------------------------------------------------------------------
     Upcoming events.

     Add an entry per event and it renders itself: past events drop off
     automatically and the countdown is computed, so nothing can go stale
     the way the old hardcoded "3 days to go" did. Dates are ISO; month
     names and the countdown phrase are localised by Intl, so a new event
     needs no new translation strings beyond its own title.

       {
         start: '2027-05-28',                 // required, ISO
         end:   '2027-05-30',                 // optional, multi-day
         time:  '18:00',                      // optional, 24h
         title: { en: 'Annual Urs Mubarak',
                  hi: 'वार्षिक उर्स मुबारक',
                  ur: 'سالانہ عرس مبارک' },
       },
     --------------------------------------------------------------------- */
  const EVENTS = [];

  /* Prayer times, the announcement banner and notices are all data-driven for
     the same reason as EVENTS: anything written into the markup goes stale and
     nobody notices. Leave them empty and the page says so honestly. */
  const PRAYER_TIMES = [];   // [{ key: 'prayerFajr', time: '05:00' }, ...]
  const ANNOUNCEMENT = null; // { text: { en: '', hi: '', ur: '' } }
  const UPDATES = [];        // [{ date: '2026-09-01', text: { en, hi, ur } }]

  const prayerList = document.getElementById('prayerList');
  const prayerEmpty = document.getElementById('prayerEmpty');
  const announceSection = document.getElementById('announcement');
  const announceText = document.getElementById('announceText');
  const updateList = document.getElementById('updateList');
  const updatesEmpty = document.getElementById('updatesEmpty');

  const pick = (obj) => (obj && (obj[currentLanguage] || obj.en)) || '';

  const renderPrayer = () => {
    if (!prayerList) return;
    const dict = translations[currentLanguage] || translations.en;
    prayerList.textContent = '';
    if (prayerEmpty) prayerEmpty.hidden = PRAYER_TIMES.length > 0;
    PRAYER_TIMES.forEach((p) => {
      const cell = document.createElement('div');
      cell.className = 'prayer-cell';
      const name = document.createElement('span');
      name.textContent = dict[p.key] || p.key;
      const time = document.createElement('strong');
      time.textContent = p.time;
      cell.append(name, time);
      prayerList.append(cell);
    });
  };

  const renderAnnouncement = () => {
    if (!announceSection) return;
    const text = pick(ANNOUNCEMENT && ANNOUNCEMENT.text);
    announceSection.hidden = !text;
    if (announceText) announceText.textContent = text;
  };

  const renderUpdates = () => {
    if (!updateList) return;
    updateList.textContent = '';
    if (updatesEmpty) updatesEmpty.hidden = UPDATES.length > 0;
    if (!UPDATES.length) return;
    const fmt = new Intl.DateTimeFormat(currentLanguage, { day: 'numeric', month: 'long', year: 'numeric' });
    UPDATES.slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .forEach((u) => {
        const li = document.createElement('li');
        const when = document.createElement('time');
        when.dateTime = u.date;
        when.textContent = fmt.format(new Date(`${u.date}T00:00:00`));
        const body = document.createElement('span');
        body.textContent = pick(u.text);
        li.append(when, body);
        updateList.append(li);
      });
  };

  const eventList = document.getElementById('eventList');
  const eventsEmpty = document.getElementById('eventsEmpty');

  const startOfToday = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const renderEvents = () => {
    if (!eventList) return;
    const lang = currentLanguage;
    const today = startOfToday();

    const upcoming = EVENTS.map((e) => ({
      ...e,
      startDate: new Date(`${e.start}T00:00:00`),
      endDate: new Date(`${e.end || e.start}T00:00:00`),
    }))
      .filter((e) => !Number.isNaN(+e.startDate) && e.endDate >= today)
      .sort((a, b) => a.startDate - b.startDate);

    eventList.textContent = '';
    if (eventsEmpty) eventsEmpty.hidden = upcoming.length > 0;
    if (!upcoming.length) return;

    const dayFmt = new Intl.DateTimeFormat(lang, { day: '2-digit' });
    const monFmt = new Intl.DateTimeFormat(lang, { month: 'short' });
    const fullFmt = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'long', year: 'numeric' });
    const rel =
      typeof Intl.RelativeTimeFormat === 'function'
        ? new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
        : null;

    upcoming.forEach((e) => {
      const article = document.createElement('article');

      const chip = document.createElement('span');
      chip.className = 'event-date';
      chip.innerHTML = `<strong>${dayFmt.format(e.startDate)}</strong><small>${monFmt.format(e.startDate)}</small>`;

      const body = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = (e.title && (e.title[lang] || e.title.en)) || '';

      const when = document.createElement('p');
      const span =
        +e.endDate !== +e.startDate
          ? `${fullFmt.format(e.startDate)} — ${fullFmt.format(e.endDate)}`
          : fullFmt.format(e.startDate);
      when.textContent = e.time ? `${span} · ${e.time}` : span;

      body.append(title, when);
      article.append(chip, body);

      if (rel) {
        const days = Math.round((e.startDate - today) / 86400000);
        const badge = document.createElement('span');
        badge.className = 'event-countdown';
        badge.textContent = rel.format(days, 'day');
        article.append(badge);
      }

      eventList.append(article);
    });
  };

  // `silent` suppresses the confirmation toast — used for the initial render,
  // where nothing has been selected yet.
  const updateLanguage = (lang, { silent = false } = {}) => {
    if (!translations[lang]) {
      return;
    }
    currentLanguage = lang;
    document.documentElement.lang = lang;

    const nextDir = RTL_LANGUAGES.indexOf(lang) !== -1 ? 'rtl' : 'ltr';
    if (document.documentElement.dir !== nextDir) {
      // Flipping direction swaps which side the closed drawers park on. Without
      // this the 0.35s transform transition plays that as a slide straight
      // across the viewport.
      document.documentElement.classList.add('dir-switching');
      document.documentElement.dir = nextDir;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => document.documentElement.classList.remove('dir-switching'));
      });
    }

    i18nElements.forEach((element) => {
      const key = element.dataset.i18n;
      const hasTranslation = Object.prototype.hasOwnProperty.call(translations[lang], key);
      const text = hasTranslation ? translations[lang][key] : element.dataset.i18nOriginal || '';
      element.textContent = typeof text === 'string' ? text : element.dataset.i18nOriginal || '';
    });

    i18nPlaceholderElements.forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const hasTranslation = Object.prototype.hasOwnProperty.call(translations[lang], key);
      element.placeholder = hasTranslation ? translations[lang][key] : element.dataset.i18nPlaceholderOriginal || '';
    });

    i18nAriaElements.forEach((element) => {
      const key = element.dataset.i18nAria;
      const hasTranslation = Object.prototype.hasOwnProperty.call(translations[lang], key);
      element.setAttribute('aria-label', hasTranslation ? translations[lang][key] : element.dataset.i18nAriaOriginal || '');
    });

    document.querySelectorAll('[data-lang]').forEach((link) => {
      link.classList.toggle('active', link.dataset.lang === lang);
    });

    renderModal();
    renderEvents();
    renderPrayer();
    renderAnnouncement();
    renderUpdates();

    if (!silent) {
      createToast(translations[lang].languageToast);
    }
  };

  // expose for debugging and external calls
  try {
    window.updateLanguage = updateLanguage;
    window.applyLanguage = updateLanguage;
  } catch (e) {}

  const setMenuState = (isOpen) => {
    mobileMenu.classList.toggle('is-open', isOpen);
    body.classList.toggle('menu-open', isOpen);
    menuToggles.forEach((button) => {
      button.classList.toggle('active', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  };

  const closeMenu = () => setMenuState(false);
  const toggleMenu = () => setMenuState(!mobileMenu.classList.contains('is-open'));

  menuToggles.forEach((toggle) => {
    toggle.addEventListener('click', toggleMenu);
  });

  mobileOverlay?.addEventListener('click', closeMenu);
  mobileLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (
      mobileMenu.classList.contains('is-open') &&
      !event.target.closest('.mobile-menu__panel') &&
      !event.target.closest('.menu-toggle')
    ) {
      closeMenu();
    }
  });

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          event.preventDefault();
          closeMenu();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Single delegated handler covers the desktop top bar and the mobile drawer.
  document.addEventListener('click', (event) => {
    const langLink = event.target.closest?.('[data-lang]');
    if (!langLink) return;
    event.preventDefault();
    const lang = langLink.dataset.lang;
    if (lang) updateLanguage(lang);
  });

  heroButton?.addEventListener('click', () => {
    createToast(translations[currentLanguage].darshanComingSoon);
  });

  const sawaneCta = document.getElementById('sawaneCta');
  const sawanePanel = document.getElementById('sawanePanel');
  const panelClose = document.querySelector('.panel-close');
  const modalOverlay = document.getElementById('detailModal');
  const modalClose = document.querySelector('.modal-close');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const sawaneDropdown = document.getElementById('sawaneDropdown');
  const sawaneDropdownClose = document.querySelector('.sawane-dropdown__close');

  // Modal copy lives in the translation dictionary so it follows the language.
  const sawaneDetails = {
    sawane: { title: 'modalSawaneTitle', text: 'modalSawaneText' },
    karamat: { title: 'modalKaramatTitle', text: 'modalKaramatText' },
    heritage: { title: 'modalHeritageTitle', text: 'modalHeritageText' },
  };

  let activeModalKey = null;
  let lastFocusedBeforeModal = null;

  function renderModal() {
    const keys = sawaneDetails[activeModalKey];
    if (!keys || !modalTitle || !modalText) return;
    const dict = translations[currentLanguage] || translations.en;
    modalTitle.textContent = dict[keys.title] || translations.en[keys.title];
    modalText.textContent = dict[keys.text] || translations.en[keys.text];
  }

  const closePanel = () => {
    sawanePanel?.classList.remove('is-open');
    sawanePanel?.setAttribute('aria-hidden', 'true');
  };

  const openDropdown = () => {
    sawaneDropdown?.classList.add('is-open');
    sawaneDropdown?.setAttribute('aria-hidden', 'false');
    sawaneCta?.setAttribute('aria-expanded', 'true');
  };

  const closeDropdown = () => {
    sawaneDropdown?.classList.remove('is-open');
    sawaneDropdown?.setAttribute('aria-hidden', 'true');
    sawaneCta?.setAttribute('aria-expanded', 'false');
  };

  const openModal = (key) => {
    if (!sawaneDetails[key] || !modalOverlay) return;
    lastFocusedBeforeModal = document.activeElement;
    activeModalKey = key;
    renderModal();
    modalOverlay.classList.add('is-open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalClose?.focus();
  };

  const closeModal = () => {
    if (!modalOverlay || !modalOverlay.classList.contains('is-open')) return;
    modalOverlay.classList.remove('is-open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    activeModalKey = null;
    // The trigger often lives in a dropdown or drawer that has since closed, so
    // fall back to the CTA that opens it rather than dropping focus on <body>.
    const restoreTarget = lastFocusedBeforeModal?.offsetParent ? lastFocusedBeforeModal : sawaneCta;
    restoreTarget?.focus?.();
    lastFocusedBeforeModal = null;
  };

  const toggleDropdown = () => {
    if (sawaneDropdown?.classList.contains('is-open')) closeDropdown();
    else openDropdown();
  };

  sawaneCta?.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDropdown();
  });
  sawaneDropdownClose?.addEventListener('click', (event) => {
    event.stopPropagation();
    closeDropdown();
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.sawane-dropdown') && !event.target.closest('#sawaneCta')) {
      closeDropdown();
    }
  });

  panelClose?.addEventListener('click', closePanel);
  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  // Delegated so the dropdown, the sidebar panel and the mobile drawer all work.
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest?.('[data-item]');
    if (!trigger) return;
    closeDropdown();
    closeMenu();
    openModal(trigger.dataset.item);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
      closePanel();
    }
  });

  const fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    fadeElements.forEach((element) => revealObserver.observe(element));
  } else {
    fadeElements.forEach((element) => element.classList.add('is-visible'));
  }

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const dict = translations[currentLanguage] || translations.en;
    createToast(dict.duaNotSent);
  });

  // Runs last so everything it touches (renderModal) is already defined.
  updateLanguage(currentLanguage, { silent: true });
  } catch (err) {
    window.__initInnerError = String(err) + '\n' + (err.stack || '');
    console.error('init inner error', err);
    throw err;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    try {
      init();
    } catch (e) {
      window.__initError = String(e);
      console.error('init error', e);
    }
  });
} else {
  try {
    init();
  } catch (e) {
    window.__initError = String(e);
    console.error('init error', e);
  }
}
