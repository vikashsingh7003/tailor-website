'use client'

import { motion } from 'framer-motion'
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
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 fabric-texture" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 will-change-transform transform-gpu"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.features.title}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            {t.features.subtitle}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group will-change-transform transform-gpu"
            >
              <div className="h-full p-8 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
