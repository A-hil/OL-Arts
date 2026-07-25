import Image from 'next/image';
import { EVENTS } from '../app/data'
import TagPill from './TagPill'

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
          {EVENTS.map((ev) => (
            <div
              key={ev.title}
              className="bg-white rounded-[20px] overflow-hidden border border-[#E8E0E6] hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48 bg-[#E8D5CC]">
                <Image
                  src={`https://images.unsplash.com/${ev.image}?w=500&h=250&fit=crop&auto=format`}
                  alt={ev.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <TagPill tag={ev.tag} />
                </div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-white/80 text-[11px] font-semibold tracking-wide uppercase">
                    {ev.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#C1694F] text-xs font-semibold mb-2">{ev.date}</p>
                <h3 className="font-serif text-lg font-bold text-[#1C1B1F] mb-1 leading-snug">{ev.title}</h3>
                <p className="text-[#79747E] text-xs font-medium mb-3">{ev.venue} · {ev.location}</p>
                <p className="text-[#49454F] text-sm leading-relaxed">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}