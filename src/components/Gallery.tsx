"use client";

import Image from 'next/image';
import { CATEGORIES, type Status } from '../data/artwork-content'
import { useEffect, useState } from 'react'
import StatusPill from './StatusPill'
import { getImageSrc } from '../lib/imageSrc'

type GalleryItem = {
  id: number
  title: string
  category: string
  price: string
  status: Status
  image: string
  year: number
  tall: boolean
}

type GalleryApiItem = {
  id: number
  title: string
  category: string
  price: number
  status: string[] | null
  image: string
  year: number
  is_tall: boolean
}

function isStatus(value: string | undefined): value is Status {
  return value === 'В наличии' || value === 'Продано' || value === 'Зарезервировано'
}

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [activeFilter, setActiveFilter] = useState('Все')
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadGallery() {
      try {
        const response = await fetch('/api/data/GET', { signal: controller.signal })
        if (!response.ok) throw new Error(`Не удалось загрузить каталог (${response.status})`)

        const result: { galereia?: GalleryApiItem[] | null } = await response.json()
        if (!Array.isArray(result.galereia)) throw new Error('Сервер вернул некорректный список работ')

        setItems(
          result.galereia.map((item) => {
            const status = item.status?.[0]
            return {
              id: item.id,
              title: item.title,
              category: item.category,
              price: `${item.price} руб.`,
              status: isStatus(status) ? status : 'В наличии',
              image: item.image,
              year: item.year,
              tall: item.is_tall,
            }
          })
        )
      } catch (error) {
        if (controller.signal.aborted) return
        console.error('Не удалось загрузить каталог:', error)
        setLoadError(error instanceof Error ? error.message : 'Не удалось загрузить каталог')
      }
    }

    loadGallery()
    return () => controller.abort()
  }, [])

  const filterCategories = ['Все', ...new Set([...CATEGORIES, ...items.map((item) => item.category)])]

  const filtered = activeFilter === 'Все'
    ? items
    : items.filter((g) => g.category === activeFilter)

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
            {filterCategories.map((cat) => (
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
          {loadError && <p role="alert" className="text-sm text-red-700">{loadError}</p>}
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid bg-white rounded-[16px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`relative overflow-hidden bg-[#E8D5CC] ${item.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                {item.image && (
                  <Image
                    src={getImageSrc(item.image, 400, item.tall ? 533 : 300)}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                )}
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

                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-20 w-full items-center justify-end">
          <button
            type="button"
            className="rounded-full bg-[#C1694F] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#A9543D]"
          >
            Узнать больше →
          </button>
        </div>
      </div>

    </section>
  )
}