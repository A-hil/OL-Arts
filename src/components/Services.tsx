import { Paintbrush, Palette, ShoppingBag } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Что я предлагаю</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F]">Услуги</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 border border-[#E8E0E6] bg-[#FBF0EC]">
            <div className="mb-4 text-[#C1694F]">
              <Palette className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">Мастер-классы</h3>
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Для серьезных практиков</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Интенсивные 3-дневные семинары, охватывающие ручную лепку, химию глазури и управление печью. Количество участников ограничено до 8 человек. Проводятся ежеквартально в Тбилиси и ежегодно в Берлине.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-serif font-bold text-[#C1694F] text-lg">От €480</p>
              <button type="button" className="px-5 py-2.5 bg-[#1C1B1F] text-white text-xs font-semibold rounded-full hover:bg-[#C1694F] transition-colors">
                Посмотреть расписание
              </button>
            </div>
          </div>

          <div className="rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 border border-[#C1694F]/30 shadow-lg shadow-[#C1694F]/10 bg-white">
            <div className="mb-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-[#C1694F] px-3 py-1 rounded-full">
                Самое популярное
              </span>
            </div>
            <div className="mb-4 text-[#C1694F]">
              <Paintbrush className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">Живопись на заказ</h3>
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Оригинальные работы</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Картины и керамические панно для частных коллекционеров, отелей и культурных учреждений. Каждый заказ начинается с 2-недельного этапа исследований и эскизов.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-serif font-bold text-[#C1694F] text-lg">От €2,000</p>
              <button type="button" className="px-5 py-2.5 bg-[#1C1B1F] text-white text-xs font-semibold rounded-full hover:bg-[#C1694F] transition-colors">
                Сделать заказ
              </button>
            </div>
          </div>

          <div className="rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 border border-[#E8E0E6] bg-[#F5F0F8]">
            <div className="mb-4 text-[#C1694F]">
              <ShoppingBag className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">Мерч STALKER</h3>
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Носимые арт-объекты</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Ограниченный тираж одежды и архивных гравюр из керамической серии STALKER. Нумерованные издания, сертификат подлинности, доставка по всему миру в течение 7–10 дней.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-serif font-bold text-[#C1694F] text-lg">От €65</p>
              <button type="button" className="px-5 py-2.5 bg-[#1C1B1F] text-white text-xs font-semibold rounded-full hover:bg-[#C1694F] transition-colors">
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}