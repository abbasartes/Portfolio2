// ============================================================
// Minimalist White Portfolio - Interactive Logic & Localization
// ============================================================

// Translation Dictionary
const translations = {
  ar: {
    // Nav & Meta
    name: "أحمد عبد الله",
    "role-brief": "مطور ومصمم برمجيات",
    "nav-about": "من أنا",
    "nav-skills": "المهارات",
    "nav-projects": "المشاريع",
    "nav-experience": "المسار المهني",
    "nav-contact": "تواصل معي",
    "cta-hire": "وظفني الآن",

    // Hero
    "hero-available": "متاح للعمل الحر والمشاريع النوعية",
    "hero-title-1": "أبني حلولاً رقمية",
    "hero-title-2": "بسيطة، سريعة وأنيقة.",
    "hero-desc": "مطور واجهات ومبرمج ويب متكامل، أركز على تجربة المستخدم الفريدة، الأداء الفائق، والكود النظيف المعياري. أحول الأفكار إلى منتجات رقمية استثنائية.",
    "hero-btn-work": "استعرض أعمالي",
    "hero-btn-contact": "تواصل معي مباشرة",
    "hero-btn-cv": "تحميل الـ CV",
    "stat-years": "سنوات خبرة متواصلة",
    "stat-projects": "مشروعاً ناجحاً ومكتملاً",
    "stat-clients": "التزام بالمواعيد والجودة",
    "stat-awards": "عميلاً ومؤسسة سعيدة",

    // About
    "about-badge": "نبذة عني",
    "about-title": "شغف بالبساطة والابتكار",
    "role-full": "Full-Stack Web Developer & UI Designer",
    "about-heading": "أساعد الشركات ورواد الأعمال في صياغة هوياتهم الرقمية وتحويل التعقيد إلى بساطة مدروسة.",
    "about-p1": "بدأت رحلتي في البرمجة منذ أكثر من 5 سنوات، شغفي هو تصميم وبناء تجارب ويب تجمع بين دقة التصميم الهندسي وقوة الأداء التقني. أؤمن أن التصميم المتقن ليس ما يُرى فحسب، بل كيف يعمل بسلاسة دون عناء.",
    "about-p2": "سواء كنت تبحث عن منصة متكاملة SaaS، موقع شركة عالي الفخامة، أو تطبيق ويب سريع متجاوب، فإنني أقدم حلولاً متكاملة من الفكرة والنمذجة حتى الإطلاق والتحسين.",
    "srv-1-title": "تصميم واجهات المستخدم",
    "srv-1-desc": "تصاميم حديثة ومريحة للعين وفق أحدث المعايير العالمية.",
    "srv-2-title": "تطوير تطبيقات الويب",
    "srv-2-desc": "بناء تطبيقات متكاملة وسريعة باستخدام أحدث أطر العمل.",
    "srv-3-title": "تحسين سرعة وتوافق SEO",
    "srv-3-desc": "تحميل لحظي ودرجات قياسية في محركات البحث ومؤشرات الويب.",
    "srv-4-title": "كود نظيف وآمن",
    "srv-4-desc": "بنية برمجية معيارية قابلة للتطوير المستقبلي بسهولة.",

    // Skills
    "skills-badge": "التقنيات والأدوات",
    "skills-title": "المهارات التقنية",
    "sk-cat-1": "الواجهات الأمامية",
    "sk-desc-1": "بناء واجهات تفاعلية سريعة متوافقة مع جميع الشاشات.",
    "sk-cat-2": "الخوادم وقواعد البيانات",
    "sk-desc-2": "برمجة خلفية آمنة وبناء واجهات برمجة تطبيقات متينة.",
    "sk-cat-3": "التصميم وتجربة المستخدم",
    "sk-desc-3": "تخطيط رحلات المستخدم وصياغة نماذج أولية جذابة.",
    "sk-cat-4": "الأدوات والنشر",
    "sk-desc-4": "إدارة الإصدارات والأتمتة واستضافة السحابة.",

    // Projects
    "projects-badge": "أحدث الإنجازات",
    "projects-title": "معرض الأعمال والمشاريع",
    "filter-all": "جميع الأعمال",
    "filter-web": "مواقع وتطبيقات الويب",
    "filter-saas": "منصات سحابية SaaS",
    "filter-ui": "تصميم واجهات UI/UX",
    "proj-details": "تفاصيل المشروع",
    "status-live": "متاح أونلاين",
    "status-case": "دراسة حالة",

    "proj-1-title": "لوحة تحليلات سحابية ذكية",
    "proj-1-desc": "منصة لوحات قياس فورية للبيانات تدعم معالجة ملايين الأحداث يومياً مع رسوم بيانية تفاعلية وفلاتر متقدمة.",
    "proj-2-title": "متجر إلكتروني فائق السرعة",
    "proj-2-desc": "تجربة شراء حديثة بنظام headless مع ربط بوابات الدفع Stripe و Apple Pay، وسرعة تحميل أقل من 0.8 ثانية.",
    "proj-3-title": "نظام تصميم لتطبيق مالي (FinTech)",
    "proj-3-desc": "نظام تصميم شامل يضم أكثر من 150 مكوناً تفاعلياً، مع توجيهات ألوان، تيبوغرافي، وتدفقات مستخدم متكاملة.",
    "proj-4-title": "مساعد الإنتاجية بالذكاء الاصطناعي",
    "proj-4-desc": "تطبيق يساعد الفرق على تلخيص الاجتماعات وصياغة خطط المشاريع وتوليد المحتوى بشكل مؤتمت وتفاعلي.",
    "proj-5-title": "منصة إدارة المشاريع التعاونية",
    "proj-5-desc": "أداة تتبع مهام فورية تدعم لوحات كانبان والتنبيهات الحية وتوزيع المهام الذكي بين فرق العمل البرمجية.",
    "proj-6-title": "واجهة موقع لعلامة تجارية فاخرة",
    "proj-6-desc": "تصميم وتطوير موقع تعريفي بتصميم أبيض مينيماليست راقٍ مع حركة انتقالية فائقة النعومة وتجربة تصفح هادئة.",

    // Timeline
    "exp-badge": "المسار والخبرات",
    "exp-title": "الرحلة المهنية والتعليم",
    "exp-1-title": "كبير مطوري الواجهات (Senior Frontend Engineer)",
    "exp-1-company": "شركة الابتكار الرقمي المتقدمة | عن بُعد",
    "exp-1-desc": "قيادة فريق تطوير الواجهات الأمامية وبناء المنصات السحابية باستخدام Next.js 15 و TypeScript. تحسين سرعة تحميل التطبيقات بنسبة 45% وتطبيق نظام تصميم موحد لمنتجات الشركة.",
    "exp-2-title": "مطور ويب متكامل (Full-Stack Developer)",
    "exp-2-company": "وكالة سماء للحلول البرمجية | الرياض",
    "exp-2-desc": "بناء وإطلاق أكثر من 20 مشروعاً للعملاء شملت متاجر إلكترونية ولوحات إدارة ومنصات حجز. تصميم واجهات برمجة التطبيقات RESTful وربطها مع قواعد بيانات PostgreSQL.",
    "exp-3-title": "مطور واجهات ومصمم تجربة مستخدم",
    "exp-3-company": "العمل الحر (Freelance) | منصات عالمية",
    "exp-3-desc": "تنفيذ أعمال متميزة للعملاء في الخليج وأوروبا بتقييم 5 نجوم، والتركيز على الواجهات النظيفة وسريعة التفاعل.",
    "edu-title": "بكالوريوس علوم الحاسب والمعلومات",
    "edu-univ": "جامعة الملك سعود | مرتبة الشرف",
    "edu-desc": "تخصص في هندسة البرمجيات وأنظمة الويب الموزعة وهياكل البيانات المتقدمة.",

    // Testimonials
    "test-badge": "شهادات الشركاء",
    "test-title": "ماذا يقول العملاء عني؟",
    "test-1-quote": "\"العمل مع أحمد كان نقلة نوعية لمنصتنا. الدقة في المواعيد، نقاء التصميم، والسرعة الفائقة في تنفيذ الأفكار فاقت توقعاتنا بكثير.\"",
    "test-1-author": "م. سلطان الشمري",
    "test-1-pos": "المؤسس والرئيس التنفيذي | تِك فلو",
    "test-2-quote": "\"الموقع خرج بتحفة فنية بيضاء مينيماليست مريحة جداً لعملائنا. معدل التحويل في متجرنا ارتفع بنسبة 35% بعد إعادة تصميمه.\"",
    "test-2-author": "رغد الخالدي",
    "test-2-pos": "مديرة التسويق الرقمي | لينورا",
    "test-3-quote": "\"مهندس محترف بكل ما تحمله الكلمة من معنى. الكود النظيف والملاحظات التفصيلية جعلت من السهل على فريقنا الداخلي متابعة العمل.\"",
    "test-3-author": "فيصل عبد العزيز",
    "test-3-pos": "مدير المنتج | أفق للاستثمار",

    // Contact
    "contact-badge": "لنبدأ التعاون",
    "contact-title": "هل لديك فكرة أو مشروع جديد؟",
    "contact-desc": "أنا متاح دائماً لمناقشة المشاريع الطموحة، الاستشارات التقنية، أو فرص العمل الحر المميزة.",
    "contact-email-lbl": "البريد الإلكتروني",
    "contact-wa-lbl": "محادثة واتساب مباشرة",
    "contact-loc-lbl": "الموقع الحالي",
    "contact-loc-val": "الرياض، المملكة العربية السعودية (ومتاح عن بُعد)",
    "form-name": "الاسم الكريم *",
    "form-email": "البريد الإلكتروني *",
    "form-subject": "نوع المشروع أو الاستفسار",
    "form-msg": "تفاصيل الرسالة *",
    "form-submit": "إرسال الرسالة الآن",
    "opt-web": "تطوير موقع ويب جديد",
    "opt-saas": "بناء منصة سحابية SaaS",
    "opt-ui": "تصميم واجهات وتجربة مستخدم UI/UX",
    "opt-consult": "استشارة تقنية أو مراجعة كود",
    "opt-other": "أخرى",

    // Modal
    "modal-desc-lbl": "وصف المشروع",
    "modal-tech-lbl": "التقنيات المستخدمة",
    "modal-btn-live": "معاينة حية للمشروع",
    "modal-btn-code": "كود المصدر (GitHub)",

    // Footer & Misc
    "footer-style": "تصميم أبيض مينيماليست حديث",
    "footer-top": "للأعلى",
    "toast-copy": "تم نسخ البريد الإلكتروني بنجاح!",
    "toast-sent": "شكراً لك! تم إرسال رسالتك وسأتواصل معك قريباً."
  },

  en: {
    // Nav & Meta
    name: "Ahmed Abdullah",
    "role-brief": "Software Engineer & Designer",
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Career",
    "nav-contact": "Contact",
    "cta-hire": "Hire Me",

    // Hero
    "hero-available": "Available for freelance & select opportunities",
    "hero-title-1": "Crafting digital solutions that are",
    "hero-title-2": "Simple, Fast, & Minimalist.",
    "hero-desc": "Full-stack developer and UI designer passionate about intuitive user experiences, extreme performance, and clean modular code. Transforming bold ideas into digital reality.",
    "hero-btn-work": "Explore Work",
    "hero-btn-contact": "Get in Touch",
    "hero-btn-cv": "Download CV",
    "stat-years": "Years of Experience",
    "stat-projects": "Completed Projects",
    "stat-clients": "Delivery & Quality Rate",
    "stat-awards": "Happy Clients & Partners",

    // About
    "about-badge": "About Me",
    "about-title": "Simplicity Meets Craftsmanship",
    "role-full": "Full-Stack Web Developer & UI Designer",
    "about-heading": "I help startups and enterprises distill complexity into refined, purposeful web experiences.",
    "about-p1": "With over 5 years of coding experience, I bridge the gap between rigorous engineering and refined aesthetic sensibility. Great software isn't just about how it looks—it's about how effortlessly it functions.",
    "about-p2": "Whether you need a high-converting SaaS product, an elegant brand landing page, or a lightning-fast responsive web app, I provide end-to-end expertise from ideation to production deployment.",
    "srv-1-title": "UI / UX Design",
    "srv-1-desc": "Modern, accessible interfaces crafted according to global standards.",
    "srv-2-title": "Full-Stack Development",
    "srv-2-desc": "Building fast, scalable web apps with state-of-the-art frameworks.",
    "srv-3-title": "Performance & SEO",
    "srv-3-desc": "Sub-second load times and exceptional Core Web Vitals rankings.",
    "srv-4-title": "Clean & Modular Code",
    "srv-4-desc": "Robust software architecture designed for easy long-term scaling.",

    // Skills
    "skills-badge": "Stack & Tools",
    "skills-title": "Technical Expertise",
    "sk-cat-1": "Frontend Development",
    "sk-desc-1": "Building responsive, highly interactive web applications.",
    "sk-cat-2": "Backend & Databases",
    "sk-desc-2": "Secure backends, RESTful APIs, and scalable databases.",
    "sk-cat-3": "UI/UX & Design Systems",
    "sk-desc-3": "User journey mapping, wireframing, and interactive prototyping.",
    "sk-cat-4": "DevOps & Tooling",
    "sk-desc-4": "Modern version control, cloud deployment, and CI/CD pipelines.",

    // Projects
    "projects-badge": "Featured Work",
    "projects-title": "Curated Projects & Experiments",
    "filter-all": "All Projects",
    "filter-web": "Web Applications",
    "filter-saas": "SaaS Platforms",
    "filter-ui": "UI/UX Design",
    "proj-details": "View Details",
    "status-live": "Live Preview",
    "status-case": "Case Study",

    "proj-1-title": "Cloud Analytics Intelligence Suite",
    "proj-1-desc": "Real-time dashboard platform processing millions of events daily with dynamic charting and granular filtering.",
    "proj-2-title": "High-Speed Headless E-Commerce",
    "proj-2-desc": "Blazing fast shopping experience with Stripe and Apple Pay integration, achieving sub-0.8s load times.",
    "proj-3-title": "FinTech Design System & Tokens",
    "proj-3-desc": "Comprehensive design system featuring 150+ interactive components, typography scales, and tokenized themes.",
    "proj-4-title": "AI Productivity & Workspace Copilot",
    "proj-4-desc": "Interactive tool assisting remote teams with meeting summaries, auto-planning, and smart content generation.",
    "proj-5-title": "Collaborative Taskflow Platform",
    "proj-5-desc": "Real-time project tracker with kanban boards, live socket updates, and smart sprint distribution.",
    "proj-6-title": "Minimalist Luxury Brand Experience",
    "proj-6-desc": "Editorial digital experience featuring refined monochrome aesthetics, buttery smooth transitions, and storytelling.",

    // Timeline
    "exp-badge": "Experience",
    "exp-title": "Career Path & Education",
    "exp-1-title": "Senior Frontend Engineer",
    "exp-1-company": "Digital Innovations Co. | Remote",
    "exp-1-desc": "Led frontend architecture for cloud-native web apps utilizing Next.js 15 and TypeScript. Reduced load times by 45% and established company-wide design system.",
    "exp-2-title": "Full-Stack Web Developer",
    "exp-2-company": "Samaa Digital Solutions | Riyadh",
    "exp-2-desc": "Delivered over 20 commercial web projects including e-commerce platforms, custom CMS, and booking engines. Built RESTful APIs backed by PostgreSQL.",
    "exp-3-title": "Frontend & UI Developer",
    "exp-3-company": "Independent Freelancer | Global Clients",
    "exp-3-desc": "Crafted bespoke websites for international clients with 5-star ratings, focusing on speed and intuitive user ergonomics.",
    "edu-title": "B.Sc. in Computer Science",
    "edu-univ": "King Saud University | First Honors",
    "edu-desc": "Specialized in software engineering, distributed systems, and modern algorithms.",

    // Testimonials
    "test-badge": "Client Feedback",
    "test-title": "What Partners Say",
    "test-1-quote": "\"Working with Ahmed elevated our product to another level. His commitment to deadlines, clean code, and design taste was remarkable.\"",
    "test-1-author": "Eng. Sultan Al-Shammari",
    "test-1-pos": "CEO & Founder | TechFlow",
    "test-2-quote": "\"The clean white minimalist design breathed fresh air into our brand. Our online conversions jumped by 35% post-launch.\"",
    "test-2-author": "Raghad Al-Khalidi",
    "test-2-pos": "Marketing Director | Linora",
    "test-3-quote": "\"A consummate software craftsman. Well-structured architecture made it effortless for our internal engineering team to extend.\"",
    "test-3-author": "Faisal Abdulaziz",
    "test-3-pos": "Product Manager | Ofoq Ventures",

    // Contact
    "contact-badge": "Get in Touch",
    "contact-title": "Have a project in mind?",
    "contact-desc": "I am always open to exploring ambitious projects, engineering consultations, or impactful freelance engagements.",
    "contact-email-lbl": "Direct Email",
    "contact-wa-lbl": "Direct WhatsApp Chat",
    "contact-loc-lbl": "Location",
    "contact-loc-val": "Riyadh, Saudi Arabia (Available Globally / Remote)",
    "form-name": "Your Name *",
    "form-email": "Email Address *",
    "form-subject": "Project Type",
    "form-msg": "Your Message *",
    "form-submit": "Send Message",
    "opt-web": "New Web Application",
    "opt-saas": "SaaS Platform Development",
    "opt-ui": "UI/UX Design & Prototyping",
    "opt-consult": "Technical Consultation / Code Review",
    "opt-other": "Other Inquiry",

    // Modal
    "modal-desc-lbl": "Project Overview",
    "modal-tech-lbl": "Tech Stack",
    "modal-btn-live": "Live Demonstration",
    "modal-btn-code": "Source Code (GitHub)",

    // Footer & Misc
    "footer-style": "Minimalist Monochrome White Aesthetic",
    "footer-top": "Back to top",
    "toast-copy": "Email copied to clipboard!",
    "toast-sent": "Thank you! Your message was sent successfully."
  }
};

