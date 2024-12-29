'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Globe, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { translations } from '@/config/translations'
import Image from 'next/image'

export function Header() {
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: 'home', label: t.nav.home },
    { href: 'nosotros', label: t.nav.about },
    { href: 'servicios', label: t.nav.services },
    { href: 'proyectos', label: t.nav.projects },
    { href: 'contacto', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2">
          <Image 
            src="/logo-limpio.png" 
            alt="Code Studio Solutions Logo" 
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-xl text-gray-800 dark:text-gray-200">Code Studio Solutions</span>
        </button>

        <nav className={`md:flex items-center justify-center space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white dark:bg-gray-800 pb-4 space-y-4 shadow-md' : 'hidden'}`}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === `/#${item.href}` ? 'text-primary' : 'text-gray-700 dark:text-gray-300'
              } nav-link button-hover-effect`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="button-hover-effect text-gray-700 dark:text-gray-300">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('es')}>
                Español
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleTheme} className="button-hover-effect text-gray-700 dark:text-gray-300">
            {mounted && (theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            ))}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden button-hover-effect text-gray-700 dark:text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

