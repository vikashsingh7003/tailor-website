'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Calendar, Clock, MapPin, CreditCard, Phone } from 'lucide-react'

export function CoursesContact() {
  const { t } = useLanguage()
  const data = t.coursesPage

  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-32 border-t border-[#e0e0e0]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Class Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-[40px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-12">{data.classDetails.title}</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6 border-b border-[#e0e0e0] pb-6">
                <Calendar size={24} className="text-[#202020] shrink-0" strokeWidth={1.5} />
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{data.classDetails.day}</p>
              </div>
              <div className="flex items-center gap-6 border-b border-[#e0e0e0] pb-6">
                <Clock size={24} className="text-[#202020] shrink-0" strokeWidth={1.5} />
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{data.classDetails.time}</p>
              </div>
              <div className="flex items-center gap-6 border-b border-[#e0e0e0] pb-6">
                <MapPin size={24} className="text-[#202020] shrink-0" strokeWidth={1.5} />
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{data.classDetails.location}</p>
              </div>
              <div className="flex items-center gap-6 border-b border-[#e0e0e0] pb-6">
                <Phone size={24} className="text-[#202020] shrink-0" strokeWidth={1.5} />
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{data.classDetails.phone}</p>
              </div>
              <div className="flex items-center gap-6 border-b border-[#e0e0e0] pb-6">
                <CreditCard size={24} className="text-[#202020] shrink-0" strokeWidth={1.5} />
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#202020]">{data.classDetails.payment}</p>
              </div>
            </div>

            <Link href="#enroll-form" className="inline-flex items-center justify-center px-6 py-4 bg-[#ffc000] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#917300] transition-colors duration-300">
              {data.classDetails.enrolNow} <span className="ml-2 text-[16px]">&rarr;</span>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] overflow-hidden hidden lg:block bg-white"
          >
            <Image
              src="/images/course_contact.png"
              alt="Sewing Studio"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Form */}
          <motion.div
            id="enroll-form"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#ffffff] p-8 lg:p-12"
          >
            <h3 className="text-[24px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-4">{data.enrollForm.title}</h3>
            <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-10">{data.enrollForm.subtitle}</p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={data.enrollForm.name}
                  required
                  className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder={data.enrollForm.phone}
                  required
                  className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                />
                <input
                  type="email"
                  placeholder={data.enrollForm.email}
                  className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                />
              </div>
              <div>
                <select 
                  defaultValue=""
                  required
                  className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] invalid:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all appearance-none text-[16px] font-lambotype uppercase tracking-[0.023em]"
                >
                  <option value="" disabled>{data.enrollForm.course}</option>
                  <option value="basic">{data.enrollForm.courseOptions.basic}</option>
                  <option value="dress">{data.enrollForm.courseOptions.dress}</option>
                  <option value="advanced">{data.enrollForm.courseOptions.advanced}</option>
                  <option value="embroidery">{data.enrollForm.courseOptions.embroidery}</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder={data.enrollForm.message}
                  rows={4}
                  className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all resize-none text-[16px] font-lambotype uppercase tracking-[0.023em]"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#202020] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#ffc000] transition-colors duration-300 mt-4"
              >
                {data.enrollForm.submit}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
