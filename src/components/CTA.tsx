import Link from "next/link";
import Animate from "./Animate";

export default function CTA() {
  return (
    <section id="contact" className="py-28 bg-[var(--ink)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full"
          style={{ background: "var(--gold)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-10 rounded-full"
          style={{ background: "var(--gold)", filter: "blur(80px)" }}
        />
        <div className="absolute top-8 right-16 w-px h-40 bg-[var(--gold)] opacity-20" />
        <div className="absolute top-8 right-20 w-px h-24 bg-[var(--gold)] opacity-10" />
      </div>

      <Animate className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="gold-line" />
          <span className="section-label text-[var(--gold)]">Починаємо</span>
          <span className="gold-line" style={{ marginLeft: 0 }} />
        </div>

        <h2 className="font-serif text-4xl lg:text-6xl text-white leading-tight mb-6">
          Готові захистити
          <br />
          <span className="text-[var(--gold)]">ваші інтереси?</span>
        </h2>

        <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-12">
          Зверніться до нас сьогодні для отримання безкоштовної первинної
          консультації від досвідчених юристів Meridian Law.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="tel:+380000000000"
            className="inline-flex items-center gap-3 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 text-[12px] tracking-widest uppercase font-semibold transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 10.81a19.79 19.79 0 01-3.07-8.64A2 2 0 011.91 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Зателефонувати
          </a>
          <a
            href="mailto:info@meridian-law.ua"
            className="inline-flex items-center gap-3 border border-white/30 hover:border-[var(--gold)] text-white hover:text-[var(--gold)] px-8 py-4 text-[12px] tracking-widest uppercase font-semibold transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Написати нам
          </a>
        </div>

        <div className="border-t border-white/10 pt-10 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📍", label: "Адреса", val: "м. Одеса, вул. Дерибасівська, 12" },
            { icon: "📞", label: "Телефон", val: "+38 (000) 000-00-00" },
            { icon: "✉️", label: "Email", val: "info@meridian-law.ua" },
          ].map((c) => (
            <div key={c.label}>
              <div className="text-[11px] uppercase tracking-widest text-[var(--gold)] mb-2">
                {c.label}
              </div>
              <div className="text-white/70 text-sm">{c.val}</div>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  );
}
