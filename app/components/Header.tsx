"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowDownLeft, Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="nav wrap" id="top">
      {/* Brand Logo */}
      <Link
        href="/"
        className="textLogo"
        aria-label="دورات التجربة الرقمية - الصفحة الرئيسية"
        onClick={handleLinkClick}
      >
        <img src="/dx-icon.svg" alt="" aria-hidden="true" />
        التجربة <span>الرقمية.</span>
      </Link>

      {/* Main Desktop & Drawer Navigation - Independent Pages Only */}
      <nav
        id="main-navigation"
        className={menuOpen ? "links open" : "links"}
        aria-label="التنقل الرئيسي"
      >
        <Link
          href="/"
          onClick={handleLinkClick}
          className={`navItemLink ${pathname === "/" ? "activeNavLink" : ""}`}
        >
          الرئيسية
        </Link>

        <Link
          href="/skills"
          onClick={handleLinkClick}
          className={`navItemLink ${pathname.startsWith("/skills") ? "activeNavLink" : ""}`}
        >
          أدوات الذكاء الاصطناعي
        </Link>

        <Link
          href="/articles"
          onClick={handleLinkClick}
          className={`navItemLink ${pathname.startsWith("/articles") ? "activeNavLink" : ""}`}
        >
          المقالات
        </Link>

        {/* Mobile-only CTA in drawer */}
        <div className="mobileDrawerCta">
          <Link
            className="navCta"
            href={isHome ? "#contact" : "/#contact"}
            onClick={handleLinkClick}
          >
            <span>تواصل معنا</span>
            <ArrowDownLeft aria-hidden="true" />
          </Link>
        </div>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        ref={menuRef}
        type="button"
        className="menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      {/* Desktop Header Action Button */}
      <Link
        className="navCta desktopOnlyCta"
        href={isHome ? "#contact" : "/#contact"}
      >
        <span>تواصل معنا</span>
        <ArrowDownLeft aria-hidden="true" />
      </Link>
    </header>
  );
}
