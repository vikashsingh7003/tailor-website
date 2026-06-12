import dynamic from 'next/dynamic'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'

// Lazy load below-the-fold components
const FeaturesSection = dynamic(() => import('@/components/home/features-section').then(mod => mod.FeaturesSection), { ssr: true })
const AboutPreviewSection = dynamic(() => import('@/components/home/about-preview-section').then(mod => mod.AboutPreviewSection), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/home/services-section').then(mod => mod.ServicesSection), { ssr: true })
const CTASection = dynamic(() => import('@/components/home/cta-section').then(mod => mod.CTASection), { ssr: true })

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutPreviewSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
