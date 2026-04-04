'use client';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  achievements: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export function ProjectCard({ title, description, techStack, achievements, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.div
      className="flex flex-col h-full p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-default"
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">{description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-md border border-[var(--border)] text-[var(--muted)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="flex flex-col gap-1.5 mb-4">
        {achievements.map((a) => (
          <li key={a} className="flex items-start gap-2 text-xs text-[var(--muted)]">
            <span className="mt-1 w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>

      {(githubUrl || demoUrl) && (
        <div className="flex gap-3 mt-auto pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--accent)] hover:underline"
            >
              GitHub →
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--accent)] hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
