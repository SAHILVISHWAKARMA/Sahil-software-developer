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
      { name: 'Bootstrap', level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: '.NET Core', level: 85 },
      { name: 'ASP.NET Core', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 80 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'SQL Server', level: 85 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Indexing', level: 75 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'JIRA', level: 80 },
      { name: 'Agile', level: 85 },
    ],
  },
];
