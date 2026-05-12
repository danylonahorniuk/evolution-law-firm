"use client";

import { useState } from "react";
import Image from "next/image";
import Animate from "./Animate";

const reviews = [
  {
    name: "Андрій Василенко",
    role: "Власник бізнесу",
    text: "Meridian Law супроводжували нашу компанію під час складного злиття з іноземним партнером. Команда відпрацювала бездоганно — чітко, швидко, без жодних сюрпризів. Результат перевершив очікування.",
    rating: 5,
    tag: "Корпоративне право",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    name: "Олена Романенко",
    role: "Приватний клієнт",
    text: "Зверталась у справі трудового спору з колишнім роботодавцем. Навіть не вірила, що можна виграти — але юристи Meridian Law довели протилежне. Дуже вдячна за підтримку та професіоналізм.",
    rating: 5,
    tag: "Судові спори",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    name: "Микола Коваль",
    role: "Фінансовий директор, ТОВ «Альфа»",
    text: "Допомогли оптимізувати податкове навантаження та правильно оформити документацію для ТЦУ. Взаємодіяти з командою — суцільне задоволення: завжди на зв'язку, пояснюють людською мовою.",
    rating: 5,
    tag: "Податкове право",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format",
  },
  {
    name: "Тетяна Шевченко",
    role: "ФОП, IT-сфера",
    text: "Шукала юриста для оформлення договорів з іноземними клієнтами. Meridian Law зробили все швидко та якісно, ще й попередили про можливі ризики, про які я навіть не думала. Рекомендую!",
    rating: 5,
    tag: "Корпоративне право",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="reviews" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Animate className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="section-label">Відгуки</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
              Що кажуть
              <br />
              <span className="text-[var(--gold)]">наші клієнти</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-serif text-3xl text-[var(--gold)] font-bold">5.0</div>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-[var(--ink-light)] mt-1">Середній рейтинг</div>
            </div>
            <div className="w-px h-12 bg-[var(--border)]" />
            <div className="text-center">
              <div className="font-serif text-3xl text-[var(--gold)] font-bold">98%</div>
              <div className="text-[10px] uppercase tracking-wider text-[var(--ink-light)] mt-1">Рекомендують нас</div>
            </div>
          </div>
        </Animate>

        <div className="grid lg:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <Animate key={i} delay={i * 120}>
            <div
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`p-8 cursor-pointer transition-all duration-200 border ${
                active === i
                  ? "border-[var(--gold)] bg-[var(--cream-warm)] shadow-sm"
                  : "border-[var(--border)] bg-white"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] tracking-widest uppercase text-[var(--gold)] border border-[var(--gold)]/30 px-2 py-1">
                  {r.tag}
                </span>
              </div>

              <svg
                className="text-[var(--gold)] opacity-30 mb-4"
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="currentColor"
              >
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.667 3.6 8 6.267 8 10.4V12h6.4V24H0zm17.6 0V14.4C17.6 6.4 22.4 1.6 32 0l1.6 2.4C28.267 3.6 25.6 6.267 25.6 10.4V12H32V24H17.6z"/>
              </svg>

              <p className="text-[var(--ink-mid)] text-sm leading-relaxed mb-6 italic">
                {r.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[var(--gold)]/30 flex-shrink-0">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-[var(--ink)] text-sm">{r.name}</div>
                  <div className="text-[11px] uppercase tracking-wider text-[var(--ink-light)] mt-0.5">{r.role}</div>
                </div>
              </div>
            </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}
