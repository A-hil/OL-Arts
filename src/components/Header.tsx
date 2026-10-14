
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-[#C1694F] flex items-center justify-center">
            <span className="font-serif text-white font-bold text-base leading-none">N</span>
          </div>
          <div>
            <div className="font-serif font-bold text-[#1C1B1F] text-sm leading-tight">Нино Беридзе</div>
            <div className="text-[10px] text-[#79747E] tracking-wider uppercase">Художник-керамист</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
            <a href="#work" className="px-4 py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F] transition-colors rounded-full hover:bg-[#FBF0EC]">
              Работы
            </a>
            <a href="#timeline" className="px-4 py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F] transition-colors rounded-full hover:bg-[#FBF0EC]">
              Хронология
            </a>
            <a href="#services" className="px-4 py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F] transition-colors rounded-full hover:bg-[#FBF0EC]">
              Услуги
            </a>
            <a href="#events" className="px-4 py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F] transition-colors rounded-full hover:bg-[#FBF0EC]">
              События
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F] transition-colors rounded-full hover:bg-[#FBF0EC]">
              Контакты
            </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#C1694F] text-white text-sm font-semibold rounded-full hover:bg-[#9E4A34] transition-colors shadow-sm"
        >
          Записаться на мастер-класс
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-[#FBF0EC]"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-5 h-0.5 bg-[#1C1B1F] mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-[#1C1B1F] mb-1.5" />
          <div className="w-5 h-0.5 bg-[#1C1B1F]" />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E0E6] px-6 py-4 flex flex-col gap-2">
            <a href="#work" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F]">
              Работы
            </a>
            <a href="#timeline" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F]">
              Хронология
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F]">
              Услуги
            </a>
            <a href="#events" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F]">
              События
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium text-[#49454F] hover:text-[#C1694F]">
              Контакты
            </a>
            <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 bg-[#C1694F] text-white text-sm font-semibold rounded-full text-center"
          >
            Записаться на мастер-класс
          </a>
        </div>
      )}
    </header>
  )
}