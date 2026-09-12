// English / Arabic copy for the whole site. Every component reads its text
// through useT() (see ./useT.js) instead of hardcoding strings, so the
// language toggle in the Navbar can swap the entire UI at once. Keys mirror
// each other exactly between `en` and `ar` — if you add a string here, add
// it to both languages.

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      certifications: 'Certifications',
      contact: 'Contact',
      toggleMenu: 'Toggle menu',
      switchToArabic: 'Switch to Arabic',
      switchToEnglish: 'Switch to English',
      switchToDark: 'Switch to dark mode',
      switchToLight: 'Switch to light mode',
    },
    footer: {
      description:
        'Engineering, automation and calibration solutions for industrial and commercial organizations across Ethiopia.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    hero: {
      title: 'Industrial Engineering & Process Automation',
      subtitle: 'Engineering Smarter Industrial Operations',
      description:
        'Onyx delivers integrated engineering, instrumentation, automation, and calibration solutions for industrial and commercial organizations across Ethiopia.',
      ctaPrimary: 'Explore Our Solutions',
      ctaSecondary: 'Talk To An Engineer',
    },
    authorizedBanner: {
      eyebrow: 'Authorized Service Provider',
      heading: 'Endress+Hauser Authorized Service Provider In Ethiopia',
      tagline: 'World-Class Technology. Local Expertise.',
      cta: 'Learn More',
    },
    about: {
      heading: 'About The Company',
      subheading: 'Trusted By Industry',
      paragraph:
        "Onyx is a process automation solutions provider specializing in industrial instrumentation, measurement, and engineering services. We help process industries measure, control, monitor, and improve their operations through reliable instrumentation, engineering expertise, and integrated automation solutions. With experience in the Ethiopian industrial market since 2012, Onyx combines local engineering capability with world-class Endress+Hauser technology and expertise to deliver practical solutions tailored to our customers' processes.",
    },
    values: {
      heading: 'Our Values',
      items: {
        professionalism: {
          title: 'Professionalism',
          desc: 'We uphold the highest standards of technical and ethical conduct in every project we deliver.',
        },
        integration: {
          title: 'Integration',
          desc: 'We take on multi-disciplinary projects and deliver added value through our in-house expertise.',
        },
        flexibility: {
          title: 'Flexibility',
          desc: 'We tailor every solution to the quality, timeline, and budget your project needs.',
        },
        capability: {
          title: 'Capability',
          desc: 'Our engineering teams bring proven, hands-on experience across industrial and commercial sectors.',
        },
      },
    },
    partners: {
      heading: 'Our Partners',
      cta: 'Learn More',
      nextAria: 'Next partner',
      showAria: 'Show {name}',
      items: {
        eh: {
          name: 'Endress + Hauser',
          tagline: 'People For Process Automation',
          description:
            'Onyx is an independent engineering company with Endress+Hauser as its strongest technology partnership. As an Endress+Hauser Authorized Service Provider in Ethiopia, we provide local customers with qualified technical support for Endress+Hauser measurement and instrumentation solutions.',
        },
        centec: {
          name: 'Centec',
          tagline: 'Process Analytics & Measurement',
          description:
            'Supporting organizations across Ethiopia with engineering expertise, automation technology and dependable technical services.',
        },
      },
    },
    trust: {
      heading: 'Built On Trust Driven By Partnership',
      description:
        'We combine global technology with local expertise to help industry operate with greater confidence, reliability, and efficiency.',
      steps: [
        'Since 2012, we have been supporting industrial customers and developing our expertise in Ethiopia’s process industries.',
        'Our on-site digital flowmeter calibration capability allows industrial customers to verify and maintain the accuracy of their flow measurement systems directly at their facilities.',
        'We don’t look at instrumentation in isolation — we consider the application, process, installation, commissioning, and long-term operation of the solution.',
      ],
    },
    servicesPage: {
      eyebrow: 'What We Do',
      title: 'Services',
      intro:
        'Our work extends beyond supplying instruments. We support industrial customers throughout the lifecycle of their measurement and automation systems — from selecting the right technology and engineering the application to installation, commissioning, calibration, maintenance, troubleshooting, and technical support.',
      items: {
        instrumentation: {
          tab: 'Instrumentation',
          title: 'Industrial Instrumentation & Measurement',
          intro:
            'We supply and support Endress+Hauser instrumentation and spare parts for industrial process measurement applications, including:',
          points: [
            'Flow measurement',
            'Level measurement',
            'Pressure measurement',
            'Temperature measurement',
            'Process analysis',
            'Other industrial measurement applications',
          ],
          alt: 'Endress+Hauser flowmeter mounted on a test stand',
        },
        engineering: {
          tab: 'Engineering',
          title: 'Engineering & Project Services',
          intro:
            'We provide the engineering expertise required to implement reliable measurement and automation systems, including:',
          points: [
            'Application and instrument selection',
            'Engineering and system design',
            'Installation',
            'Commissioning',
            'Project implementation',
            'Technical consultation',
          ],
          alt: 'Onyx engineer commissioning a measurement instrument on site',
        },
        calibration: {
          tab: 'Calibration',
          title: 'Calibration & Measurement Services',
          intro:
            'Reliable measurement is critical to industrial processes. Onyx provides specialized measurement services, with on-site digital flowmeter calibration as one of our core capabilities. Our service capabilities also include:',
          points: ['On-site flowmeter calibration', 'Instrument verification', 'Maintenance', 'Troubleshooting', 'Technical support'],
          alt: 'Onyx technician calibrating a flow instrument in a food-grade facility',
        },
        automation: {
          tab: 'Automation',
          title: 'Process Automation & Integrated Solutions',
          intro:
            'We develop and implement solutions that go beyond individual instruments to address broader operational requirements. Our experience includes:',
          points: [
            'Automatic Tank Gauging (ATG)',
            'Process automation',
            'Monitoring solutions',
            'Industrial control solutions',
            'Energy Management Systems (EMS)',
            'Integrated industrial solutions',
          ],
          alt: 'Rooftop tank instrumentation and wiring for an automatic tank gauging installation',
        },
      },
      inTheField: 'In The Field',
      gallery: [
        'Flow measurement skid being installed on site',
        'Onyx engineer adjusting an instrument in the field',
        'Process transmitter mounted on an industrial tank',
      ],
      industriesHeading: 'Industries We Serve',
      industriesIntro:
        'Our customers are process-driven industrial businesses — organizations where materials, ingredients, or resources pass through a process to produce a final product or output.',
      industries: [
        'Food & Beverage',
        'Breweries & Dairy',
        'Oil & Gas',
        'Cement',
        'Chemical & Manufacturing',
        'Water & Wastewater',
        'Pharmaceuticals',
        'Energy',
        'Other Process Industries',
      ],
      industriesFooter:
        'Our understanding of industrial processes allows us to focus not only on the instrument itself, but on the measurement challenge and the operational requirement behind it.',
      closingHeading: 'Have an Instrumentation or Automation Challenge?',
      closingText:
        'Talk to our engineering team about your measurement requirements, instrumentation needs, calibration requirements, or industrial automation project.',
      closingCta: 'Talk to Our Engineering Team',
    },
    aboutPage: {
      eyebrow: 'Who We Are',
      title: 'About Onyx',
      intro:
        'Onyx is a process automation solutions provider specializing in industrial instrumentation, measurement, and engineering services.',
      whoWeAre: {
        heading: 'Local Engineering. Global Technology.',
        paragraph:
          "We help process industries measure, control, monitor, and improve their operations through reliable instrumentation, engineering expertise, and integrated automation solutions. With experience in the Ethiopian industrial market since 2012, Onyx combines local engineering capability with world-class Endress+Hauser technology and expertise to deliver practical solutions tailored to our customers' processes.",
      },
      hoverToPlay: 'Hover to play',
      stats: [
        { value: '2012', label: 'Operating In Ethiopia Since' },
        { value: '17+', label: 'Industry Customers' },
        { value: '1', label: 'E+H Authorized Partnership' },
      ],
      partnership: {
        heading: 'Our Endress+Hauser Partnership',
        tagline: 'World-Class Technology. Local Expertise.',
        paragraph:
          'Onyx is an independent engineering company with Endress+Hauser as its strongest technology partnership. As an Endress+Hauser Authorized Service Provider in Ethiopia, we provide local customers with qualified technical support for Endress+Hauser measurement and instrumentation solutions. Our partnership gives customers access to world-class measurement technology backed by local engineering expertise, service capability, and knowledge of the Ethiopian industrial environment.',
      },
      whyOnyx: {
        heading: 'Why Onyx',
        tagline: 'Local Experience. Specialized Expertise. Reliable Support.',
        items: {
          experience: {
            title: 'Over a decade of local experience',
            text: 'Since 2012, we have been supporting industrial customers and developing our expertise in Ethiopia’s process industries.',
          },
          ehExpertise: {
            title: 'Endress+Hauser expertise',
            text: 'Our specialization in Endress+Hauser instrumentation gives customers access to proven process measurement technology and specialized product knowledge.',
          },
          authorized: {
            title: 'Authorized service capability',
            text: 'As an Endress+Hauser Authorized Service Provider, our customers can access qualified local technical support and service.',
          },
          calibration: {
            title: 'Specialized flowmeter calibration',
            text: 'Our on-site digital flowmeter calibration capability allows industrial customers to verify and maintain the accuracy of their flow measurement systems directly at their facilities.',
          },
          engineering: {
            title: 'Engineering beyond the instrument',
            text: 'We don’t look at instrumentation in isolation. We consider the application, process, installation, commissioning, and long-term operation of the solution.',
          },
          solutions: {
            title: 'A solutions-oriented approach',
            text: 'While instrumentation remains our core specialization, we are continuously expanding our capabilities toward integrated automation, monitoring, and energy solutions.',
          },
        },
      },
      approach: {
        heading: 'Our Approach',
        tagline: 'Understand The Process. Solve The Problem.',
        text: "Every industrial application is different. We begin by understanding the customer's process, measurement requirements, operating conditions, and objectives, then combine the right technology with practical field experience.",
      },
      direction: {
        heading: 'Our Direction',
        text: 'Instrumentation and measurement are our foundation. Our next stage of growth is to build on it and expand further into process automation, industrial monitoring, energy management, and integrated solutions.',
      },
      commitment: {
        heading: 'Our Commitment',
        text: 'We combine global technology with local expertise to help industry operate with greater confidence, reliability, and efficiency — from understanding the process to supporting it long after installation.',
      },
      trustedBy: 'Trusted By Industry Leaders',
    },
    contactPage: {
      eyebrow: 'Get In Touch',
      title: 'Contact Us',
      intro:
        'Have an instrumentation or automation challenge? Talk to our engineering team about your measurement requirements, instrumentation needs, calibration requirements, or industrial automation project.',
      companyName: 'Onyx For Engineering And Integrated Solutions PLC',
      mapTitleSuffix: 'on Google Maps',
      info: {
        address: { label: 'Address', lines: ['Afework Building, 2nd Floor', 'Addis Ababa, Ethiopia'] },
        email: { label: 'Email', lines: ['info@onyxethiopia.com'] },
        phone: { label: 'Phone', lines: ['+251 (0) 115 22 6060'] },
        hours: { label: 'Working Hours', lines: ['Mon – Fri, 8:30 AM – 5:30 PM'] },
      },
      form: {
        heading: 'Send Us A Message',
        sub: 'Fill out the form and our team will respond within one business day.',
        name: 'Name',
        namePlaceholder: 'Add your name',
        email: 'Email',
        emailPlaceholder: 'Enter a valid email',
        phone: 'Phone',
        phonePlaceholder: 'Add your phone number',
        message: 'Message',
        messagePlaceholder: 'Tell us about your project',
        send: 'Send Message',
        thanks: "Thank you — your message has been received. We'll be in touch soon.",
      },
    },
    comingSoon: {
      eyebrow: 'Certifications',
      title: 'Coming Soon',
      text: "We're preparing our certification documents for publication on the site. In the meantime, talk to our engineering team if you need details on our qualifications and authorizations.",
      cta: 'Talk To Our Engineering Team',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      certifications: 'الشهادات',
      contact: 'تواصل معنا',
      toggleMenu: 'تبديل القائمة',
      switchToArabic: 'التبديل إلى العربية',
      switchToEnglish: 'التبديل إلى الإنجليزية',
      switchToDark: 'التبديل إلى الوضع الداكن',
      switchToLight: 'التبديل إلى الوضع الفاتح',
    },
    footer: {
      description: 'حلول هندسية وحلول تشغيل تلقائي ومعايرة للمؤسسات الصناعية والتجارية في جميع أنحاء إثيوبيا.',
      quickLinks: 'روابط سريعة',
      contact: 'تواصل معنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.',
    },
    hero: {
      title: 'الهندسة الصناعية والتشغيل التلقائي للعمليات',
      subtitle: 'هندسة أذكى للعمليات الصناعية',
      description:
        'تقدم أونيكس حلولاً متكاملة في الهندسة والأجهزة الصناعية والتشغيل التلقائي والمعايرة للمؤسسات الصناعية والتجارية في جميع أنحاء إثيوبيا.',
      ctaPrimary: 'استكشف حلولنا',
      ctaSecondary: 'تحدث مع مهندس',
    },
    authorizedBanner: {
      eyebrow: 'مزود خدمة معتمد',
      heading: 'مزود خدمة معتمد من Endress+Hauser في إثيوبيا',
      tagline: 'تقنية عالمية المستوى. خبرة محلية.',
      cta: 'اعرف المزيد',
    },
    about: {
      heading: 'عن الشركة',
      subheading: 'موثوق بها في القطاع الصناعي',
      paragraph:
        'أونيكس هي شركة متخصصة في حلول التشغيل التلقائي للعمليات، وتُعنى بالأجهزة الصناعية والقياس والخدمات الهندسية. نساعد الصناعات القائمة على العمليات الإنتاجية على القياس والتحكم والمراقبة وتحسين عملياتها من خلال أجهزة قياس موثوقة وخبرة هندسية وحلول تشغيل تلقائي متكاملة. وبفضل خبرتنا في السوق الصناعي الإثيوبي منذ عام 2012، تجمع أونيكس بين القدرات الهندسية المحلية وتقنية Endress+Hauser العالمية لتقديم حلول عملية تلائم احتياجات عمليات عملائنا.',
    },
    values: {
      heading: 'قيمنا',
      items: {
        professionalism: {
          title: 'الاحترافية',
          desc: 'نلتزم بأعلى معايير السلوك الفني والأخلاقي في كل مشروع ننفذه.',
        },
        integration: {
          title: 'التكامل',
          desc: 'نتولى مشاريع متعددة التخصصات ونقدم قيمة مضافة من خلال خبراتنا الداخلية.',
        },
        flexibility: {
          title: 'المرونة',
          desc: 'نصمم كل حل بما يتناسب مع جودة مشروعك وجدوله الزمني وميزانيته.',
        },
        capability: {
          title: 'الكفاءة',
          desc: 'تمتلك فرقنا الهندسية خبرة عملية مثبتة في القطاعين الصناعي والتجاري.',
        },
      },
    },
    partners: {
      heading: 'شركاؤنا',
      cta: 'اعرف المزيد',
      nextAria: 'الشريك التالي',
      showAria: 'عرض {name}',
      items: {
        eh: {
          name: 'Endress + Hauser',
          tagline: 'الأشخاص من أجل أتمتة العمليات',
          description:
            'أونيكس شركة هندسية مستقلة، وتُعد Endress+Hauser أقوى شركائها التقنيين. وبصفتها مزود خدمة معتمد من Endress+Hauser في إثيوبيا، تقدم أونيكس لعملائها المحليين الدعم الفني المؤهل لحلول Endress+Hauser للقياس والأجهزة الصناعية.',
        },
        centec: {
          name: 'Centec',
          tagline: 'تحليلات وقياسات العمليات',
          description: 'دعم المؤسسات في جميع أنحاء إثيوبيا من خلال الخبرة الهندسية وتقنيات التشغيل التلقائي والخدمات الفنية الموثوقة.',
        },
      },
    },
    trust: {
      heading: 'مبني على الثقة، مدفوع بالشراكة',
      description: 'نجمع بين التقنية العالمية والخبرة المحلية لمساعدة القطاع الصناعي على العمل بثقة وموثوقية وكفاءة أكبر.',
      steps: [
        'منذ عام 2012 ونحن ندعم العملاء الصناعيين ونطوّر خبرتنا في الصناعات الإثيوبية القائمة على العمليات الإنتاجية.',
        'تتيح قدرتنا على معايرة مقاييس التدفق الرقمية في الموقع للعملاء الصناعيين التحقق من دقة أنظمة قياس التدفق لديهم والحفاظ عليها مباشرة في منشآتهم.',
        'لا ننظر إلى الأجهزة الصناعية بمعزل عن سياقها — بل نأخذ بعين الاعتبار التطبيق والعملية والتركيب والتشغيل والتشغيل طويل الأمد للحل.',
      ],
    },
    servicesPage: {
      eyebrow: 'ماذا نقدم',
      title: 'الخدمات',
      intro:
        'يمتد عملنا إلى ما هو أبعد من توريد الأجهزة. فنحن ندعم عملاءنا الصناعيين طوال دورة حياة أنظمة القياس والتشغيل التلقائي لديهم — بدءًا من اختيار التقنية المناسبة وهندسة التطبيق، وصولاً إلى التركيب والتشغيل والمعايرة والصيانة واستكشاف الأعطال وإصلاحها والدعم الفني.',
      items: {
        instrumentation: {
          tab: 'الأجهزة الصناعية',
          title: 'الأجهزة الصناعية والقياس',
          intro: 'نورّد وندعم أجهزة وقطع غيار Endress+Hauser لتطبيقات القياس في العمليات الصناعية، بما في ذلك:',
          points: ['قياس التدفق', 'قياس المستوى', 'قياس الضغط', 'قياس درجة الحرارة', 'تحليل العمليات', 'تطبيقات قياس صناعية أخرى'],
          alt: 'مقياس تدفق من Endress+Hauser مثبت على منصة اختبار',
        },
        engineering: {
          tab: 'الهندسة',
          title: 'خدمات الهندسة والمشاريع',
          intro: 'نوفر الخبرة الهندسية اللازمة لتنفيذ أنظمة قياس وتشغيل تلقائي موثوقة، بما في ذلك:',
          points: ['اختيار التطبيق والجهاز المناسب', 'هندسة وتصميم الأنظمة', 'التركيب', 'التشغيل', 'تنفيذ المشاريع', 'الاستشارات الفنية'],
          alt: 'مهندس من أونيكس يقوم بتشغيل جهاز قياس في الموقع',
        },
        calibration: {
          tab: 'المعايرة',
          title: 'خدمات المعايرة والقياس',
          intro:
            'يُعد القياس الموثوق أمرًا بالغ الأهمية للعمليات الصناعية. تقدم أونيكس خدمات قياس متخصصة، وتُعد معايرة مقاييس التدفق الرقمية في الموقع إحدى قدراتنا الأساسية. وتشمل قدراتنا في هذا المجال أيضًا:',
          points: ['معايرة مقاييس التدفق في الموقع', 'التحقق من الأجهزة', 'الصيانة', 'استكشاف الأعطال وإصلاحها', 'الدعم الفني'],
          alt: 'فني من أونيكس يقوم بمعايرة جهاز تدفق في منشأة غذائية',
        },
        automation: {
          tab: 'التشغيل التلقائي',
          title: 'التشغيل التلقائي للعمليات والحلول المتكاملة',
          intro: 'نطوّر وننفذ حلولاً تتجاوز الأجهزة الفردية لتلبية المتطلبات التشغيلية الأوسع. وتشمل خبرتنا:',
          points: [
            'القياس التلقائي لمستوى الخزانات (ATG)',
            'التشغيل التلقائي للعمليات',
            'حلول المراقبة',
            'حلول التحكم الصناعي',
            'أنظمة إدارة الطاقة (EMS)',
            'الحلول الصناعية المتكاملة',
          ],
          alt: 'أجهزة وأسلاك على سطح خزان لتركيب نظام قياس تلقائي للمستوى',
        },
      },
      inTheField: 'في الميدان',
      gallery: [
        'تركيب منصة قياس التدفق في الموقع',
        'مهندس من أونيكس يقوم بضبط جهاز في الميدان',
        'محول قياس مثبت على خزان صناعي',
      ],
      industriesHeading: 'الصناعات التي نخدمها',
      industriesIntro:
        'عملاؤنا هم مؤسسات صناعية قائمة على العمليات الإنتاجية — مؤسسات تمر فيها المواد أو المكونات أو الموارد عبر عملية إنتاجية للحصول على منتج أو مخرج نهائي.',
      industries: [
        'الأغذية والمشروبات',
        'المشروبات والألبان',
        'النفط والغاز',
        'الأسمنت',
        'الكيماويات والتصنيع',
        'المياه والصرف الصحي',
        'الأدوية',
        'الطاقة',
        'صناعات إنتاجية أخرى',
      ],
      industriesFooter:
        'إن فهمنا للعمليات الصناعية يتيح لنا التركيز ليس فقط على الجهاز نفسه، بل أيضًا على تحدي القياس والمتطلبات التشغيلية الكامنة وراءه.',
      closingHeading: 'هل لديك تحدٍّ في مجال الأجهزة الصناعية أو التشغيل التلقائي؟',
      closingText: 'تحدث مع فريقنا الهندسي حول متطلبات القياس أو احتياجات الأجهزة أو متطلبات المعايرة أو مشروع التشغيل التلقائي الصناعي الخاص بك.',
      closingCta: 'تحدث مع فريقنا الهندسي',
    },
    aboutPage: {
      eyebrow: 'من نحن',
      title: 'عن أونيكس',
      intro: 'أونيكس شركة متخصصة في حلول التشغيل التلقائي للعمليات، وتُعنى بالأجهزة الصناعية والقياس والخدمات الهندسية.',
      whoWeAre: {
        heading: 'هندسة محلية. تقنية عالمية.',
        paragraph:
          'نساعد الصناعات القائمة على العمليات الإنتاجية على القياس والتحكم والمراقبة وتحسين عملياتها من خلال أجهزة قياس موثوقة وخبرة هندسية وحلول تشغيل تلقائي متكاملة. وبفضل خبرتنا في السوق الصناعي الإثيوبي منذ عام 2012، تجمع أونيكس بين القدرات الهندسية المحلية وتقنية Endress+Hauser العالمية لتقديم حلول عملية تلائم احتياجات عمليات عملائنا.',
      },
      hoverToPlay: 'مرر للتشغيل',
      stats: [
        { value: '2012', label: 'تعمل في إثيوبيا منذ' },
        { value: '17+', label: 'عميل صناعي' },
        { value: '1', label: 'شراكة معتمدة مع E+H' },
      ],
      partnership: {
        heading: 'شراكتنا مع Endress+Hauser',
        tagline: 'تقنية عالمية المستوى. خبرة محلية.',
        paragraph:
          'أونيكس شركة هندسية مستقلة، وتُعد Endress+Hauser أقوى شركائها التقنيين. وبصفتها مزود خدمة معتمد من Endress+Hauser في إثيوبيا، تقدم أونيكس لعملائها المحليين الدعم الفني المؤهل لحلول Endress+Hauser للقياس والأجهزة الصناعية. وتتيح هذه الشراكة للعملاء الوصول إلى تقنية قياس عالمية المستوى مدعومة بخبرة هندسية محلية وقدرة خدمية ومعرفة بالبيئة الصناعية الإثيوبية.',
      },
      whyOnyx: {
        heading: 'لماذا أونيكس',
        tagline: 'خبرة محلية. تخصص دقيق. دعم موثوق.',
        items: {
          experience: {
            title: 'أكثر من عقد من الخبرة المحلية',
            text: 'منذ عام 2012 ونحن ندعم العملاء الصناعيين ونطوّر خبرتنا في الصناعات الإثيوبية القائمة على العمليات الإنتاجية.',
          },
          ehExpertise: {
            title: 'خبرة في تقنيات Endress+Hauser',
            text: 'يمنح تخصصنا في أجهزة Endress+Hauser عملاءنا إمكانية الوصول إلى تقنية قياس عمليات مثبتة الجدوى ومعرفة متخصصة بالمنتج.',
          },
          authorized: {
            title: 'قدرة خدمية معتمدة',
            text: 'بصفتنا مزود خدمة معتمد من Endress+Hauser، يمكن لعملائنا الحصول على دعم فني محلي مؤهل وخدمة موثوقة.',
          },
          calibration: {
            title: 'معايرة متخصصة لمقاييس التدفق',
            text: 'تتيح قدرتنا على معايرة مقاييس التدفق الرقمية في الموقع للعملاء الصناعيين التحقق من دقة أنظمة قياس التدفق لديهم والحفاظ عليها مباشرة في منشآتهم.',
          },
          engineering: {
            title: 'هندسة تتجاوز الجهاز نفسه',
            text: 'لا ننظر إلى الأجهزة الصناعية بمعزل عن سياقها، بل نأخذ بعين الاعتبار التطبيق والعملية والتركيب والتشغيل والتشغيل طويل الأمد للحل.',
          },
          solutions: {
            title: 'نهج قائم على تقديم الحلول',
            text: 'بينما تظل الأجهزة الصناعية تخصصنا الأساسي، فإننا نوسّع باستمرار قدراتنا نحو التشغيل التلقائي المتكامل والمراقبة وحلول الطاقة.',
          },
        },
      },
      approach: {
        heading: 'نهجنا',
        tagline: 'فهم العملية. حل المشكلة.',
        text: 'كل تطبيق صناعي مختلف عن الآخر. نبدأ بفهم عملية العميل ومتطلبات القياس وظروف التشغيل والأهداف، ثم نجمع بين التقنية المناسبة والخبرة الميدانية العملية.',
      },
      direction: {
        heading: 'وجهتنا',
        text: 'تُعد الأجهزة الصناعية والقياس أساس عملنا. وتتمثل مرحلتنا التالية من النمو في البناء على هذا الأساس والتوسع أكثر في التشغيل التلقائي للعمليات والمراقبة الصناعية وإدارة الطاقة والحلول المتكاملة.',
      },
      commitment: {
        heading: 'التزامنا',
        text: 'نجمع بين التقنية العالمية والخبرة المحلية لمساعدة القطاع الصناعي على العمل بثقة وموثوقية وكفاءة أكبر — من فهم العملية إلى دعمها لفترة طويلة بعد التركيب.',
      },
      trustedBy: 'موثوق بها من قادة الصناعة',
    },
    contactPage: {
      eyebrow: 'تواصل معنا',
      title: 'اتصل بنا',
      intro:
        'هل لديك تحدٍّ في مجال الأجهزة الصناعية أو التشغيل التلقائي؟ تحدث مع فريقنا الهندسي حول متطلبات القياس أو احتياجات الأجهزة أو متطلبات المعايرة أو مشروع التشغيل التلقائي الصناعي الخاص بك.',
      companyName: 'شركة أونيكس للهندسة والحلول المتكاملة',
      mapTitleSuffix: 'على خرائط جوجل',
      info: {
        address: { label: 'العنوان', lines: ['مبنى أفوورك، الطابق الثاني', 'أديس أبابا، إثيوبيا'] },
        email: { label: 'البريد الإلكتروني', lines: ['info@onyxethiopia.com'] },
        phone: { label: 'الهاتف', lines: ['+251 (0) 115 22 6060'] },
        hours: { label: 'ساعات العمل', lines: ['الإثنين – الجمعة، 8:30 صباحًا – 5:30 مساءً'] },
      },
      form: {
        heading: 'أرسل لنا رسالة',
        sub: 'املأ النموذج وسيرد عليك فريقنا خلال يوم عمل واحد.',
        name: 'الاسم',
        namePlaceholder: 'أدخل اسمك',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'أدخل بريدًا إلكترونيًا صحيحًا',
        phone: 'الهاتف',
        phonePlaceholder: 'أدخل رقم هاتفك',
        message: 'الرسالة',
        messagePlaceholder: 'أخبرنا عن مشروعك',
        send: 'إرسال الرسالة',
        thanks: 'شكرًا لك — تم استلام رسالتك. سنتواصل معك قريبًا.',
      },
    },
    comingSoon: {
      eyebrow: 'الشهادات',
      title: 'قريبًا',
      text: 'نعمل حاليًا على إعداد وثائق الشهادات لنشرها على الموقع. في هذه الأثناء، يمكنك التحدث مع فريقنا الهندسي إذا احتجت إلى تفاصيل حول مؤهلاتنا واعتماداتنا.',
      cta: 'تحدث مع فريقنا الهندسي',
    },
  },
};
