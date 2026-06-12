'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/o-mnie', label: t.nav.about },
    { href: '/oferta', label: t.nav.offers },
    { href: '/pracownia', label: t.nav.lab },
    { href: '/kontakt', label: t.nav.contact },
  ]

  return (
    <footer className="relative bg-[#181818] text-white overflow-hidden mt-auto">
      <div className="relative z-10 border-t border-[#494949]">
        {/* Main Footer */}
        <div className="w-full px-6 lg:px-12 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-[1920px] mx-auto">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="inline-block">
                <span className="flex items-center justify-start">
                  <img src="/images/logo-wiwi.png" alt="WIWI Logo" className='h-72 w-72 object-contain -ml-4' />
                </span>
              </Link>
              <p className="mt-4 text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="https://www.facebook.com/Wiwi.wiwi.brand?ref=1"
                  aria-label="Facebook"
                  target="_blank"
                  className="w-10 h-10 border border-[#7d7d7d] flex items-center justify-center hover:border-white transition-colors duration-300"
                >
                  <Facebook size={18} className="text-white" />
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
              <h4 className="text-[18px] uppercase font-lambotype tracking-[0.023em] text-white mb-6">
                Kontakt
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em]">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-[#ffc000]" />
                  <span>
                    {t.footer.address}
                    <br />
                    {t.footer.city}
                  </span>
                </li>
                <li>
                  <a
                    href={`tel:${t.footer.phone}`}
                    className="flex items-center gap-3 text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] hover:text-[#ffc000] transition-colors"
                  >
                    <Phone size={18} className="flex-shrink-0 text-[#ffc000]" />
                    {t.footer.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${t.footer.email}`}
                    className="flex items-center gap-3 text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] hover:text-[#ffc000] transition-colors"
                  >
                    <Mail size={18} className="flex-shrink-0 text-[#ffc000]" />
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
              <h4 className="text-[18px] uppercase font-lambotype tracking-[0.023em] text-white mb-6">
                {t.footer.hours.title}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em]">
                  <Clock size={18} className="flex-shrink-0 text-[#ffc000]" />
                  {t.footer.hours.weekdays}
                </li>
                <li className="text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] pl-[30px]">
                  {t.footer.hours.saturday}
                </li>
                <li className="text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] pl-[30px]">
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
              <h4 className="text-[18px] uppercase font-lambotype tracking-[0.023em] text-white mb-6">
                {t.footer.quickLinks.title}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#969696] text-[16px] uppercase font-lambotype tracking-[0.023em] hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300 text-[#ffc000]">&rarr;</span>
                      <span className="group-hover:ml-2 transition-all duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#494949] bg-[#000000]">
          <div className="w-full px-6 lg:px-12 py-4">
            <p className="text-center text-[#7d7d7d] text-[12px] uppercase font-lambotype tracking-[0.023em] max-w-[1920px] mx-auto">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