// Projects Extended Data for Modal
const projectsDetails = {
  1: {
    titleAr: "لوحة تحليلات سحابية ذكية",
    titleEn: "Cloud Analytics Intelligence Suite",
    categoryAr: "منصة سحابية SaaS",
    categoryEn: "SaaS Platform",
    descAr: "نظام متطور لتحليل البيانات اللحظية والبيانات الضخمة. يتميز بلوحات معلومات قابلة للتخصيص الكامل، تنبيهات ذكية، ورسوم بيانية فائقة الاستجابة، مع نظام إدارة صلاحيات متعدد المستويات.",
    descEn: "A high-performance real-time big data analysis platform. Features custom drag-and-drop dashboards, automated alerts, responsive charts, and multi-tenant role-based access control.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Recharts"],
    demoUrl: "https://example.com/demo/analytics",
    githubUrl: "https://github.com/example/analytics-suite",
    icon: "bar-chart-3"
  },
  2: {
    titleAr: "متجر إلكتروني فائق السرعة",
    titleEn: "High-Speed Headless E-Commerce",
    categoryAr: "مواقع وتطبيقات الويب",
    categoryEn: "Web Applications",
    descAr: "متجر إلكتروني معماريته مبنية بتقنية Headless لتقديم أقصى سرعة ممكنة. يشمل سلة مشتريات فورية، تكامل مع Stripe، وفلترة سريعة للمنتجات بدون إعادة تحميل الصفحة.",
    descEn: "A blazing headless e-commerce store designed for peak conversion and sub-second load times. Includes instant checkout, Stripe integration, and instant dynamic catalog filtering.",
    tags: ["React", "Shopify Storefront API", "Tailwind CSS", "Stripe", "Framer Motion"],
    demoUrl: "https://example.com/demo/store",
    githubUrl: "https://github.com/example/headless-store",
    icon: "shopping-bag"
  },
  3: {
    titleAr: "نظام تصميم لتطبيق مالي (FinTech)",
    titleEn: "FinTech Design System & Tokens",
    categoryAr: "تصميم واجهات UI/UX",
    categoryEn: "UI/UX Design",
    descAr: "بناء لغة بصرية متكاملة لمنظومة دفع إلكتروني تضم أكثر من 150 مكوناً تفاعلياً، مع دراسة متعمقة لتجربة المستخدم في تسهيل عمليات التحويل وإدارة الحسابات البنكية.",
    descEn: "Comprehensive visual language and tokenized design system for digital banking, encompassing 150+ components, accessibility compliance, and simplified payment user flows.",
    tags: ["Figma", "Design Tokens", "Wireframing", "Usability Testing", "UI/UX"],
    demoUrl: "https://example.com/demo/design-system",
    githubUrl: "https://github.com/example/fintech-design",
    icon: "layers"
  },
  4: {
    titleAr: "مساعد الإنتاجية بالذكاء الاصطناعي",
    titleEn: "AI Productivity & Workspace Copilot",
    categoryAr: "مواقع وتطبيقات الويب",
    categoryEn: "Web Applications",
    descAr: "أداة ويب مدمجة مع أحدث نماذج الذكاء الاصطناعي لمساعدة فرق العمل على كتابة التقارير، جدولة المهام، وتلخيص الاجتماعات الصوتية في ثوانٍ.",
    descEn: "An AI copilot web workspace helping knowledge workers draft reports, auto-schedule sprints, and summarize recorded voice meetings instantly.",
    tags: ["TypeScript", "Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    demoUrl: "https://example.com/demo/ai-copilot",
    githubUrl: "https://github.com/example/ai-copilot",
    icon: "cpu"
  },
  5: {
    titleAr: "منصة إدارة المشاريع التعاونية",
    titleEn: "Collaborative Taskflow Platform",
    categoryAr: "منصة سحابية SaaS",
    categoryEn: "SaaS Platform",
    descAr: "تطبيق ويب لإدارة المشاريع يدعم التحديثات اللحظية عبر WebSockets ومزامنة التغييرات بين أعضاء الفريق فوراً مع دعم الوضعين الفاتح والداكن.",
    descEn: "Real-time task tracking platform featuring Kanban views, live WebSockets state sync, sprint burndown charts, and automated team notifications.",
    tags: ["Vue.js 3", "Socket.io", "Node.js", "Express", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/taskflow",
    githubUrl: "https://github.com/example/taskflow",
    icon: "check-square"
  },
  6: {
    titleAr: "واجهة موقع لعلامة تجارية فاخرة",
    titleEn: "Minimalist Luxury Brand Experience",
    categoryAr: "تصميم واجهات UI/UX",
    categoryEn: "UI/UX Design",
    descAr: "تجربة بصرية هادئة ومعاصرة لدار أزياء راقية، تم تصميمها بأسلوب مونوكروم أبيض فخم يركز على المساحات البيضاء النقية وتفاصيل الخطوط الدقيقة.",
    descEn: "Refined digital showroom for a boutique luxury brand. Built with a serene white aesthetic, subtle typography, smooth page reveals, and editorial layouts.",
    tags: ["Astro", "GSAP Animations", "Tailwind CSS", "Figma"],
    demoUrl: "https://example.com/demo/luxury",
    githubUrl: "https://github.com/example/luxury-brand",
    icon: "sparkle"
  }
};

// State
let currentLang = localStorage.getItem("portfolio_lang") || "ar";

// DOM Elements
const langToggleBtn = document.getElementById("lang-toggle");
const langLabel = document.getElementById("lang-label");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const copyEmailBtn = document.getElementById("copy-email-btn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
const backToTopBtn = document.getElementById("back-to-top");
const cvBtn = document.getElementById("cv-btn");

// Modal Elements
const modal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDesc = document.getElementById("modal-description");
const modalTags = document.getElementById("modal-tags");
const modalLiveBtn = document.getElementById("modal-live-btn");
const modalCodeBtn = document.getElementById("modal-code-btn");
const modalLiveLinkText = document.getElementById("modal-live-link-text");

// Initialize Lucide Icons
function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Show Toast Notification
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
  }, 3200);
}

