import { useLanguageContext } from "@/hooks/useLanguage"

export function StatusBadge() {
  const { t } = useLanguageContext();

  return (
    <div className="flex items-center">
      <div className="mr-2 h-2 w-2 rounded-full bg-accent"></div>
      <p className="text-sm text-muted-foreground">{t('hero.status')}</p>
    </div>
  )
}
