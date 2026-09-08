import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, FileCode, Sparkles } from "lucide-react";
import { getAllSkills, getSkillById } from "../../data/skills-data";
import { Breadcrumb } from "../../components/Breadcrumb";
import { SkillViewTabs } from "../../components/SkillViewTabs";

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
  if (!skill) return { title: "مهارة غير موجودة · التجربة الرقمية" };
  return {
    title: `مهارة ${skill.name} · مهارات النماذج · التجربة الرقمية`,
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
    <main className="singlePage">
      <header className="catalogNav wrap">
        <Link href="/" className="textLogo">
          <img src="/dx-icon.svg" alt="" aria-hidden="true" />
          التجربة <span>الرقمية.</span>
        </Link>
        <nav>
          <Link href="/">الرئيسية</Link>
          <Link href="/articles">المقالات</Link>
          <Link href="/skills">مهارات النماذج</Link>
        </nav>
        <Link href="/" className="catalogBack">
          <ArrowRight aria-hidden="true" />
          <span>العودة للموقع</span>
        </Link>
      </header>

      <div className="singleContainer">
        <div className="singleTopBar">
          <Breadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "مهارات النماذج", href: "/skills" },
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
                  <span>العودة لمهارات النماذج</span>
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

          <div className="purchaseStrip skillPurchase"><span>تحميل ملف المهارة بعد الشراء</span><strong>{skill.id === "ux-reviewer" || skill.id === "figma-partner" ? "49 ر.س" : "29 ر.س"}</strong><Link href="/#contact" className="primaryButton">شراء وتحميل</Link></div>

          <SkillViewTabs skill={skill} />

          <nav className="singlePagination" aria-label="تنقل المهارات">
            {prevSkill ? (
              <Link
                href={`/skills/${prevSkill.id}`}
                className="singlePaginationLink singlePaginationPrev"
              >
                <small>
                  <ArrowRight aria-hidden="true" /> المهارة السابقة
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
                  المهارة التالية <ArrowLeft aria-hidden="true" />
                </small>
                <strong>{nextSkill.name}</strong>
              </Link>
            )}
          </nav>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/skills" className="backLink">
              <ArrowRight aria-hidden="true" />
              <span>العودة لجميع مهارات النماذج</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
