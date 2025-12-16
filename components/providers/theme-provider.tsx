'use client'

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps
} from 'next-themes'

import { useMounted } from '@/hooks/useMounted'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {

  const mounted = useMounted()

  if (!mounted) return null

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}