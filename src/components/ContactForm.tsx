"use client";

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

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
  { key: 'email', label: 'Адрес эл. почты', type: 'email', placeholder: 'name@example.com' },
  { key: 'subject', label: 'Тема', type: 'text', placeholder: 'Индивидуальный заказ, покупка работы, мастер-класс...' },
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
            <p className="text-[#C1694F] text-xs font-semibold tracking-widest uppercase mb-3">СВЯЖИТЕСЬ С НАМИ</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1B1F] mb-6">
              Давайте творить<br />
              <span className="italic text-[#C1694F]">вместе</span>
            </h2>
            <p className="text-[#49454F] text-base leading-relaxed mb-8">
              Если вы заинтересованы в индивидуальном пошиве, покупке арт-объектов, записи на мастер-класс или хотите обсудить коллаборацию — команда мастерской OL-art лично отвечает на каждое обращение в течение 24 часов.
            </p>

            <div className="space-y-4 mb-8">
              {[
                ['МАСТЕРСКАЯ', 'Москва, ул. Покровка, 27, арт-пространство «OL-art»'],
                ['ЭЛ. ПОЧТА', 'hello@ol-art.ru'],
                ['ВРЕМЯ ОТВЕТА', 'В течение 24 часов'],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <span className="text-[#79747E] text-xs font-semibold uppercase tracking-wide w-28 pt-0.5">{label}</span>
                  <span className="text-[#1C1B1F] text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>

            <a
              href="."
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-[#168DF5] via-[#4C55EA] to-[#9638D8] text-white text-sm font-semibold rounded-full hover:brightness-110 transition-all shadow-md shadow-[#5A52E8]/30"
            >
              <Image src="https://maxicons.ru/icons/png/Max_logo/Max_logo-512x512.png" alt="MAX" width={20} height={20} />
              Написать в MAX
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
                  Спасибо за ваше обращение. Команда OL-art ответит в течение 24 часов.
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
                    placeholder="Расскажите о вашем заказе, мастер-классе или идее коллаборации..."
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