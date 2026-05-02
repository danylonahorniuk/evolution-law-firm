"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Скільки коштує первинна консультація?",
    a: "Перша консультація в ELF є безкоштовною. Ми вислухаємо вашу ситуацію, дамо попередню оцінку і запропонуємо варіанти подальшої роботи з чіткими цінами — без прихованих платежів.",
  },
  {
    q: "Як швидко ви можете взятися за справу?",
    a: "У більшості випадків ми починаємо роботу протягом 1–2 робочих днів після підписання договору. У термінових ситуаціях (затримання, обшуки, арешт активів) реагуємо в день звернення.",
  },
  {
    q: "Чи працюєте ви з клієнтами з інших міст?",
    a: "Так, ми супроводжуємо клієнтів з усієї України. Первинна консультація та більшість питань вирішуються онлайн. За потреби наші юристи можуть виїхати до вас або представляти ваші інтереси у будь-якому суді країни.",
  },
  {
    q: "Які гарантії результату ви надаєте?",
    a: "Ми не обіцяємо стовідсоткового результату — будь-який юрист, хто це робить, вас вводить в оману. Натомість гарантуємо прозоре ведення справи, чесний прогноз та максимально можливий захист ваших інтересів.",
  },
  {
    q: "Як відбувається оплата за послуги?",
    a: "Залежно від типу справи ми пропонуємо фіксовану вартість, погодинну ставку або гонорар успіху. Умови фіксуються в договорі до початку роботи. Ніяких несподіваних рахунків у процесі.",
  },
  {
    q: "Чи можна перевести справу до вас від іншого юриста?",
    a: "Так. Ми регулярно приймаємо справи, де попередня робота велась іншим адвокатом. Спочатку проводимо незалежний аудит ситуації та чесно повідомляємо про перспективи — і лише тоді приймаємо рішення щодо подальшої роботи.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-[var(--cream)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-line" />
            <span className="section-label">FAQ</span>
            <span className="gold-line" style={{ marginLeft: 0 }} />
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
            Часті запитання
          </h2>
          <p className="text-[var(--ink-mid)] mt-4 text-base">
            Не знайшли відповідь? Зателефонуйте або напишіть — відповімо протягом години.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border transition-all duration-200 ${
                open === i ? "border-[var(--gold)]" : "border-[var(--border)]"
              } bg-white`}
            >
              <button
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`font-medium text-[15px] pr-6 transition-colors ${
                    open === i ? "text-[var(--gold)]" : "text-[var(--ink)] group-hover:text-[var(--gold)]"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "border-[var(--gold)] bg-[var(--gold)] text-white rotate-45"
                      : "border-[var(--border)] text-[var(--ink-light)]"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-6">
                  <div className="w-8 h-px bg-[var(--gold)] mb-4" />
                  <p className="text-[var(--ink-mid)] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 border border-[var(--gold)]/30 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-xl text-[var(--ink)] mb-1">
              Залишились питання?
            </div>
            <div className="text-sm text-[var(--ink-mid)]">
              Наші юристи готові відповісти прямо зараз
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-7 py-3.5 text-[12px] tracking-widest uppercase font-semibold transition-colors"
          >
            Написати нам
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
