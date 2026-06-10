'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Scissors, Ruler, Sparkles, Ribbon, UserCheck } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Scissors,
      title: t.features.items.handStitching.title,
      description: t.features.items.handStitching.description,
    },
    {
      icon: Ruler,
      title: t.features.items.customTailoring.title,
      description: t.features.items.customTailoring.description,
    },
    {
      icon: Sparkles,
      title: t.features.items.repairs.title,
      description: t.features.items.repairs.description,
    },
    {
      icon: Ribbon,
      title: t.features.items.luxuryFabrics.title,
      description: t.features.items.luxuryFabrics.description,
    },
    {
      icon: UserCheck,
      title: t.features.items.personalFitting.title,
      description: t.features.items.personalFitting.description,
    },
  ]
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden flex items-center min-h-[80vh]">
      {/* Background Image */}
      <Image
        src="/images/craftsmanship.png"
        alt="Craftsmanship"
        fill
        className="object-cover"
      />
      {/* Overlay to ensure contrast */}
      <div className="absolute inset-0 bg-[#202020]/40 mix-blend-multiply" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-16 will-change-transform transform-gpu gap-6"
        >
          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#ffffff] tracking-[0.023em] leading-tight drop-shadow-md">
            {t.features.subtitle}
          </h2>
        </motion.div>

        {/* Features Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group will-change-transform transform-gpu p-6 lg:p-8 bg-[#202020]/30 backdrop-blur-md border border-white/10 rounded-xl hover:bg-[#202020]/50 hover:border-white/20 transition-all duration-300"
            >
              <div className="h-full flex flex-col items-start">
                {/* Structural Icon */}
                <div className="mb-6">
                  <feature.icon className="w-8 h-8 text-[#ffc000]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-[16px] font-lambotype uppercase text-[#ffffff] tracking-[0.023em] mb-4 group-hover:text-[#ffc000] transition-colors duration-300 drop-shadow-sm">
                  {feature.title}
                </h3>
                <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#e0e0e0] leading-relaxed drop-shadow-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
