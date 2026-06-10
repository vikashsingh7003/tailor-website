'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Scissors, Ruler, Wrench, RefreshCw, MessageCircle, Palette, CheckCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function OffersPageContent() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Scissors,
      image: '/images/service-tailoring.png',
      ...t.services.items.tailoring,
    },
    {
      icon: Ruler,
      image: '/images/service-adjustments.png',
      ...t.services.items.adjustments,
    },
    {
      icon: Wrench,
      image: '/images/service-repairs.png',
      ...t.services.items.repairs,
    },
    {
      icon: RefreshCw,
      image: '/images/service-redesign.png',
      ...t.services.items.redesign,
    },
  ]

  const processSteps = [
    {
      icon: MessageCircle,
      number: '01',
      ...t.offers.processSteps.consultation,
    },
    {
      icon: Palette,
      number: '02',
      ...t.offers.processSteps.design,
    },
    {
      icon: Ruler,
      number: '03',
      ...t.offers.processSteps.fitting,
    },
    {
      icon: CheckCircle,
      number: '04',
      ...t.offers.processSteps.delivery,
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
              {t.offers.heroTitle}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-balance">
              {t.offers.heroSubtitle}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Od szycia na miarę po profesjonalne przeróbki - oferujemy pełen zakres usług krawieckich najwyższej jakości.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture opacity-30" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.offers.processTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-cream">
              Jak pracujemy
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-cream/20" />
                )}

                <div className="text-center">
                  {/* Number */}
                  <span className="text-5xl font-serif font-light text-accent/30">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 rounded-full bg-cream/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-6 text-xl font-serif font-medium text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-cream/60 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.offers.pricingTitle}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-serif font-medium text-foreground">
              {t.offers.pricingSubtitle}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {t.offers.pricingDescription}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm uppercase tracking-wider rounded-sm hover:bg-soft-brown transition-all duration-300"
              >
                {t.offers.pricingCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
