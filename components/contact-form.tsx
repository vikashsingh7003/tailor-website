'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    purpose: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email jest wymagany'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy format email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany'
    }
    if (!formData.purpose) {
      newErrors.purpose = 'Cel zapytania jest wymagany'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Wiadomość jest wymagana'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('submitting')
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setStatus('success')
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      purpose: '',
      message: '',
    })

    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-4 bg-white border text-[#202020] placeholder:text-[#7d7d7d] focus:outline-none focus:ring-0 focus:border-[#202020] transition-all text-[16px] font-lambotype uppercase tracking-[0.023em] ${
      errors[fieldName] ? 'border-red-600' : 'border-[#e0e0e0]'
    }`

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#ffffff] p-8 lg:p-12 border border-[#e0e0e0]"
    >
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
            {t.contactForm.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses('name')}
            placeholder="Jan Kowalski"
          />
          {errors.name && (
            <p className="mt-2 text-[12px] font-lambotype uppercase tracking-[0.023em] text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
            {t.contactForm.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses('email')}
            placeholder="jan@example.com"
          />
          {errors.email && (
            <p className="mt-2 text-[12px] font-lambotype uppercase tracking-[0.023em] text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone and Address Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
            {t.contactForm.phone} *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses('phone')}
            placeholder="+48 123 456 789"
          />
          {errors.phone && (
            <p className="mt-2 text-[12px] font-lambotype uppercase tracking-[0.023em] text-red-600 flex items-center gap-1">
              <AlertCircle size={14} />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="address" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
            {t.contactForm.address}
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={inputClasses('address')}
            placeholder="ul. Przykładowa 123, Warszawa"
          />
        </div>
      </div>

      {/* Purpose */}
      <div>
        <label htmlFor="purpose" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
          {t.contactForm.purpose} *
        </label>
        <select
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className={inputClasses('purpose') + ' appearance-none'}
        >
          <option value="" disabled>Wybierz cel zapytania</option>
          <option value="tailoring">{t.contactForm.purposes.tailoring}</option>
          <option value="repairs">{t.contactForm.purposes.repairs}</option>
          <option value="consultation">{t.contactForm.purposes.consultation}</option>
          <option value="other">{t.contactForm.purposes.other}</option>
        </select>
        {errors.purpose && (
          <p className="mt-2 text-[12px] font-lambotype uppercase tracking-[0.023em] text-red-600 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.purpose}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-[14px] font-lambotype uppercase tracking-[0.023em] text-[#202020] mb-2">
          {t.contactForm.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={inputClasses('message') + ' resize-none'}
          placeholder="Opisz swoje potrzeby..."
        />
        {errors.message && (
          <p className="mt-2 text-[12px] font-lambotype uppercase tracking-[0.023em] text-red-600 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className={`w-full inline-flex items-center justify-center px-6 py-4 text-[16px] font-lambotype uppercase tracking-[0.023em] transition-colors duration-300 ${
          status === 'success'
            ? 'bg-[#202020] text-white'
            : status === 'error'
            ? 'bg-red-600 text-white'
            : 'bg-[#ffc000] text-white hover:bg-[#917300]'
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {status === 'submitting' && (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
            Wysyłanie...
          </>
        )}
        {status === 'success' && (
          <>
            <Check size={18} className="mr-2" />
            {t.contactForm.success}
          </>
        )}
        {status === 'error' && (
          <>
            <AlertCircle size={18} className="mr-2" />
            {t.contactForm.error}
          </>
        )}
        {status === 'idle' && (
          <>
            <Send size={18} className="mr-2" />
            {t.contactForm.submit}
          </>
        )}
      </button>
    </motion.form>
  )
}
