"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Послуги", href: "#services" },
  { label: "Процес", href: "#methodology" },
  { label: "Команда", href: "#team" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contact" },
];

// Всі DOM-секції що треба відстежувати → яка навб-ссилка активна
const sectionMap: { id: string; nav: string }[] = [
  { id: "about",       nav: "services" },   // "Наша філософія" → Послуги
  { id: "services",    nav: "services" },
  { id: "methodology", nav: "methodology" },
  { id: "team",        nav: "team" },
  { id: "reviews",     nav: "reviews" },
  { id: "faq",         nav: "faq" },
  { id: "contact",     nav: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      // У зоні Hero — нічого не активно
      if (y < window.innerHeight * 0.45) {
        setActiveSection("");
        return;
      }

      // Остання секція, верхній край якої вище середини екрану
      const mid = y + window.innerHeight / 2;
      let current = "";
      for (const { id, nav } of sectionMap) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = nav;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <Image
              src="/logo-circle.webp"
              alt="ELF Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[var(--gold)]">
              Evolution
            </div>
            <div className="text-[13px] tracking-[0.12em] uppercase font-bold text-[var(--ink)]">
              Law Firm
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[13px] tracking-wide font-medium uppercase transition-colors pb-0.5 ${
                  isActive
                    ? "text-[var(--gold)]"
                    : "text-[var(--ink-mid)] hover:text-[var(--gold)]"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all duration-200 px-5 py-2.5 text-[12px] tracking-widest uppercase font-semibold"
        >
          Консультація
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-[var(--ink)] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-[var(--ink)] transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-[var(--ink)] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[14px] tracking-wide uppercase font-medium py-2 border-b border-[var(--border)] transition-colors ${
                  isActive ? "text-[var(--gold)]" : "text-[var(--ink)]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center border border-[var(--gold)] text-[var(--gold)] py-3 text-[12px] tracking-widest uppercase font-semibold"
          >
            Консультація
          </Link>
        </div>
      )}
    </header>
  );
}
