'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Facebook, Instagram, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { useTheme } from '@/contexts/ThemeContext'
import { submitContactForm } from '@/actions/contact'
import { toast } from 'sonner'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isPending, startTransition] = useTransition()
  const { language } = useLanguage()
  const { theme } = useTheme()
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const form = new FormData()
    form.append('name', formData.name)
    form.append('email', formData.email)
    form.append('message', formData.message)

    startTransition(async () => {
      const result = await submitContactForm(form)
      
      if (result.error) {
        toast.error(result.error)
      } else {
        toast.success(t.contact.form.success)
        setFormData({ name: '', email: '', message: '' })
      }
    })
  }

  return (
    <Card className={`w-full border-none shadow-xl ${
      theme === 'dark' ? 'bg-gray-800 dark:bg-gray-800' : 'bg-white'
    }`}>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              name="name"
              placeholder={t.contact.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={`${
                theme === 'dark' ? 'bg-gray-700 dark:bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              } border-none placeholder:text-gray-400`}
              disabled={isPending}
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder={t.contact.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={`${
                theme === 'dark' ? 'bg-gray-700 dark:bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              } border-none placeholder:text-gray-400`}
              disabled={isPending}
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className={`${
                theme === 'dark' ? 'bg-gray-700 dark:bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
              } border-none placeholder:text-gray-400 min-h-[150px]`}
              disabled={isPending}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0066FF] to-[#00FFB2] hover:opacity-90 transition-opacity text-white font-semibold py-6"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                {t.contact.form.sending}
              </div>
            ) : (
              t.contact.form.submit
            )}
          </Button>
        </form>

        <div className="flex justify-center space-x-6 mt-8">
          <motion.a
            href="https://www.facebook.com/share/1BVCf3ZkF3/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            <Facebook className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/code_solutions_studio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`${
              theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            } transition-colors`}
          >
            <Instagram className="h-6 w-6" />
          </motion.a>
        </div>
      </CardContent>
    </Card>
  )
}

