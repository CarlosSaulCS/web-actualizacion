'use client'

import { ContactForm } from './contact-form'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]
  return (
    <section className="w-full py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
        </ScrollAnimation>
        <div className="w-full max-w-2xl">
          <ScrollAnimation>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

