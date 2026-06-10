'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

import { HeroCanvas } from './hero-canvas'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Glassmorphism without white */}
      <div className="absolute inset-0 w-full lg:w-2/3 bg-black/20 z-10" style={{ maskImage: 'linear-gradient(to right, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 60%, transparent 100%)' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
      
      {/* Decorative fabric texture */}
      <div className="absolute inset-0 fabric-texture z-10 opacity-30 mix-blend-overlay" />
      
      {/* Hero Canvas Sequence */}
      <HeroCanvas />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-2xl">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="will-change-transform transform-gpu"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-great-vibes)] text-accent drop-shadow-md">
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-cream leading-tight text-balance drop-shadow-md will-change-transform transform-gpu"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-6 text-base md:text-lg text-cream/80 leading-relaxed max-w-xl drop-shadow-sm will-change-transform transform-gpu"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/oferta"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream text-cream text-sm uppercase tracking-wider rounded-sm hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              {t.hero.cta.primary}
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border border-cream text-cream text-sm uppercase tracking-wider rounded-sm hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              {t.hero.cta.secondary}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative stitch line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-px stitch-border z-20"
      />
    </section>
  )
}
