import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3, PenLine } from "lucide-react";
import { articlesList } from "../data/articles-data";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata = {
  title: "المقالات · من دفتر صالح عبدالعزيز",
  description: "مقالات عملية في تجربة المستخدم، الذكاء الاصطناعي، وثقافة بناء المنتجات الرقمية.",
};

export default function ArticlesPage() {
  return (
    <main className="articlesPage">
      <header className="catalogNav wrap">
        <Link href="/" className="textLogo">
          <img src="/dx-icon.svg" alt="" aria-hidden="true" />
          التجربة <span>الرقمية.</span>
        </Link>
        <nav>
          <Link href="/">الرئيسية</Link>
          <Link href="/skills">مهارات النماذج</Link>
        </nav>
        <Link href="/" className="catalogBack">
          <ArrowRight aria-hidden="true" />
          <span>العودة للموقع</span>
        </Link>
      </header>

      <section className="articlesHero wrap">
        <Breadcrumb
          items={[{ label: "الرئيسية", href: "/" }, { label: "المقالات" }]}
        />
        <span className="kicker">من دفتر صالح</span>
        <h1>
          مقالات
          <br />
          <em>تفتح سؤالًا.</em>
        </h1>
        <p>
          أكتب عن التصميم، الذكاء الاصطناعي، العمل مع الفرق، والرحلة المهنية
          بلغة عملية وقريبة.
        </p>
      </section>

      <section className="articleGrid wrap">
        {articlesList.map((article, i) => (
          <article className="articleCard" key={article.id} id={article.id}>
            <div className="articleNumber">
              {String(i + 1).padStart(2, "0")}
            </div>
            <span className="articleTag">{article.tag}</span>
            <h2>
              <Link href={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
            <p>{article.desc}</p>
            <div className="articleFoot">
              <span>
                <Clock3 aria-hidden="true" /> {article.time}
              </span>
              <Link
                href={`/articles/${article.id}`}
                className="articleReadBtn"
                aria-label={`اقرأ مقال: ${article.title}`}
              >
                <span>اقرأ المقال</span>
                <ArrowLeft aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="articlesSubscribe">
        <div className="wrap">
          <PenLine aria-hidden="true" />
          <div>
            <span className="kicker">قريبًا</span>
            <h2>مقالات جديدة، وتجارب من العمل اليومي.</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
