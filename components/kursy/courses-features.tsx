'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Heart, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function CoursesFeatures() {
  const { t } = useLanguage()
  const data = t.coursesPage.whyLearn

  const features = [
    { icon: BookOpen, ...data.items.handsOn },
    { icon: Users, ...data.items.expert },
    { icon: Heart, ...data.items.friendly },
    { icon: MapPin, ...data.items.inPerson },
  ]

  return (
    <section id="features" className="bg-[#f5f5f5] py-20 lg:py-32 scroll-mt-24 border-b border-[#e0e0e0]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-16 will-change-transform transform-gpu gap-6"
        >
          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight">
            {data.title}
          </h2>
        </motion.div>

        {/* Features Grid with Harsh Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-t border-[#e0e0e0] pt-6 lg:pt-8 pr-6 pb-8"
            >
              <div className="mb-6">
                <feature.icon size={32} className="text-[#202020]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-3">{feature.title}</h3>
              <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
