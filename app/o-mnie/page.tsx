import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutPageContent } from '@/components/about/about-page-content'

export const metadata: Metadata = {
  title: 'O Mnie | WIWI',
  description: 'Poznaj historię pasji do krawiectwa. Od ponad 20 lat tworzę wyjątkowe kreacje dla wymagających klientów.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
    </>
  )
}
