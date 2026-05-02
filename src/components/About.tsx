import Image from "next/image";
import Animate from "./Animate";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <Animate y={40}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=875&fit=crop&auto=format"
                alt="Про ELF"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-8 top-12 w-48 h-48 border-2 border-[var(--gold)] opacity-30 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 bg-[var(--cream-warm)] p-8 shadow-lg">
              <div className="font-serif text-4xl text-[var(--gold)] font-bold">2014</div>
              <div className="text-[11px] uppercase tracking-wider text-[var(--ink-mid)] mt-1">Рік заснування фірми</div>
            </div>
          </div>
        </Animate>

        <div>
          <Animate delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="section-label">Наша філософія</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)] leading-tight mb-6">
              Досвід, який<br />
              <span className="text-[var(--gold)]">дає результат</span>
            </h2>
            <p className="text-[var(--ink-mid)] leading-relaxed mb-6 text-base">
              Evolution Law Firm — це команда юристів, яка поєднує глибоку
              правову експертизу з індивідуальним підходом до кожного клієнта.
              Ми не просто захищаємо ваші інтереси — ми стаємо вашим надійним
              партнером у найскладніших правових ситуаціях.
            </p>
            <p className="text-[var(--ink-mid)] leading-relaxed mb-10 text-base">
              Наша практика побудована на принципах прозорості та глибокого
              аналізу. Ми пропонуємо не шаблонні рішення, а стратегію, яка
              враховує унікальність вашої ситуації.
            </p>
          </Animate>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: "10+", label: "Років на ринку" },
              { num: "95%", label: "Повторних клієнтів" },
              { num: "300+", label: "Виграних справ" },
              { num: "3", label: "Сфери практики" },
            ].map((s, i) => (
              <Animate key={s.label} delay={200 + i * 100}>
                <div className="p-5 border border-[var(--border)] hover:border-[var(--gold)] transition-colors group">
                  <div className="font-serif text-3xl text-[var(--gold)] font-bold group-hover:scale-105 transition-transform origin-left">
                    {s.num}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[var(--ink-light)] mt-2">
                    {s.label}
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
