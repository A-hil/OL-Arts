"use client";

import Image from 'next/image';
import { useState } from 'react'
import { TIMELINE } from '../app/data'

export default function Timeline() {
  const [active, setActive] = useState(0)
  const item = TIMELINE[active]

  return (
    <section id="timeline" className="py-24 px-6 bg-[#1C1B1F]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Карьерный путь</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
            Три десятилетия практики
          </h2>
        </div>

        {/* Decade selector */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
          {TIMELINE.map((t, i) => (
            <button
              key={t.decade}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-[#C1694F] text-white shadow-lg shadow-[#C1694F]/30'
                  : 'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white'
              }`}
            >
              {t.decade}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div
          className="rounded-[24px] overflow-hidden grid md:grid-cols-[1fr_380px] min-h-[400px] transition-all duration-500"
          style={{ backgroundColor: item.color }}
        >
          <div className="p-10 md:p-14 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{ color: item.accent, opacity: 0.7 }}>
                {item.years}
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: item.accent }}>
                {item.era}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: item.accent, opacity: 0.85 }}>
                {item.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {item.highlights.map((h) => (
                <span
                  key={h}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                  style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}15` }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-black/10">
            <Image
              src={`https://images.unsplash.com/${item.image}?w=500&h=450&fit=crop&auto=format`}
              alt={item.era}
              fill
              className="object-cover opacity-70 transition-all duration-700"
              sizes="380px"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to right, ${item.color}80, transparent)` }}
            />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex gap-2 mt-6">
          {TIMELINE.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-[#C1694F]' : 'w-4 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}