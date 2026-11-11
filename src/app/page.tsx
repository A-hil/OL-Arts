"use client";

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import Events from '../components/Events'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'


// ─── App ─────────────────────────────────────────────────────────────────────

export default function Page() {
  
  const { data: session, status } = useSession()
  useEffect(() => {
    console.log('Состояние авторизации:', { status, session })
  }, [session, status])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Gallery />
        <Services />
        <Events />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
