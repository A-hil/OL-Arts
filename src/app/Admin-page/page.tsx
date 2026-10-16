'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { ArrowUpRight, Image as ImageIcon, Pencil, Plus, Search, Trash2, X } from 'lucide-react'
import { GALLERY } from '../../data/artwork-content'

const CATEGORIES = ['Все', 'Керамика', 'Народные сосуды', 'Серия STALKER', 'Живопись', 'Гравюры'] as const;

type Artwork = {
  id: number
  title: string
  category: string
  price: string
  status: string
  image: string
  year: number
  tall?: boolean
}

type ArtworkForm = Omit<Artwork, 'id' | 'tall'>

const STORAGE_KEY = 'ol-arts-admin-gallery'
const STATUSES = ['В наличии', 'Продано', 'Зарезервировано'] as const
const EMPTY_FORM: ArtworkForm = {
  title: '',
  category: 'Керамика',
  price: '',
  status: 'В наличии',
  image: '',
  year: 2026,
}

function statusStyle(status: string) {
  if (status === 'В наличии') return 'bg-emerald-50 text-emerald-800'
  if (status === 'Продано') return 'bg-stone-100 text-stone-600'
  return 'bg-amber-50 text-amber-800'
}

export default function AdminPage() {
  const [items, setItems] = useState<Artwork[]>(() => GALLERY.map((item) => ({ ...item })))
  const [storageReady, setStorageReady] = useState(false)
  const [query, setQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('Все')
  const [statusFilter, setStatusFilter] = useState('Все статусы')
  const [form, setForm] = useState<ArtworkForm>(EMPTY_FORM)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const data = {};


  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#242522]">
      <header className="border-b border-[#e7e7e2] bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="На главную">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#a65c46] font-serif text-sm font-bold text-white">N</span>
            <span className="text-sm font-semibold tracking-wide">OL ARTS <span className="ml-2 font-normal text-[#92938d]">/ Администрирование</span></span>
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#62635d] transition-colors hover:text-[#a65c46]">
            Открыть сайт <ArrowUpRight size={15} strokeWidth={1.8} />
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-[#8b6b5e]">Каталог</p>
            <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Работы галереи</h1>
            <p className="mt-2 text-sm text-[#777871]">Управление произведениями и их статусом</p>
          </div>
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#292a26] px-4 text-sm font-medium text-white transition-colors hover:bg-[#44453f]">
            <Plus size={16} /> Добавить работу
          </button>
        </div>

        <section aria-label="Сводка каталога" className="mt-8 grid grid-cols-2 border-y border-[#e3e3dd] bg-white sm:grid-cols-3">
          <div className="border-r border-[#e3e3dd] px-5 py-4 sm:px-6">
            <p className="text-xs text-[#85867f]">Всего работ</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{items.length}</p>
          </div>
          <div className="px-5 py-4 sm:border-r sm:border-[#e3e3dd] sm:px-6">
            <p className="text-xs text-[#85867f]">В наличии</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">
              {/* 
              Внести логику счетчика передаваемого обьекта и его элементов
              */}
            </p>
          </div>
          <div className="col-span-2 hidden px-6 py-4 sm:col-span-1 sm:block">
            <p className="text-xs text-[#85867f]">Последние изменение</p>
            <p className="mt-2 text-sm font-medium">...</p>
          </div>
        </section>

        <section className="mt-8" aria-label="Список работ">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-sm font-semibold">Каталог <span className="ml-1 font-normal text-[#85867f]"></span></h2>
            <div className="flex flex-col gap-2 sm:flex-row">
              <label className="relative block sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#969790]" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по каталогу" className="h-10 w-full rounded-md border border-[#dfdfd9] bg-white pl-9 pr-3 text-sm outline-none transition focus:border-[#a65c46]" />
              </label>
              <select aria-label="Фильтр по категории" value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)} className="h-10 rounded-md border border-[#dfdfd9] bg-white px-3 text-sm text-[#4f504a] outline-none focus:border-[#a65c46]">
                {CATEGORIES.map((category) => <option key={category}>{category}</option>)}
              </select>
              <select aria-label="Фильтр по статусу" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-10 rounded-md border border-[#dfdfd9] bg-white px-3 text-sm text-[#4f504a] outline-none focus:border-[#a65c46]">
                <option>Все статусы</option>
                {STATUSES.map((status) => <option key={status}>{status}</option>)}
              </select>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-[#e3e3dd] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-190 border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#e9e9e4] bg-[#fbfbfa] text-[11px] font-medium uppercase tracking-[0.08em] text-[#898a83]">
                    <th className="px-5 py-3">Работа</th>
                    <th className="px-4 py-3">Категория</th>
                    <th className="px-4 py-3">Год</th>
                    <th className="px-4 py-3">Цена</th>
                    <th className="px-4 py-3">Статус</th>
                    <th className="px-5 py-3 text-right">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b border-[#efefeb] last:border-0 hover:bg-[#fdfdfc]">
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#f1eeea] text-[#a79b91]"><ImageIcon size={18} strokeWidth={1.5} /></div>
                          <span className="text-sm font-medium">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-[#62635d]">{item.category}</td>
                      <td className="px-4 py-3 text-sm tabular-nums text-[#62635d]">{item.year}</td>
                      <td className="px-4 py-3 text-sm font-medium tabular-nums">{item.price}</td>
                      <td className="px-4 py-3"><span className={`inline-flex rounded px-2 py-1 text-xs ${statusStyle(item.status)}`}>{item.status}</span></td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => openEditArtwork(item)} aria-label={`Редактировать: ${item.title}`} title="Редактировать" className="rounded p-2 text-[#73746e] hover:bg-[#f0efeb] hover:text-[#242522]"><Pencil size={15} /></button>
                          <button onClick={() => deleteArtwork(item.id)} aria-label={`Удалить: ${item.title}`} title="Удалить" className="rounded p-2 text-[#92938d] hover:bg-red-50 hover:text-red-700"><Trash2 size={15} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredItems.length === 0 && (
                    <tr><td colSpan={6} className="px-5 py-14 text-center text-sm text-[#85867f]">Ничего не найдено</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/35 p-4" onMouseDown={(event) => { if (event.target === event.currentTarget) setDialogOpen(false) }}>
          
          <section role="dialog" aria-modal="true" aria-labelledby="artwork-dialog-title" className="my-auto w-full max-w-lg rounded-lg border border-[#e5e5df] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#ecece7] px-6 py-4">
              <h2 id="artwork-dialog-title" className="font-serif text-xl font-semibold">{editingId === null ? 'Новая работа' : 'Редактировать работу'}</h2>
              <button onClick={() => setDialogOpen(false)} aria-label="Закрыть" className="rounded p-2 text-[#777871] hover:bg-[#f4f4f1]"><X size={18} /></button>
            </div>
            <form onSubmit={saveArtwork} className="space-y-4 px-6 py-5">
              <label className="block text-xs font-medium text-[#65665f]">Название
                <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-xs font-medium text-[#65665f]">Категория
                  <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] bg-white px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]">
                    {CATEGORIES.filter((category) => category !== 'Все').map((category) => <option key={category}>{category}</option>)}
                  </select>
                </label>
                <label className="block text-xs font-medium text-[#65665f]">Статус
                  <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })} className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] bg-white px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]">
                    {STATUSES.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-xs font-medium text-[#65665f]">Цена
                  <input required value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} placeholder="€680" className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]" />
                </label>
                <label className="block text-xs font-medium text-[#65665f]">Год
                  <input required type="number" min="1000" max="9999" value={form.year} onChange={(event) => setForm({ ...form, year: Number(event.target.value) })} className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]" />
                </label>
              </div>
              <label className="block text-xs font-medium text-[#65665f]">Изображение: URL или Unsplash ID
                <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="https://… или photo-…" className="mt-1.5 h-10 w-full rounded-md border border-[#dfdfd9] px-3 text-sm text-[#242522] outline-none focus:border-[#a65c46]" />
              </label>
              <div className="flex justify-end gap-2 border-t border-[#ecece7] pt-4">
                <button type="button" onClick={() => setDialogOpen(false)} className="h-10 rounded-md px-4 text-sm text-[#62635d] hover:bg-[#f4f4f1]">Отмена</button>
                <button type="submit" className="h-10 rounded-md bg-[#292a26] px-4 text-sm font-medium text-white hover:bg-[#44453f]" 
                >Сохранить    
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}