'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { Calendar, Clock, MapPin, CreditCard, Phone, AlertCircle, Check } from 'lucide-react'

export function CoursesContact() {
  const { t } = useLanguage()
  const data = t.coursesPage

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+48',
    phone: '',
    email: '',
    course: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      // Wpisz tutaj email klienta zamiast "twoj@email.com"
      const response = await fetch("https://formsubmit.co/ajax/sayongbonk@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Nowe zapisy na kurs - WiWi",
          ...formData,
          phone: `${formData.countryCode} ${formData.phone}`
        }),
      });
      
      const result = await response.json();
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', countryCode: '+48', phone: '', email: '', course: '', message: '' })
      } else {
        console.error("Web3Forms error:", result);
        setStatus('error')
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 4000)
  }

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
            className="bg-[#ffffff] p-8 lg:p-12 relative"
          >
            <h3 className="text-[24px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-4">{data.enrollForm.title}</h3>
            <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d] mb-10">{data.enrollForm.subtitle}</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[#ffc000]/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="text-[#ffc000]" size={32} />
                </div>
                <h4 className="text-[20px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
                  Zgłoszenie wysłane!
                </h4>
                <p className="text-[16px] font-lambotype uppercase tracking-[0.023em] text-[#7d7d7d]">
                  Odezwiemy się do Ciebie wkrótce.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={data.enrollForm.name}
                    required
                    className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex w-full">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-4 py-4 bg-white border border-r-0 border-[#e0e0e0] text-[#202020] focus:outline-none focus:ring-0 focus:border-[#202020] transition-all text-[16px] font-lambotype uppercase tracking-[0.023em] appearance-none cursor-pointer shrink-0 min-w-[110px] text-center"
                    >
                      <option value="+48">🇵🇱 +48</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={data.enrollForm.phone}
                      required
                      className="w-full flex-1 min-w-0 bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={data.enrollForm.email}
                    className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all text-[16px] font-lambotype uppercase tracking-[0.023em]"
                  />
                </div>
                <div>
                  <select 
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={data.enrollForm.message}
                    rows={4}
                    className="w-full bg-white border border-[#e0e0e0] px-4 py-4 text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:border-[#202020] focus:ring-0 transition-all resize-none text-[16px] font-lambotype uppercase tracking-[0.023em]"
                  />
                </div>
                
                {status === 'error' && (
                  <p className="text-red-600 text-[14px] font-lambotype uppercase tracking-[0.023em] flex items-center gap-2">
                    <AlertCircle size={16} />
                    Wystąpił błąd. Spróbuj ponownie później.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#202020] text-white text-[16px] font-lambotype uppercase tracking-[0.023em] hover:bg-[#ffc000] disabled:bg-[#7d7d7d] transition-colors duration-300 mt-4"
                >
                  {status === 'submitting' ? 'Wysyłanie...' : data.enrollForm.submit}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