// Update Page Language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  const isAr = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  
  // Font change
  if (isAr) {
    document.body.classList.remove("font-en");
    document.body.classList.add("font-ar");
  } else {
    document.body.classList.remove("font-ar");
    document.body.classList.add("font-en");
  }

  langLabel.textContent = isAr ? "EN" : "عربي";

  // Translate all marked elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  refreshIcons();
}

// Toggle Language Click
langToggleBtn.addEventListener("click", () => {
  const nextLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(nextLang);
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Project Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => {
      b.classList.remove("active", "bg-brand-950", "text-white", "border-brand-950");
      b.classList.add("bg-white", "text-brand-700", "border-brand-200");
    });

    btn.classList.add("active", "bg-brand-950", "text-white", "border-brand-950");
    btn.classList.remove("bg-white", "text-brand-700", "border-brand-200");

    const category = btn.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      if (category === "all" || cardCategory === category) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 50);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 200);
      }
    });
  });
});

// Open Project Modal
function openProjectModal(id) {
  const data = projectsDetails[id];
  if (!data) return;

  const isAr = currentLang === "ar";
  modalTitle.textContent = isAr ? data.titleAr : data.titleEn;
  modalCategory.textContent = isAr ? data.categoryAr : data.categoryEn;
  modalDesc.textContent = isAr ? data.descAr : data.descEn;
  modalLiveLinkText.textContent = data.demoUrl;
  modalLiveBtn.href = data.demoUrl;
  modalCodeBtn.href = data.githubUrl;

  // Populate tags
  modalTags.innerHTML = "";
  data.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-100 text-brand-900 border border-brand-200";
    span.textContent = tag;
    modalTags.appendChild(span);
  });

  modal.classList.add("active");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  refreshIcons();
}

