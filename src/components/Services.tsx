import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 12h12M10 16h12M10 20h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Корпоративне право",
    desc: "Комплексний юридичний супровід бізнесу: від реєстрації до структурування складних корпоративних угод та M&A.",
    items: ["Реєстрація та ліквідація", "Корпоративні договори", "M&A угоди"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L4 10v6c0 7 5.5 11.5 12 14 6.5-2.5 12-7 12-14v-6L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Судові спори",
    desc: "Ефективне представлення інтересів у господарських, цивільних та адміністративних судах всіх інстанцій.",
    items: ["Господарські спори", "Цивільне судочинство", "Апеляції"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 7l2 2M22 7l-2 2M10 25l2-2M22 25l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Податкове право",
    desc: "Податкове планування, консультації та захист при перевірках. Мінімізуємо ризики та оптимізуємо навантаження.",
    items: ["Податкове планування", "Захист при перевірках", "ТЦУ документація"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="section-label">Напрями</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
              Що ми робимо
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-[12px] tracking-widest uppercase font-semibold text-[var(--gold)] hover:text-[var(--gold-dark)] flex items-center gap-2 transition-colors"
          >
            Всі послуги
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[var(--gold)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[var(--gold)] group-hover:w-full transition-all duration-500" />

              <div className="text-[var(--gold)] mb-6">{s.icon}</div>

              <h3 className="font-serif text-xl text-[var(--ink)] mb-4">
                {s.title}
              </h3>
              <p className="text-[var(--ink-mid)] text-sm leading-relaxed mb-6">
                {s.desc}
              </p>

              <ul className="space-y-2 mb-8">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[12px] text-[var(--ink-mid)] uppercase tracking-wide"
                  >
                    <span className="w-4 h-px bg-[var(--gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className="text-[11px] tracking-widest uppercase font-semibold text-[var(--gold)] flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Детальніше
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
