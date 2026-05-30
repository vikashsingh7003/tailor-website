import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { OffersPageContent } from '@/components/offers/offers-page-content'

export const metadata: Metadata = {
  title: 'Oferta | EL Style ES',
  description: 'Kompleksowe usługi krawieckie: krawiectwo na miarę, przeróbki, suknie, garnitury, naprawy i redesign odzieży.',
}

export default function OffersPage() {
  return (
    <>
      <Navigation />
      <main>
        <OffersPageContent />
      </main>
      <Footer />
    </>
  )
}
