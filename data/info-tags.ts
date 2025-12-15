<<<<<<< HEAD
import { Code2, MapPin, Github, Linkedin, FileDown } from 'lucide-react'
=======
import { Code2, MapPin, Github, Linkedin } from 'lucide-react'
>>>>>>> ajustelin
import { type LucideIcon } from 'lucide-react'

/**
 * Type for information tags
 */
export type InfoTag = {
  /** Icon component */
  icon: LucideIcon
  /** Translation key for the title */
  titleKey: string
  /** Translation key for the description */
<<<<<<< HEAD
  descriptionKey: string
=======
>>>>>>> ajustelin
  /** Optional link URL */
  href?: string
}

export const infoTags: InfoTag[] = [
  {
    icon: Code2,
    titleKey: 'hero.role'
  },
  {
    icon: MapPin,
    titleKey: 'hero.location'
  },
  {
    icon: Github,
    titleKey: 'hero.github',
<<<<<<< HEAD
    descriptionKey: 'hero.github.description'
=======
    href: '.'
>>>>>>> ajustelin
  },
  {
    icon: Linkedin,
    titleKey: 'hero.linkedin',
<<<<<<< HEAD
    descriptionKey: 'hero.linkedin.description'
  },
  {
    icon: FileDown,
    titleKey: 'hero.download',
    descriptionKey: 'hero.download.description'
=======
    href: '.'
>>>>>>> ajustelin
  }
]