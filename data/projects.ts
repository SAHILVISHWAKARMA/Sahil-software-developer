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
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    description: 'Scalable SaaS platform enabling Accounts Receivable workflows with strict tenant-level isolation and a custom event-driven engine.',
    techStack: ['React', 'TypeScript', '.NET Core', 'SQL Server', 'Azure'],
    achievements: [
      'Built a multi-tenant architecture ensuring strict tenant-level data isolation.',
      'Architected an event-driven workflow engine to evaluate triggers and orchestrate actions.',
      'Developed frontend workflow builder and template editor modules using React and TypeScript.',
      'Deployed services to Azure App Service with CI/CD pipelines via Azure DevOps.',
    ],
  },
  {
    id: 'field-service-suite',
    title: 'Field Service Suite (FSS)',
    description: 'Dashboard for scheduling and reporting with real-time data sync and secure API integration.',
    techStack: ['React', 'TypeScript', 'ASP.NET Core', 'SQL Server'],
    achievements: [
      'Built dynamic React dashboards for scheduling, task assignment, and reporting workflows.',
      'Engineered backend APIs enabling real-time data sync for distributed field teams.',
      'Reinforced security by integrating JWT-based authentication and tracked errors via Application Insights.',
    ],
  },
  {
    id: 'payables-approval-tracking',
    title: 'Payables Approval & Tracking (PAT)',
    description: 'Financial workflow system featuring backend modernization and SQL optimization.',
    techStack: ['.NET Core', 'SQL Server', 'React'],
    achievements: [
      'Modernized backend services and UI workflows for financial processing systems.',
      'Optimized SQL Server stored procedures and database logic to improve performance.',
      'Streamlined approval chains and validated workflows end-to-end through integration testing.',
    ],
  },
];
