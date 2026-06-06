export interface ExperienceEntry {
  company: string;
  role: string;
  tenure: string;
  achievements: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    company: 'Aloha Technology Pvt. Ltd.',
    role: 'Software Developer',
    tenure: 'Sep 2022 – Present',
    achievements: [
      'Architected scalable and reusable frontend components using ReactJS and TypeScript for enterprise applications.',
      'Delivered 30+ RESTful APIs hosted on Azure App Service, improving system response time by ~25%; monitored performance via Azure Application Insights.',
      'Integrated Web APIs with frontend applications to ensure seamless data flow and enhanced user experience.',
      'Applied clean architecture principles (SOLID) to enhance modularity, scalability, and long-term maintainability.',
      'Participated in sprint planning, daily standups, and retrospectives following Agile/Scrum methodology.',
      'Partnered with cross-functional teams to translate business requirements into production-ready solutions.',
    ],
  },
];
