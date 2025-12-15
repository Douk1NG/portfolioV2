<<<<<<< HEAD
export type SkillLevel = 'expert' | 'advanced' | 'intermediate' | 'basic';
=======
import type { LucideIconName } from "@/components/shared/Icon";
>>>>>>> ajustelin

export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

export type SkillItem = {
  name: string;
  icon: LucideIconName;
  category: SkillCategory;
};

<<<<<<< HEAD
/**
 * Available skill categories
 */
export type SkillCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools";

/**
 * Skill entry type
 */
export type Skill = {
  /** Skill name */
  name: string;
  /** Icon identifier */
  icon: string;
  /** Main category */
  category: SkillCategory;
  /** Skill group */
  group: string;
  /** Optional subcategory */
  subcategory?: string;
  /** Skill proficiency level */
  level: SkillLevel;
=======
export type SkillGroup = {
  name: string;
  skills: SkillItem[];
  variant?: "feature" | "vertical" | "wide" | "default";
  icon: LucideIconName;
>>>>>>> ajustelin
};
