'use client'

import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-primary/50 bg-card">
      <Image
        src="/avatar.webp"
        alt="Profile"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  )
}
