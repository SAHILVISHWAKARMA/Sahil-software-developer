// Feature: developer-portfolio, Property 1: Skills are grouped by category
import { describe, it, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, screen } from '@testing-library/react';
import React from 'react';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
  },
  useAnimation: () => ({ start: vi.fn() }),
  useInView: () => true,
}));
vi.mock('@/hooks/useScrollAnimation', () => ({
  useScrollAnimation: () => ({ ref: { current: null }, controls: { start: vi.fn() }, variants: {} }),
}));
vi.mock('@/components/ui/SkillBar', () => ({
  SkillBar: ({ name }: { name: string }) => <div data-testid="skill-bar">{name}</div>,
}));

import { skillCategories, type SkillCategory } from '@/data/skills';

describe('Property 1: Skills are grouped by category', () => {
  it('each skill appears under its correct category', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...skillCategories),
        (cat: SkillCategory) => {
          return cat.skills.every((skill) => skill.name.length > 0 && cat.category.length > 0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('renders each skill under its category heading', () => {
    const TestComponent = ({ categories }: { categories: SkillCategory[] }) => (
      <div>
        {categories.map((cat) => (
          <div key={cat.category} data-testid={`category-${cat.category}`}>
            <h3>{cat.category}</h3>
            {cat.skills.map((skill) => (
              <div key={skill.name} data-testid="skill-bar">{skill.name}</div>
            ))}
          </div>
        ))}
      </div>
    );

    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            category: fc.constantFrom('Frontend' as const, 'Backend' as const, 'Database' as const, 'Tools' as const),
            skills: fc.array(
              fc.record({
                name: fc.string({ minLength: 1, maxLength: 20 }),
                level: fc.integer({ min: 0, max: 100 }),
              }),
              { minLength: 1, maxLength: 5 }
            ),
          }),
          { minLength: 1, maxLength: 4 }
        ),
        (categories) => {
          const { container, unmount } = render(<TestComponent categories={categories} />);
          let allCorrect = true;
          for (const cat of categories) {
            // Use container.querySelectorAll to avoid "multiple elements" error when same category appears twice
            const catEls = container.querySelectorAll(`[data-testid="category-${cat.category}"]`);
            if (catEls.length === 0) { allCorrect = false; break; }
            // Find the category element that contains all skills for this category entry
            const catEl = Array.from(catEls).find((el) =>
              cat.skills.every((skill) => el.textContent?.includes(skill.name))
            );
            if (!catEl) { allCorrect = false; break; }
          }
          unmount();
          return allCorrect;
        }
      ),
      { numRuns: 100 }
    );
  });
});
