import { SkillSubcategory, SkillItem } from "@/types/skills"
import { ChevronDown, ChevronUp } from "lucide-react"
import { SkillBadge } from "./skill-badge"

interface SkillCardProps {
    name: string
    skills?: SkillItem[]
    subcategories?: SkillSubcategory[]
    isExpanded: boolean
    onToggle: () => void
}

function Skills({
    skills,
    subcategories
}: {
    skills?: SkillItem[];
    subcategories?: SkillSubcategory[]
}) {
    if (subcategories) {
        return (
            subcategories.map((subcategory) => (
                <div key={subcategory.name}>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">{subcategory.name}</h4>
                    <div className="flex flex-wrap gap-2">
                        {subcategory.skills.map((skill) => (
                            <SkillBadge key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            )))
    }

    return (
        <div className="flex flex-wrap gap-2">
            {skills?.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
            ))}
        </div>
    )
}

export function SkillCard({
    name,
    skills,
    subcategories,
    isExpanded,
    onToggle
}: SkillCardProps) {
    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between group"
            >
                <h3 className="text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {name}
                </h3>
                {isExpanded ? (
                    <ChevronUp className="text-muted-foreground group-hover:text-primary transition-colors" cursor='pointer' />
                ) : (
                    <ChevronDown className="text-muted-foreground group-hover:text-primary transition-colors" cursor='pointer' />
                )}
            </button>
            {isExpanded && (
                <div className="mt-4">
                    <Skills
                        skills={skills}
                        subcategories={subcategories}
                    />
                </div>
            )}
        </div>
    )
}