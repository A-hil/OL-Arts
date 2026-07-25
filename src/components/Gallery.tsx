"use client";

import Image from 'next/image';
import { useState } from 'react'
import { CATEGORIES, GALLERY } from '../app/data'
import StatusPill from './StatusPill'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<(typeof CATEGORIES)[number]>('Все')

  const filtered = activeFilter === 'Все'
    ? GALLERY
    : GALLERY.filter((g) => g.category === activeFilter)

  return (
    <section id="work" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Портфолио</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F]">Избранные работы</h2>
          </div>

          {/* Pill filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-[#C1694F] text-white shadow-md'
                    : 'bg-white text-[#49454F] border border-[#E8E0E6] hover:border-[#C1694F] hover:text-[#C1694F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white rounded-[16px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div
                className="relative overflow-hidden bg-[#E8D5CC]"
                style={{ aspectRatio: item.tall ? '3/4' : '4/3' }}
              >
                <Image
                  src={`https://images.unsplash.com/${item.image}?w=400&h=${item.tall ? 533 : 300}&fit=crop&auto=format`}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-semibold text-[#1C1B1F] text-sm">{item.title}</p>
                    <p className="text-[#79747E] text-[11px] mt-0.5">{item.category} · {item.year}</p>
                  </div>
                  <StatusPill status={item.status} />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <p className="font-serif font-bold text-[#C1694F] text-base">{item.price}</p>
                  <button type="button" className="text-xs text-[#49454F] font-medium hover:text-[#C1694F] transition-colors">
                    Узнать больше →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}