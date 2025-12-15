import { HeroActions } from "./hero-actions"
import Image from "next/image"
import { useLanguageContext } from "@/hooks/useLanguage"
import { InfoTags } from "./info-tags"

export function HeroSection() {
  const { t } = useLanguageContext()
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <HeroActions />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center pt-16">

        <div className="md:col-span-7 space-y-6 md:space-y-8">
          <div className="hidden md:block text-sm text-muted-foreground font-mono tracking-wider">
            ♫⋆｡♪ ₊˚♬ ﾟ. / 2025
          </div>
          <div className="hidden md:block space-y-4">
            <h1 className="text-6xl lg:text-8xl font-light tracking-tight leading-[0.9]">
              {t('hero.name')}
              <br />
              <span className="text-muted-foreground font-medium">{t('hero.surname')}</span>
            </h1>
          </div>

          <div className="md:hidden space-y-4">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <h1 className="text-4xl font-light tracking-tight leading-[1.1]">
                  {t('hero.name')}
                  <br />
                  <span className="text-muted-foreground font-medium">{t('hero.surname')}</span>
                </h1>
              </div>
              <div className="relative h-28 w-28 shrink-0">
                <div className="absolute inset-0 bg-accent/10 rounded-full " />
                <div className="relative h-full w-full rounded-full overflow-hidden border-2 drop-shadow-lg drop-shadow-cyan-500">
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

          <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 border border-border/50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {t('hero.available')}
            </div>
          </div>

          <div className="space-y-6 max-w-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed ">
              {t('hero.description')}
            </p>

            <div className="pt-2">
              <InfoTags />
            </div>
          </div>
        </div>

        <div className="hidden md:block md:col-span-5 relative">
          <div className="relative aspect-square w-full max-w-sm mx-auto">
            <div className="relative h-full w-full drop-shadow-lg drop-shadow-cyan-500">
              <Image
                src={"/avatar.png"}
                alt="Portrait of Dibey Valencia"
                fill
                className="object-cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
