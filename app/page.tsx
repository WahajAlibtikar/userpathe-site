"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { credentialGroups, type Credential } from "./credentials";
import { coursesList, type Course } from "./data/courses-data";
import { Header } from "./components/Header";
import { ArrowDownLeft, ArrowLeft, BookOpen, BriefcaseBusiness, CodeXml, Compass, GraduationCap, Layers3, LayoutDashboard, MessageSquareText, PenTool, Smartphone, Sparkles, Sprout, Users, X } from "lucide-react";

const courseIcons = [Layers3, LayoutDashboard, MessageSquareText, CodeXml, Sparkles, Smartphone, Sprout, Compass];
const coursePrices: Record<string, string> = { "01": "349 ر.س", "02": "449 ر.س", "03": "399 ر.س", "04": "299 ر.س", "05": "249 ر.س", "06": "299 ر.س", "07": "199 ر.س", "08": "249 ر.س" };

function CredentialCard({ credential: c }: { credential: Credential }) {
  return <li className="credentialCard">
    <img className="issuerLogo" src={`/credentials/${c.logo}.jpg`} alt={`شعار ${c.issuer}`} width={56} height={56} loading="lazy"/>
    <div className="credentialBody"><h4 lang="en" dir="ltr">{c.name}</h4>
      <p className="credentialIssuer"><bdi>{c.issuer}</bdi></p>
      <p className="credentialDescription">{c.description}</p>
      {c.expired && <p className="credentialExpiry">انتهت الصلاحية في فبراير 2022</p>}
      {c.url && <a className="credentialLink" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`عرض شهادة ${c.name} — تفتح في نافذة جديدة`}><span>عرض الشهادة</span> <ArrowLeft aria-hidden="true"/></a>}
    </div>
  </li>;
}

