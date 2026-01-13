import { ExperienceItem, EducationItem, ProjectItem, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/himanshu-agrawal-46966a205",
  email: "himanshuagrawal72539@gmail.com",
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "honeywell",
    role: "Engineer Web/Software Intern",
    company: "Honeywell",
    period: "January 2024 - Present",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Acquired expertise in API design and development, including robust authentication and authorization mechanisms.",
      "Conducted in-depth data analysis from experiments and created comprehensive reports and dashboards using Power BI and Tableau.",
      "Improved technical abilities through training and practical application of .NET and Angular frameworks.",
      "Collaborated with the ITSM team to implement corrective and preventive actions, significantly reducing incident recurrence."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "srm",
    degree: "Bachelor of Technology - BTech, Computer Science",
    school: "SRM University",
    period: "September 2020 - July 2024",
    details: ""
  },
  {
    id: "dominic",
    degree: "Higher Education (12th), Science",
    school: "St. Dominic's Sr. Sec. School",
    period: "April 2019 - March 2020",
    details: ""
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Core",
    skills: [".NET Framework", "C#", "Python", "API Design", "Authentication/Authorization"]
  },
  {
    title: "Frontend",
    skills: ["Angular", "JavaScript", "HTML/CSS", "TypeScript"]
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "Tableau", "Data Analysis", "SQL"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "1",
    title: "Secure API Gateway",
    tech: [".NET", "C#", "OAuth"],
    description: "Designed and developed a secure API infrastructure focusing on scalable authentication and authorization protocols to protect enterprise data endpoints.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    title: "Enterprise Analytics Dashboard",
    tech: ["Power BI", "Tableau", "SQL"],
    description: "Created interactive dashboards visualizing complex experimental data, enabling stakeholders to make data-driven decisions through clear reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    title: "ITSM Incident Prevention System",
    tech: ["Automation", "Data Analysis", "Process Optimization"],
    description: "Collaborated on a system to analyze incident patterns, implementing preventive logic that reduced recurrence of common software faults.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
  }
];