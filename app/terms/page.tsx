'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/config/translations'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function TermsAndConditions() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0066FF] to-[#00FFB2] bg-clip-text text-transparent">
          {t.legalPages.termsTitle}
        </h1>
      </ScrollAnimation>
      <div className="space-y-6 text-muted-foreground">
        <p>{language === 'en' 
          ? 'Welcome to Code Solutions Studio. By accessing this website, you agree to comply with and be bound by the following terms and conditions of use.' 
          : 'Bienvenido a Code Solutions Studio. Al acceder a este sitio web, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '1. Agreement to Terms' : '1. Acuerdo con los Términos'}
        </h2>
        <p>{language === 'en'
          ? 'By using our website, you agree to these terms in full. If you disagree with these terms or any part of these terms, you must not use our website.'
          : 'Al utilizar nuestro sitio web, usted acepta estos términos en su totalidad. Si no está de acuerdo con estos términos o cualquier parte de estos términos, no debe utilizar nuestro sitio web.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '2. Intellectual Property Rights' : '2. Derechos de Propiedad Intelectual'}
        </h2>
        <p>{language === 'en'
          ? 'Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved.'
          : 'A menos que se indique lo contrario, somos propietarios de los derechos de propiedad intelectual de todo el material en este sitio web. Todos los derechos de propiedad intelectual están reservados.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '3. Restrictions' : '3. Restricciones'}
        </h2>
        <p>{language === 'en'
          ? 'You are specifically restricted from all of the following:'
          : 'Está específicamente restringido de todo lo siguiente:'}
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>{language === 'en'
            ? 'publishing any website material in any other media'
            : 'publicar cualquier material del sitio web en cualquier otro medio'}
          </li>
          <li>{language === 'en'
            ? 'selling, sublicensing and/or otherwise commercializing any website material'
            : 'vender, sublicenciar y/o comercializar de cualquier otra manera cualquier material del sitio web'}
          </li>
          <li>{language === 'en'
            ? 'publicly performing and/or showing any website material'
            : 'realizar y/o mostrar públicamente cualquier material del sitio web'}
          </li>
          <li>{language === 'en'
            ? 'using this website in any way that is or may be damaging to this website'
            : 'usar este sitio web de cualquier manera que sea o pueda ser perjudicial para este sitio web'}
          </li>
          <li>{language === 'en'
            ? 'using this website in any way that impacts user access to this website'
            : 'usar este sitio web de cualquier manera que afecte el acceso de los usuarios a este sitio web'}
          </li>
          <li>{language === 'en'
            ? 'using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity'
            : 'usar este sitio web en contra de las leyes y regulaciones aplicables, o de cualquier manera que pueda causar daño al sitio web, o a cualquier persona o entidad comercial'}
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '4. Your Content' : '4. Su Contenido'}
        </h2>
        <p>{language === 'en'
          ? 'In these terms and conditions, "your content" means any audio, video, text, images or other material you choose to display on this website. By displaying your content, you grant Code Solutions Studio a non-exclusive, worldwide, irrevocable, royalty-free license to use, reproduce, adapt, publish, translate and distribute it in any and all media.'
          : 'En estos términos y condiciones, "su contenido" significa cualquier audio, video, texto, imágenes u otro material que elija mostrar en este sitio web. Al mostrar su contenido, otorga a Code Solutions Studio una licencia no exclusiva, mundial, irrevocable y libre de regalías para usar, reproducir, adaptar, publicar, traducir y distribuir dicho contenido en cualquier medio y de cualquier forma.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '5. No Warranties' : '5. Sin Garantías'}
        </h2>
        <p>{language === 'en'
          ? 'This website is provided "as is" without any representations or warranties, express or implied. Code Solutions Studio makes no representations or warranties in relation to this website or the information and materials provided on this website.'
          : 'Este sitio web se proporciona "tal cual" sin ninguna representación o garantía, expresa o implícita. Code Solutions Studio no hace representaciones ni garantías en relación con este sitio web o la información y los materiales proporcionados en este sitio web.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '6. Limitations of Liability' : '6. Limitaciones de Responsabilidad'}
        </h2>
        <p>{language === 'en'
          ? 'Code Solutions Studio will not be liable to you in relation to the contents of, or use of, or otherwise in connection with, this website for any indirect, special or consequential loss; or for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.'
          : 'Code Solutions Studio no será responsable ante usted en relación con el contenido, el uso o cualquier otro aspecto relacionado con este sitio web por cualquier pérdida indirecta, especial o consecuente; o por cualquier pérdida comercial, pérdida de ingresos, ganancias o ahorros anticipados, pérdida de contratos o relaciones comerciales, pérdida de reputación o buena voluntad, o pérdida o corrupción de información o datos.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '7. Indemnification' : '7. Indemnización'}
        </h2>
        <p>{language === 'en'
          ? 'You hereby indemnify to the fullest extent Code Solutions Studio from and against any and all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these terms.'
          : 'Por la presente, usted indemniza en la mayor medida posible a Code Solutions Studio de y contra todas y cada una de las responsabilidades, costos, demandas, causas de acción, daños y gastos que surjan de cualquier manera relacionada con su incumplimiento de cualquiera de las disposiciones de estos términos.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '8. Severability' : '8. Divisibilidad'}
        </h2>
        <p>{language === 'en'
          ? 'If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.'
          : 'Si alguna disposición de estos términos se considera inválida según la ley aplicable, dichas disposiciones se eliminarán sin afectar las disposiciones restantes en este documento.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '9. Variation of Terms' : '9. Variación de Términos'}
        </h2>
        <p>{language === 'en'
          ? 'Code Solutions Studio is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.'
          : 'Code Solutions Studio está autorizado a revisar estos términos en cualquier momento según lo considere apropiado, y al usar este sitio web, se espera que revise estos términos regularmente.'}
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-6">
          {language === 'en' ? '10. Governing Law & Jurisdiction' : '10. Ley Aplicable y Jurisdicción'}
        </h2>
        <p>{language === 'en'
          ? 'These terms will be governed by and interpreted in accordance with the laws of the country where Code Solutions Studio is based, and you submit to the non-exclusive jurisdiction of the state and federal courts located in said country for the resolution of any disputes.'
          : 'Estos términos se regirán e interpretarán de acuerdo con las leyes del país donde se encuentra Code Solutions Studio, y usted se somete a la jurisdicción no exclusiva de los tribunales estatales y federales ubicados en dicho país para la resolución de cualquier disputa.'}
        </p>
      </div>
      <div className="mt-8">
        <Link href="/">
          <Button>{t.legalPages.backToHome}</Button>
        </Link>
      </div>
    </div>
  )
}