const journey = [
  { n:"01", title:"تعلّم", icon:BookOpen, text:"افهم الأساسيات، واربط كل مفهوم بالمشكلة التي يساعدك على حلّها." },
  { n:"02", title:"طبّق", icon:PenTool, text:"اختبر فهمك بتمارين وتحديات تحاكي مواقف العمل." },
  { n:"03", title:"ابنِ أعمالك", icon:BriefcaseBusiness, text:"وثّق تطبيقاتك وقراراتك في ملف أعمال يوضّح طريقة تفكيرك." },
  { n:"04", title:"أنجز مشروعك", icon:GraduationCap, text:"اجمع مهاراتك في مشروع نهائي، واعرض النتيجة ودروس التجربة." },
  { n:"05", title:"تبادل الخبرات", icon:Users, text:"شارك أعمالك مع زملائك، واستفد من الملاحظات لتحسينها." },
  { n:"06", title:"استعد للفرص", icon:Compass, text:"حوّل أعمالك إلى قصة مهنية تساعدك في المقابلات والمشاريع." },
];

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutDialogRef = useRef<HTMLDialogElement>(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const joinDialogRef = useRef<HTMLDialogElement>(null);
  const [joinForm, setJoinForm] = useState({ name: "", email: "", phone: "" });
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const dialog = aboutOpen
      ? aboutDialogRef.current
      : joinOpen
      ? joinDialogRef.current
      : dialogRef.current;
    if ((!selectedCourse && !aboutOpen && !joinOpen) || !dialog) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      const trigger = triggerRef.current;
      trigger?.focus({ preventScroll:true });
    };
  }, [selectedCourse, aboutOpen, joinOpen]);

  return <>
    <a className="skipLink" href="#courses">انتقل إلى الدورات</a>
    <Header onOpenAbout={() => setAboutOpen(true)} />

    <main>
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="heroCopy">
          <div className="eyebrow"><span/> مهارات رقمية. خطوات مهنية.</div>
          <h1 id="hero-title">من التعلّم،<br/><em>إلى صناعة الأثر.</em></h1>
          <p>طوّر مهاراتك في التصميم والكتابة والتقنية، وابنِ ملف أعمال يعكس قدراتك. مسارات تطبيقية تربط ما تتعلّمه بخطوتك المهنية القادمة وفق أعلى المعايير العالمية.</p>
          <div className="heroActions">
            <a href="#courses" className="primaryButton"><span>استكشف الدورات</span> <ArrowDownLeft aria-hidden="true"/></a>
            <a href="#method" className="textLink"><span>كيف تبدأ الرحلة؟</span> <ArrowLeft aria-hidden="true"/></a>
          </div>
        </div>
        <div className="heroArt" aria-hidden="true">
          <div className="pathRing ringOuter"/><div className="pathRing ringInner"/>
          <div className="digitalCore"><BookOpen/><span>تعلّم</span><ArrowLeft/><span>طبّق</span></div>
          <span className="orbitLabel labelTop">من فكرة</span><span className="orbitLabel labelBottom">إلى مهارة</span>
        </div>
      </section>

      <section className="courses" id="courses" aria-labelledby="courses-title"><div className="wrap">
        <div className="sectionHead" data-reveal><div><span className="kicker">مسارات التعلّم</span><h2 id="courses-title">مهارات تبنيها.<br/>وأعمال تتحدّث عنك.</h2></div><p>اختر ما يناسب وجهتك. لكل مسار هدف واضح، ومحاور متدرّجة مبنية على بنشمارك عالمي، وتطبيقات تساعدك على تحويل المعرفة إلى ممارسة.</p></div>
        <div className="courseGrid">{coursesList.map((c,i) => {
          const Icon = courseIcons[i];
          const comingSoon = Boolean(c.comingSoon);
          return <article className={`courseCard${comingSoon ? " comingSoon" : ""}`} data-reveal key={c.n} style={{"--accent":c.color,"--delay":`${i % 4 * 70}ms`} as React.CSSProperties}>
            <div className="cardTop"><span className="number">{c.n}</span><span className="tag" lang="en" dir="ltr">{c.tag}</span></div>
            <h3><span className="courseIcon" aria-hidden="true"><Icon strokeWidth={1.6}/></span>{c.title}</h3>
            <p>{c.desc}</p>
            {c.benchmark && (
              <div className="cardBenchmarkLabel">
                <Sparkles aria-hidden="true" />
                <span>{c.benchmark}</span>
              </div>
            )}
            <div className="cardFoot">
              <small>{c.meta}</small>
              <button onClick={event => { triggerRef.current = event.currentTarget; setSelectedCourse(c); }} aria-haspopup="dialog" aria-label={`تفاصيل دورة ${c.title}`}>
                <span>تفاصيل المسار</span>
                <ArrowLeft aria-hidden="true"/>
              </button>
            </div>
          </article>;
        })}</div>
      </div></section>

      <dialog ref={aboutDialogRef} id="about-dialog" className="courseModal aboutModal" aria-labelledby="about-dialog-title" onClose={() => setAboutOpen(false)} onClick={event => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setAboutOpen(false);
        }
      }}>
      <div className="modalPanel">
      <div className="modalToolbar"><h2 id="about-dialog-title">نبذة عني</h2><button className="modalClose" onClick={() => setAboutOpen(false)} aria-label="إغلاق نبذة عني" autoFocus><X aria-hidden="true"/></button></div>
      <section className="profileCard" id="about" aria-labelledby="about-title">
        <img className="profileBanner" src="/credentials/profile-background.png" alt="" width={2080} height={756}/>
        <div className="profileContent">
          <div className="profileTopline"><img className="profileAvatar" src="/credentials/saleh.jpg" alt="صالح عبدالعزيز" width={156} height={156}/></div>
          <h2 id="about-title">صالح عبدالعزيز</h2>
          <p className="profileRole">مصمم تجربة وواجهات مستخدم · أجايل وسكرم</p>
          <p className="profileLocation">الرياض، المملكة العربية السعودية</p>
          <p className="profileStatement">قادر على تحويل أفكارك إلى واقع ملموس، بداية من تصميم الفكرة إلى إصدار النموذج الأولي للمنتج.</p>
          <p className="profileNote">أشارك ما تعلّمته من بناء المنتجات وأنظمة التصميم، ومن تجربتي في تدريب وتمكين الخريجين في مبادرة وهج منذ 2021. نتعلّم سوا، ونربط المعرفة بالتطبيق.</p>
          <div className="profileSocials"><a href="https://www.linkedin.com/in/eddeziner/" target="_blank" rel="noopener noreferrer" aria-label="ملف صالح على لينكدإن — يفتح في نافذة جديدة">لينكدإن <ArrowLeft aria-hidden="true"/></a><a href="https://x.com/eddeziner" target="_blank" rel="noopener noreferrer" aria-label="حساب صالح eddeziner على تويتر — يفتح في نافذة جديدة">تويتر / X <bdi>@eddeziner</bdi><ArrowLeft aria-hidden="true"/></a></div>
        </div>
      </section>

      <section className="credentials" id="credentials" aria-labelledby="credentials-title"><div>
        <div className="sectionHead" data-reveal><div><h2 id="credentials-title">الشهادات المهنية</h2></div></div>
        <div className="credentialGroups">{credentialGroups.map((group,index) => <section className="credentialGroup" key={group.title} aria-labelledby={`credential-group-${index}`}>
          <div className="credentialGroupHead"><h3 id={`credential-group-${index}`}>{group.title}</h3><span>{String(group.items.length).padStart(2,"0")}</span></div>
          <ul className="credentialGrid">{group.items.slice(0,2).map(c=><CredentialCard key={c.name+c.issuer} credential={c}/>)}</ul>
          {group.items.length>2 && <details className="moreCredentials"><summary><span className="moreLabel">عرض بقية شهادات المجال ({group.items.length-2})</span><span className="lessLabel">عرض شهادات أقل</span><span className="detailsPlus" aria-hidden="true">+</span></summary><ul className="credentialGrid">{group.items.slice(2).map(c=><CredentialCard key={c.name+c.issuer} credential={c}/>)}</ul></details>}
        </section>)}</div>
        <div className="credentialsFoot"><a className="textLink" href="https://www.linkedin.com/in/eddeziner/details/certifications/" target="_blank" rel="noopener noreferrer">الشهادات في لينكدإن <ArrowLeft aria-hidden="true"/></a></div>
      </div></section>
      </div></dialog>

      <section className="method" id="method" aria-labelledby="method-title"><div className="wrap">
        <div className="sectionHead" data-reveal><div><span className="kicker">رحلة التعلّم</span><h2 id="method-title">كل خطوة،<br/>تقرّبك من هدفك.</h2></div><p>ست خطوات تربط التعلّم بالممارسة، وتساعدك على بناء أعمالك والاستعداد للمرحلة القادمة.</p></div>
        <ol className="journey" data-reveal>{journey.map((step,i) => {
          const Icon = step.icon;
          return <li key={step.n} style={{"--step":i} as React.CSSProperties}><div className="stepNode" aria-hidden="true"><Icon strokeWidth={1.6}/></div><span className="stepNumber">{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></li>;
        })}</ol>
      </div></section>

      <section className="cta" id="contact" aria-labelledby="cta-title"><div className="wrap ctaInner">
        <div data-reveal><span className="kicker">اختر خطوتك القادمة</span><h2 id="cta-title">ابدأ بمهارة.<br/>وابنِ عليها <em>مستقبلك.</em></h2><p>اقرأ هدف المسار ومحاوره، ثم اختر ما يتوافق مع خبرتك والمهارة التي تريد تطويرها.</p><button type="button" className="ctaButton" onClick={event => { triggerRef.current = event.currentTarget; setJoinOpen(true); }} aria-haspopup="dialog" aria-controls="join-dialog">انضم لنا <ArrowDownLeft aria-hidden="true"/></button></div>
        <span className="ctaMark" aria-hidden="true">DX</span>
      </div></section>
    </main>

    <footer className="wrap footer"><a href="#top" className="textLogo"><img src="/dx-icon.svg" alt="" aria-hidden="true" />التجربة <span>الرقمية.</span></a><p>تعلّم. طبّق. ابنِ أعمالك.</p><nav aria-label="روابط التذييل"><a href="#courses">الدورات</a><a href="#method">الرحلة</a><Link href="/skills">مهارات النماذج</Link><Link href="/articles">المقالات</Link></nav><small>© 2026 دورات التجربة الرقمية.</small></footer>

    <dialog ref={dialogRef} className="courseModal" aria-labelledby="course-title" onClose={() => setSelectedCourse(null)} onClick={event => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelectedCourse(null);
      }
    }}>
      {selectedCourse && <div className="modalPanel">
        <div className="modalToolbar"><span className="tag" lang="en" dir="ltr">{selectedCourse.tag}</span><button className="modalClose" onClick={() => setSelectedCourse(null)} aria-label="إغلاق التفاصيل" autoFocus><X aria-hidden="true"/></button></div>
        <h2 id="course-title">{selectedCourse.title}</h2>
        <p className="modalMeta">{selectedCourse.meta}</p>
        <div className="purchaseStrip"><span>دورة يقودها وكيل ذكاء اصطناعي</span><strong>{coursePrices[selectedCourse.n]}</strong><button type="button" className="primaryButton" onClick={() => alert("هذه واجهة شراء تجريبية — سيتم تفعيل الدفع لاحقًا.")}>سجّل اهتمامك</button></div><div className="modalIntro"><section><h3>هدف المسار</h3><p>{selectedCourse.goal}</p></section><section><h3>ماذا ستتعلّم؟</h3><p>{selectedCourse.details}</p></section></div>
        <div className="chapters"><div className="chaptersHead"><h3>محاور المسار</h3><small>{selectedCourse.chapters.length} محاور</small></div>
          <ol>{selectedCourse.chapters.map((chapter,index) => <li key={chapter.title}><span>{String(index+1).padStart(2,"0")}</span><div><h4>{chapter.title}</h4><p className="chapterMeta"><span>{chapter.hours}</span><bdi lang="en" dir="ltr">{chapter.tools}</bdi></p><p className="chapterExercise"><strong>تطبيق عملي:</strong> {chapter.exercise}</p></div></li>)}</ol>
        </div>
      </div>}
    </dialog>

    <dialog
      ref={joinDialogRef}
      id="join-dialog"
      className="courseModal joinModal"
      aria-labelledby="join-dialog-title"
      onClose={() => setJoinOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          ) {
            setJoinOpen(false);
          }
        }
      }}
    >
      <div className="modalPanel">
        <div className="modalToolbar">
          <span className="tag" style={{ background: "#fff1eb", color: "#EA4C1D" }}>
            التجربة الرقمية
          </span>
          <button
            type="button"
            className="modalClose"
            onClick={() => setJoinOpen(false)}
            aria-label="إغلاق نموذج الانضمام"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="joinHeader">
          <span className="kicker">خطوتك القادمة</span>
          <h2 id="join-dialog-title">انضم لنا</h2>
          <p>سجّل بياناتك وسنتواصل معك لمساعدتك في اختيار المسار الأنسب لأهدافك وخبرتك.</p>
        </div>

        {joinSubmitted ? (
          <div className="joinSuccessCard">
            <div className="joinSuccessIcon">
              <Sparkles aria-hidden="true" />
            </div>
            <h3>شكرًا لانضمامك، {joinForm.name}!</h3>
            <p>
              تم استلام بياناتك بنجاح. سنتواصل معك قريبًا عبر الواتساب على الرقم ({joinForm.phone}) أو البريد الإلكتروني لمناقشة التفاصيل والبدء معًا.
            </p>
            <button
              type="button"
              className="joinSuccessResetBtn"
              onClick={() => {
                setJoinSubmitted(false);
                setJoinForm({ name: "", email: "", phone: "" });
                setJoinOpen(false);
              }}
            >
              إغلاق النافذة
            </button>
          </div>
        ) : (
          <form
            className="joinForm"
            onSubmit={(e) => {
              e.preventDefault();
              if (joinForm.name.trim() && joinForm.email.trim() && joinForm.phone.trim()) {
                setJoinSubmitted(true);
              }
            }}
          >
            <div className="formField">
              <label htmlFor="join-name">الاسم الكامل *</label>
              <input
                id="join-name"
                name="name"
                type="text"
                required
                placeholder="مثال: صالح عبدالعزيز"
                value={joinForm.name}
                onChange={(e) =>
                  setJoinForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="formField">
              <label htmlFor="join-email">البريد الإلكتروني *</label>
              <input
                id="join-email"
                name="email"
                type="email"
                required
                dir="ltr"
                placeholder="name@example.com"
                value={joinForm.email}
                onChange={(e) =>
                  setJoinForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div className="formField">
              <label htmlFor="join-phone">رقم الجوال *</label>
              <input
                id="join-phone"
                name="phone"
                type="tel"
                required
                dir="ltr"
                placeholder="05xxxxxxxx"
                value={joinForm.phone}
                onChange={(e) =>
                  setJoinForm((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
              <small>سنتواصل معك عبر الواتساب أو الاتصال المباشر.</small>
            </div>

            <button type="submit" className="formSubmitButton">
              <span>إرسال طلب الانضمام</span>
              <ArrowLeft aria-hidden="true" />
            </button>
          </form>
        )}
      </div>
    </dialog>
  </>;
}
