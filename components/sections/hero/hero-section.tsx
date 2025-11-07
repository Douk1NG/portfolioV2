'use client'

import { useLanguageContext } from "@/hooks/useLanguage"
import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"

import { InfoTags } from "./info-tags"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguageContext()

  return (
    <div className="relative flex flex-col space-y-8 mx-auto max-w-6xl">


      {/* Language Switcher and Theme Toggle */}
      <div className="hidden md:flex w-full">
        <div className="flex items-center gap-2 ml-auto">
          <PillLanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">

          {/* Name and Desc */}
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">♫⋆｡♪ ₊˚♬ ﾟ. / 2025</div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  {t('hero.name')}
                  <br />
                  <span className="text-muted-foreground">{t('hero.surname')}</span>
                </h1>
              </div>
              <div className="md:hidden relative h-32 w-32 flex-shrink-0">
                <div className="absolute inset-0 bg-accent/10 rounded-full " />
                <div className="relative h-full w-full rounded-full overflow-hidden border-2  ">
                  <Image
                    src={"/avatar3.jpg"}
                    alt="Portrait of Dibey Valencia"
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full">
          {/* Portrait Image */}


          {/* Info Tags */}
          <InfoTags />
        </div>
      </div>
    </div>

  )
}
