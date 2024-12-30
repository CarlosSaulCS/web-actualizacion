'use client'

import { useState } from 'react'
import { Briefcase, Users2, Lightbulb, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Briefcase':
      return <Briefcase className="h-12 w-12 text-blue-500" />;
    case 'Users2':
      return <Users2 className="h-12 w-12 text-green-500" />;
    case 'Lightbulb':
      return <Lightbulb className="h-12 w-12 text-yellow-500" />;
    case 'Target':
      return <Target className="h-12 w-12 text-red-500" />;
    default:
      return null;
  }
};

export function Features() {
  const { language } = useLanguage()
  const t = translations[language].features
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-16 sm:py-20 bg-background dark:bg-[#0A1120]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
            {t.title}
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {t.items.map((feature, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="border-none shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl bg-white dark:bg-gray-800"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      {getIcon(feature.icon)}
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {hoveredIndex === index 
                          ? feature.description 
                          : `${feature.description.slice(0, 100)}...`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

