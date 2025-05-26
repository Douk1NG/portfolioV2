"use client"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import type { Skill } from "@/types/skills"

type HexagonalSkillsProps = {
  skills: Skill[]
}

const HexagonalIcon = ({ IconComponent}:{ IconComponent: React.ElementType}) => <IconComponent className={cn("text-primary")} size={20}/>

export function HexagonalSkills({ skills }: HexagonalSkillsProps) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill) => {
          const IconComponent = LucideIcons[skill.icon as keyof typeof LucideIcons]

          return (
            <div key={skill.name} className="flex items-center gap-2">
              <HexagonalIcon
                IconComponent={IconComponent as React.ElementType}
                  />
                  <span className={cn("text-xs font-medium text-muted-foreground transition-all duration-300 group-hover:text-foreground")}>
                    {skill.name}
                  </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
