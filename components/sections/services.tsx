'use client'

import { JSX, useState } from 'react'
import { Code2, Globe, MessageSquare, Brain, BarChart3, FlaskRound } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiTensorflow,
  SiGoogleanalytics,
  SiAdobecreativecloud,
  SiDocker,
  SiKubernetes,
  SiGooglecloud
} from 'react-icons/si'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { ScrollAnimation } from '@/components/ScrollAnimation'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="h-12 w-12 text-purple-500" />;
    case 'Globe':
      return <Globe className="h-12 w-12 text-teal-500" />;
    case 'MessageSquare':
      return <MessageSquare className="h-12 w-12 text-indigo-500" />;
    case 'Brain':
      return <Brain className="h-12 w-12 text-pink-500" />;
    case 'BarChart3':
      return <BarChart3 className="h-12 w-12 text-orange-500" />;
    case 'FlaskRound':
      return <FlaskRound className="h-12 w-12 text-cyan-500" />;
    default:
      return null;
  }
}

const getTechIcons = (tech: string[]) => {
  const iconMap: { [key: string]: JSX.Element } = {
    'React': <SiReact className="text-[#61DAFB]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Python': <SiPython className="text-[#3776AB]" />,
    'TensorFlow': <SiTensorflow className="text-[#FF6F00]" />,
    'Google Analytics': <SiGoogleanalytics className="text-[#E37400]" />,
    'Adobe Creative Cloud': <SiAdobecreativecloud className="text-[#FF0000]" />,
    'Docker': <SiDocker className="text-[#2496ED]" />,
    'Kubernetes': <SiKubernetes className="text-[#326CE5]" />,
    'AWS': <FaAws className="text-[#FF9900]" />,
    'Google Cloud': <SiGooglecloud className="text-[#4285F4]" />,
    'Azure': <FaMicrosoft className="text-[#0089D6]" />
  };

  return tech.map((t, index) => (
    <span key={index} className="mr-2" title={t}>
      {iconMap[t] || t}
    </span>
  ));
}

export function Services() {
  const { language } = useLanguage()
  const t = translations[language].services
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-16 sm:py-20 bg-background dark:bg-[#0A1120]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
            {t.title}
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {t.items.map((service, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="flip-card cursor-pointer h-[400px] md:h-[300px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className={`flip-card-inner ${hoveredIndex === index ? 'flipped' : ''}`}>
                  <div className="flip-card-front bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-center h-full">
                    {getIcon(service.icon)}
                    <h3 className="text-xl font-bold mt-4 text-center">{service.title}</h3>
                    <div className="flex mt-4">
                      {getTechIcons(service.technologies)}
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-r from-[#0066FF] to-[#00FFB2] text-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col items-center justify-center h-full">
                    <p className="text-sm text-center">{service.description}</p>
                    <div className="flex mt-4">
                      {getTechIcons(service.technologies)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

