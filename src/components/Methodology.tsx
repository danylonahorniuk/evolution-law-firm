import Animate from "./Animate";

const steps = [
  {
    num: "01",
    title: "Перша зустріч",
    desc: "Проводимо детальний аналіз вашої ситуації, визначаємо цілі та найбільш ефективний шлях досягнення результату. Без зайвих слів — тільки суть.",
    tag: "Діагностика",
  },
  {
    num: "02",
    title: "Розробка стратегії",
    desc: "Формуємо індивідуальну правову стратегію з конкретним планом дій, чіткими строками та прозорим ціноутворенням. Ви знаєте кожен крок наперед.",
    tag: "Планування",
  },
  {
    num: "03",
    title: "Виконання та результат",
    desc: "Реалізуємо стратегію і тримаємо вас в курсі кожного кроку — ви завжди знаєте, що відбувається у вашій справі. Фінальний результат — наша відповідальність.",
    tag: "Дія",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="py-28 bg-[var(--cream-warm)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Animate className="mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="section-label">Методологія</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
            Від консультації —<br />
            <span className="text-[var(--gold)]">до результату</span>
          </h2>
        </Animate>

        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-20 hidden lg:block" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <Animate key={i} delay={i * 150}>
                <div className={`relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16 py-14 lg:py-16 border-b border-[var(--border)] group`}>

                  {/* Gold dot on vertical line */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block" />

                  {/* Left: tag + title */}
                  <div className="lg:w-2/5 lg:pl-10">
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold mb-4 flex items-center gap-2">
                      <span className="w-4 h-px bg-[var(--gold)]" />
                      {step.tag}
                    </div>
                    <h3 className="font-serif text-3xl lg:text-4xl text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors duration-300 leading-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Right: description */}
                  <div className="lg:w-3/5 lg:pl-8 border-l border-[var(--border)] group-hover:border-[var(--gold)] transition-colors duration-300">
                    <p className="text-[var(--ink-mid)] text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Giant background number */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 font-serif font-bold text-[120px] lg:text-[160px] leading-none select-none pointer-events-none transition-opacity duration-300"
                    style={{ color: "var(--gold)", opacity: 0.04 }}
                  >
                    {step.num}
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
