const stats = [
  { num: "850+", label: "Виграних справ" },
  { num: "10+", label: "Років досвіду" },
  { num: "500+", label: "Задоволених клієнтів" },
  { num: "95%", label: "Успіх-рейт" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="gold-line" />
            <span className="section-label">Цифри</span>
            <span
              className="gold-line"
              style={{ marginRight: 0, marginLeft: 0 }}
            />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
            Результати, що говорять
            <br />
            <span className="text-[var(--gold)]">самі за себе</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white px-8 py-12 text-center group hover:bg-[var(--cream-warm)] transition-colors"
            >
              <div className="font-serif text-5xl lg:text-6xl font-bold text-[var(--gold)] mb-3 group-hover:scale-110 transition-transform origin-center inline-block">
                {s.num}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--ink-light)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
