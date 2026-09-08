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
  price: string;
  goal: string;
  details: string;
  benchmark?: string;
  chapters: CourseChapter[];
}

export const coursesList: Course[] = [
  {
    n: "01",
    color: "#EA4C1D",
    tag: "PRODUCT MANAGEMENT",
    title: "إدارة المنتجات الرقمية",
    desc: "من الرؤية والأبحاث إلى بناء قائمة الأولويات وقيادة فرق العمل في دورات سبرنت سريعة تصنع أثرًا ملموسًا.",
    meta: "48 ساعة · 6 محاور تطبيقية",
    price: "399 ر.س",
    benchmark: "مبني وفق معايير Udacity Product Nanodegree وScrum.org",
    goal: "إتقان قيادة دورة حياة المنتج الرقمي، من صياغة الرؤية ومؤشرات النجاح إلى ترتيب الأولويات بالمعادلات العلمية، وتوجيه فرق التطوير والتصميم بروح أجايل المرنة.",
    details: "برنامج تدريبي احترافي يحاكي بيئات المنتجات العالمية. ستتعلم كيف تحول المشكلات المعقدة إلى وثائق متطلبات واضحة (PRD)، وترتب الخصائص بمصفوفات RICE وMoSCoW، وتدير سبرنتات العمل عبر Jira، وتختم بدراسة حالة حقيقية لإطلاق منتج جاهزة لملف أعمالك.",
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
    price: "449 ر.س",
    benchmark: "مبني وفق معايير Nielsen Norman Group (NN/g) وGoogle UX",
    goal: "الانتقال من مرحلة تنفيذ الواجهات العشوائية إلى عقلية مصمم المنتجات الرقمية (Product Designer) الذي يرتكز على الأبحاث النفسية وسلوك المستخدمين، ويتقن أحدث تقنيات Figma لإنشاء أنظمة متماسكة.",
    details: "دورة عملية متقدمة تغطي إطار العمل المزدوج (Double Diamond). تبدأ بفهم الاحتياج عبر الأبحاث والمقابلات، مرورًا بهندسة المعلومات والتصميم السلكي، ثم صياغة الهوية البصرية وأنظمة المكونات الذكية (Design Tokens & Variables)، وانتهاءً باختبار قابلية الاستخدام وإعداد دراسة حالة مقنعة للتوظيف.",
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
        tools: "Figma Auto Layout, Constraints",
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
    color: "#F06AA6",
    tag: "UX WRITING",
    title: "كتابة تجربة المستخدم وتصميم المحتوى",
    desc: "صياغة النصوص الرقمية التي ترشد المستخدم بسلاسة، تقلل الحيرة، وتصنع نبرة علامة تجارية تثري تجربة المنتج.",
    meta: "64 ساعة · 6 محاور تخصصية",
    price: "349 ر.س",
    benchmark: "مبني وفق معايير UX Content Collective ونموذج Torrey Podmajersky",
    goal: "امتلاك أدوات كاتب تجربة المستخدم المحترف (UX Writer / Content Designer): من صياغة استراتيجية الصوت والنبرة، إلى كتابة الميكروكوبي الحساس، والتعاون الفعال داخل أدوات التصميم لاختبار فاعلية الكلمات.",
    details: "برنامج عميق يعامِل المحتوى كعنصر تفاعلي لا يقل أهمية عن التصميم البصري. تتعلم خلاله كيف ترتب الرسائل وفق النموذج العقلي للمستخدم، وتصيغ سيناريوهات الخطأ بدون إحباط، وتهيئ رحلات الانضمام، وتقيس ووضوح الكلمات بأدوات البحث النوعي والكمي.",
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
    tag: "DEVELOPMENT & AI",
    title: "تطوير التطبيقات الرقمية والذكاء الاصطناعي",
    desc: "بناء تطبيقات ويب سريعة وقابلة للتوسع باستخدام أحدث معايير React 19، Next.js، وتكاملات نماذج الذكاء الاصطناعي.",
    meta: "72 ساعة · 7 محاور هندسية",
    price: "499 ر.س",
    benchmark: "مبني وفق معايير Meta Professional وممارسات هندسة الويب السحابية",
    goal: "تمكين المطور من تحويل النماذج التصميمية إلى تطبيقات ويب إنتاجية كاملة؛ تلتزم بأعلى معايير الأداء، سهولة الوصول، إدارة الحالة بكفاءة، وربط واجهات البيانات والنماذج الذكية بأمان.",
    details: "رحلة بناء برمجية شاملة ترتكز على التفكير المعماري للويب الحديث. تتعلم كتابة كود نظيف وقابل للصيانة بلغة TypeScript، وبناء مكونات متجاوبة بـ Tailwind CSS، والربط مع واجهات برمجة النماذج (AI SDKs)، ونشر المشاريع عبر السحابة.",
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
        tools: "Tailwind CSS, CSS Variables, Lucide Icons",
        exercise: "تحويل تصميم نظام واجهات معقد إلى كود متجاوب بالكامل يدعم التباين العالي",
      },
      {
        title: "واجهات API والاتصال بالخدمات السحابية (API Architecture & Integrations)",
        hours: "10 ساعات",
        tools: "REST, Edge Runtime, Postman / Thunder Client",
        exercise: "برمجة مسارات خدمة خلفية مع التحقق الآمن من المدخلات ومعالجة الأخطاء",
      },
      {
        title: "تكامل نماذج الذكاء الاصطناعي في المنتجات (AI Model Integrations)",
        hours: "10 ساعات",
        tools: "Gemini / Claude APIs, Structured Outputs, Streaming",
        exercise: "ربط التطبيق بنموذج ذكاء اصطناعي لمعالجة البيانات وعرض الاستجابة المتدفقة (Streaming)",
      },
      {
        title: "قواعد البيانات والمصادقة الأمنية (Databases & Authentication)",
        hours: "10 ساعات",
        tools: "PostgreSQL / SQLite, Drizzle ORM, NextAuth / JWT",
        exercise: "ربط قاعدة بيانات سحابية وتأمين بيانات المستخدمين بنظام صلاحيات مشدد",
      },
      {
        title: "الأداء والنشر ومشروع الإطلاق النهائي (Performance, Edge & Launch)",
        hours: "10 ساعات",
        tools: "Vercel / Cloud Run, Lighthouse Audit, Production Build",
        exercise: "تحسين سرعة التحميل إلى +95 على Lighthouse وإطلاق المنتج في النطاق النهائي",
      },
    ],
  },
];
