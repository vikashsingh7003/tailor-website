'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { translations } from '@/lib/translations'

const t = translations.pl

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
      
      {/* Decorative fabric texture */}
      <div className="absolute inset-0 fabric-texture z-10 opacity-50" />
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full">
        <Image
          src="/images/hero-dress.png"
          alt="Elegancka suknia na manekinie"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-2xl">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-great-vibes)] text-charcoal">
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-foreground leading-tight text-balance"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl"
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
              className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-cream text-sm uppercase tracking-wider rounded-sm hover:bg-soft-brown transition-all duration-300 hover:shadow-lg"
            >
              {t.hero.cta.primary}
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-charcoal text-sm uppercase tracking-wider rounded-sm hover:bg-charcoal hover:text-cream transition-all duration-300"
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
