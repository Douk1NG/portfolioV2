import { User, Briefcase, Code, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguageContext } from "@/hooks/useLanguage"

export function QuickNav() {
  const { t } = useLanguageContext();

  const quickLinks = [
    { name: t('nav.skills'), href: "#skills", icon: Code },
    { name: t('nav.experience'), href: "#experience", icon: Briefcase },
    { name: t('nav.projects'), href: "#projects", icon: User },
    { name: t('nav.contact'), href: "#contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col space-y-6 mt-12">
      {/* Quick Navigation Pills */}
      <div className="flex flex-wrap gap-3">
        {quickLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            size="sm"
            onClick={() => scrollToSection(link.href)}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.name}
          </Button>
        ))}
        {/* github and linkedin links */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open("https://github.com", "_blank")}
        >
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open("https://linkedin.com", "_blank")}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          Linkedin
        </Button>
      </div>
    </div>
  )
}
