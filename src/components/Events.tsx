import Image from 'next/image';

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Что намечается</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F]">События и<br />анонсы</h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-[#C1694F] hover:underline">
            Все события →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-[20px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative overflow-hidden h-48 bg-[#E8D5CC]">
              <Image
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&h=250&fit=crop&auto=format"
                alt="Серия STALKER — Полная ретроспектива"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-[#FBF0EC] text-[#C1694F]">
                Скоро
              </span>
              <span className="absolute bottom-3 left-4 text-white/80 text-[11px] font-semibold tracking-wide uppercase">
                Выставка
              </span>
            </div>
            <div className="p-6">
              <p className="text-[#C1694F] text-xs font-semibold mb-2">12–18 августа 2026</p>
              <h3 className="font-serif text-lg font-bold text-[#1C1B1F] mb-1 leading-snug">Серия STALKER — Полная ретроспектива</h3>
              <p className="text-[#79747E] text-xs font-medium mb-3">Тбилисская ярмарка искусств · Fabrika, Тбилиси</p>
              <p className="text-[#49454F] text-sm leading-relaxed">
                Полная серия керамики STALKER будет впервые показана вместе со времен Венеции 2017 года. 22 сосуда, 8 гравюр и две новые работы, представленные на открытии.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-[20px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative overflow-hidden h-48 bg-[#E8D5CC]">
              <Image
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=250&fit=crop&auto=format"
                alt="Ручная лепка и обжиг Раку"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-[#EAF4EC] text-[#2E7D32]">
                Регистрация открыта
              </span>
              <span className="absolute bottom-3 left-4 text-white/80 text-[11px] font-semibold tracking-wide uppercase">
                Мастер-класс
              </span>
            </div>
            <div className="p-6">
              <p className="text-[#C1694F] text-xs font-semibold mb-2">4–5 сентября 2026</p>
              <h3 className="font-serif text-lg font-bold text-[#1C1B1F] mb-1 leading-snug">Ручная лепка и обжиг Раку</h3>
              <p className="text-[#79747E] text-xs font-medium mb-3">Мастер-класс: Берлин · Keramik Studio Mitte, Берлин</p>
              <p className="text-[#49454F] text-sm leading-relaxed">
                Двухдневный интенсивный семинар. Максимум 8 участников. Все материалы предоставляются. Обед включен. По окончании выдается сертификат.
              </p>
            </div>
          </article>

          <article className="bg-white rounded-[20px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group">
            <div className="relative overflow-hidden h-48 bg-[#E8D5CC]">
              <Image
                src="https://images.unsplash.com/photo-1493106641515-5d1f1a3c0b58?w=500&h=250&fit=crop&auto=format"
                alt="Лекция: Народная керамика и живая память"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute top-3 left-3 text-[11px] font-semibold px-3 py-1 rounded-full bg-[#F0F4FF] text-[#3B5BDB]">
                Вход свободный
              </span>
              <span className="absolute bottom-3 left-4 text-white/80 text-[11px] font-semibold tracking-wide uppercase">
                Лекция
              </span>
            </div>
            <div className="p-6">
              <p className="text-[#C1694F] text-xs font-semibold mb-2">22 октября 2026</p>
              <h3 className="font-serif text-lg font-bold text-[#1C1B1F] mb-1 leading-snug">Лекция: Народная керамика и живая память</h3>
              <p className="text-[#79747E] text-xs font-medium mb-3">Национальный музей Грузии · Пр. Руставели, Тбилиси</p>
              <p className="text-[#49454F] text-sm leading-relaxed">
                Публичная лекция, основанная на 30-летнем опыте полевых работ в высокогорных деревнях Грузии. После лекции — сессия вопросов и ответов и автограф-сессия нового издания книги "Глиняная память".
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}