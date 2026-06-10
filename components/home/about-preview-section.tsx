'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function AboutPreviewSection() {
  const { t } = useLanguage()
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 will-change-transform transform-gpu"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/craftsmanship.png"
                alt="Rzemiosło krawieckie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-48 md:h-48 bg-secondary rounded-lg -z-10 will-change-transform transform-gpu"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-2 border-accent/30 rounded-lg -z-10 will-change-transform transform-gpu"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 will-change-transform transform-gpu"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.aboutPreview.title}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground leading-tight text-balance">
              {t.aboutPreview.subtitle}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              {t.aboutPreview.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-10 will-change-transform transform-gpu"
            >
              <Link
                href="/o-mnie"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-300"
              >
                {t.aboutPreview.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
