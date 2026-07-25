"use client"

import { SERVICES } from '../app/data'

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Что я предлагаю</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F]">Услуги</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 border ${
                  s.featured
                    ? 'border-[#C1694F]/30 shadow-lg shadow-[#C1694F]/10'
                    : 'border-[#E8E0E6]'
                }`}
                style={{ backgroundColor: s.bg }}
              >
                {s.featured && (
                  <div className="mb-4">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-[#C1694F] px-3 py-1 rounded-full">
                      Самое популярное
                    </span>
                  </div>
                )}

                <div className="mb-4 text-[#C1694F]">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">{s.title}</h3>
                <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">{s.subtitle}</p>
                <p className="text-[#49454F] text-sm leading-relaxed flex-1">{s.description}</p>

                <div className="mt-8 flex items-center justify-between">
                  <p className="font-serif font-bold text-[#C1694F] text-lg">{s.price}</p>
                  <button type="button" className="px-5 py-2.5 bg-[#1C1B1F] text-white text-xs font-semibold rounded-full hover:bg-[#C1694F] transition-colors">
                    {s.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}