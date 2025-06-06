'use client'

import { useTheme } from 'next-themes'

export const useHeartColor = () => {
  const { resolvedTheme } = useTheme()

  return {
    heart: resolvedTheme === 'dark' ? '🖤' : '🤍'
  }
}