import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "دورات التجربة الرقمية | تعلّم المهارة واصنع بها أثرًا وفرصة مهنية",
  description:
    "دورات تدريبية مركزة في إدارة المنتجات الرقمية، تصميم تجربة المستخدم، كتابة المحتوى، وتطوير التطبيقات بالذكاء الاصطناعي مع مشاريع عملية وبناء ملف أعمال حقيقي.",
  icons: { icon: "/dx-icon.svg", shortcut: "/dx-icon.svg" },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ar" dir="rtl" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>}
