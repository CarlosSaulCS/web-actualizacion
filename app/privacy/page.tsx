'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
          {t.legalPages.privacyTitle}
        </h1>
      </ScrollAnimation>
      <div className="space-y-6 text-muted-foreground">
        <p>{language === 'en' ? 'At Code Solutions Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of your personal data.' : 'En Code Solutions Studio, estamos comprometidos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad describe nuestras prácticas con respecto a la recopilación, uso y divulgación de sus datos personales.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '1. Information We Collect' : '1. Información que Recopilamos'}</h2>
        <p>{language === 'en' ? 'We may collect the following types of information:' : 'Podemos recopilar los siguientes tipos de información:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Personal identification information (Name, email address, phone number, etc.)' : 'Información de identificación personal (Nombre, dirección de correo electrónico, número de teléfono, etc.)'}</li>
          <li>{language === 'en' ? 'Company information' : 'Información de la empresa'}</li>
          <li>{language === 'en' ? 'Website usage data' : 'Datos de uso del sitio web'}</li>
          <li>{language === 'en' ? 'Communication preferences' : 'Preferencias de comunicación'}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '2. How We Use Your Information' : '2. Cómo Usamos Su Información'}</h2>
        <p>{language === 'en' ? 'We use the collected information for various purposes, including:' : 'Utilizamos la información recopilada para diversos fines, que incluyen:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Providing and maintaining our services' : 'Proporcionar y mantener nuestros servicios'}</li>
          <li>{language === 'en' ? 'Notifying you about changes to our services' : 'Notificarle sobre cambios en nuestros servicios'}</li>
          <li>{language === 'en' ? 'Allowing you to participate in interactive features of our website' : 'Permitirle participar en las funciones interactivas de nuestro sitio web'}</li>
          <li>{language === 'en' ? 'Providing customer support' : 'Proporcionar atención al cliente'}</li>
          <li>{language === 'en' ? 'Gathering analysis or valuable information to improve our services' : 'Recopilar análisis o información valiosa para mejorar nuestros servicios'}</li>
          <li>{language === 'en' ? 'Monitoring the usage of our services' : 'Monitorear el uso de nuestros servicios'}</li>
          <li>{language === 'en' ? 'Detecting, preventing and addressing technical issues' : 'Detectar, prevenir y abordar problemas técnicos'}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '3. Data Protection' : '3. Protección de Datos'}</h2>
        <p>{language === 'en' ? 'We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.' : 'Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal. Su información personal se encuentra detrás de redes seguras y solo es accesible para un número limitado de personas que tienen derechos especiales de acceso a dichos sistemas.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '4. Third-Party Disclosure' : '4. Divulgación a Terceros'}</h2>
        <p>{language === 'en' ? 'We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.' : 'No vendemos, intercambiamos ni transferimos de otro modo su información de identificación personal a terceros a menos que proporcionemos a los usuarios un aviso previo. Esto no incluye a los socios de alojamiento de sitios web y otras partes que nos ayudan a operar nuestro sitio web, realizar nuestro negocio o atender a nuestros usuarios, siempre que esas partes acuerden mantener esta información confidencial.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '5. Cookies' : '5. Cookies'}</h2>
        <p>{language === 'en' ? 'We use cookies to help us remember and process items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.' : 'Utilizamos cookies para ayudarnos a recordar y procesar los artículos en su carrito de compras, comprender y guardar sus preferencias para futuras visitas, realizar un seguimiento de los anuncios y recopilar datos agregados sobre el tráfico del sitio y la interacción del sitio para que podamos ofrecer mejores experiencias y herramientas del sitio en el futuro.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '6. Third-Party Links' : '6. Enlaces de Terceros'}</h2>
        <p>{language === 'en' ? 'Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.' : 'Ocasionalmente, a nuestra discreción, podemos incluir u ofrecer productos o servicios de terceros en nuestro sitio web. Estos sitios de terceros tienen políticas de privacidad separadas e independientes. Por lo tanto, no tenemos responsabilidad por el contenido y las actividades de estos sitios vinculados.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '7. Your Rights' : '7. Sus Derechos'}</h2>
        <p>{language === 'en' ? 'You have the right to:' : 'Usted tiene derecho a:'}</p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en' ? 'Access and receive a copy of your personal data' : 'Acceder y recibir una copia de sus datos personales'}</li>
          <li>{language === 'en' ? 'Rectify your personal data' : 'Rectificar sus datos personales'}</li>
          <li>{language === 'en' ? 'Request erasure of your personal data' : 'Solicitar el borrado de sus datos personales'}</li>
          <li>{language === 'en' ? 'Object to processing of your personal data' : 'Oponerse al procesamiento de sus datos personales'}</li>
          <li>{language === 'en' ? 'Request restriction of processing your personal data' : 'Solicitar la restricción del procesamiento de sus datos personales'}</li>
          <li>{language === 'en' ? 'Request transfer of your personal data' : 'Solicitar la transferencia de sus datos personales'}</li>
          <li>{language === 'en' ? 'Withdraw your consent' : 'Retirar su consentimiento'}</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '8. Changes to This Privacy Policy' : '8. Cambios en Esta Política de Privacidad'}</h2>
        <p>{language === 'en' ? 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.' : 'Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la "fecha de vigencia" en la parte superior de esta Política de Privacidad.'}</p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">{language === 'en' ? '9. Contact Us' : '9. Contáctenos'}</h2>
        <p>{language === 'en' ? 'If you have any questions about this Privacy Policy, please contact us at privacy@codesolutionsstudio.com.' : 'Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos a privacy@codesolutionsstudio.com.'}</p>
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button>{t.legalPages.backToHome}</Button>
        </Link>
      </div>
    </div>
  )
}

