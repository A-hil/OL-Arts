export default function Footer() {
  return (
    <footer className="bg-[#1C1B1F] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C1694F] flex items-center justify-center">
              <span className="font-serif text-white font-bold text-sm">N</span>
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">Нино Беридзе</p>
              <p className="text-[#79747E] text-[10px] tracking-wider uppercase">Художник-керамист · с 1990</p>
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

          <p className="text-[#49454F] text-xs">© 2026 Нино Беридзе. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}