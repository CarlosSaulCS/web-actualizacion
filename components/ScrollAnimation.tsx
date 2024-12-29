'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  threshold?: number
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, threshold = 0.1 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 50, scale: 0.9 }
      }}
    >
      {children}
    </motion.div>
  )
}

