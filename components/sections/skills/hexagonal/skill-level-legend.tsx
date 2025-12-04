import { SKILL_LEVEL_COLORS } from "./constants"

export function SkillLevelLegend() {
    return (
        <div className="grid grid-cols-2 md:flex items-center gap-6 mb-6 text-sm text-muted-foreground justify-center">
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${SKILL_LEVEL_COLORS.expert}`} />
                <span>Expert</span>
            </div>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${SKILL_LEVEL_COLORS.advanced}`} />
                <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${SKILL_LEVEL_COLORS.intermediate}`} />
                <span>Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${SKILL_LEVEL_COLORS.basic}`} />
                <span>Basic</span>
            </div>
        </div>
    )
}