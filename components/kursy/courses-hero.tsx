'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function CoursesHero() {
  const { t } = useLanguage()
  const data = t.coursesPage.hero

  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden py-20 lg:py-32 bg-[#202020]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/kursy-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for contrast */}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[64px] lg:text-[120px] font-lambotype uppercase text-white leading-[0.92] tracking-[0.023em] mb-6 text-balance will-change-transform transform-gpu">
              {data.title.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>
            <p className="text-[16px] lg:text-[18px] font-lambotype uppercase text-white tracking-[0.023em] leading-relaxed max-w-xl mb-12 will-change-transform transform-gpu">
              {data.description}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Giallo Action Button */}
              <Link href="#courses" className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300">
                {data.joinCourse} <span className="ml-2 text-[16px]">&rarr;</span>
              </Link>
              
              {/* Ghost Link Button */}
              <Link href="#features" className="inline-flex items-center justify-center text-[16px] font-lambotype uppercase tracking-[0.023em] text-white hover:text-[#ffc000] transition-colors duration-300">
                {data.learnMore} <span className="ml-2 text-[16px]">&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
