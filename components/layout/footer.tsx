'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { useRouter } from 'next/navigation'
import { useTheme } from '@/contexts/ThemeContext'

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const router = useRouter()
  const { theme } = useTheme()

  const handleNavigation = (sectionId: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
  }

  return (
    <footer className={`${
  theme === 'dark' ? 'bg-[#1A1F2B] text-gray-300' : 'bg-white text-gray-600'
}`}>
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
  theme === 'dark' ? 'text-white' : 'text-gray-900'
}`}>
              {t.footer.aboutUsTitle}
            </h3>
            <p className={`text-sm ${
  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
}`}>
              {t.footer.aboutUsDescription}
            </p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
  theme === 'dark' ? 'text-white' : 'text-gray-900'
}`}>
              {t.footer.quickLinksTitle}
            </h3>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => handleNavigation('home')} className="text-sm text-left text-gray-400 hover:text-white transition-colors">{t.nav.home}</button>
              <button onClick={() => handleNavigation('nosotros')} className="text-sm text-left text-gray-400 hover:text-white transition-colors">{t.nav.about}</button>
              <button onClick={() => handleNavigation('servicios')} className="text-sm text-left text-gray-400 hover:text-white transition-colors">{t.nav.services}</button>
              <button onClick={() => handleNavigation('proyectos')} className="text-sm text-left text-gray-400 hover:text-white transition-colors">{t.nav.projects}</button>
              <button onClick={() => handleNavigation('contacto')} className="text-sm text-left text-gray-400 hover:text-white transition-colors">{t.nav.contact}</button>
            </nav>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
  theme === 'dark' ? 'text-white' : 'text-gray-900'
}`}>
              {t.footer.contactTitle}
            </h3>
            <div className={`text-sm ${
  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
} space-y-2`}>
              <a 
                href="mailto:codesolutions@xg237.onmicrosoft.com" 
                className="block hover:text-white transition-colors"
              >
                codesolutions@xg237.onmicrosoft.com
              </a>
              <p>Tel: +52 248 200 9620</p>
              <p>Ciudad de México, México</p>
            </div>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
  theme === 'dark' ? 'text-white' : 'text-gray-900'
}`}>
              {t.footer.newsletterTitle}
            </h3>
            <div className="flex space-x-2">
              <Input 
                placeholder={t.footer.newsletterPlaceholder} 
                type="email" 
                className={`${
  theme === 'dark' ? 'bg-[#2A303C] text-gray-200' : 'bg-gray-100 text-gray-800'
} border-none placeholder:text-gray-400`}
              />
              <Button className="bg-[#0066FF] hover:opacity-90 transition-opacity">
                {t.footer.newsletterButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-t ${
  theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${
  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
}`}>
              {t.footer.copyright}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.terms}</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.cookies}</Link>
              <Link href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors">{t.footer.accessibility}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

