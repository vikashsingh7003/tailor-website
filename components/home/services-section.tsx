'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { translations } from '@/lib/translations'

const t = translations.pl

const services = [
  {
    key: 'tailoring',
    image: '/images/gallery-6.jpeg',
    ...t.services.items.tailoring,
  },
  {
    key: 'adjustments',
    image: '/images/craftsmanship.png',
    ...t.services.items.adjustments,
  },
  {
    key: 'dresses',
    image: '/images/gallery-7.jpeg',
    ...t.services.items.dresses,
  },
  {
    key: 'suits',
    image: '/images/studio.png',
    ...t.services.items.suits,
  },
  {
    key: 'repairs',
    image: '/images/craftsmanship.png',
    ...t.services.items.repairs,
  },
  {
    key: 'redesign',
    image: '/images/studio.png',
    ...t.services.items.redesign,
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 fabric-texture opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.services.title}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-cream text-balance">
            {t.services.subtitle}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/oferta" className="group block">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors duration-500" />
                  
                  {/* Title overlay on image */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-xl font-serif font-medium text-cream group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-cream/70 text-sm leading-relaxed group-hover:text-cream/90 transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
