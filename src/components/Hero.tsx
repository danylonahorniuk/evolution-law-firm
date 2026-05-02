import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-[var(--cream)]" />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5"
          style={{ background: "var(--gold)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        <div>
          <div className="hero-1 flex items-center gap-3 mb-8">
            <span className="gold-line" />
            <span className="section-label">Юридична фірма · Одеса</span>
          </div>

          <h1 className="hero-2 font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-[var(--ink)] mb-6">
            Реалізуй{" "}
            <span className="relative inline-block">
              <span className="text-[var(--gold)]">своє</span>
            </span>
            <br />
            право
            <br />
            <span className="text-[var(--ink-mid)] text-4xl lg:text-5xl xl:text-6xl">
              впевнено.
            </span>
          </h1>

          <p className="hero-3 text-[var(--ink-mid)] text-lg leading-relaxed max-w-md mb-10">
            ELF — команда юристів, яка захищає ваші інтереси з першої
            консультації до фінального рішення. Стратегічний підхід, чіткі
            результати.
          </p>

          <div className="hero-3 flex flex-wrap gap-4 mb-14">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white px-8 py-4 text-[12px] tracking-widest uppercase font-semibold transition-colors"
            >
              Записатись на прийом
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 border border-[var(--border)] text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)] px-8 py-4 text-[12px] tracking-widest uppercase font-semibold transition-all"
            >
              Наші послуги
            </Link>
          </div>

          <div className="hero-4 flex gap-10 pt-8 border-t border-[var(--border)]">
            {[
              { num: "10+", label: "Років досвіду" },
              { num: "300+", label: "Виграних справ" },
              { num: "98%", label: "Задоволених клієнтів" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl text-[var(--gold)] font-bold">
                  {s.num}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-[var(--ink-light)] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-img relative hidden lg:block">
          <div className="relative aspect-[4/5] w-full max-w-lg ml-auto overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=1000&fit=crop&auto=format"
              alt="Юридична фірма"
              fill
              sizes="(max-width: 1024px) 0px, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/20 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 border-l-4 border-[var(--gold)] max-w-[220px]">
            <div className="font-serif text-2xl text-[var(--gold)] font-bold mb-1">
              №1
            </div>
            <div className="text-[11px] text-[var(--ink-mid)] uppercase tracking-wider leading-relaxed">
              Надійний партнер у вирішенні правових питань
            </div>
          </div>

          <div className="absolute top-8 -left-4 bg-[var(--gold)] text-white p-4 text-center">
            <div className="font-serif text-xl font-bold">ELF</div>
            <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5">
              Since 2014
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
