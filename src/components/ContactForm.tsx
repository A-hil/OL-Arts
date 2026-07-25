"use client";

import { useState } from 'react'

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const formFields: {
  key: keyof FormState;
  label: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
}[] = [
  { key: 'name', label: 'Полное имя', type: 'text', placeholder: 'Ваше имя' },
  { key: 'email', label: 'Адрес эл. почты', type: 'email', placeholder: 'vy@example.com' },
  { key: 'subject', label: 'Тема', type: 'text', placeholder: 'Заказ, мастер-класс и т.д.' },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-start">

          {/* Left info */}
          <div>
            <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">Свяжитесь со мной</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F] mb-6">
              Давайте творить<br />
              <span className="italic text-[#C1694F]">вместе</span>
            </h2>
            <p className="text-[#49454F] text-base leading-relaxed mb-8">
              Если вы заинтересованы в заказе, мастер-классе или просто хотите поговорить о керамике
              — Нино лично отвечает на каждое сообщение, обычно в течение 48 часов.
            </p>

            <div className="space-y-4 mb-8">
              {[
                ['Студия', 'Ул. Марджанишвили 14, Тбилиси, Грузия'],
                ['Эл. почта', 'nino@beridze.art'],
                ['Время ответа', 'В течение 48 часов'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <span className="text-[#79747E] text-xs font-semibold uppercase tracking-wide w-28 pt-0.5">{label}</span>
                  <span className="text-[#1C1B1F] text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Telegram button */}
            <a
              href="https://t.me/ninoberidze_art"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#229ED9] text-white text-sm font-semibold rounded-full hover:bg-[#1A85B8] transition-colors shadow-md shadow-[#229ED9]/20"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.014 9.483c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.08 14.702l-2.946-.92c-.64-.203-.654-.64.136-.948l11.498-4.432c.534-.194 1.002.13.794.846z" />
              </svg>
              Написать в Telegram
            </a>
          </div>

          {/* Right: Form */}
          <div className="bg-[#F8F9FA] rounded-[20px] p-8 border border-[#E8E0E6]">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#FBF0EC] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#C1694F] text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1B1F] mb-2">Сообщение отправлено</h3>
                <p className="text-[#49454F] text-sm">
                  Спасибо за ваше обращение. Нино ответит в течение 48 часов.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl font-bold text-[#1C1B1F] mb-6">Отправить сообщение</h3>

                {formFields.map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-semibold text-[#49454F] mb-2 tracking-wide uppercase">
                      {label}
                    </label>
                    <input
                      type={type}
                      required
                      placeholder={placeholder}
                      value={form[key]}
                      onChange={e => setForm(prev => ({ ...prev, [key]: e.target.value }))}
                      className="w-full px-4 py-3 bg-white border border-[#E8E0E6] rounded-xl text-sm text-[#1C1B1F] placeholder:text-[#B0ABBA] focus:outline-none focus:border-[#C1694F] focus:ring-2 focus:ring-[#C1694F]/15 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-semibold text-[#49454F] mb-2 tracking-wide uppercase">
                    Сообщение
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Расскажите о вашем проекте или интересе..."
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-[#E8E0E6] rounded-xl text-sm text-[#1C1B1F] placeholder:text-[#B0ABBA] focus:outline-none focus:border-[#C1694F] focus:ring-2 focus:ring-[#C1694F]/15 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C1694F] text-white text-sm font-semibold rounded-xl hover:bg-[#9E4A34] transition-colors shadow-md shadow-[#C1694F]/25"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}