import type { SkillGroup } from "@/types/skills"

export const skillsData: SkillGroup[] = [
  {
    name: "Frontend Development",
    subcategories: [
      {
        name: "UI Frameworks",
        skills: [
          { name: "React", level: "expert", icon: "SquareCode", category: "frontend" },
          { name: "Next.js", level: "expert", icon: "Triangle", category: "frontend" },
          { name: "React Native", level: "intermediate", icon: "Smartphone", category: "frontend" },
        ]
      },
      {
        name: "Styling & Design",
        skills: [
          { name: "Tailwind", level: "expert", icon: "Wind", category: "frontend" },
          { name: "CSS", level: "expert", icon: "Paintbrush", category: "frontend" },
          { name: "Styled Components", level: "advanced", icon: "Component", category: "frontend" },
        ]
      },
      {
        name: "State Management",
        skills: [
          { name: "Redux", level: "advanced", icon: "Repeat", category: "frontend" },
          { name: "React Query", level: "advanced", icon: "Database", category: "frontend" },
          { name: "Zustand", level: "intermediate", icon: "Box", category: "frontend" },
        ]
      },
      {
        name: "Form & Validation",
        skills: [
          { name: "React Hook Form", level: "expert", icon: "FormInput", category: "frontend" },
          { name: "Zod", level: "advanced", icon: "Shield", category: "frontend" },
          { name: "Yup", level: "advanced", icon: "CheckCircle", category: "frontend" },
        ]
      },
      {
        name: "Build & Tooling",
        skills: [
          { name: "Vite", level: "advanced", icon: "Zap", category: "tools" },
          { name: "Webpack", level: "intermediate", icon: "Package", category: "tools" },
          { name: "TypeScript", level: "expert", icon: "FileType", category: "languages" },
        ]
      }
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Express", level: "advanced", icon: "ServerCog", category: "backend" },
      { name: "PostgreSQL", level: "advanced", icon: "Database", category: "database" },
      { name: "MongoDB", level: "intermediate", icon: "Layers", category: "database" },
      { name: "REST APIs", level: "expert", icon: "Webhook", category: "backend" },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: "intermediate", icon: "Box", category: "devops" },
      { name: "AWS", level: "intermediate", icon: "Cloud", category: "devops" },
      { name: "CI/CD", level: "intermediate", icon: "GitMerge", category: "devops" },
      { name: "Vercel", level: "advanced", icon: "Triangle", category: "devops" },
    ]
  },
  {
    name: "Testing & Quality",
    skills: [
      { name: "Vitest", level: "advanced", icon: "TestTube", category: "tools" },
      { name: "Jest", level: "advanced", icon: "TestTube", category: "tools" },
      { name: "Postman", level: "advanced", icon: "Network", category: "tools" },
    ]
  },
  {
    name: "Tools & Workflow",
    skills: [
      { name: "Git", level: "expert", icon: "GitBranch", category: "tools" },
      { name: "GitHub", level: "expert", icon: "Github", category: "tools" },
      { name: "Figma", level: "intermediate", icon: "Figma", category: "tools" },
      { name: "VS Code", level: "expert", icon: "Code", category: "tools" },
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: "Brain", category: "tools" },
      { name: "Team Collaboration", icon: "Users", category: "tools" },
      { name: "Adaptability", icon: "Shuffle", category: "tools" },
      { name: "Time Management", icon: "Clock", category: "tools" },
      { name: "Communication", icon: "MessageSquare", category: "tools" },
    ]
  }
]

export const skillsName = skillsData.map((skill) => skill.name)
