import Image from 'next/image';
import StatusPill from './StatusPill';

export async function generateMetadata(params: any, searchParams: any) {
  const post = await fetchData(params.id)
  return {
    title: post.title,
    description: post.body
  };
}

async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F8F9FA] pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center min-h-[80vh]">

          {/* Left: Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBF0EC] rounded-full">
              <span className="w-2 h-2 bg-[#C1694F] rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-[#C1694F] tracking-wide uppercase">
                Открыта для заказов · 2026
              </span>
            </div>

            <h1 className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-bold text-[#1C1B1F] leading-[1.05] tracking-tight">
              30 лет<br />
              <span className="italic text-[#C1694F]">в искусстве</span>
            </h1>

            <p className="text-[#49454F] text-lg leading-relaxed max-w-[520px]">
              Нино Беридзе — грузинский художник-керамист, чья практика охватывает преподавание, сохранение народного гончарства
              и современные выставки. Ее серия STALKER была показана в Венеции, Берлине и Токио.
            </p>

            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">30</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">Лет в профессии</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">340+</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">Каталогизировано работ</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-[#1C1B1F]">12</div>
                <div className="text-xs font-medium text-[#79747E] mt-0.5 uppercase tracking-wider">Стран с выставками</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#work"
                className="px-6 py-3.5 bg-[#1C1B1F] text-white text-sm font-semibold rounded-full hover:bg-[#C1694F] transition-colors"
              >
                Смотреть портфолио
              </a>
              <a
                href="#timeline"
                className="px-6 py-3.5 border border-[#E8E0E6] text-[#49454F] text-sm font-semibold rounded-full hover:border-[#C1694F] hover:text-[#C1694F] transition-colors bg-white"
              >
                Хронология карьеры
              </a>
            </div>
          </div>

          {/* Right: Featured artwork card */}
          <div className="relative">
            <div className="bg-white rounded-[24px] overflow-hidden shadow-xl shadow-black/8 border border-[#E8E0E6]">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8D5CC]">
                <Image
                  src="https://images.unsplash.com/photo-1581931253-ee89b0c7e90d?w=600&h=750&fit=crop&auto=format"
                  alt="Сосуд STALKER № 1 — терракотовая керамика с индустриальной текстурой"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/80 text-xs font-medium mb-1">Избранная работа</p>
                      <p className="text-white font-serif font-bold text-xl">Сосуд STALKER № 1</p>
                    </div>
                    <StatusPill status="В наличии" />
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[#79747E] text-xs">Обожженная керамика, терракотовая глазурь</p>
                  <p className="text-[#1C1B1F] font-bold text-sm mt-0.5">2023 · 42 cm</p>
                </div>
                <p className="font-serif text-xl font-bold text-[#C1694F]">€2,400</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,_#C1694F,_transparent)] opacity-15" />
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full bg-[radial-gradient(circle,_#9E4A34,_transparent)] opacity-10" />
          </div>
        </div>
      </div>
    </section>
  )
}