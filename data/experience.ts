export interface ExperienceEntry {
  company: string;
  role: string;
  tenure: string;
  achievements: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: 'Aloha Technology Pvt. Ltd.',
    role: 'Full Stack Software Developer',
    tenure: 'Sep 2022 – Present',
    achievements: [
      'Built scalable frontend using React and TypeScript',
      'Developed 30+ REST APIs using ASP.NET Core',
      'Improved application performance via SQL query optimization',
      'Collaborated in Agile teams using JIRA for sprint planning',
    ],
  },
];
