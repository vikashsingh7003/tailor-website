'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      key: 'tailoring',
      image: '/images/service-tailoring.png',
      ...t.services.items.tailoring,
    },
    {
      key: 'adjustments',
      image: '/images/service-adjustments.png',
      ...t.services.items.adjustments,
    },
    {
      key: 'repairs',
      image: '/images/service-repairs.png',
      ...t.services.items.repairs,
    },
    {
      key: 'redesign',
      image: '/images/service-redesign.png',
      ...t.services.items.redesign,
    },
  ]
  
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-[#f5f5f5]">
      {/* Decorative Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffc000]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#e6b800]/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl border-y border-white/30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-16 will-change-transform transform-gpu gap-6"
        >
          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight">
            {t.services.title}
          </h2>
          <Link href="/oferta" className="flex items-center text-[12px] font-lambotype uppercase tracking-[0.023em] text-[#202020] hover:text-[#ffc000] transition-colors duration-300">
            {t.nav.offers} <span className="ml-2 text-[12px]">&rarr;</span>
          </Link>
        </motion.div>

        {/* Services Grid (Image Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="will-change-transform transform-gpu"
            >
              <Link href="/oferta" className="group block">
                {/* Full-bleed product photograph style */}
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-white">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Caption below image */}
                <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2 group-hover:text-[#ffc000] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
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
