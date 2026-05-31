'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { translations } from '@/lib/translations'

const t = translations.pl

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adres',
    content: [t.footer.address, t.footer.city],
  },
  {
    icon: Phone,
    title: 'Telefon',
    content: [t.footer.phone],
    href: `tel:${t.footer.phone}`,
  },
  {
    icon: Mail,
    title: 'Email',
    content: [t.footer.email],
    href: `mailto:${t.footer.email}`,
  },
  {
    icon: Clock,
    title: 'Godziny otwarcia',
    content: [t.footer.hours.weekdays, t.footer.hours.saturday, t.footer.hours.sunday],
  },
]

export function ContactPageContent() {
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
              {t.contact.heroTitle}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground text-balance">
              {t.contact.heroSubtitle}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Masz pytania lub chcesz umówić się na konsultację? Napisz do nas lub zadzwoń - chętnie odpowiemy na wszystkie pytania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <span className="text-sm uppercase tracking-widest text-accent">
                {t.contact.infoTitle}
              </span>
              <h2 className="mt-4 text-3xl font-serif font-medium text-foreground">
                Zapraszamy do kontaktu
              </h2>
              <p className="mt-4 text-muted-foreground">
                Jesteśmy do Twojej dyspozycji. Umów się na bezpłatną konsultację i omów swoje potrzeby.
              </p>

              <div className="mt-10 space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      {item.content.map((line, i) =>
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="block text-muted-foreground text-sm hover:text-accent transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-medium text-foreground mb-4">Obserwuj nas</h3>
                <div className="flex gap-4">
                  {/* <a
                    href="#"
                    aria-label="Instagram"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                  >
                    <Instagram size={20} className="text-foreground" />
                  </a> */}
                  <a
                    href="https://www.facebook.com/Wiwi.wiwi.brand?ref=1"
                    aria-label="Facebook"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                  >
                    <Facebook size={20} className="text-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-card p-8 lg:p-12 rounded-lg border border-border">
                <h2 className="text-2xl font-serif font-medium text-foreground mb-8">
                  {t.contactForm.title}
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 fabric-texture" />

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm uppercase tracking-widest text-accent">
              {t.contact.mapTitle}
            </span>
            <h2 className="mt-4 text-3xl font-serif font-medium text-foreground">
              Znajdź nas
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden h-[400px] bg-card border border-border"
          >
            {/* Map placeholder - would be replaced with actual map integration */}
            <div className="w-full h-full flex items-center justify-center bg-secondary/50">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">{t.footer.address}</p>
                <p className="text-muted-foreground">{t.footer.city}</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-accent hover:underline"
                >
                  Otwórz w Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
