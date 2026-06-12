'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#202020]">
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-3xl">
          {/* Eyebrow / Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="will-change-transform transform-gpu"
          >
            <span className="text-[12px] lg:text-[16px] font-lambotype uppercase text-white tracking-[0.023em]">
              {t.hero.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-[64px] md:text-[80px] lg:text-[120px] font-lambotype uppercase text-white leading-[0.92] tracking-[0.023em] will-change-transform transform-gpu text-balance"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 text-[16px] lg:text-[18px] font-lambotype uppercase text-white tracking-[0.023em] leading-relaxed max-w-xl will-change-transform transform-gpu"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            {/* Giallo Action Button */}
            <Link
              href="/oferta"
              className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300"
            >
              {t.hero.cta.primary} <span className="ml-2 text-[16px]">&rarr;</span>
            </Link>
            
            {/* Ghost Link Button */}
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center text-[16px] font-lambotype uppercase tracking-[0.023em] text-white hover:text-[#ffc000] transition-colors duration-300"
            >
              {t.hero.cta.secondary} <span className="ml-2 text-[16px]">&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
