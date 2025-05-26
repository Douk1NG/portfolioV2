import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
      <div className="relative w-40 h-40 xs:w-40 xs:h-40 overflow-hidden rounded-full border-4 border-primary/50 bg-card">
        <Image
          src="/avatar.webp"
          alt="Profile"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
