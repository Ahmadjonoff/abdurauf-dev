"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import { useLocale } from "@/lib/LocaleProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

const SECTION_IDS = ["about", "services", "projects", "blog", "contact"];

const navIcons: Record<string, string> = {
  about: "M4 12l8-7 8 7M6 10v9h12v-9",
  services: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 8v10M21 8v10",
  projects: "M3 7h6l2 2h10v10H3z",
  blog: "M4 5h16v11H8l-4 4V5Z",
  contact: "M3 6h18v12H3z M3 7l9 6 9-6",
};

export function Topbar() {
  const { t } = useLocale();
  const pathname = usePathname();
  const navItems = [
    { id: "about", href: "/#about", label: t.nav.about },
    { id: "services", href: "/#services", label: t.nav.services },
    { id: "projects", href: "/projects", label: t.nav.projects },
    { id: "blog", href: "/blog", label: t.nav.blog },
    { id: "contact", href: "/#contact", label: t.nav.contact },
  ];
  const sectionActive = useActiveSection(SECTION_IDS);
  const active = pathname.startsWith("/blog")
    ? "blog"
    : pathname.startsWith("/projects")
      ? "projects"
      : sectionActive;
  const [isDesktop, setIsDesktop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setIsDesktop(mq.matches);
      if (mq.matches) setMenuOpen(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-4 z-40 px-4 sm:top-6 sm:px-6"
    >
      <div className="card mx-auto max-w-[1080px] rounded-[1.75rem] px-3 py-2 sm:px-4 lg:rounded-full">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/#about" data-hover className="flex flex-none items-center gap-2 rounded-full px-1.5 py-1">
            <svg viewBox="0 0 56 56" className="h-7 w-7">
              <rect x="1" y="1" width="54" height="54" rx="14" fill="none" stroke="var(--border)" />
              <path
                d="M14 40 L14 24 L22 16 L28 24 L34 14 L42 24 L42 40"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <circle cx="42" cy="24" r="2.6" fill="var(--accent)" />
            </svg>
            <span className="font-display hidden text-sm font-medium sm:block">
              {profile.firstName} <span className="text-gradient">{profile.lastName}</span>
            </span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
            aria-label="Section navigation"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-hover
                  className={`relative flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-sm transition-colors ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"
                  }`}
                >
                  {isActive && isDesktop && (
                    <motion.span
                      layoutId="topbar-active"
                      className="absolute inset-0 rounded-full bg-[var(--surface-2)]"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  <svg viewBox="0 0 24 24" className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.7}>
                    <path d={navIcons[item.id]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-1 lg:hidden" />

          <div className="flex flex-none items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              data-hover
              href="/#contact-form"
              className="font-medium hidden items-center gap-1.5 rounded-full bg-[var(--text)] px-4 py-2 text-sm text-[var(--bg)] transition-transform hover:scale-[1.03] lg:inline-flex"
            >
              {t.hero.ctaPrimary}
            </Link>
            <button
              type="button"
              data-hover
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav-panel"
              aria-label="Section navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 border-t border-[var(--border)] pt-2 pb-1">
                {navItems.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-hover
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-[var(--surface-2)] text-[var(--accent)]"
                          : "text-[var(--text-dim)] hover:text-[var(--text)]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 flex-none" fill="none" stroke="currentColor" strokeWidth={1.7}>
                        <path d={navIcons[item.id]} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  data-hover
                  href="/#contact-form"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium mt-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm text-[var(--bg)]"
                >
                  {t.hero.ctaPrimary}
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
