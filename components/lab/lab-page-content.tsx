'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Scissors, Ruler, Palette, Sparkles, Shield, Award } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function LabPageContent() {
  const { t } = useLanguage()

  const equipment = [
    {
      icon: Scissors,
      ...t.lab.equipmentItems.sewing,
    },
    {
      icon: Ruler,
      ...t.lab.equipmentItems.tools,
    },
    {
      icon: Palette,
      ...t.lab.equipmentItems.templates,
    },
    {
      icon: Sparkles,
      ...t.lab.equipmentItems.accessories,
    },
  ]

  const materials = [
    {
      ...t.lab.materialItems.wool,
      image: '/images/fabric-wool.png',
    },
    {
      ...t.lab.materialItems.silk,
      image: '/images/fabric-silk.png',
    },
    {
      ...t.lab.materialItems.cotton,
      image: '/images/fabric-cotton.png',
    },
    {
      ...t.lab.materialItems.linen,
      image: '/images/fabric-linen.png',
    },
  ]

  const certifications = [
    {
      icon: Shield,
      ...t.lab.certifications.quality,
    },
    {
      icon: Award,
      ...t.lab.certifications.fabrics,
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
              {t.lab.heroTitle}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-balance">
              {t.lab.heroSubtitle}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.lab.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/studio.png"
                alt="Pracownia krawiecka"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Smaller Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/craftsmanship.png"
                  alt="Detale rzemiosła"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/gallery-3.png"
                  alt="Tkaniny"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/gallery-4.png"
                  alt="Haft"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/hero-dress.jpeg"
                  alt="Suknia"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              {t.lab.equipmentTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              {t.lab.equipmentSubtitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-lg border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
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
              {t.lab.materialsTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              {t.lab.materialsSubtitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <Image
                    src={material.image}
                    alt={material.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-serif font-medium text-foreground">
                  {material.title}
                </h3>
                <p className="mt-1 text-muted-foreground text-sm">
                  {material.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture opacity-30" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 p-8 bg-cream/5 rounded-lg"
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-accent/20 flex items-center justify-center">
                  <cert.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-cream">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-cream/70 text-sm">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
