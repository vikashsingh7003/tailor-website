'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function CTASection() {
  const { t } = useLanguage()
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#181818]">
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center will-change-transform transform-gpu"
        >
          {/* Decorative line */}
          <div className="w-24 h-px bg-[#494949] mx-auto mb-10" />

          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#ffffff] leading-tight text-balance tracking-[0.023em]">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex justify-center will-change-transform transform-gpu"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300"
            >
              {t.cta.button} <span className="ml-2 text-[16px]">&rarr;</span>
            </Link>
          </motion.div>

          {/* Decorative line */}
          <div className="w-24 h-px bg-[#494949] mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  )
}
