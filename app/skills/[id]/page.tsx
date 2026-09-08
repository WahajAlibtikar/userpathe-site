import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileCode, Sparkles } from "lucide-react";
import { getAllSkills, getSkillById } from "../../data/skills-data";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SkillViewTabs } from "../../components/SkillViewTabs";
import { Header } from "../../components/Header";

export function generateStaticParams() {
  return getAllSkills().map((skill) => ({
    id: skill.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params);
  const skill = getSkillById(resolved.id);
  if (!skill) return { title: "أداة غير موجودة · التجربة الرقمية" };
  return {
    title: `${skill.name} · أدوات الذكاء الاصطناعي · التجربة الرقمية`,
    description: skill.desc,
  };
}

export default async function SkillSinglePage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params);
  const skill = getSkillById(resolved.id);

  if (!skill) {
    notFound();
  }

  const allSkills = getAllSkills();
  const currentIndex = allSkills.findIndex((s) => s.id === skill.id);
  const prevSkill = currentIndex > 0 ? allSkills[currentIndex - 1] : null;
  const nextSkill =
    currentIndex < allSkills.length - 1 ? allSkills[currentIndex + 1] : null;

  return (
    <>
      <Header />

      <main className="singlePage">
        <div className="singleContainer">
          <div className="singleTopBar">
            <Breadcrumb
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "أدوات الذكاء الاصطناعي", href: "/skills" },
                { label: skill.name },
              ]}
            />
          </div>

          <article className="singleContent">
            <header className="singleHeader">
              <div className="singleHeaderMetaRow">
                <div className="singleTagGroup">
                  <Link href="/skills" className="backToCatalogLink">
                    <ArrowRight aria-hidden="true" />
                    <span>العودة لأدوات الذكاء الاصطناعي</span>
                  </Link>
                  <span className="skillBadge">{skill.badge}</span>
                </div>
              </div>
              <h1 className="singleTitle">{skill.name}</h1>
              <p className="skillRoleDesc">{skill.role}</p>

              <div className="articleModalMeta">
                <span>
                  <FileCode aria-hidden="true" /> skill.md
                </span>
                <span dir="ltr">{skill.models}</span>
                <span>
                  <Sparkles aria-hidden="true" /> {skill.category}
                </span>
              </div>
            </header>

            <div className="purchaseStrip skillPurchase">
              <span>تحميل ملف الأداة والتوجيهات</span>
              <strong>
                {skill.id === "ux-reviewer" || skill.id === "figma-partner"
                  ? "49 ر.س"
                  : "29 ر.س"}
              </strong>
              <Link href="/#contact" className="primaryButton">
                طلب وتحميل الأداة
              </Link>
            </div>

            <SkillViewTabs skill={skill} />

            <nav className="singlePagination" aria-label="تنقل الأدوات">
              {prevSkill ? (
                <Link
                  href={`/skills/${prevSkill.id}`}
                  className="singlePaginationLink singlePaginationPrev"
                >
                  <small>
                    <ArrowRight aria-hidden="true" /> الأداة السابقة
                  </small>
                  <strong>{prevSkill.name}</strong>
                </Link>
              ) : (
                <div />
              )}

              {nextSkill && (
                <Link
                  href={`/skills/${nextSkill.id}`}
                  className="singlePaginationLink singlePaginationNext"
                >
                  <small>
                    الأداة التالية <ArrowLeft aria-hidden="true" />
                  </small>
                  <strong>{nextSkill.name}</strong>
                </Link>
              )}
            </nav>

            <div style={{ marginTop: 40, textAlign: "center" }}>
              <Link href="/skills" className="backLink">
                <ArrowRight aria-hidden="true" />
                <span>العودة لجميع أدوات الذكاء الاصطناعي</span>
              </Link>
            </div>
          </article>
        </div>
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
