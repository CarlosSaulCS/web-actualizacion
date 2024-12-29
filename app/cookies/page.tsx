'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CookiePolicy() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
          {t.legalPages.cookiesTitle}
        </h1>
      </ScrollAnimation>
      <div className="space-y-6 text-muted-foreground">
        <p>{language === 'en' ? 'This Cookie Policy explains how Code Solutions Studio uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.' : 'Esta Política de Cookies explica cómo Code Solutions Studio utiliza cookies y tecnologías similares para reconocerle cuando visita nuestro sitio web. Explica qué son estas tecnologías y por qué las usamos, así como sus derechos para controlar nuestro uso de ellas.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'What are cookies?' : '¿Qué son las cookies?'}</h2>
        <p>{language === 'en' ? 'Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.' : 'Las cookies son pequeños archivos de datos que se colocan en su computadora o dispositivo móvil cuando visita un sitio web. Las cookies son ampliamente utilizadas por los propietarios de sitios web para hacer que sus sitios funcionen, o para que funcionen de manera más eficiente, así como para proporcionar información de informes.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Why do we use cookies?' : '¿Por qué usamos cookies?'}</h2>
        <p>{language === 'en' ? 'We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics and other purposes.' : 'Utilizamos cookies propias y de terceros por varias razones. Algunas cookies son necesarias por razones técnicas para que nuestro sitio web funcione, y nos referimos a estas como cookies "esenciales" o "estrictamente necesarias". Otras cookies nos permiten rastrear y orientar los intereses de nuestros usuarios para mejorar la experiencia en nuestro sitio web. Terceros sirven cookies a través de nuestro sitio web para publicidad, análisis y otros propósitos.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Types of cookies we use' : 'Tipos de cookies que usamos'}</h2>
        <p>{language === 'en' ? 'The specific types of first and third-party cookies served through our website and the purposes they perform are described below:' : 'Los tipos específicos de cookies propias y de terceros que se sirven a través de nuestro sitio web y los propósitos que cumplen se describen a continuación:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Essential website cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features.' : 'Cookies esenciales del sitio web: Estas cookies son estrictamente necesarias para proporcionarle los servicios disponibles a través de nuestro sitio web y para utilizar algunas de sus funciones.'}</li>
          <li>{language === 'en' ? 'Performance and functionality cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use.' : 'Cookies de rendimiento y funcionalidad: Estas cookies se utilizan para mejorar el rendimiento y la funcionalidad de nuestro sitio web, pero no son esenciales para su uso.'}</li>
          <li>{language === 'en' ? 'Analytics and customization cookies: These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.' : 'Cookies de análisis y personalización: Estas cookies recopilan información que se utiliza, ya sea en forma agregada para ayudarnos a comprender cómo se utiliza nuestro sitio web o qué tan efectivas son nuestras campañas de marketing, o para ayudarnos a personalizar nuestro sitio web para usted.'}</li>
          <li>{language === 'en' ? 'Advertising cookies: These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.' : 'Cookies publicitarias: Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para usted. Realizan funciones como evitar que el mismo anuncio reaparezca continuamente, garantizar que los anuncios se muestren correctamente para los anunciantes y, en algunos casos, seleccionar anuncios que se basan en sus intereses.'}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'How can you control cookies?' : '¿Cómo puede controlar las cookies?'}</h2>
        <p>{language === 'en' ? 'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or privacy preference center.' : 'Tiene derecho a decidir si acepta o rechaza las cookies. Puede ejercer sus preferencias de cookies haciendo clic en los enlaces de exclusión correspondientes que se proporcionan en el banner de cookies o en el centro de preferencias de privacidad.'}</p>
        <p>{language === 'en' ? 'You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.' : 'Puede configurar o modificar los controles de su navegador web para aceptar o rechazar cookies. Si elige rechazar las cookies, aún puede usar nuestro sitio web, aunque su acceso a algunas funciones y áreas de nuestro sitio web puede estar restringido.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Changes to this Cookie Policy' : 'Cambios en esta Política de Cookies'}</h2>
        <p>{language === 'en' ? 'We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.' : 'Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que usamos o por otras razones operativas, legales o regulatorias. Por lo tanto, vuelva a visitar esta Política de Cookies regularmente para mantenerse informado sobre nuestro uso de cookies y tecnologías relacionadas.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? 'Contact us' : 'Contáctanos'}</h2>
        <p>{language === 'en' ? 'If you have any questions about our use of cookies or other technologies, please email us at privacy@codesolutionsstudio.com.' : 'Si tiene alguna pregunta sobre nuestro uso de cookies u otras tecnologías, envíenos un correo electrónico a privacy@codesolutionsstudio.com.'}</p>
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button>{t.legalPages.backToHome}</Button>
        </Link>
      </div>
    </div>
  )
}

