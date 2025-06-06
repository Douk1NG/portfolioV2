'use client'

import { useLanguageContext } from '@/hooks/useLanguage'
import { infoTags } from '@/data/info-tags'

export function InfoTags() {
  const { t } = useLanguageContext()

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-2 sm:gap-4">
      {infoTags.map((tag, index) => {
        const Icon = tag.icon
        const TagComponent = tag.href ? 'a' : 'div'
        const linkProps = tag.href ? {
          href: tag.href,
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}

        return (
          <TagComponent
            key={index}
            {...linkProps}
            className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg bg-card border border-border hover:bg-accent transition-colors"
          >
            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            <div>
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                {t(tag.titleKey)}
              </h3>
              <p className="hidden md:block text-xs sm:text-sm text-muted-foreground">
                {t(tag.descriptionKey)}
              </p>
            </div>
          </TagComponent>
        )
      })}
    </div>
  )
}