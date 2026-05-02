const steps = [
  {
    num: "01",
    title: "Перша зустріч",
    desc: "Проводимо детальний аналіз вашої ситуації, визначаємо цілі та найбільш ефективний шлях досягнення результату.",
  },
  {
    num: "02",
    title: "Розробка стратегії",
    desc: "Формуємо індивідуальну правову стратегію з конкретним планом дій, чіткими строками та прозорим ціноутворенням.",
  },
  {
    num: "03",
    title: "Виконання та комунікація",
    desc: "Реалізуємо стратегію і тримаємо вас в курсі кожного кроку — ви завжди знаєте, що відбувається у вашій справі.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-28 bg-[var(--cream-warm)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="section-label">Методологія</span>
            <span className="gold-line" style={{ marginLeft: 0 }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
            Від консультації —<br />
            <span className="text-[var(--gold)]">до результату</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[16.666%] right-[16.666%] h-px bg-[var(--border)]" />

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center lg:text-left">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 border border-[var(--gold)] flex items-center justify-center mx-auto lg:mx-0 bg-white">
                    <span className="font-serif text-2xl text-[var(--gold)] font-bold">
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl text-[var(--ink)] mb-4">
                  {step.title}
                </h3>
                <p className="text-[var(--ink-mid)] text-sm leading-relaxed">
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-[var(--gold)] opacity-30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
