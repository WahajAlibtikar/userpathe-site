import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, Sparkles, User } from "lucide-react";
import { articlesList, getArticleById } from "../../data/articles-data";
import { Breadcrumb } from "../../components/Breadcrumb";
import { ShareButton } from "../../components/ShareButton";

export function generateStaticParams() {
  return articlesList.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params);
  const article = getArticleById(resolved.id);
  if (!article) return { title: "مقال غير موجود · التجربة الرقمية" };
  return {
    title: `${article.title} · التجربة الرقمية`,
    description: article.desc,
  };
}

export default async function ArticleSinglePage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params);
  const article = getArticleById(resolved.id);

  if (!article) {
    notFound();
  }

  const currentIndex = articlesList.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articlesList[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < articlesList.length - 1 ? articlesList[currentIndex + 1] : null;

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
              { label: "المقالات", href: "/articles" },
              { label: article.title },
            ]}
          />
        </div>

        <article className="singleContent">
          <header className="singleHeader">
            <div className="singleHeaderMetaRow">
              <div className="singleTagGroup">
                <Link href="/articles" className="backToCatalogLink">
                  <ArrowRight aria-hidden="true" />
                  <span>العودة إلى المقالات</span>
                </Link>
                <span className="tagBadge">{article.tag}</span>
              </div>
              <ShareButton title={article.title} />
            </div>
            <h1 className="singleTitle">{article.title}</h1>
            <div className="singleMeta">
              <span>
                <User aria-hidden="true" /> {article.author}
              </span>
              <span>
                <Clock3 aria-hidden="true" /> {article.time}
              </span>
              <span>{article.date}</span>
            </div>
          </header>

          <div className="articleIntroBox">{article.content.intro}</div>

          <div className="articleContentBody">
            {article.content.sections.map((sec) => (
              <section className="articleBodySection" key={sec.heading}>
                <h3>{sec.heading}</h3>
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {sec.quote && (
                  <blockquote className="articleQuote">
                    &ldquo;{sec.quote}&rdquo;
                  </blockquote>
                )}
              </section>
            ))}

            <div className="articleTakeawaysBox">
              <h3>
                <Sparkles aria-hidden="true" /> أهم الخلاصات والدروس
              </h3>
              <ul>
                {article.content.takeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <nav className="singlePagination" aria-label="تنقل المقالات">
            {prevArticle ? (
              <Link
                href={`/articles/${prevArticle.id}`}
                className="singlePaginationLink singlePaginationPrev"
              >
                <small>
                  <ArrowRight aria-hidden="true" /> المقال السابق
                </small>
                <strong>{prevArticle.title}</strong>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle && (
              <Link
                href={`/articles/${nextArticle.id}`}
                className="singlePaginationLink singlePaginationNext"
              >
                <small>
                  المقال التالي <ArrowLeft aria-hidden="true" />
                </small>
                <strong>{nextArticle.title}</strong>
              </Link>
            )}
          </nav>

          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/articles" className="backLink">
              <ArrowRight aria-hidden="true" />
              <span>العودة لجميع المقالات</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
