import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/sections/contact/contact-form"
import { useLanguageContext } from "@/hooks/useLanguage"

export function ContactSection() {
  const { t } = useLanguageContext();

  return (
    <>
      <div className="flex flex-col space-y-8">
        <SectionHeading
          title={t('contact.title')}
          description={t('contact.description')}
        />

        <div className="mt-12 space-y-8">
          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </>
  )
}
