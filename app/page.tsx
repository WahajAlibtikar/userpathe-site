"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { coursesList, type Course } from "./data/courses-data";
import { Header } from "./components/Header";
import {
  ArrowDownLeft,
  ArrowLeft,
  BookOpen,
  CodeXml,
  Compass,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  MessageCircle,
  MessageSquareText,
  PenTool,
  Sparkles,
  X,
} from "lucide-react";

const courseIcons = [
  LayoutDashboard,
  Layers3,
  MessageSquareText,
  CodeXml,
];

const journey = [
  {
    n: "01",
    title: "تعلّم الأساسيات",
    icon: BookOpen,
    text: "افهم المفاهيم والأطر المعيارية، واربط كل مهارة بالاحتياج الفعلي في بيئات العمل الحقيقية.",
  },
  {
    n: "02",
    title: "طبّق عمليًا",
    icon: PenTool,
    text: "تدرّب على سيناريوهات وتحديات واقعية باستخدام نفس الأدوات المعتمدة لدى كبرى الشركات.",
  },
  {
    n: "03",
    title: "ابنِ مشروعك",
    icon: GraduationCap,
    text: "طوّر مشروع تخرج متكامل من الصفر، يوثّق قراراتك ومنهجية حلك للمشكلات المعقدة.",
  },
  {
    n: "04",
    title: "انطلق للفرص",
    icon: Compass,
    text: "تخرّج بملف أعمال وسيرة مهنية مقنعة تعكس قيمتك وتفتح لك أبواب التوظيف والفرص المهنية.",
  },
];

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedCourse) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
      triggerRef.current?.focus();
    }
  }, [selectedCourse]);

  const handleEnrollFromModal = (courseTitle: string) => {
    setSelectedCourse(null);
    setContactForm((prev) => ({ ...prev, course: courseTitle }));
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name.trim() && contactForm.email.trim()) {
      setContactSubmitted(true);
    }
  };

  return (
    <>
      <a className="skipLink" href="#courses">
        انتقل إلى الدورات
      </a>
      <Header />

      <main>
        {/* 1. HERO SECTION */}
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="heroCopy">
            <div className="eyebrow">
              <span />
              منصة تعليمية متخصصة لصناع المنتجات
            </div>
            <h1 id="hero-title">
              تعلّم المهارة،
              <br />
              <em>واصنع بها أثرًا وفرصة مهنية.</em>
            </h1>
            <p>
              دورات تطبيقية مركزة في إدارة المنتجات، تصميم الواجهات، كتابة تجربة
              المستخدم، والتقنية الحديثة. تركز على التطبيق العملي وبناء مشاريع حقيقية
              تثري ملف أعمالك.
            </p>
            <div className="heroActions">
              <a href="#courses" className="primaryButton">
                <span>استكشف الدورات</span>
                <ArrowDownLeft aria-hidden="true" />
              </a>
              <a href="#method" className="textLink">
                <span>رحلة التعلّم</span>
                <ArrowLeft aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="heroArt" aria-hidden="true">
            <div className="pathRing ringOuter" />
            <div className="pathRing ringInner" />
            <div className="digitalCore">
              <BookOpen />
              <span>تعلّم</span>
              <ArrowLeft />
              <span>طبّق</span>
            </div>
            <span className="orbitLabel labelTop">من الفكرة</span>
            <span className="orbitLabel labelBottom">إلى الفرصة المهنية</span>
          </div>
        </section>

        {/* 2. COURSES SECTION */}
        <section className="courses" id="courses" aria-labelledby="courses-title">
          <div className="wrap">
            <div className="sectionHead" data-reveal>
              <div>
                <span className="kicker">الدورات المتاحة</span>
                <h2 id="courses-title">
                  دورات مكثفة.
                  <br />
                  ومشاريع تتحدّث عنك.
                </h2>
              </div>
              <p>
                اختر الدورة المناسبة لمسارك المهني. كل دورة مبنية وفق أطر ومعايير
                عالمية، ومصممة لمساعدتك على إتقان الأدوات وبناء مشروع تخرج قابل للعرض.
              </p>
            </div>

            <div className="courseGrid">
              {coursesList.map((c, i) => {
                const Icon = courseIcons[i] || Sparkles;
                return (
                  <article
                    className="courseCard"
                    data-reveal
                    key={c.n}
                    style={
                      {
                        "--accent": c.color,
                        "--delay": `${(i % 4) * 70}ms`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="cardTop">
                      <span className="number">{c.n}</span>
                      <span className="tag" lang="en" dir="ltr">
                        {c.tag}
                      </span>
                    </div>
                    <h3>
                      <span className="courseIcon" aria-hidden="true">
                        <Icon strokeWidth={1.6} />
                      </span>
                      {c.title}
                    </h3>
                    <p>{c.desc}</p>
                    {c.benchmark && (
                      <div className="cardBenchmarkLabel">
                        <Sparkles aria-hidden="true" />
                        <span>{c.benchmark}</span>
                      </div>
                    )}
                    <div className="cardFoot">
                      <div>
                        <small>{c.meta}</small>
                        <span className="coursePrice" style={{ display: "block", fontWeight: "bold", marginTop: "4px" }}>
                          {c.price}
                        </span>
                      </div>
                      <button
                        onClick={(event) => {
                          triggerRef.current = event.currentTarget;
                          setSelectedCourse(c);
                        }}
                        aria-haspopup="dialog"
                        aria-label={`تفاصيل دورة ${c.title}`}
                      >
                        <span>تفاصيل الدورة</span>
                        <ArrowLeft aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. LEARNING JOURNEY */}
        <section className="method" id="method" aria-labelledby="method-title">
          <div className="wrap">
            <div className="sectionHead" data-reveal>
              <div>
                <span className="kicker">رحلة التعلّم</span>
                <h2 id="method-title">
                  منهجية تطبيقية،
                  <br />
                  تقرّبك من هدفك المهني.
                </h2>
              </div>
              <p>
                أربع محطات متسلسلة تربط المعرفة بالتنفيذ، وتضمن خروجك بنتيجة عملية
                ومشروع حقيقي يضيف لخبرتك.
              </p>
            </div>

            <ol className="journey" data-reveal>
              {journey.map((step, i) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.n}
                    style={{ "--step": i } as React.CSSProperties}
                  >
                    <div className="stepNode" aria-hidden="true">
                      <Icon strokeWidth={1.6} />
                    </div>
                    <span className="stepNumber">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* 4. CONTACT & INQUIRIES SECTION */}
        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <div className="contactGrid">
              <div className="contactInfo" data-reveal>
                <span className="kicker">تواصل واستفسار</span>
                <h2 id="contact-title">
                  هل لديك استفسار؟
                  <br />
                  <em>نحن هنا لمساعدتك.</em>
                </h2>
                <p>
                  سواء كنت تستفسر عن تفاصيل دورة معينة، أو ترغب في تدريب مخصص لفريق
                  عملك؛ يسعدنا الرد على استفسارك وتوجيهك للخيار الأنسب.
                </p>

                <div className="directContactLinks">
                  <a
                    href="https://wa.me/966500000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactMethodBtn"
                  >
                    <MessageCircle aria-hidden="true" />
                    <div>
                      <strong>تواصل عبر واتساب</strong>
                      <small>محادثة مباشرة للاستفسار السريع عن الدورات</small>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/eddeziner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contactMethodBtn"
                  >
                    <ArrowLeft aria-hidden="true" />
                    <div>
                      <strong>تواصل عبر لينكدإن</strong>
                      <small>التواصل المهني والتعاون التدريبي للمؤسسات</small>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contactFormCard" data-reveal>
                {contactSubmitted ? (
                  <div className="joinSuccessCard">
                    <div className="joinSuccessIcon">
                      <Sparkles aria-hidden="true" />
                    </div>
                    <h3>شكرًا لتواصلك معنا، {contactForm.name}!</h3>
                    <p>
                      تم استلام رسالتك بنجاح. سنرد على استفسارك في أقرب وقت عبر
                      البريد الإلكتروني أو الواتساب.
                    </p>
                    <button
                      type="button"
                      className="joinSuccessResetBtn"
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({
                          name: "",
                          email: "",
                          phone: "",
                          course: "",
                          message: "",
                        });
                      }}
                    >
                      إرسال استفسار آخر
                    </button>
                  </div>
                ) : (
                  <form className="joinForm" onSubmit={handleContactSubmit}>
                    <div className="formField">
                      <label htmlFor="contact-name">الاسم الكريم *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="مثال: عبدالله الفهد"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="formField">
                      <label htmlFor="contact-email">البريد الإلكتروني *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        dir="ltr"
                        placeholder="name@domain.com"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="formField">
                      <label htmlFor="contact-phone">رقم الجوال أو واتساب</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        dir="ltr"
                        placeholder="05xxxxxxxx"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                      />
                      <small>للتواصل السريع وتأكيد تفاصيل الدورة.</small>
                    </div>

                    <div className="formField">
                      <label htmlFor="contact-course">الدورة المهتم بها</label>
                      <select
                        id="contact-course"
                        value={contactForm.course}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            course: e.target.value,
                          }))
                        }
                        className="formSelect"
                      >
                        <option value="">اختر دورة أو استفسار عام...</option>
                        {coursesList.map((c) => (
                          <option key={c.n} value={c.title}>
                            {c.title} ({c.price})
                          </option>
                        ))}
                        <option value="تدريب فرق العمل">
                          تدريب مخصص لفرق العمل والشركات
                        </option>
                        <option value="استفسار عام">استفسار عام</option>
                      </select>
                    </div>

                    <div className="formField">
                      <label htmlFor="contact-message">
                        رسالتك أو استفسارك (اختياري)
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        placeholder="اكتب استفسارك هنا..."
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="formTextarea"
                      />
                    </div>

                    <button type="submit" className="formSubmitButton">
                      <span>إرسال الاستفسار</span>
                      <ArrowLeft aria-hidden="true" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="wrap footer">
        <a href="#top" className="textLogo">
          <img src="/dx-icon.svg" alt="" aria-hidden="true" />
          التجربة <span>الرقمية.</span>
        </a>
        <p>تعلّم المهارة. أنجز مشروعك. اصنع أثرك المهني.</p>
        <nav aria-label="روابط التذييل">
          <a href="#courses">الدورات</a>
          <a href="#method">رحلة التعلّم</a>
          <Link href="/skills">أدوات الذكاء الاصطناعي</Link>
          <Link href="/articles">المقالات</Link>
          <a href="#contact">تواصل معنا</a>
        </nav>
        <small>© 2026 دورات التجربة الرقمية. جميع الحقوق محفوظة.</small>
      </footer>

      {/* COURSE DETAIL DIALOG */}
      <dialog
        ref={dialogRef}
        className="courseModal"
        aria-labelledby="course-title"
        onClose={() => setSelectedCourse(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            ) {
              setSelectedCourse(null);
            }
          }
        }}
      >
        {selectedCourse && (
          <div className="modalPanel">
            <div className="modalToolbar">
              <span className="tag" lang="en" dir="ltr">
                {selectedCourse.tag}
              </span>
              <button
                className="modalClose"
                onClick={() => setSelectedCourse(null)}
                aria-label="إغلاق التفاصيل"
                autoFocus
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <h2 id="course-title">{selectedCourse.title}</h2>
            <p className="modalMeta">{selectedCourse.meta}</p>

            {selectedCourse.benchmark && (
              <div
                className="cardBenchmarkLabel"
                style={{ margin: "10px 0 16px" }}
              >
                <Sparkles aria-hidden="true" />
                <span>{selectedCourse.benchmark}</span>
              </div>
            )}

            <div className="purchaseStrip">
              <span>سعر التسجيل في الدورة</span>
              <strong>{selectedCourse.price}</strong>
              <button
                type="button"
                className="primaryButton"
                onClick={() => handleEnrollFromModal(selectedCourse.title)}
              >
                التسجيل في الدورة
              </button>
            </div>

            <div className="modalIntro">
              <section>
                <h3>هدف الدورة</h3>
                <p>{selectedCourse.goal}</p>
              </section>
              <section>
                <h3>ماذا ستتعلّم في الدورة؟</h3>
                <p>{selectedCourse.details}</p>
              </section>
            </div>

            <div className="chapters">
              <div className="chaptersHead">
                <h3>محاور الدورة</h3>
                <small>{selectedCourse.chapters.length} محاور تدريبية</small>
              </div>
              <ol>
                {selectedCourse.chapters.map((chapter, index) => (
                  <li key={chapter.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{chapter.title}</h4>
                      <p className="chapterMeta">
                        <span>{chapter.hours}</span>
                        <bdi lang="en" dir="ltr">
                          {chapter.tools}
                        </bdi>
                      </p>
                      <p className="chapterExercise">
                        <strong>تطبيق عملي:</strong> {chapter.exercise}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
