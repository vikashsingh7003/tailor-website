'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { translations } from '@/lib/translations'

const t = translations.pl

const testimonials = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'Klientka',
    content: 'Suknia ślubna z WIWI to prawdziwe dzieło sztuki. Każdy detal był dopracowany do perfekcji. Polecam z całego serca!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Piotr Nowak',
    role: 'Klient',
    content: 'Profesjonalne podejście i niesamowita jakość wykonania. Mój garnitur na miarę to najlepsza inwestycja w garderobę, jaką zrobiłem.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Magdalena Wiśniewska',
    role: 'Klientka',
    content: 'Przeróbki wykonane szybko i perfekcyjnie. Stare sukienki wyglądają jak nowe. Jestem pod ogromnym wrażeniem.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Tomasz Zieliński',
    role: 'Klient',
    content: 'Wreszcie znalazłem krawca, który rozumie moje potrzeby. Świetna komunikacja i doskonałe efekty końcowe.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 fabric-texture" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.testimonials.title}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            {t.testimonials.subtitle}
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8 lg:px-16"
              >
                {/* Quote Icon */}
                <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8 text-pretty">
                  &quot;{testimonials[currentIndex].content}&quot;
                </p>

                {/* Author */}
                <div>
                  <p className="text-lg font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                {/* Rating */}
                <div className="mt-4 flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              aria-label="Poprzednia opinia"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Następna opinia"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Przejdź do opinii ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
