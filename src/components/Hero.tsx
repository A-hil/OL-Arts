import Image from 'next/image';
import StatusPill from './StatusPill';
import { useGallery } from '../hooks/useGallery'



export default function Hero() {
    const { items, activeFilter, setActiveFilter, loadError } = useGallery()
    const featuredItem = items[4]; //Выбранная работа из массива на главной
  return (
    <section className="min-h-screen bg-[#F8F9FA] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBF0EC] rounded-full">
              <span className="w-2 h-2 bg-[#C1694F] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#C1694F] tracking-wide uppercase">
                АРТ-МАСТЕРСКАЯ • OL-ART
              </span>
            </div>

            <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-bold text-[#1C1B1F] leading-[1.05] tracking-tight">
              Искусство, которое<br />
              <span className="italic text-[#C1694F]">можно носить</span>
            </h1>

            <p className="text-[#49454F] text-lg leading-relaxed max-w-[520px]">
              Авторская одежда с ручной росписью, интерьерные арт-объекты и творческие мастер-классы. Мы переносим живую фактуру холста в повседневный гардероб и пространство вокруг вас.
            </p>

            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">10+</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">ЛЕТ В ИСКУССТВЕ</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">340+</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">АВТОРСКИХ РАБОТ</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">45+</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">МАСТЕР-КЛАССОВ</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3.5 bg-[#1C1B1F] text-white text-sm font-semibold rounded-full hover:bg-[#C1694F] transition-colors"
              >
                Смотреть коллекцию
              </a>
              <a
                href="#timeline"
                className="px-6 py-3.5 border border-[#E8E0E6] text-[#49454F] text-sm font-semibold rounded-full hover:border-[#C1694F] hover:text-[#C1694F] transition-colors bg-white"
              >
                О мастерской
              </a>
            </div>
          </div>

          {/* Right: Featured artwork card */}
          <div className="relative">
            {loadError && <p role="alert" className="text-sm text-red-700">{loadError}</p>}
            {featuredItem && (<div className="bg-white rounded-[24px] overflow-hidden shadow-xl shadow-black/8 border border-[#E8E0E6]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8D5CC]">

                <Image
                  src={featuredItem.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-serif font-bold text-xl">«Странник» — авторская работа</p>
                      <p className="text-white/85 text-sm mt-1">Холст, акрил, смешанная техника, сюрреализм</p>
                    </div>
                    <StatusPill status="В наличии" />
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[#79747E] text-xs">Лимитированная серия</p>
                  <p className="text-[#1C1B1F] font-bold text-sm mt-0.5">2026</p>
                </div>
                <p className="font-serif text-xl font-bold text-[#C1694F]">15 000 руб.</p>
              </div>
            </div>)}

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_#C1694F,_transparent)] opacity-15" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,_#9E4A34,_transparent)] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  )
}