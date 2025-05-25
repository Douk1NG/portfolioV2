'use client'

import { Button } from '@/components/ui/button';
import { useLanguageSwitcher } from '@/hooks/useLanguageSwitcher';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, t } = useLanguageSwitcher();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-white border-slate-600"
    >
      <Globe className="w-4 h-4 mr-2" />
      {t('language.switch')} ({language.toUpperCase()})
    </Button>
  );
};

export default LanguageSwitcher;