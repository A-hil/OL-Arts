import Link from 'next/link'
import Image from 'next/image'
import { LockKeyhole } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1C1B1F] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="https://t.me/Sanchoezzz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-5 transition-colors hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C1694F]/20 text-[#D98A72]">
              <Image width={40} height={40} alt="Логотип" className="w-full h-full rounded-full object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSB5XrtG-gqfQyXTQADZCRbpOloOXLVUXaYRyyf1DRoqXst3oSK"></Image>
            </span>
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-[#79747E]">Разработчик</span>
              <span className="block text-xs font-medium text-white">Khilkevich Александр</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C1694F] flex items-center justify-center">
              <span className="font-serif text-white font-bold text-sm">OL</span>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">OL-art</p>
              <p className="text-[#79747E] text-[10px] tracking-wider uppercase">Арт-мастерская • одежда и искусство</p>
            </div>
          </div>

          <div className="flex gap-6">
            {[
              { name: 'Instagram', href: 'https://instagram.com' },
              { name: 'Telegram', href: 'https://t.me/ninoberidze_art' },
              { name: 'Эл. почта', href: 'mailto:nino@beridze.art' },
            ].map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="text-[#79747E] text-xs hover:text-[#C1694F] transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <p className="text-[#49454F] text-xs">© 2026 OL-art. Все права защищены.</p>

          <Link
            href="/login"
            aria-label="Открыть панель администратора"
            title="Панель администратора"
            className="rounded-full p-2 text-[#C1694F]/40 transition-colors hover:bg-[#C1694F]/10 hover:text-[#C1694F]"
          >
            <LockKeyhole size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  )
}