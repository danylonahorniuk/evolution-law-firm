import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ink)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 overflow-hidden rounded-full ring-2 ring-[var(--gold)] ring-offset-2 ring-offset-[var(--ink)] flex-shrink-0">
                <Image src="/logo-meridian.webp" alt="Meridian Law" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--gold)]">
                  Meridian
                </div>
                <div className="text-[14px] tracking-[0.15em] uppercase font-bold text-white">
                  Law
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Реалізуй своє право — юридична фірма, якій довіряють понад 500
              клієнтів по всій Україні.
            </p>
            <div className="flex gap-3">
              {["Telegram", "LinkedIn", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[10px] tracking-widest uppercase text-white/30 hover:text-[var(--gold)] transition-colors border border-white/10 hover:border-[var(--gold)] px-3 py-2"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-widest uppercase text-[var(--gold)] mb-5">
              Розділи
            </div>
            <ul className="space-y-3">
              {[
                ["Послуги", "#services"],
                ["Про нас", "#about"],
                ["Команда", "#team"],
                ["Контакти", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/50 hover:text-[var(--gold)] text-sm transition-colors tracking-wide"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-widest uppercase text-[var(--gold)] mb-5">
              Правова інформація
            </div>
            <ul className="space-y-3">
              {[
                "Умови надання послуг",
                "Політика конфіденційності",
                "Legal Notice",
                "Careers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-[var(--gold)] text-sm transition-colors tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/25 text-[11px] tracking-wide uppercase">
            © {year} Meridian Law. Всі права захищені.
          </div>
          <div className="text-white/25 text-[11px] tracking-wide uppercase">
            Meridian Law · Legal Excellence
          </div>
        </div>
      </div>
    </footer>
  );
}
