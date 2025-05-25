import { useLanguageContext } from '@/hooks/useLanguage';
import { Language } from '@/types/language';

export const useLanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguageContext();

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'es' : 'en';
    setLanguage(newLanguage);
  };

  return {
    language,
    toggleLanguage,
    t
  };
}; 