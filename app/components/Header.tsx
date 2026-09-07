"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowDownLeft, ArrowRight, Menu, X } from "lucide-react";

export interface HeaderProps {
  onOpenAbout?: () => void;
}

export function Header({ onOpenAbout }: HeaderProps) {
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

  const handleAboutClick = () => {
    setMenuOpen(false);
    if (onOpenAbout) {
      onOpenAbout();
    }
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

      {/* Main Desktop & Drawer Navigation */}
      <nav
        id="main-navigation"
        className={menuOpen ? "links open" : "links"}
        aria-label="التنقل الرئيسي"
      >
        <Link
          href={isHome ? "#courses" : "/#courses"}
          onClick={handleLinkClick}
          className="navItemLink"
        >
          الدورات
        </Link>

        <Link
          href={isHome ? "#method" : "/#method"}
          onClick={handleLinkClick}
          className="navItemLink"
        >
          رحلة التعلّم
        </Link>

        <Link
          href="/skills"
          onClick={handleLinkClick}
          className={`navItemLink ${pathname.startsWith("/skills") ? "activeNavLink" : ""}`}
        >
          مهارات النماذج
        </Link>

        <Link
          href="/articles"
          onClick={handleLinkClick}
          className={`navItemLink ${pathname.startsWith("/articles") ? "activeNavLink" : ""}`}
        >
          المقالات
        </Link>

        {isHome && onOpenAbout ? (
          <button
            type="button"
            className="navAbout navItemLink"
            onClick={handleAboutClick}
            aria-haspopup="dialog"
            aria-controls="about-dialog"
          >
            نبذة عني
          </button>
        ) : (
          <Link
            href="/#about"
            onClick={handleLinkClick}
            className="navItemLink"
          >
            نبذة عني
          </Link>
        )}

        <Link
          href={isHome ? "#contact" : "/#contact"}
          onClick={handleLinkClick}
          className="navItemLink"
        >
          اختر مسارك
        </Link>

        {/* Mobile-only CTA in drawer */}
        <div className="mobileDrawerCta">
          {isHome ? (
            <a
              className="navCta"
              href="#courses"
              onClick={handleLinkClick}
            >
              <span>استكشف الدورات</span>
              <ArrowDownLeft aria-hidden="true" />
            </a>
          ) : (
            <Link
              className="navCta catalogBackCta"
              href="/"
              onClick={handleLinkClick}
            >
              <ArrowRight aria-hidden="true" />
              <span>العودة للرئيسية</span>
            </Link>
          )}
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
      {isHome ? (
        <a className="navCta desktopOnlyCta" href="#courses">
          <span>استكشف الدورات</span>
          <ArrowDownLeft aria-hidden="true" />
        </a>
      ) : (
        <Link className="navCta catalogBackCta desktopOnlyCta" href="/">
          <ArrowRight aria-hidden="true" />
          <span>العودة للموقع</span>
        </Link>
      )}
    </header>
  );
}
