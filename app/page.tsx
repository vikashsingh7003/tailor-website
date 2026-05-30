import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { FeaturesSection } from '@/components/home/features-section'
import { AboutPreviewSection } from '@/components/home/about-preview-section'
import { ServicesSection } from '@/components/home/services-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { GallerySection } from '@/components/home/gallery-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutPreviewSection />
        <ServicesSection />
        <TestimonialsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
