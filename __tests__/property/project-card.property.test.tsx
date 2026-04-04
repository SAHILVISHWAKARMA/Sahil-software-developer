// Feature: developer-portfolio, Property 2: ProjectCard renders all required fields
// Feature: developer-portfolio, Property 3: ProjectCard shows action button iff URL present
import { describe, it, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
}));

const nonEmptyString = fc.string({ minLength: 1, maxLength: 50 });
const nonEmptyArray = fc.array(nonEmptyString, { minLength: 1, maxLength: 5 });
const optionalUrl = fc.option(fc.webUrl(), { nil: undefined });

describe('Property 2: ProjectCard renders all required fields', () => {
  it('always renders title, description, techStack, and achievements', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: nonEmptyString,
          description: nonEmptyString,
          techStack: nonEmptyArray,
          achievements: nonEmptyArray,
        }),
        ({ title, description, techStack, achievements }) => {
          const { container, unmount } = render(
            <ProjectCard title={title} description={description} techStack={techStack} achievements={achievements} />
          );
          const text = container.textContent ?? '';
          const hasTitle = text.includes(title);
          const hasDescription = text.includes(description);
          const hasTech = techStack.every((t) => text.includes(t));
          const hasAchievements = achievements.every((a) => text.includes(a));
          unmount();
          return hasTitle && hasDescription && hasTech && hasAchievements;
        }
      ),
      { numRuns: 100 }
    );
  });
});

describe('Property 3: ProjectCard shows action button iff URL present', () => {
  it('GitHub button present iff githubUrl is defined', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: nonEmptyString,
          description: nonEmptyString,
          techStack: nonEmptyArray,
          achievements: nonEmptyArray,
          githubUrl: optionalUrl,
          demoUrl: fc.constant(undefined),
        }),
        ({ title, description, techStack, achievements, githubUrl }) => {
          const { unmount } = render(
            <ProjectCard title={title} description={description} techStack={techStack} achievements={achievements} githubUrl={githubUrl} />
          );
          const hasButton = screen.queryByText('GitHub →') !== null;
          unmount();
          return githubUrl !== undefined ? hasButton : !hasButton;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('Demo button present iff demoUrl is defined', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: nonEmptyString,
          description: nonEmptyString,
          techStack: nonEmptyArray,
          achievements: nonEmptyArray,
          githubUrl: fc.constant(undefined),
          demoUrl: optionalUrl,
        }),
        ({ title, description, techStack, achievements, demoUrl }) => {
          const { unmount } = render(
            <ProjectCard title={title} description={description} techStack={techStack} achievements={achievements} demoUrl={demoUrl} />
          );
          const hasButton = screen.queryByText('Live Demo →') !== null;
          unmount();
          return demoUrl !== undefined ? hasButton : !hasButton;
        }
      ),
      { numRuns: 100 }
    );
  });
});
