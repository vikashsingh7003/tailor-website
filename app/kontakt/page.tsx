import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactPageContent } from '@/components/contact/contact-page-content'

export const metadata: Metadata = {
  title: 'Kontakt | WIWI',
  description: 'Skontaktuj się z nami. Umów bezpłatną konsultację krawiecką. Odpowiadamy na wszystkie zapytania.',
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </>
  )
}
