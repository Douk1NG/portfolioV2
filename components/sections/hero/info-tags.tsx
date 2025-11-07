'use client'

import { useLanguageContext } from '@/hooks/useLanguage'
import { infoTags } from '@/data/info-tags'

export function InfoTags() {
  const { t } = useLanguageContext()

  return (
    <div className="flex flex-wrap md:flex-col md:gap-4">
      {infoTags.map((tag, index) => {
        const Icon = tag.icon
        const TagComponent = tag.href ? 'a' : 'div'
        const linkProps = tag.href ? {
          href: tag.href,
          target: "_blank",
          rel: "noopener noreferrer"
        } : null

        return (
          <TagComponent
            key={index}
            {...linkProps}
            className="flex gap-2"
          >
            <Icon/>
            <div>
              <h3>
                {t(tag.titleKey)}
              </h3>
            </div>
          </TagComponent>
        )
      })}
    </div>
  )
}