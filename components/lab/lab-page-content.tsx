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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden flex items-center justify-start min-h-[60vh] lg:min-h-[70vh] bg-[#202020]">
        <Image 
          src="/images/atelier_hero.png" 
          alt="Atelier" 
          fill 
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[12px] md:text-[16px] font-lambotype uppercase tracking-[0.023em] text-white block mb-4">
              {t.lab.heroTitle}
            </span>
            <h1 className="text-[64px] md:text-[80px] lg:text-[120px] font-lambotype uppercase text-white leading-[0.92] tracking-[0.023em] text-balance">
              {t.lab.heroSubtitle}
            </h1>
            <p className="mt-6 text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] max-w-2xl leading-relaxed">
              {t.lab.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 lg:py-32 relative overflow-hidden bg-[#ffffff]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]"
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
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative aspect-square overflow-hidden bg-[#f5f5f5]"
              >
                <Image
                  src="/images/atelier_detail_1.png"
                  alt="Craftsmanship Details"
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
                className="relative aspect-square overflow-hidden bg-[#f5f5f5]"
              >
                <Image
                  src="/images/atelier_detail_2.png"
                  alt="Fabrics"
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
                className="relative aspect-square overflow-hidden bg-[#f5f5f5]"
              >
                <Image
                  src="/images/gallery-3.png"
                  alt="Fabrics"
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
                className="relative aspect-square overflow-hidden bg-[#f5f5f5]"
              >
                <Image
                  src="/images/gallery-4.png"
                  alt="Embroidery"
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
              {t.lab.equipmentSubtitle}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {equipment.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-t border-[#e0e0e0] pt-6 lg:pt-8 pr-6 pb-8"
              >
                <div className="mb-6">
                  <item.icon className="w-8 h-8 text-[#202020]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
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
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f5f5f5]">
                  <Image
                    src={material.image}
                    alt={material.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
                  {material.title}
                </h3>
                <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed flex-grow">
                  {material.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-32 bg-[#181818] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto border-t border-[#333333]">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start pt-8 pb-8 pr-8"
              >
                <div className="mb-6">
                  <cert.icon className="w-8 h-8 text-[#ffffff]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#ffffff] mb-3">
                    {cert.title}
                  </h3>
                  <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] leading-relaxed">
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
