const init = () => {
  try {
  const body = document.body;
  const menuToggles = document.querySelectorAll('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.querySelector('.mobile-menu__overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const galleryTabs = document.querySelectorAll('.gallery-tab');
  const heroButton = document.querySelector('.play-button');
  const form = document.getElementById('duaForm');
  const testimonialCards = Array.from(document.querySelectorAll('.testimonial'));
  const prevSlide = document.getElementById('prevSlide');
  const nextSlide = document.getElementById('nextSlide');
  const i18nElements = Array.from(document.querySelectorAll('[data-i18n]'));
  const i18nPlaceholderElements = Array.from(document.querySelectorAll('[data-i18n-placeholder]'));
  const i18nAriaElements = Array.from(document.querySelectorAll('[data-i18n-aria]'));

  // Languages written right-to-left. Drives the <html dir> attribute.
  const RTL_LANGUAGES = ['ur'];

  let currentLanguage = document.documentElement.lang || 'en';

  const translations = {
    en: {
      languageToast: 'Language selected: English',
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
      navDonate: 'Donate',
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
      donate: 'Donate',
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
      statSajjadaValue: 'Syed Sha Shabbir Badesha Hussaini Chishti',
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
      labelTestimonialsSection: 'Testimonials',

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
      galleryTabAll: 'All',
      galleryTabPhotos: 'Photos',
      galleryTabVideos: 'Videos',
      galleryTabUrs: 'Urs Mubarak',
      exploreGallery: 'Explore Gallery',

      // dua + donate
      duaRequestHeading: 'Submit for Dargah Updates',
      labelFullName: 'Full Name',
      labelCity: 'City',
      labelPhone: 'Mobile Number',
      labelDuaRequest: 'Your Dua Request',
      submitDua: 'Submit Dua',
      supportHeading: 'Meet the Sajjada Nasheen',
      meetText: 'Syed Sha Shabbir Hussiani Chishti welcomes devotees and visitors for blessings, guidance, and spiritual support.',
      sajjadaName: 'Syed Sha Shabbir Hussiani Chishti',
      requestMeeting: 'Request a Meeting',

      // testimonials
      testimonialsHeading: 'What Devotees Say',
      testimonial1Text: 'Alhamdulillah, visiting this Dargah brought peace to my heart. The blessings are endless.',
      testimonial1Name: 'Syed Moinuddin',
      testimonial1City: 'Bellary',
      testimonial2Text: 'A spiritual experience like no other. May Allah bless this sacred place always.',
      testimonial2Name: 'Mohammed Idris',
      testimonial2City: 'Hyderabad',
      testimonial3Text: 'The atmosphere of this Dargah is filled with love, peace and unity.',
      testimonial3Name: 'Sana Fatima',
      testimonial3City: 'Bangalore',

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
      footerDonationSupport: 'Donation Support',
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
      ariaPreviousTestimonial: 'Previous testimonial',
      ariaNextTestimonial: 'Next testimonial',
      ariaGalleryFilters: 'Gallery filters',
      ariaVisitDetails: 'Visit details',
      ariaCloseSawane: 'Close sawane list',
      ariaCloseSidebar: 'Close sidebar',
      ariaCloseDetails: 'Close details',
    },

    hi: {
      languageToast: 'भाषा सेट कर दी गई: हिंदी',
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
      navDonate: 'दान करें',
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
      donate: 'दान करें',
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
      statSajjadaValue: 'सैय्यद शाह शब्बीर बादेशा हुसैनी चिश्ती',
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
      labelTestimonialsSection: 'प्रशंसापत्र',

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
      galleryTabAll: 'सभी',
      galleryTabPhotos: 'तस्वीरें',
      galleryTabVideos: 'वीडियो',
      galleryTabUrs: 'उर्स मुबारक',
      exploreGallery: 'गैलरी देखें',

      // dua + donate
      duaRequestHeading: 'दरगाह अपडेट के लिए सबमिट करें',
      labelFullName: 'पूरा नाम',
      labelCity: 'शहर',
      labelPhone: 'मोबाइल नंबर',
      labelDuaRequest: 'आपकी दुआ प्रार्थना',
      submitDua: 'दुआ सबमिट करें',
      supportHeading: 'सज्जादा नशीन से मिलें',
      meetText: 'सैय्यद शाह शब्बीर हुसैनी चिश्ती भक्तों और आगंतुकों का आशीर्वाद, मार्गदर्शन और आध्यात्मिक समर्थन के लिए स्वागत करते हैं।',
      sajjadaName: 'सैय्यद शाह शब्बीर हुसैनी चिश्ती',
      requestMeeting: 'मुलाकात का अनुरोध करें',

      // testimonials
      testimonialsHeading: 'भक्त क्या कहते हैं',
      testimonial1Text: 'अल्हम्दुलिल्लाह, इस दरगाह की ज़ियारत ने मेरे दिल को सुकून दिया। बरकतें अनंत हैं।',
      testimonial1Name: 'सैय्यद मोइनुद्दीन',
      testimonial1City: 'बेल्लारी',
      testimonial2Text: 'एक अद्वितीय आध्यात्मिक अनुभव। अल्लाह इस पवित्र स्थान पर सदा बरकत बनाए रखे।',
      testimonial2Name: 'मोहम्मद इदरीस',
      testimonial2City: 'हैदराबाद',
      testimonial3Text: 'इस दरगाह का वातावरण प्रेम, शांति और एकता से भरा है।',
      testimonial3Name: 'सना फ़ातिमा',
      testimonial3City: 'बेंगलुरु',

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
      footerDonationSupport: 'दान समर्थन',
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
      ariaPreviousTestimonial: 'पिछला प्रशंसापत्र',
      ariaNextTestimonial: 'अगला प्रशंसापत्र',
      ariaGalleryFilters: 'गैलरी फ़िल्टर',
      ariaVisitDetails: 'यात्रा विवरण',
      ariaCloseSawane: 'सवाने सूची बंद करें',
      ariaCloseSidebar: 'साइडबार बंद करें',
      ariaCloseDetails: 'विवरण बंद करें',
    },

    ur: {
      languageToast: 'زبان منتخب کی گئی: اردو',
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
      navDonate: 'عطیہ',
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
      donate: 'عطیہ کریں',
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
      statSajjadaValue: 'سید شاہ شبیر بادیشا حسینی چشتی',
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
      labelTestimonialsSection: 'تاثرات',

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
      galleryTabAll: 'تمام',
      galleryTabPhotos: 'تصاویر',
      galleryTabVideos: 'ویڈیوز',
      galleryTabUrs: 'عرس مبارک',
      exploreGallery: 'گیلری دیکھیں',

      // dua + donate
      duaRequestHeading: 'درگاہ اپڈیٹس کے لیے جمع کروائیں',
      labelFullName: 'پورا نام',
      labelCity: 'شہر',
      labelPhone: 'موبائل نمبر',
      labelDuaRequest: 'آپ کی دعا کی درخواست',
      submitDua: 'دعا جمع کریں',
      supportHeading: 'سجادہ نشین سے ملیں',
      meetText: 'سید شاہ شبیر حسینی چشتی زائرین کو برکتوں، رہنمائی اور روحانی مدد کے لیے خوش آمدید کہتے ہیں۔',
      sajjadaName: 'سید شاہ شبیر حسینی چشتی',
      requestMeeting: 'ملاقات کی درخواست کریں',

      // testimonials
      testimonialsHeading: 'زائرین کیا کہتے ہیں',
      testimonial1Text: 'الحمدللہ، اس درگاہ کی زیارت نے میرے دل کو سکون بخشا۔ برکتیں بے شمار ہیں۔',
      testimonial1Name: 'سید معین الدین',
      testimonial1City: 'بلاری',
      testimonial2Text: 'ایک بے مثال روحانی تجربہ۔ اللہ اس مقدس مقام پر ہمیشہ برکت رکھے۔',
      testimonial2Name: 'محمد ادریس',
      testimonial2City: 'حیدرآباد',
      testimonial3Text: 'اس درگاہ کا ماحول محبت، امن اور اتحاد سے بھرپور ہے۔',
      testimonial3Name: 'ثنا فاطمہ',
      testimonial3City: 'بنگلور',

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
      footerDonationSupport: 'عطیات میں تعاون',
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
      ariaPreviousTestimonial: 'پچھلا تاثر',
      ariaNextTestimonial: 'اگلا تاثر',
      ariaGalleryFilters: 'گیلری فلٹرز',
      ariaVisitDetails: 'زیارت کی تفصیلات',
      ariaCloseSawane: 'سوانح فہرست بند کریں',
      ariaCloseSidebar: 'سائیڈ بار بند کریں',
      ariaCloseDetails: 'تفصیلات بند کریں',
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

  galleryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach((button) => button.classList.remove('active'));
      tab.classList.add('active');
    });
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

  let currentSlide = 0;
  const updateTestimonials = () => {
    testimonialCards.forEach((card, index) => {
      card.classList.toggle('active', index === currentSlide);
    });
  };

  if (testimonialCards.length) {
    updateTestimonials();

    prevSlide?.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
      updateTestimonials();
    });

    nextSlide?.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % testimonialCards.length;
      updateTestimonials();
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % testimonialCards.length;
      updateTestimonials();
    }, 6500);
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
