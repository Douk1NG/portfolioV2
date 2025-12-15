'use client'

import PillLanguageSwitcher from "@/components/shared/PillLanguageSwitcher"
import ThemeToggle from "@/components/shared/ThemeToggle"

export function HeroActions() {
    return (
        <div className="absolute md:top-4 md:right-4 z-10 top-0">
            <div className="flex items-center gap-2">
                <PillLanguageSwitcher />
                <ThemeToggle />
            </div>
        </div>
    )
}
