'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { translations } from '@/lib/translations'

const t = translations.pl

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="absolute inset-0 fabric-texture" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Decorative line */}
          <div className="w-24 h-px bg-accent mx-auto mb-10" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight text-balance">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-10 py-5 bg-charcoal text-cream text-sm uppercase tracking-wider rounded-sm hover:bg-soft-brown transition-all duration-300 hover:shadow-xl"
            >
              {t.cta.button}
            </Link>
          </motion.div>

          {/* Decorative line */}
          <div className="w-24 h-px bg-accent mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
