import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Code2,
  HeartHandshake,
  Layers3,
  PenLine,
  Sparkles,
} from "lucide-react";
import { skillsGroups } from "../data/skills-data";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/Header";

export const metadata = {
  title: "أدوات الذكاء الاصطناعي · التجربة الرقمية",
  description:
    "ملفات توجيه وأدوات عملية لنماذج الذكاء الاصطناعي (ChatGPT, Claude, Gemini) بمعايير جودة وسياق محكم.",
};

const iconMap = {
  Sparkles,
  Layers3,
  HeartHandshake,
  Code2,
};

export default function SkillsPage() {
  return (
    <>
      <Header />

      <main className="catalogPage">
        <div className="wrap">
          <header className="pageCompactHeader">
            <Breadcrumb
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "أدوات الذكاء الاصطناعي" },
              ]}
            />
            <span className="kicker">أدوات ونماذج مهيأة</span>
            <h1>أدوات الذكاء الاصطناعي</h1>
            <p>
              ملفات توجيه وسياق عملي تمنح نماذج الذكاء الاصطناعي معايير واضحة
              لتسريع مهام التصميم، البرمجة، والمنتجات بنتائج دقيقة واحترافية.
            </p>
          </header>

          <section className="catalogGroups">
            {skillsGroups.map((group) => {
              const Icon = iconMap[group.iconName] || Sparkles;
              return (
                <section
                  className="skillGroup"
                  key={group.title}
                  style={{ "--accent": group.color } as React.CSSProperties}
                >
                  <div className="skillGroupHead">
                    <div className="skillGroupTitle">
                      <span className="skillGroupIcon">
                        <Icon aria-hidden="true" />
                      </span>
                      <div>
                        <span className="kicker">{group.skills.length} أدوات</span>
                        <h2>{group.title}</h2>
                      </div>
                    </div>
                    <span className="skillRule" />
                  </div>

                  <div className="skillGrid">
                    {group.skills.map((skill) => (
                      <article className="skillCard" key={skill.id} id={skill.id}>
                        <div className="skillCardTop">
                          <span className="skillDot" />
                          <span dir="ltr">skill.md</span>
                        </div>
                        <h3>
                          <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
                        </h3>
                        <p>{skill.desc}</p>
                        <div className="skillPriceRow">
                          <strong>
                            {skill.id === "ux-reviewer" || skill.id === "figma-partner"
                              ? "49 ر.س"
                              : "29 ر.س"}
                          </strong>
                          <span>تحميل مدفوع · ملف Markdown</span>
                        </div>
                        <div className="skillCardFoot">
                          <small dir="ltr">{skill.models}</small>
                          <Link
                            href={`/skills/${skill.id}`}
                            className="skillLinkBtn"
                            aria-label={`عرض أداة ${skill.name}`}
                          >
                            <span>تفاصيل الأداة</span>
                            <ArrowLeft aria-hidden="true" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </section>
        </div>

        <section className="catalogCta">
          <div className="wrap">
            <PenLine aria-hidden="true" />
            <div>
              <span className="kicker">أداة مخصصة لفريقك؟</span>
              <h2>تواصل معنا لبناء أدوات وتوجيهات تناسب بيئة عملك.</h2>
            </div>
            <Link href="/#contact" className="primaryButton">
              تواصل معنا <ArrowUpLeft aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="wrap footer">
        <Link href="/" className="textLogo">
          <img src="/dx-icon.svg" alt="" aria-hidden="true" />
          التجربة <span>الرقمية.</span>
        </Link>
        <p>تعلّم المهارة. أنجز مشروعك. اصنع أثرك المهني.</p>
        <nav aria-label="روابط التذييل">
          <Link href="/#courses">الدورات</Link>
          <Link href="/#method">رحلة التعلّم</Link>
          <Link href="/skills">أدوات الذكاء الاصطناعي</Link>
          <Link href="/articles">المقالات</Link>
          <Link href="/#contact">تواصل معنا</Link>
        </nav>
        <small>© 2026 دورات التجربة الرقمية. جميع الحقوق محفوظة.</small>
      </footer>
    </>
  );
}
