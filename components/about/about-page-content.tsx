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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent" />
        <div className="absolute inset-0 fabric-texture" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.about.heroTitle}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-balance">
              {t.about.heroSubtitle}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/images/tailor-portrait.jpg"
                  alt="Portret krawcowej"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded-lg -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-widest text-accent">
                {t.about.storyTitle}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
                Krawiectwo oparte na wiedzy i pasji
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
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
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.about.valuesTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              To, co nas wyróżnia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-card border border-border flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.about.studio.timelineTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              {t.about.studio.timelineSubtitle}
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {t.about.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-1/2 rounded-full bg-accent" />

                <span className="text-sm text-accent font-medium">{item.year}</span>
                <h3 className="mt-2 text-xl font-serif font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Preview */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture opacity-30" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-widest text-accent">
                {t.about.studio.title}
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-cream">
                {t.about.studio.subtitle}
              </h2>
              <p className="mt-6 text-cream/70 leading-relaxed">
                {t.about.studio.description}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base text-cream/70 mt-4">
                {t.machines.map((item) => (
                  <li key={item} className="capitalize">
                    {item}
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
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
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
