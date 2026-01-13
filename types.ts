export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tech: string[];
  description: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}