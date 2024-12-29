'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AccessibilityStatement() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
          {t.legalPages.accessibilityTitle}
        </h1>
      </ScrollAnimation>
      <div className="space-y-6 text-muted-foreground">
        <p>{language === 'en' ? 'Code Solutions Studio is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.' : 'Code Solutions Studio está comprometido a garantizar la accesibilidad digital para personas con discapacidades. Estamos mejorando continuamente la experiencia del usuario para todos y aplicando los estándares de accesibilidad relevantes.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Measures to support accessibility' : 'Medidas para apoyar la accesibilidad'}</h2>
        <p>{language === 'en' ? 'Code Solutions Studio takes the following measures to ensure accessibility of our website:' : 'Code Solutions Studio toma las siguientes medidas para garantizar la accesibilidad de nuestro sitio web:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Include accessibility as part of our mission statement.' : 'Incluir la accesibilidad como parte de nuestra declaración de misión.'}</li>
          <li>{language === 'en' ? 'Integrate accessibility into our procurement practices.' : 'Integrar la accesibilidad en nuestras prácticas de adquisición.'}</li>
          <li>{language === 'en' ? 'Provide continual accessibility training for our staff.' : 'Proporcionar capacitación continua en accesibilidad para nuestro personal.'}</li>
          <li>{language === 'en' ? 'Include people with disabilities in our design personas.' : 'Incluir a personas con discapacidades en nuestras personas de diseño.'}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Conformance status' : 'Estado de conformidad'}</h2>
        <p>{language === 'en' ? 'The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Code Solutions Studio is partially conformant with WCAG 2.1 level AA. This means that some parts of the content do not fully conform to the accessibility standard.' : 'Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para que los diseñadores y desarrolladores mejoren la accesibilidad para las personas con discapacidades. Define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA. Code Solutions Studio es parcialmente conforme con WCAG 2.1 nivel AA. Esto significa que algunas partes del contenido no se ajustan completamente al estándar de accesibilidad.'}</p>

        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Feedback' : 'Comentarios'}</h2>
        <p>{language === 'en' ? 'We welcome your feedback on the accessibility of Code Solutions Studio. Please let us know if you encounter accessibility barriers on our website:' : 'Agradecemos sus comentarios sobre la accesibilidad de Code Solutions Studio. Por favor, háganos saber si encuentra barreras de accesibilidad en nuestro sitio web:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Phone: [Your phone number]' : 'Teléfono: [Su número de teléfono]'}</li>
          <li>E-mail: accessibility@codesolutionsstudio.com</li>
          <li>{language === 'en' ? 'Visitor address: [Your physical address]' : 'Dirección del visitante: [Su dirección física]'}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Compatibility with browsers and assistive technology' : 'Compatibilidad con navegadores y tecnología de asistencia'}</h2>
        <p>{language === 'en' ? 'Code Solutions Studio is designed to be compatible with the following assistive technologies:' : 'Code Solutions Studio está diseñado para ser compatible con las siguientes tecnologías de asistencia:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Latest version of JAWS for Windows' : 'Última versión de JAWS para Windows'}</li>
          <li>{language === 'en' ? 'Latest version of NVDA' : 'Última versión de NVDA'}</li>
          <li>{language === 'en' ? 'Latest version of VoiceOver for macOS and iOS' : 'Última versión de VoiceOver para macOS e iOS'}</li>
          <li>{language === 'en' ? 'Latest version of TalkBack for Android' : 'Última versión de TalkBack para Android'}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Technical specifications' : 'Especificaciones técnicas'}</h2>
        <p>{language === 'en' ? 'Accessibility of Code Solutions Studio relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:' : 'La accesibilidad de Code Solutions Studio se basa en las siguientes tecnologías para funcionar con la combinación particular de navegador web y cualquier tecnología o complemento de asistencia instalado en su computadora:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Assessment approach' : 'Enfoque de evaluación'}</h2>
        <p>{language === 'en' ? 'Code Solutions Studio assessed the accessibility of this website by the following approaches:' : 'Code Solutions Studio evaluó la accesibilidad de este sitio web mediante los siguientes enfoques:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Self-evaluation' : 'Autoevaluación'}</li>
          <li>{language === 'en' ? 'External evaluation' : 'Evaluación externa'}</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Date' : 'Fecha'}</h2>
        <p>{language === 'en' ? 'This statement was created on [Date] using the W3C Accessibility Statement Generator Tool.' : 'Esta declaración fue creada el [Fecha] utilizando la herramienta Generador de declaraciones de accesibilidad W3C.'}</p>
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button>{t.legalPages.backToHome}</Button>
        </Link>
      </div>
    </div>
  )
}

