import Link from "next/link";
import { ArrowLeft, Clock3 } from "lucide-react";
import { articlesList } from "../data/articles-data";
import { Breadcrumb } from "../components/Breadcrumb";
import { Header } from "../components/Header";

export const metadata = {
  title: "المقالات · التجربة الرقمية",
  description:
    "مقالات عملية ورؤى في تصميم تجربة المستخدم، إدارة المنتجات، والذكاء الاصطناعي.",
};

export default function ArticlesPage() {
  return (
    <>
      <Header />

      <main className="articlesPage">
        <div className="wrap">
          <header className="pageCompactHeader">
            <Breadcrumb
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "المقالات" },
              ]}
            />
            <span className="kicker">معرفة وتجارب</span>
            <h1>المقالات</h1>
            <p>
              كتابات وأفكار عملية حول منهجيات تجربة المستخدم، بناء المنتجات،
              وتسخير أدوات الذكاء الاصطناعي في بيئات العمل.
            </p>
          </header>

          <section className="articleGrid">
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
