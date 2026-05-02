import Image from "next/image";

const team = [
  {
    name: "Олексій Петренко",
    role: "Керуючий партнер",
    area: "Корпоративне право",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=500&fit=crop&crop=face&auto=format",
    exp: "12 років досвіду",
  },
  {
    name: "Марія Ковальчук",
    role: "Партнер",
    area: "Судові спори",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face&auto=format",
    exp: "9 років досвіду",
  },
  {
    name: "Сергій Іваненко",
    role: "Радник",
    area: "Податкове право",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face&auto=format",
    exp: "7 років досвіду",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" />
              <span className="section-label">Експерти</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--ink)]">
              Люди, які знають право
            </h2>
          </div>
          <p className="text-[var(--ink-mid)] max-w-sm text-sm leading-relaxed">
            Наша команда — практикуючі юристи з глибокою спеціалізацією та
            доведеними результатами.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] overflow-hidden mb-5">
                {/* Фото — завжди кольорове */}
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Постійний темний градієнт знизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-[var(--ink)]/10 to-transparent" />

                {/* Золотий overlay зверху, зникає при hover */}
                <div className="absolute inset-0 bg-[var(--gold)]/10 opacity-100 group-hover:opacity-0 transition-opacity duration-400" />

                {/* Інфо-панель — завжди видна знизу */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] tracking-widest uppercase text-[var(--gold)] font-semibold mb-2">
                    {member.exp}
                  </div>

                  {/* Ім'я та роль — виїжджають знизу при hover */}
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="w-6 h-px bg-[var(--gold)] mb-3" />
                    <div className="text-white font-serif text-lg leading-tight">
                      {member.name}
                    </div>
                    <div className="text-white/60 text-[11px] uppercase tracking-wider mt-1">
                      {member.role}
                    </div>
                  </div>
                </div>

                {/* Золота рамка-бордер при hover */}
                <div className="absolute inset-0 border-2 border-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
              </div>

              <div>
                <h3 className="font-serif text-xl text-[var(--ink)] mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[var(--gold)] font-semibold uppercase tracking-wide">
                    {member.role}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                  <span className="text-[12px] text-[var(--ink-light)] uppercase tracking-wide">
                    {member.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