function closeProjectModal() {
  modal.classList.remove("active");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Modal Click Listeners
document.querySelectorAll(".open-modal-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = btn.getAttribute("data-project-id");
    openProjectModal(id);
  });
});

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project-id");
    openProjectModal(id);
  });
});

closeModalBtn.addEventListener("click", closeProjectModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeProjectModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeProjectModal();
  }
});

// Copy Email Button
copyEmailBtn.addEventListener("click", () => {
  const email = "ahmed.dev@example.com";
  navigator.clipboard.writeText(email).then(() => {
    const msg = translations[currentLang]["toast-copy"] || "تم نسخ البريد بنجاح!";
    showToast(msg);
  }).catch(() => {
    showToast("ahmed.dev@example.com");
  });
});

// Contact Form Handler (Simulated)
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitBtn = document.getElementById("submit-btn");
  const originalHtml = submitBtn.innerHTML;

  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
    <span>${currentLang === "ar" ? "جارٍ الإرسال..." : "Sending..."}</span>
  `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHtml;
    contactForm.reset();

    const msg = translations[currentLang]["toast-sent"] || "تم إرسال رسالتك بنجاح!";
    showToast(msg);

    formFeedback.textContent = msg;
    formFeedback.className = "text-xs text-center font-bold p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 block";
    
    setTimeout(() => {
      formFeedback.className = "hidden";
    }, 5000);

    refreshIcons();
  }, 1200);
});

// Download CV Button
cvBtn.addEventListener("click", () => {
  const isAr = currentLang === "ar";
  showToast(isAr ? "جارٍ تحضير ملف السيرة الذاتية..." : "Preparing resume download...");
  setTimeout(() => {
    window.print();
  }, 800);
});

// Back to Top Button
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  refreshIcons();
});
