'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import Image from 'next/image'

interface Project {
  titleEn: string;
  titleEs: string;
  description: string;
  features: string[];
  image: string;
  video: string;
}

export function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  const [currentProject, setCurrentProject] = useState(0)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const projects: Project[] = [
    {
      titleEn: "Onixx Sports Clothing Store",
      titleEs: "Tienda de Ropa Deportiva Onixx",
      description: t.items[0].description,
      features: t.items[0].features,
      image: "/mini-tienda.png",
      video: "/clip-ropa.mp4"
    },
    {
      titleEn: "CRM System",
      titleEs: "Sistema CRM",
      description: t.items[1].description,
      features: t.items[1].features,
      image: "/mini-crm.png",
      video: "/clip-crm.mp4"
    },
    {
      titleEn: "Pharmacy Management System",
      titleEs: "Sistema de Gestión de Farmacia",
      description: t.items[2].description,
      features: t.items[2].features,
      image: "/mini-farma.png",
      video: "/clip-farma.mp4"
    }
  ]

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const nextProject = useCallback(() => {
    setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
  }, [projects.length]);

  useEffect(() => {
    // Only start the interval if the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intervalRef.current = setInterval(() => {
              nextProject();
            }, 5000);
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('proyectos');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (projectsSection) {
        observer.unobserve(projectsSection);
      }
    };
  }, [nextProject]);

  useEffect(() => {
    if (videoRef.current && selectedProject !== null) {
      videoRef.current.play();
    }
  }, [selectedProject]);

  const getProjectTitle = (project: Project) => {
    return language === 'en' ? project.titleEn : project.titleEs;
  };

  return (
    <section id="proyectos" className="w-full py-16 sm:py-20 bg-background dark:bg-[#0A1120]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
            {t.title}
          </h2>
        </ScrollAnimation>
        <div className="relative w-full max-w-4xl h-[600px] md:h-[500px]">
          <AnimatePresence initial={false} custom={currentProject} mode="wait">
            <motion.div
              key={currentProject}
              custom={currentProject}
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? 300 : -300,
                  opacity: 0,
                  position: 'absolute',
                  width: '100%',
                }),
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1,
                  position: 'absolute',
                  width: '100%',
                },
                exit: (direction: number) => ({
                  zIndex: 0,
                  x: direction < 0 ? 300 : -300,
                  opacity: 0,
                  position: 'absolute',
                  width: '100%',
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <ScrollAnimation>
                <motion.div
                  className="w-full border-none shadow-lg mx-auto cursor-pointer button-hover-effect bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
                  onClick={() => setSelectedProject(currentProject)}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      nextProject();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevProject();
                    }
                  }}
                >
                  <div className="p-6">
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image 
                        src={projects[currentProject].image}
                        alt={getProjectTitle(projects[currentProject])}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {getProjectTitle(projects[currentProject])}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {projects[currentProject].description}
                    </motion.p>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </motion.div>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 button-hover-effect bg-white dark:bg-gray-800"
            onClick={(e) => { e.stopPropagation(); prevProject(); }}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous project</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 button-hover-effect bg-white dark:bg-gray-800"
            onClick={(e) => { e.stopPropagation(); nextProject(); }}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next project</span>
          </Button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentProject ? 'bg-primary' : 'bg-gray-300'
              } button-hover-effect`}
              onClick={() => setCurrentProject(index)}
            >
              <span className="sr-only">Go to project {index + 1}</span>
            </Button>
          ))}
        </div>

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {getProjectTitle(projects[selectedProject])}
                  </DialogTitle>
                </DialogHeader>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                >
                  <X className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Close</span>
                </button>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <video 
                      ref={videoRef}
                      src={projects[selectedProject].video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-lg mb-4"
                    >
                      Your browser does not support the video tag.
                    </video>
                    <DialogDescription className="text-sm text-gray-700 dark:text-gray-300">
                      {projects[selectedProject].description}
                    </DialogDescription>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg text-gray-900 dark:text-white">
                      {language === 'en' ? 'Main Features:' : 'Características Principales:'}
                    </h4>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {projects[selectedProject].features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-700 dark:text-gray-300">{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

