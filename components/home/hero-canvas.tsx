'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 240

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])

  // Preload images
  useEffect(() => {
    // Load first frame immediately for initial paint
    const firstImg = new Image()
    firstImg.src = `/images/hero-sequence/ezgif-frame-001.jpg`
    imagesRef.current[0] = firstImg
    
    firstImg.onload = () => {
      renderFrame(0)
      
      // Lazily load the rest of the sequence so we don't block network and CPU on load
      const loadRest = () => {
        for (let i = 2; i <= FRAME_COUNT; i++) {
          const img = new Image()
          const frameNum = i.toString().padStart(3, '0')
          img.src = `/images/hero-sequence/ezgif-frame-${frameNum}.jpg`
          imagesRef.current[i - 1] = img
        }
      }

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        requestIdleCallback(loadRest)
      } else {
        setTimeout(loadRest, 500)
      }
    }
  }, [])

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const img = imagesRef.current[index]

    if (canvas && ctx && img && img.complete) {
      // Calculate object-fit cover
      const hRatio = canvas.width / img.width
      const vRatio = canvas.height / img.height
      const ratio = Math.max(hRatio, vRatio)
      
      const centerShift_x = (canvas.width - img.width * ratio) / 2
      const centerShift_y = (canvas.height - img.height * ratio) / 2
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio)
    }
  }

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const dpr = window.devicePixelRatio || 1
        canvasRef.current.width = window.innerWidth * dpr
        canvasRef.current.height = window.innerHeight * dpr
        
        // Find current frame based on scroll and redraw
        const st = ScrollTrigger.getById('hero-sequence')
        if (st) {
          const progress = st.progress
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.ceil(progress * FRAME_COUNT)
          )
          renderFrame(frameIndex)
        } else {
          renderFrame(0)
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useGSAP(() => {
    ScrollTrigger.create({
      id: 'hero-sequence',
      trigger: containerRef.current,
      start: 'top top',
      end: '+=300%', // Scrolls for 3x the window height
      pin: true,
      scrub: 0.5, // Slight smooth delay for premium feel
      onUpdate: (self) => {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(self.progress * FRAME_COUNT))
        )
        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => renderFrame(frameIndex))
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full z-0">
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover"
      />
    </div>
  )
}
