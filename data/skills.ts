export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'ReactJS', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Reusable Component Design', level: 85 },
      { name: 'State Management', level: 80 },
      { name: 'Responsive UI Design', level: 85 },
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'C#', level: 85 },
      { name: '.NET Core', level: 85 },
      { name: 'ASP.NET Core', level: 85 },
      { name: 'EF Core & LINQ', level: 80 },
      { name: 'RESTful API Design', level: 90 },
      { name: 'JWT Authentication', level: 80 },
      { name: 'SOLID Principles & DI', level: 85 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL Server', level: 85 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Indexing Strategies', level: 75 },
      { name: 'Stored Procedures', level: 80 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'JIRA & Agile', level: 85 },
      { name: 'Azure Cloud Services', level: 85 },
      { name: 'Unit & Integration Testing', level: 80 },
    ],
  },
];
