'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function AboutPreviewSection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-[#f5f5f5]">
      {/* Decorative Background Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#ffc000]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#e6b800]/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl border-y border-white/30 shadow-lg" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1 will-change-transform transform-gpu"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5]">
              <Image
                src="/images/craftsmanship.png"
                alt="Rzemiosło krawieckie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 will-change-transform transform-gpu"
          >
            <span className="text-[12px] uppercase tracking-[0.023em] font-lambotype text-[#7d7d7d] block mb-4">
              {t.aboutPreview.title}
            </span>
            <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] leading-tight text-balance mb-6">
              {t.aboutPreview.subtitle}
            </h2>
            <p className="text-[16px] font-sans font-light text-[#7d7d7d] leading-relaxed max-w-xl">
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
                className="inline-flex items-center text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] hover:text-[#ffc000] transition-colors duration-300"
              >
                {t.aboutPreview.cta} <span className="ml-2 text-[16px]">&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
