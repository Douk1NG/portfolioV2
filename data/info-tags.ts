import { Code2, MapPin, Github, Linkedin, FileDown } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface InfoTag {
  icon: LucideIcon
  titleKey: string
  descriptionKey: string
  href?: string
}

export const infoTags: InfoTag[] = [
  {
    icon: Code2,
    titleKey: 'hero.role',
    descriptionKey: 'hero.role.description'
  },
  {
    icon: MapPin,
    titleKey: 'hero.location',
    descriptionKey: 'hero.location.description'
  },
  {
    icon: Github,
    titleKey: 'hero.github',
    descriptionKey: 'hero.github.description',
    href: 'https://github.com/dibey'
  },
  {
    icon: Linkedin,
    titleKey: 'hero.linkedin',
    descriptionKey: 'hero.linkedin.description',
    href: 'https://linkedin.com/in/dibey'
  },
  {
    icon: FileDown,
    titleKey: 'hero.download',
    descriptionKey: 'hero.download.description',
    href: '/cv.pdf'
  }
] 