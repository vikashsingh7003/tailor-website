'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/o-mnie', label: t.nav.about },
    { href: '/oferta', label: t.nav.offers },
    { href: '/pracownia', label: t.nav.lab },
    { href: '/kontakt', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/10 backdrop-blur-md border-b border-white/10 ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.span
              className="font-serif font-medium text-foreground leading-tight text-balance flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img src="/images/logo-wiwi.png" alt="WIWI Logo" className='w-60 h-60 object-contain' />

            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 mix-blend-difference text-white">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            {/* Language Toggle Desktop */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium tracking-widest opacity-80 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
            >
              <Globe size={16} />
              {language.toUpperCase()}
            </motion.button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden mix-blend-difference text-white">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 opacity-80 hover:opacity-100 transition-opacity flex items-center justify-center"
              aria-label="Toggle language"
            >
              <span className="text-sm font-semibold tracking-widest">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 opacity-100"
              aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 shadow-xl"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
