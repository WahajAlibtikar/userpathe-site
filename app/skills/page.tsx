import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  Code2,
  HeartHandshake,
  Layers3,
  PenLine,
  Sparkles,
} from "lucide-react";
import { skillsGroups } from "../data/skills-data";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata = {
  title: "مهارات النماذج (skill.md) · التجربة الرقمية",
  description: "ملفات مهارات عملية جاهزة لنماذج الذكاء الاصطناعي (ChatGPT, Claude, Gemini) بجودة عالية وسياق محكم.",
};

const iconMap = {
  Sparkles,
  Layers3,
  HeartHandshake,
  Code2,
};

export default function SkillsPage() {
  return (
    <main className="catalogPage">
      <header className="catalogNav wrap">
        <Link href="/" className="textLogo">
          <img src="/dx-icon.svg" alt="" aria-hidden="true" />
          التجربة <span>الرقمية.</span>
        </Link>
        <nav>
          <Link href="/">الرئيسية</Link>
          <Link href="/articles">المقالات</Link>
        </nav>
        <Link href="/" className="catalogBack">
          <ArrowRight aria-hidden="true" />
          <span>العودة للموقع</span>
        </Link>
      </header>

      <section className="catalogHero wrap">
        <Breadcrumb
          items={[{ label: "الرئيسية", href: "/" }, { label: "مهارات النماذج" }]}
        />
        <span className="kicker">مهارات النماذج · skill.md</span>
        <h1>
          مهارات جاهزة
          <br />
          <em>لنماذج الذكاء.</em>
        </h1>
        <p>
          ملفات مهارات عملية تضع النموذج في دور واضح، وتمنحه سياقًا ومعايير جودة
          تساعده على تقديم نتيجة أفضل.
        </p>
        <div className="catalogStats">
          <span>
            <b>12</b> مهارة متاحة للنسخ
          </span>
          <span>
            <b>04</b> تصنيفات تخصصية
          </span>
          <span>
            <b>100%</b> متوافقة مع ChatGPT و Claude و Gemini
          </span>
        </div>
      </section>

      <section className="catalogGroups wrap">
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
                    <span className="kicker">{group.skills.length} مهارات</span>
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
                    <div className="skillCardFoot">
                      <small dir="ltr">{skill.models}</small>
                      <Link
                        href={`/skills/${skill.id}`}
                        className="skillLinkBtn"
                        aria-label={`عرض مهارة ${skill.name}`}
                      >
                        <span>عرض المهارة</span>
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

      <section className="catalogCta">
        <div className="wrap">
          <PenLine aria-hidden="true" />
          <div>
            <span className="kicker">تريد مهارة مخصصة؟</span>
            <h2>اكتب لي المهمة، ونبني لها ملف مهارة.</h2>
          </div>
          <Link href="/#contact" className="primaryButton">
            تواصل معي <ArrowUpLeft aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
