export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'automotive-crm',
    title: 'Automotive CRM Platform',
    description: 'Lead management system with 15+ APIs, React frontend, and .NET backend.',
    techStack: ['React', 'TypeScript', '.NET Core', 'SQL Server'],
    achievements: ['Built 15+ REST APIs', 'Reduced lead response time by 40%'],
  },
  {
    id: 'field-service-suite',
    title: 'Field Service Suite (FSS)',
    description: 'Dashboard for scheduling and reporting with real-time data sync and secure API integration.',
    techStack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
    achievements: ['Real-time data sync', 'Secure JWT-based API integration'],
  },
  {
    id: 'payables-approval-tracking',
    title: 'Payables Approval & Tracking (PAT)',
    description: 'Financial workflow system featuring backend modernization and SQL optimization.',
    techStack: ['.NET Core', 'SQL Server', 'React'],
    achievements: ['Backend modernization', 'SQL query optimization reducing load by 60%'],
  },
];
