import Link from 'next/link'

export default function AdminServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] px-5 py-10 text-[#242522] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/Admin-page" className="text-sm text-[#8b6b5e] hover:underline">
          ← Все разделы
        </Link>
        <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight">Услуги</h1>
        <p className="mt-2 text-sm text-[#777871]">Управление услугами — раздел пока в разработке.</p>
      </div>
    </main>
  )
}
