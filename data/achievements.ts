export interface Achievement {
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: 'Critical Workflow Resolution',
    description: 'Resolved critical workflow defects impacting scheduling processes, restoring system stability under tight deadlines.',
  },
  {
    title: 'Edge Case Identification',
    description: 'Identified edge cases in UI and backend integrations to prevent data loss across tenant environments.',
  },
  {
    title: 'Regression Troubleshooting',
    description: 'Performed environment comparisons to troubleshoot and isolate release-specific regression issues.',
  },
  {
    title: 'Performance Optimization',
    description: 'Improved application responsiveness through targeted database indexing and API-level caching strategies.',
  },
];
