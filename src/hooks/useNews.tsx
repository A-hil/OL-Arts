import { useEffect, useState } from 'react'
import type { GalleryItem, Status } from '../types/gallery'

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

export function useGallery() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [activeFilter, setActiveFilter] = useState('Все')
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadGallery() {
      try {
        const response = await fetch('/api/data/GET', { signal: controller.signal })
        if (!response.ok) throw new Error(`Не удалось загрузить каталог (${response.status})`)
        const result: { galereia: GalleryApiItem[] } = await response.json()

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
              is_tall: item.is_tall,
            }
          })
        );

      } catch (error) {
        if (controller.signal.aborted) return
        console.error('Не удалось загрузить каталог:', error)
        setLoadError(error instanceof Error ? error.message : 'Не удалось загрузить каталог')
      }
    }

    loadGallery()
    return () => controller.abort()
  }, [])

  return { items, setItems, activeFilter, setActiveFilter, loadError }
}