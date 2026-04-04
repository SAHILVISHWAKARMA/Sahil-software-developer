export interface Achievement {
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Performance Optimization',
    description: 'Improved system performance by optimizing SQL queries, reducing load times by up to 60%.',
  },
  {
    title: 'Critical Workflow Resolution',
    description: 'Resolved critical workflow issues in the PAT system that were blocking financial approvals.',
  },
  {
    title: 'Edge Case Identification',
    description: 'Identified and fixed edge cases in production that were causing intermittent data inconsistencies.',
  },
  {
    title: 'Complex Debugging',
    description: 'Debugged complex multi-layer issues spanning frontend, backend, and database tiers.',
  },
];
