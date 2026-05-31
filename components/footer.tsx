'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { translations } from '@/lib/translations'

const t = translations.pl

const quickLinks = [
  { href: '/', label: t.nav.home },
  { href: '/o-mnie', label: t.nav.about },
  { href: '/oferta', label: t.nav.offers },
  { href: '/pracownia', label: t.nav.lab },
  { href: '/kontakt', label: t.nav.contact },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <span className="text-3xl font-[family-name:var(--font-great-vibes)] text-cream">
                {/* {t.footer.company} */}
                <img src="2026-05-31_16.55.43-removebg-preview.png" alt="WIWI Logo" className='w-40 h-40' />
              </span>
            </Link>
            <p className="mt-4 text-cream/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
              >
                <Instagram size={18} className="text-cream" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
              >
                <Facebook size={18} className="text-cream" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-cream mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-accent" />
                <span>
                  {t.footer.address}
                  <br />
                  {t.footer.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${t.footer.phone}`}
                  className="flex items-center gap-3 text-cream/70 text-sm hover:text-cream transition-colors"
                >
                  <Phone size={18} className="flex-shrink-0 text-accent" />
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-3 text-cream/70 text-sm hover:text-cream transition-colors"
                >
                  <Mail size={18} className="flex-shrink-0 text-accent" />
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-cream mb-6">
              {t.footer.hours.title}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-cream/70 text-sm">
                <Clock size={18} className="flex-shrink-0 text-accent" />
                {t.footer.hours.weekdays}
              </li>
              <li className="text-cream/70 text-sm pl-[30px]">
                {t.footer.hours.saturday}
              </li>
              <li className="text-cream/70 text-sm pl-[30px]">
                {t.footer.hours.sunday}
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm uppercase tracking-wider text-cream mb-6">
              {t.footer.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 text-sm hover:text-cream hover:pl-2 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <p className="text-center text-cream/50 text-xs">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
