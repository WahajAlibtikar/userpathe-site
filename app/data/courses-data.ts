export interface CourseChapter {
  title: string;
  hours: string;
  tools: string;
  exercise: string;
}

export interface Course {
  n: string;
  color: string;
  tag: string;
  title: string;
  desc: string;
  meta: string;
  goal: string;
  details: string;
  benchmark?: string;
  comingSoon?: boolean;
  chapters: CourseChapter[];
}

export const coursesList: Course[] = [
  {
    n: "01",
    color: "#EA4C1D",
    tag: "AGILE PRODUCT",
    title: "إدارة المنتجات الرقمية بأجايل",
    desc: "من الرؤية والأبحاث إلى بناء قائمة الأولويات وقيادة فرق العمل في دورات سبرنت سريعة تصنع أثرًا ملموسًا.",
    meta: "48 ساعة · 6 محاور تطبيقية",
    benchmark: "مبني وفق معايير Udacity Product Nanodegree وScrum.org",
    goal: "إتقان قيادة دورة حياة المنتج الرقمي، من صياغة الرؤية ومؤشرات النجاح إلى ترتيب الأولويات بالمعادلات العلمية، وتوجيه فرق التطوير والتصميم بروح أجايل المرنة.",
    details: "برنامج احترافي يحاكي بيئات المنتجات العالمية (Silicon Valley & Tech Hubs). ستتعلم كيف تحول المشكلات المعقدة إلى وثائق متطلبات واضحة (PRD)، وترتب الخصائص بمصفوفات RICE وMoSCoW، وتدير سبرنتات العمل عبر Jira، وتختم بدراسة حالة حقيقية لإطلاق منتج جاهزة لملف أعمالك.",
    chapters: [
      {
        title: "اكتشاف الفرصة واستراتيجية المنتج (Product Discovery)",
        hours: "8 ساعات",
        tools: "Opportunity Solution Tree, Product Canvas",
        exercise: "تحليل فجوات السوق لمنتج تقني قائم وتحديد الفرص ذات الأثر الأكبر",
      },
      {
        title: "الرؤية، الأهداف ومؤشرات القيمة (Vision, OKRs & North Star)",
        hours: "8 ساعات",
        tools: "Miro, North Star Metric Framework",
        exercise: "صياغة وثيقة استراتيجية للمنتج وبناء شجرة مؤشرات قياس الأداء (KPIs)",
      },
      {
        title: "أبحاث المستخدم وهندسة المتطلبات (User Research & PRD)",
        hours: "8 ساعات",
        tools: "JTBD, User Stories, Acceptance Criteria",
        exercise: "كتابة وثيقة متطلبات متكاملة (PRD) وتحديد نطاق النسخة الأولية (MVP)",
      },
      {
        title: "ترتيب الأولويات وإدارة قائمة العمل (Backlog & Prioritization)",
        hours: "8 ساعات",
        tools: "RICE Matrix, MoSCoW, Linear / Jira",
        exercise: "بناء وتصفية قائمة مهام المنتج وترتيب الميزات وفق الجهد والعائد",
      },
      {
        title: "طقوس أجايل وقيادة دورات السبرنت (Scrum Ceremonies & Execution)",
        hours: "8 ساعات",
        tools: "Jira Software, Daily Standup, Burndown Chart",
        exercise: "محاكاة تخطيط سبرنت أسبوعي وإدارة مراجعة المخرجات والريترو (Retrospective)",
      },
      {
        title: "الإطلاق، قياس الأثر والتحسين المستمر (Launch & Post-Mortem)",
        hours: "8 ساعات",
        tools: "Amplitude, Mixpanel, A/B Test Canvas",
        exercise: "تصميم خطة إطلاق مرحلية، قياس معدل الاستبقاء، وتقديم مشروع التخرج النهائي",
      },
    ],
  },
  {
    n: "02",
    color: "#9D56F7",
    tag: "UI / UX DESIGN",
    title: "تصميم تجربة وواجهات المستخدم",
    desc: "منهجية معيارية من أبحاث المستخدم وهندسة المعلومات إلى بناء أنظمة التصميم الاحترافية والنماذج التفاعلية في Figma.",
    meta: "64 ساعة · 8 محاور معيارية",
    benchmark: "مبني وفق معايير Nielsen Norman Group (NN/g) وGoogle UX",
    goal: "الانتقال من مرحلة تنفيذ الواجهات العشوائية إلى عقلية مصمم المنتجات الرقمية (Product Designer) الذي يرتكز على الأبحاث النفسية وسلوك المستخدمين، ويتقن أحدث تقنيات Figma لإنشاء أنظمة متماسكة.",
    details: "مسار عملي متقدم يغطي إطار العمل المزدوج (Double Diamond). يبدأ بفهم الاحتياج عبر الأبحاث والمقابلات، مرورًا بهندسة المعلومات والتصميم السلكي، ثم صياغة الهوية البصرية وأنظمة المكونات الذكية (Design Tokens & Variables)، وانتهاءً باختبار قابلية الاستخدام وإعداد دراسة حالة مقنعة للتوظيف.",
    chapters: [
      {
        title: "التفكير التصميمي واستكشاف المشكلة (Empathize & Define)",
        hours: "6 ساعات",
        tools: "FigJam, Desk Research, Problem Framing",
        exercise: "إجراء مقابلات المستخدمين واستخراج خرائط التعاطف وصياغة عبارة المشكلة الأساسية",
      },
      {
        title: "أبحاث التجربة ورسم رحلة العميل (User Research & Journey Mapping)",
        hours: "8 ساعات",
        tools: "Customer Journey Maps, Persona Architecture",
        exercise: "رسم خريطة رحلة متكاملة متعددة القنوات وتحديد نقاط الألم وفرص الابتكار",
      },
      {
        title: "هندسة المعلومات والهياكل السلكية (IA & Low-Fi Wireframing)",
        hours: "8 ساعات",
        tools: "Card Sorting, User Flows, Figma Wireframes",
        exercise: "بناء مخطط هندسة المعلومات وتدفقات الشاشات السلكية لاختبار المنطق الأولي",
      },
      {
        title: "الأسس البصرية والتسلسل الهرمي (Visual Foundations & Typography)",
        hours: "8 ساعات",
        tools: "8pt Grid, Optical Contrast, Color Harmony",
        exercise: "تطبيق سلم طباعي رياضي متوازن ونظام ألوان متوافق مع معايير الوصول (WCAG AA)",
      },
      {
        title: "احتراف Figma المتقدم والتصميم المرن (Auto Layout & Responsive)",
        hours: "8 ساعات",
        tools: "Figma Auto Layout 5.0, Constraints",
        exercise: "بناء واجهات متجاوبة بالكامل تتكيف ديناميكيًا مع مختلف مقاسات الشاشات والأجهزة",
      },
      {
        title: "أنظمة التصميم الذكية والمتغيرات (Design Systems & Variables)",
        hours: "10 ساعات",
        tools: "Figma Variables (Color, Spacing, Modes), Components",
        exercise: "تأسيس مكتبة مكونات متكاملة تدعم الوضع المظلم وتغيير الحالات بمرونة تامة",
      },
      {
        title: "النماذج التفاعلية واختبار الاستخدام (Prototyping & Usability Testing)",
        hours: "8 ساعات",
        tools: "Smart Animate, Interactive Components, Maze",
        exercise: "بناء نموذج واقعي تفاعلي وإجراء اختبار قابلية استخدام مع 5 مستخدمين وتحليل النتائج",
      },
      {
        title: "تسليم التصميم للمطورين ودراسة الحالة (Handoff & Case Study)",
        hours: "8 ساعات",
        tools: "Figma Dev Mode, Design Specs, Portfolio Case Study",
        exercise: "إعداد وثيقة تسليم تقنية دقيقة وصياغة دراسة حالة نهائية تنشر في ملف أعمالك",
      },
    ],
  },
  {
    n: "03",
    color: "#9D56F7",
    tag: "UX WRITING",
    title: "كتابة تجربة المستخدم وهندسة المحتوى",
    desc: "صياغة النصوص الرقمية التي ترشد المستخدم بسلاسة، تقلل الحيرة، وتصنع نبرة علامة تجارية تثري تجربة المنتج.",
    meta: "64 ساعة · 6 محاور تخصصية",
    benchmark: "مبني وفق معايير UX Content Collective ونموذج Torrey Podmajersky",
    goal: "امتلاك أدوات كاتب تجربة المستخدم المحترف (UX Writer / Content Designer): من صياغة استراتيجية الصوت والنبرة، إلى كتابة الميكروكوبي الحساس، والتعاون الفعال داخل أدوات التصميم لاختبار فاعلية الكلمات.",
    details: "برنامج عميق يعامِل المحتوى كعنصر تفاعلي لا يقل أهمية عن التصميم البصري. تتعلم خلاله كيف ترتب الرسائل وفق النموذج العقلي للمستخدم، وتصيغ سيناريوهات الخطأ بدون إحباط، وتهيئ رحلات الانضمام، وتقيس وضوح الكلمات بأدوات البحث النوعي والكمي.",
    chapters: [
      {
        title: "عقلية كاتب التجربة وصوت العلامة (Voice & Tone Foundations)",
        hours: "10 ساعات",
        tools: "Voice & Tone Matrix, Brand Archetypes",
        exercise: "بناء دليل نبرة مرن يتكيف مع مشاعر المستخدم في مختلف مواقف المنتج",
      },
      {
        title: "صياغة المكونات الحساسة والتوجيه (Microcopy: CTAs & Actions)",
        hours: "12 ساعة",
        tools: "Buttons Hierarchy, Action Labels, Helper Text",
        exercise: "إعادة كتابة واجهات معقدة ورفع وضوح أزرار اتخاذ القرار وحقول النماذج",
      },
      {
        title: "معالجة الأخطاء والتنبيهات وحالات الفراغ (Error States & Empty States)",
        hours: "12 ساعة",
        tools: "Error Recovery Framework, Toast Notifications",
        exercise: "تحويل رسائل خطأ غامضة إلى إرشادات دافئة قابلة للتنفيذ الفوري دون حيرة",
      },
      {
        title: "رحلات التهيئة والتفعيل (Onboarding & Activation Flows)",
        hours: "10 ساعات",
        tools: "Progressive Disclosure, Feature Discovery",
        exercise: "كتابة رحلة ترحيبية خطوة بخطوة تبرز قيمة المنتج بأقل عدد من الكلمات",
      },
      {
        title: "التعاون داخل Figma وإدارة مكتبة المحتوى (Figma for Content)",
        hours: "10 ساعات",
        tools: "Figma Text Styles, Content Components, Comments",
        exercise: "العمل مع المصممين في ملف مشترك وتوثيق معجم موحد لمصطلحات المنتج (Content Library)",
      },
      {
        title: "أبحاث المحتوى واختبار قابلية القراءة (Content Testing & Project)",
        hours: "10 ساعات",
        tools: "Cloze Test, Highlighter Test, Readability Formulas",
        exercise: "إجراء اختبار فهم مباشر للمحتوى وتقديم مشروع تخرج تحليلي متكامل",
      },
    ],
  },
  {
    n: "04",
    color: "#00A0E1",
    tag: "WEB DEVELOPMENT",
    title: "تطوير تطبيقات الويب الحديثة",
    desc: "بناء تطبيقات ويب سريعة وقابلة للتوسع باستخدام أحدث معايير React 19، Next.js، TypeScript وTailwind CSS.",
    meta: "72 ساعة · 7 محاور هندسية",
    benchmark: "مبني وفق معايير Meta Professional & Udacity Full Stack Standards",
    goal: "تمكين المطور من تحويل النماذج التصميمية إلى تطبيقات ويب إنتاجية كاملة؛ تلتزم بأعلى معايير الأداء، سهولة الوصول، إدارة الحالة بكفاءة، وربط واجهات البيانات السحابية بأمان.",
    details: "رحلة بناء برمجية شاملة ترتكز على التفكير المعماري للويب الحديث. تتعلم كتابة كود نظيف وقابل للصيانة بلغة TypeScript، وتقسيم المكونات مع React Server Components، وبناء تصميمات دقيقة بـ Tailwind CSS، والتعامل مع قواعد البيانات السحابية ونشر المشاريع عبر بيئات Edge الحديثة.",
    chapters: [
      {
        title: "هندسة الويب الحديث وTypeScript الاحترافي (Modern Web & TypeScript)",
        hours: "10 ساعات",
        tools: "TypeScript, Strict Typing, ESM, Git Workflow",
        exercise: "بناء واجهات برمجية صارمة الأنواع (Types/Interfaces) وإدارة مسارات المشروع",
      },
      {
        title: "مكونات React وتدفق البيانات (React Server Components & State)",
        hours: "12 ساعة",
        tools: "React 19, Server Actions, Hooks (use, useActionState)",
        exercise: "هيكلة نظام إدارة حالة مرن يوازن بين المعالجة السحابية والتفاعلية اللحظية",
      },
      {
        title: "تصميم الواجهات بنظام Tailwind المتقدم (Tailwind & Design Tokens)",
        hours: "10 ساعات",
        tools: "Tailwind CSS v4, CSS Variables, Lucide Icons",
        exercise: "تحويل تصميم نظام واجهات معقد إلى كود متجاوب بالكامل يدعم التباين العالي",
      },
      {
        title: "واجهات API والاتصال بالخدمات السحابية (API Architecture & Integrations)",
        hours: "10 ساعات",
        tools: "REST, Edge Runtime, Postman / Thunder Client",
        exercise: "برمجة مسارات خدمة خلفية مع التحقق الآمن من المدخلات ومعالجة الأخطاء",
      },
      {
        title: "قواعد البيانات والمصادقة الأمنية (Databases & Authentication)",
        hours: "12 ساعة",
        tools: "PostgreSQL / SQLite, Drizzle ORM, NextAuth / JWT",
        exercise: "تصميم نموذج بيانات علائقي مع عمليات CRUD كاملة ومصادقة مستخدمين آمنة",
      },
      {
        title: "الجودة، الأداء وسهولة الوصول (Testing, a11y & Core Web Vitals)",
        hours: "8 ساعات",
        tools: "Lighthouse, Axe DevTools, Vitest",
        exercise: "فحص أداء التطبيق وتحقيق تقييم 95+ في Lighthouse مع معايير الوصول WCAG",
      },
      {
        title: "النشر السحابي ومشروع التخرج المتكامل (Cloud Deployment & Capstone)",
        hours: "10 ساعات",
        tools: "Vercel / Cloudflare Workers, CI/CD, Analytics",
        exercise: "إطلاق تطبيق عملي متكامل على نطاق مباشر وتوثيق بنيته الهندسية في GitHub",
      },
    ],
  },
  {
    n: "05",
    color: "#02B871",
    tag: "GENERATIVE AI",
    title: "هندسة مدخلات الذكاء الاصطناعي والتوليد الذكي",
    desc: "إتقان تصميم السياقات، تقنيات التفكير العميق، وسير العمل المؤتمت مع النماذج اللغوية المتقدمة (GPT, Claude, Gemini).",
    meta: "40 ساعة · 6 محاور تخصصية",
    benchmark: "مبني وفق معايير DeepLearning.AI وOpenAI & Anthropic Prompt Engineering Guides",
    goal: "التحول من التجربة العشوائية للذكاء الاصطناعي إلى هندسة منهوجية دقيقة للمدخلات؛ تمكنك من استخراج أقصى طاقات النماذج اللغوية، وتقليل الهلوسة، وبناء سير عمل ذكي للمهام المركبة.",
    details: "دورة مكثفة تجمع بين فهم آلية عمل محولات الانتباه (Transformers) والتطبيقات العملية في بيئات العمل. ستتعلم استراتيجيات التفكير المرحلي (Chain-of-Thought)، واستخدام الأمثلة الدقيقة (Few-Shot)، وبناء ملفات التوجيه المخصصة (Custom Instructions & System Prompts)، وتقييم المخرجات بمقاييس جودة قابلة للقياس.",
    chapters: [
      {
        title: "معمارية النماذج اللغوية وفهم سياق الانتباه (LLM Foundations & Context)",
        hours: "6 ساعات",
        tools: "Tokenizer, Context Window, Temperature / Top_P",
        exercise: "تشخيص سلوك النماذج عبر ضبط معاملات التوليد ومقارنة استجابات مختلف المحركات",
      },
      {
        title: "أطر هندسة المدخلات المنهجية (Structured Prompting Frameworks)",
        hours: "6 ساعات",
        tools: "CREATE & RTF Frameworks, Delimiters, System Role",
        exercise: "بناء قوالب مدخلات معيارية تعزل التعليمات عن البيانات والقيود بدقة هندسية",
      },
      {
        title: "تقنيات التفكير العميق وسلسلة المنطق (Few-Shot & Chain-of-Thought)",
        hours: "8 ساعات",
        tools: "In-Context Learning, Step-by-Step Reasoning",
        exercise: "تصميم مدخلات لمعالجة سيناريوهات استشارية معقدة واستخراج تحليلات منطقية رصينة",
      },
      {
        title: "التعامل مع البيانات والتلخيص والتحليل (Data Extraction & Synthesis)",
        hours: "6 ساعات",
        tools: "JSON Output Schema, Text Transformation",
        exercise: "تحويل نصوص ومحادثات غير منظمة إلى جداول بيانات مخرجة بهياكل برمجية محددة",
      },
      {
        title: "التقييم ومكافحة الهلوسة ومعايير الأمان (Evaluation & Guardrails)",
        hours: "6 ساعات",
        tools: "Evaluation Rubrics, Grounding, Fact-Checking",
        exercise: "بناء مصفوفة تقييم موضوعية لقياس دقة الإجابات وضمان الالتزام بالسياق المقدم",
      },
      {
        title: "بناء الوكلاء وأتمتة المهام اليومية (AI Workflows & Custom Agents)",
        hours: "8 ساعات",
        tools: "Custom GPTs, Claude Projects, Automation Pipelines",
        exercise: "تصميم وكيل ذكاء اصطناعي متكامل ينجز مهمة مهنية مركبة ضمن مشروع التخرج",
      },
    ],
  },
  {
    n: "06",
    color: "#FFB000",
    tag: "MOBILE APPS",
    title: "تصميم تطبيقات الهواتف الذكية (iOS & Android)",
    desc: "تصميم تجارب تطبيقات أصلية ممتعة وسريعة الاستجابة استنادًا إلى معايير Apple HIG ونظام Material Design 3.",
    meta: "48 ساعة · 6 محاور تطبيقية",
    benchmark: "مبني وفق معايير Apple Human Interface Guidelines وGoogle Material Design 3",
    goal: "احتراف تصميم تطبيقات الأجهزة المحمولة مع فهم عميق للاختلافات البنيوية بين نظامي iOS وAndroid، وأنماط التفاعل بالإيماءات، والتعامل مع مناطق الإبهام وحجم اللمس وتكامل الخدمات الأصلية.",
    details: "مسار عملي متخصص يأخذك من استيعاب السلوك اليومي لمستخدمي الهواتف إلى تصميم واجهات أصلية (Native UX). ستصمم تطبيقات تستثمر إمكانيات الأجهزة كالكاميرا والإشعارات والخرائط، مع الالتزام التام بإرشادات آبل وغوغل لتجهيز ملفات التطبيق لمطوري Swift وKotlin.",
    chapters: [
      {
        title: "فلسفة المنصات: مقارنة شاملة بين iOS وAndroid (HIG vs. Material 3)",
        hours: "8 ساعات",
        tools: "Apple HIG Guidelines, Material Design 3 Specs",
        exercise: "تحليل تطبيق شهير على المنصتين وتحديد الفروقات في أنماط الملاحة والتفاعل",
      },
      {
        title: "أنماط الملاحة المحمولة ومناطق راحة الإبهام (Thumb Zone & Mobile Navigation)",
        hours: "8 ساعات",
        tools: "Tab Bars, Navigation Drawers, Bottom Sheets",
        exercise: "تصميم هيكل ملاحة لتطبيق تجارة إلكترونية يسهل استخدامه بيد واحدة على الهواتف الكبيرة",
      },
      {
        title: "أحجام اللمس ومعايير الشاشات المتعددة (Touch Targets & Multi-Density Screens)",
        hours: "8 ساعات",
        tools: "44pt/48dp Target Rules, Retina & Display P3 Scale",
        exercise: "بناء شبكات تصميم محمولة دقيقة تراعي أدنى مساحات لمس مقبولة لمنع الضغطات الخاطئة",
      },
      {
        title: "الحركات الدقيقة والإيماءات التفاعلية (Micro-Interactions & Gestures)",
        hours: "8 ساعات",
        tools: "Swipe to Delete, Pull to Refresh, Haptic Mapping",
        exercise: "تصميم تدفقات حركية واقعية تحاكي الاستجابة اللمسية الفورية لإشعارات التطبيق",
      },
      {
        title: "نظام الواجهات المحمول والوضع المظلم (Mobile Design System & Dark Mode)",
        hours: "8 ساعات",
        tools: "iOS Dynamic Type, Elevation Layers, Dark Mode Tokens",
        exercise: "إنشاء مكتبة واجهات هاتف تدعم تلقائيًا التباين والوضع الليلي والتكبير الديناميكي للنصوص",
      },
      {
        title: "أصول متاجر التطبيقات والتسليم للبرمجة (App Stores Assets & Handoff)",
        hours: "8 ساعات",
        tools: "App Icons (iOS/Android), Splash Screens, Dev Specs",
        exercise: "تصدير حزمة أصول التصميم للمطورين وتجهيز لقطات شاشة جذابة لمتجري App Store وGoogle Play",
      },
    ],
  },
  {
    n: "07",
    color: "#F06AA6",
    tag: "SELF DEVELOPMENT",
    title: "تطوير الذات وبناء العادات المهنية",
    desc: "هندسة العادات المستدامة، إدارة الطاقة الذهنية والتركيز العميق، وإتقان مهارات التواصل الفعال والذكاء العاطفي.",
    meta: "36 ساعة · 5 محاور منهجية",
    benchmark: "مبني وفق مبادئ Harvard Business Publishing ومنهجيات Deep Work & Atomic Habits",
    goal: "تأسيس نظام إدارة حياة احترافي يحول الأهداف الكبرى إلى سلوكيات يومية متسقة، مع السيطرة على التشتت الرقمي وتطوير مرونة نفسية وقدرة عالية على التواصل والتأثير في بيئات العمل.",
    details: "مسار عملي يبتعد عن التنظير والتحفيز المؤقت، ليركز على الأدوات السلوكية المثبتة علميًا. ستبدأ بفحص نقاط القوة ومصارف الطاقة، ثم تصمم روتينك الأسبوعي للعمل العميق، وتتعلم كيف تدير الحوارات الحساسة باحترافية، وتختم بخطة نمو استراتيجية لـ 90 يومًا قابلة للمراجعة والقياس.",
    chapters: [
      {
        title: "الوعي الذاتي وتحليل نقاط القوة (Strengths Discovery & Self-Audit)",
        hours: "6 ساعات",
        tools: "CliftonStrengths Map, Core Values Matrix",
        exercise: "بناء ملف شامل لنقاط قوتك ومصادر استنزاف طاقتك الذهنية وصياغة بوصلتك المهنية",
      },
      {
        title: "هندسة العادات وإدارة الطاقة الذهنية (Habit Architecture & Energy)",
        hours: "8 ساعات",
        tools: "Habit Stacking, Cue-Routine-Reward, Energy Tracker",
        exercise: "تصميم نظام عادات يومي تدريجي يتناسب مع طبيعة جدولك ومسؤولياتك الحقيقية",
      },
      {
        title: "العمل العميق وإدارة التركيز ومكافحة التشتت (Deep Work & Time Blocking)",
        hours: "8 ساعات",
        tools: "Cal Newport Deep Work Framework, Time Boxing",
        exercise: "جدولة أسبوع عمل نموذجي يضمن فترات تركيز متصلة خالية من المشتتات والاجتماعات غير الضرورية",
      },
      {
        title: "الذكاء العاطفي والحوارات الحاسمة (Emotional Intelligence & Feedback)",
        hours: "8 ساعات",
        tools: "Active Listening, Radical Candor, Crucial Conversations",
        exercise: "محاكاة سيناريوهات تفاوض وحوارات مهنية معقدة وتقديم ملاحظات تطويرية بناءة",
      },
      {
        title: "خطة التنفيذ والتقييم الربيعي (90-Day Execution System & Review)",
        hours: "6 ساعات",
        tools: "Quarterly OKRs, Weekly Review Rituals",
        exercise: "صياغة خطة عمل مفصلة للتسعين يومًا القادمة مع مؤشرات تتبع ومواعيد مراجعة دورية",
      },
    ],
  },
  {
    n: "08",
    color: "#56A8F7",
    tag: "CAREER STRATEGY",
    title: "التخطيط والإرشاد المهني وصناعة الفرص",
    desc: "رسم المسار المهني، بناء ملف أعمال استثنائي، وإتقان المقابلات التخصصية واستراتيجيات التفاوض لاقتناص أفضل الفرص.",
    meta: "36 ساعة · 6 محاور استراتيجية",
    benchmark: "مبني وفق معايير Stanford 'Designing Your Life' وبرامج التوجيه التنفيذي",
    goal: "تمكين الممارس من قيادة مستقبله المهني بثقة ووضوح؛ عبر إبراز قيمته الحقيقية، وصياغة قصة مهنية ملهمة في ملف أعماله وسيرته، والتعامل مع المقابلات الوظيفية كشريك استراتيجي ومفاوض محترف.",
    details: "برنامج تدريبي مكثف يحول خبراتك المتفرقة إلى هوية احترافية مقنعة. ستتعلم كيف تحلل الفرص غير المعلنة في السوق، وتعيد صياغة السيرة الذاتية وفق أنظمة الفرز الذكية (ATS)، وتوثق مشاريعك بأسلوب دراسات الحالة التحليلية، وتخوض محاكاة واقعية للمقابلات وأساليب التفاوض على العروض.",
    chapters: [
      {
        title: "اكتشاف الهوية المهنية ورسم المسار (Career Vision & Odyssey Planning)",
        hours: "6 ساعات",
        tools: "Career Canvas, Transferable Skills Map",
        exercise: "رسم ثلاثة مسارات مهنية مستقبلية ممكنة وتحديد المهارات القابلة للنقل والاستثمار",
      },
      {
        title: "قراءة السوق واقتناص الفرص غير المعلنة (Market Signals & Networking)",
        hours: "6 ساعات",
        tools: "Company Research, Informational Interviews",
        exercise: "بناء قائمة بالشركات المستهدفة وتحليل متطلباتها غير المكتوبة وبناء علاقات نوعية مع قياداتها",
      },
      {
        title: "هندسة السيرة الذاتية والحضور المهني (Impact Resume & LinkedIn Authority)",
        hours: "6 ساعات",
        tools: "ATS-Optimized Resumes, Executive LinkedIn Profile",
        exercise: "إعادة كتابة السيرة الذاتية وحساب LinkedIn بالاعتماد على إبراز الأثر المحقق والأرقام الملموسة",
      },
      {
        title: "بناء ملف الأعمال وسرد دراسات الحالة (Portfolio & Case Study Storytelling)",
        hours: "6 ساعات",
        tools: "STAR Framework, Problem-Action-Result Architecture",
        exercise: "تحويل مشروع عملي إلى دراسة حالة جذابة توضح طريقة تفكيرك وحلك للمشكلات المعقدة",
      },
      {
        title: "إتقان المقابلات الفنية والسلوكية (Interview Mastery & Whiteboard)",
        hours: "6 ساعات",
        tools: "Mock Interviews, Behavioral Question Banks",
        exercise: "خوض محاكاة مقابلة عمل مباشرة وتقديم إجابات مقنعة على الأسئلة الحساسة والتحديات الفنية",
      },
      {
        title: "التفاوض على العروض وخطة أول 90 يومًا (Offer Negotiation & Onboarding)",
        hours: "6 ساعات",
        tools: "Compensation Breakdown, 30-60-90 Day Success Plan",
        exercise: "تقييم عرض عمل حقيقي وصياغة استراتيجية تفاوض رصينة وتجهيز خطة إثبات الجدارة في المنصب الجديد",
      },
    ],
  },
];
