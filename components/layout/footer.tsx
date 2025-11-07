'use client'

import { useHeartColor } from '@/hooks/useHeartColor'

export function Footer() {
  const { heart } = useHeartColor()

  return (
    <footer>
      <p className="mx-auto max-w-7xl text-center text-muted-foreground">
        Built with {heart} and IA
      </p>
    </footer>
  )
}
