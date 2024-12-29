import { Hero } from '@/components/sections/hero'
import { VisionMission } from '@/components/sections/vision-mission'
import { Features } from '@/components/sections/features'
import { Services } from '@/components/sections/services'
import { Projects } from '@/components/sections/projects'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="nosotros">
        <VisionMission />
      </section>
      <Features />
      <section id="servicios">
        <Services />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="contacto">
        <ContactSection />
      </section>
    </>
  )
}

