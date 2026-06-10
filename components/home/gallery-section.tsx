'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

const galleryImages = [
  { src: '/images/gallery-7.jpeg', alt: 'Elegancka suknia ślubna', aspect: 'tall' },
  // { src: '/images/gallery-1.png', alt: 'Garnitur na miarę', aspect: 'square' },
  { src: '/images/gallery-6.jpeg', alt: 'Suknia wieczorowa', aspect: 'square' },
  { src: '/images/craftsmanship.png', alt: 'Rzemiosło krawieckie', aspect: 'wide' },
  { src: '/images/gallery-3.png', alt: 'Tkaniny premium', aspect: 'square' },
  { src: '/images/gallery-4.png', alt: 'Detale haftu', aspect: 'tall' },
  { src: '/images/studio.png', alt: 'Pracownia krawiecka', aspect: 'wide' },
]

export function GallerySection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 will-change-transform transform-gpu"
        >
          <span className="text-sm uppercase tracking-widest text-accent">
            {t.gallery.title}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            {t.gallery.subtitle}
          </h2>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid will-change-transform transform-gpu"
            >
              <button
                onClick={() => setSelectedImage(image.src)}
                className="group relative block w-full overflow-hidden rounded-lg cursor-pointer"
              >
                <div
                  className={`relative ${
                    image.aspect === 'tall'
                      ? 'aspect-[3/4]'
                      : image.aspect === 'wide'
                      ? 'aspect-[4/3]'
                      : 'aspect-square'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform transform-gpu"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-cream text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t.gallery.viewImage || 'Zobacz'}
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
              aria-label="Zamknij"
            >
              <X className="w-6 h-6 text-cream" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Powiększony obraz"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
