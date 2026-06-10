'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'

export function CoursesList() {
  const { t } = useLanguage()
  const data = t.coursesPage

  const courses = [
    { image: '/images/course_basic.png', ...data.courses.items.basic },
    { image: '/images/course_dress.png', ...data.courses.items.dress },
    { image: '/images/course_advanced.png', ...data.courses.items.advanced },
    { image: '/images/course_embroidery.png', ...data.courses.items.embroidery },
  ]

  return (
    <section className="bg-[#ffffff] py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Popular Courses Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-16 will-change-transform transform-gpu gap-6"
        >
          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight">
            {data.popularCourses.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#f5f5f5] flex flex-col group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">{course.title}</h3>
                <p className="text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] flex-grow leading-relaxed">{course.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#181818] p-10 lg:p-16 flex flex-col md:flex-row items-start md:items-center justify-between text-white mb-24"
        >
          <div className="mb-8 md:mb-0 max-w-xl">
            <h3 className="text-[24px] md:text-[32px] font-lambotype uppercase tracking-[0.023em] mb-4 text-balance">{data.ctaBanner.title}</h3>
            <p className="text-[#7d7d7d] text-[16px] font-lambotype uppercase tracking-[0.023em]">{data.ctaBanner.description}</p>
          </div>
          <Link href="#enroll-form" className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300 whitespace-nowrap shrink-0">
            {data.ctaBanner.enrolNow} <span className="ml-2 text-[16px]">&rarr;</span>
          </Link>
        </motion.div>

        {/* Detailed Course List */}
        <div id="courses" className="mb-16 scroll-mt-24">
          <h2 className="text-[40px] md:text-[54px] font-lambotype uppercase text-[#202020] tracking-[0.023em] leading-tight mb-2">{data.courses.title}</h2>
          <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d]">{data.courses.subtitle}</p>
        </div>

        <div className="space-y-0 border-t border-[#e0e0e0]">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row border-b border-[#e0e0e0] group"
            >
              <div className="relative w-full md:w-1/3 lg:w-1/4 h-64 md:h-auto shrink-0 bg-[#f5f5f5] overflow-hidden">
                <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform transform-gpu" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center flex-grow bg-[#ffffff]">
                <h3 className="text-[24px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-4">{course.title}</h3>
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-8 leading-relaxed max-w-3xl">{course.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-1">{data.courses.durationLabel}</span>
                    <span className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{course.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-1">{data.courses.batchLabel}</span>
                    <span className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{course.batch}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-1">{data.courses.modeLabel}</span>
                    <span className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{course.mode}</span>
                  </div>
                </div>

                <div className="mt-auto flex justify-start">
                  <Link href="#enroll-form" className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300">
                    {data.courses.enrolNow} <span className="ml-2 text-[16px]">&rarr;</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#181818] p-8 lg:p-12 flex flex-col sm:flex-row items-center justify-between text-white gap-8"
        >
          <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-center sm:text-left">{data.ctaBannerSmall.text}</p>
          <Link href="#enroll-form" className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300 whitespace-nowrap shrink-0">
            {data.ctaBannerSmall.enrolNow} <span className="ml-2 text-[16px]">&rarr;</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
