'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Award, Sparkles, Clock } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function AboutPageContent() {
  const { t } = useLanguage()

  const values = [
    {
      icon: Award,
      ...t.about.values.quality,
    },
    {
      icon: Clock,
      ...t.about.values.tradition,
    },
    {
      icon: Sparkles,
      ...t.about.values.innovation,
    },
    {
      icon: Heart,
      ...t.about.values.passion,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-[#202020] min-h-[70vh] flex items-center justify-start">
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[12px] md:text-[16px] font-lambotype uppercase tracking-[0.023em] text-white block mb-4">
              {t.about.heroTitle}
            </span>
            <h1 className="text-[64px] md:text-[80px] lg:text-[120px] font-lambotype uppercase text-white leading-[0.92] tracking-[0.023em] text-balance">
              {t.about.heroSubtitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-[#ffffff]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
                <Image
                  src="/images/tailor-portrait.jpg"
                  alt="Portret krawcowej"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[12px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] block mb-4">
                {t.about.storyTitle}
              </span>
              <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] leading-tight mb-8">
                Krawiectwo oparte na wiedzy i pasji
              </h2>
              <div className="space-y-6 text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
                <p>
                  {t.about.storyContent}
                </p>
                {t.about.storyParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-[#f5f5f5] relative overflow-hidden border-t border-[#e0e0e0]">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6"
          >
            <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight">
              To, co nas wyróżnia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-[#e0e0e0] pt-6 lg:pt-8 pr-6 pb-8"
              >
                <div className="mb-6">
                  <value.icon className="w-8 h-8 text-[#202020]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-3">
                  {value.title}
                </h3>
                <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-[#ffffff]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6"
          >
            <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight">
              {t.about.studio.timelineSubtitle}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto border-l border-[#202020] ml-0 md:ml-8 pl-8 md:pl-12 py-4">
            {t.about.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] md:-left-[53px] top-1 w-2 h-2 bg-[#ffc000]" />

                <span className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#ffc000] block mb-2">{item.year}</span>
                <h3 className="text-[24px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-3">
                  {item.title}
                </h3>
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Preview */}
      <section className="py-20 lg:py-32 bg-[#181818] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#ffffff] leading-tight mb-8">
                {t.about.studio.subtitle}
              </h2>
              <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed mb-8">
                {t.about.studio.description}
              </p>
              <ul className="space-y-4">
                {t.machines.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-[#ffc000] mt-1.5 mr-4 shrink-0" />
                    <span className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#ffffff]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <Image
                  src="/images/studio.png"
                  alt="Pracownia krawiecka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
