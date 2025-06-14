/**
 * Available skill levels
 */
export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'basic'

/**
 * Frontend development subcategories
 */
export type FrontendSubcategory = 
  | "UI Frameworks"
  | "Styling & Design"
  | "State Management"
  | "Form & Validation"
  | "Build & Tooling"

/**
 * Skill group categories
 */
export type SkillGroup =
  | "Frontend Development"
  | "Backend & Database"
  | "DevOps & Cloud"
  | "Testing & Quality"
  | "Tools & Workflow"
  | "Soft Skills"

/**
 * Available skill categories
 */
export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"

/**
 * Skill entry type
 */
export type Skill = {
  /** Skill name */
  name: string
  /** Icon identifier */
  icon: string
  /** Main category */
  category: SkillCategory
  /** Skill group */
  group: string
  /** Optional subcategory */
  subcategory?: string
  /** Skill proficiency level */
  level: SkillLevel
} 