'use client'

import { useLanguageContext } from '@/hooks/useLanguage'
import { infoTags } from '@/data/info-tags'
import { ComponentProps, ElementType } from 'react'

function InfoTag({
  icon: Icon,
  children,
  ...props
}: ComponentProps<'span'> & { icon: ElementType }) {
  return (
    <span
      className="flex gap-2 items-center border border-secondary-foreground/20 rounded-full px-3 py-1 md:border-none"
      {...props}
    >
      <Icon />
      {children}
    </span>
  )
}

export function InfoTags() {
  const { t } = useLanguageContext()

  return (
    <div className="flex flex-wrap md:flex-col md:gap-4 gap-2 text-sm text-muted-foreground">
      {infoTags.map(({ icon, href, titleKey }) => {

        const content = (
          <InfoTag key={titleKey} icon={icon}>
            {t(titleKey)}
          </InfoTag>
        )

        if (href) {
          return (
            <a
              key={titleKey}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='underline hover:border-secondary-foreground hover:bg-secondary transition-colors rounded-full hover:font-semibold'
            >
              {content}
            </a>
          )
        }

        return content
      })}
    </div>
  )
}