'use client'

import Link from 'next/link'
import { Image, Newspaper, Sparkles } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function AdminPage() {
  const sections = [
    { href: '/Admin-page/gallery-editor', label: 'Редактор галереи', icon: Image },
    { href: '/Admin-page/news-feed', label: 'Лента новостей', icon: Newspaper },
    { href: '/Admin-page/services', label: 'Услуги', icon: Sparkles },
  ]
  const { data: session, status } = useSession()

  useEffect(() => {
    console.log('Состояние авторизации:', { status, session })
  }, [session, status])

  return (
    <main className="min-h-screen bg-[#f7f7f5] text-[#242522]">
      <header className="border-b border-[#e7e7e2] bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="На главную">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#a65c46] font-serif text-sm font-bold text-white">N</span>
            <span className="text-sm font-semibold tracking-wide">
              OL ARTS <span className="ml-2 font-normal text-[#92938d]">/ Администрирование</span>
            </span>
          </Link>
          <Link href="/" className="text-sm text-[#62635d] transition-colors hover:text-[#a65c46]">
            Открыть сайт
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <p className="text-sm text-[#777871]">Перейдите к нужной части сайта.</p>

        <nav aria-label="Разделы администрирования" className="mt-8 flex flex-col items-center gap-3">
          {sections.map(({ href, label}) => (
            <Link
              key={href}
              href={href}
              className="group relative flex min-h-24 w-full max-w-3xl items-center justify-center rounded-xl px-14 py-6 text-center text-2xl font-semibold text-[#777871] transition-[color,background-color,transform] duration-200 ease-out hover:scale-[1.01] hover:bg-white hover:text-[#a65c46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a65c46] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-28 sm:text-3xl"
            >
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  )
}
