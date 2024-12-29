'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { useTheme } from '@/contexts/ThemeContext'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { language } = useLanguage()
  const { theme } = useTheme()
  const t = translations[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setSubmitStatus('success')
    // Reset form after successful submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Card className={`w-full border-none shadow-xl ${
  theme === 'dark' ? 'bg-[#1A1F2B]' : 'bg-white'
}`}>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder={t.contact.form.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className={`${
  theme === 'dark' ? 'bg-[#2A303C] text-gray-200' : 'bg-gray-100 text-gray-800'
} border-none placeholder:text-gray-400`}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder={t.contact.form.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className={`${
  theme === 'dark' ? 'bg-[#2A303C] text-gray-200' : 'bg-gray-100 text-gray-800'
} border-none placeholder:text-gray-400`}
            />
          </div>
          <div>
            <Textarea
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className={`${
  theme === 'dark' ? 'bg-[#2A303C] text-gray-200' : 'bg-gray-100 text-gray-800'
} border-none placeholder:text-gray-400 min-h-[150px]`}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0066FF] to-[#00FFB2] hover:opacity-90 transition-opacity text-white font-semibold py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </Button>
        </form>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-green-900/50 text-green-200 rounded-md text-center"
          >
            {t.contact.form.success}
          </motion.div>
        )}

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

