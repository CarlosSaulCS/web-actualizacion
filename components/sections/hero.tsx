'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import Image from 'next/image'

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center min-h-[80vh] bg-background dark:bg-[#0A1120] transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
          <ScrollAnimation>
            <Image
              src="/logo-limpio.png"
              alt="Code Solutions Studio Logo"
              width={250}
              height={250}
              className="mx-auto mb-8 rounded-full"
              priority
              unoptimized
            />
          </ScrollAnimation>
          <ScrollAnimation>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
          </ScrollAnimation>
          <ScrollAnimation>
            <p className="max-w-[700px] text-lg text-gray-600 dark:text-gray-300">
              {t.hero.subtitle}
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#0066FF] to-[#00FFB2] text-white button-hover-effect min-w-[200px]"
                onClick={() => scrollToSection('contacto')}
              >
                {t.hero.cta.primary}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="button-hover-effect border-gray-500 text-gray-700 hover:bg-gray-100 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 min-w-[200px]"
                onClick={() => scrollToSection('servicios')}
              >
                {t.hero.cta.secondary}
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

