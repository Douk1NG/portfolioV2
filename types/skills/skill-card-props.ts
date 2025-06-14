import type { Skill, SkillCategory } from "./skill"

/**
 * Props for the SkillCard component
 */
export type SkillCardProps = {
  /** The category of skills */
  category: SkillCategory
  /** The skills in this category */
  skills: Skill[]
  /** Whether the card is expanded */
  isExpanded: boolean
  /** Function to toggle the expanded state */
  onToggle: () => void
} 