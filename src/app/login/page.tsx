'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f7f5] px-5 text-[#242522]">
      <section className="w-full max-w-sm rounded-2xl border border-[#e7e7e2] bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#8b6b5e]">OL ARTS</p>
        <p className="mt-2 text-sm text-[#777871]">Войдите с помощью аккаунта Google.</p>
        <button
          type="button"
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[#242522] px-4 text-sm font-medium text-white transition-colors hover:bg-[#44453f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a65c46]"
        >
          Продолжить с Google
        </button>
        <Link href="/" className="mt-5 inline-block text-sm text-[#777871] transition-colors hover:text-[#a65c46]">
          Вернуться на сайт
        </Link>
      </section>
    </main>
  )
}
