'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'

export function VisionMission() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section className="w-full py-16 sm:py-20 bg-background dark:bg-[#0A1120]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          <ScrollAnimation>
            <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
                  {t.mission.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t.mission.description}
                </p>
                {t.mission.points && t.mission.points.length > 0 && (
                  <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                    {t.mission.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </ScrollAnimation>
          <ScrollAnimation>
            <Card className="border-none shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
                  {t.vision.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t.vision.description}
                </p>
                {t.vision.points && t.vision.points.length > 0 && (
                  <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                    {t.vision.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

