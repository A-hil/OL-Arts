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
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Практика в мастерской</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Интенсивные практические занятия по ручной росписи ткани, лепке из глины и работе с глазурями. Камерные группы до 8 человек позволяют каждому участнику создать собственное изделие под руководством мастеров студии.
            </p>
            <div className="mt-8 flex items-center justify-between">
              <p className="font-serif font-bold text-[#C1694F] text-lg">От €480</p>
              <button type="button" className="px-5 py-2.5 bg-[#1C1B1F] text-white text-xs font-semibold rounded-full hover:bg-[#C1694F] transition-colors">
                Посмотреть расписание
              </button>
            </div>
          </div>

          <div className="rounded-[20px] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/8 border border-[#C1694F]/30 shadow-lg shadow-[#C1694F]/10 bg-white">
            <div className="mb-4 text-[#C1694F]">
              <Paintbrush className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">Предметы на заказ</h3>
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Оригинальные работы</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Создание живописи, текстильных панно и авторской керамики для частных интерьеров, бутик-отелей и креативных пространств. Каждый проект начинается с разработки индивидуальных эскизов и подбора фактур.
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
            <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-1">Авторская одежда</h3>
            <p className="text-[#79747E] text-xs font-semibold tracking-wide uppercase mb-4">Носимые арт-объекты</p>
            <p className="text-[#49454F] text-sm leading-relaxed flex-1">
              Лимитированные капсулы одежды из натурального льна и хлопка с ручной росписью и принтами. Каждое изделие выпускается малым тиражом, сопровождается паспортом ручной работы и доставляется в течение 7–10 дней.
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