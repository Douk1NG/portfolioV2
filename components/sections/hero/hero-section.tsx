import { ProfileImage } from "@/components/sections/hero/profile-image"
import { QuickNav } from "@/components/sections/hero/quick-nav"
import { useLanguageContext } from "@/hooks/useLanguage"
import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"

export function HeroSection() {
  const { t } = useLanguageContext();

  return (
    <div className="flex flex-col space-y-8">
      {/* Language Switcher and Theme Toggle */}
      <div className="hidden md:flex items-center gap-2 self-end">
        <PillLanguageSwitcher />
        <ThemeToggle />
      </div>

      <ProfileImage />

      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight">
            {t('hero.greeting')}
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-foreground leading-relaxed max-w-4xl">
            <span className="text-foreground">{t('hero.experience')}</span>{" "}
            <span className="text-primary font-semibold">{t('hero.role')}</span>{" "}
            <span className="text-foreground">{t('hero.location')}</span>{" "}
            <span className="text-foreground">{t('hero.specialization')}</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <QuickNav />
      </div>
    </div>
  )
}
