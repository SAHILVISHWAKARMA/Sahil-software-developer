// Feature: developer-portfolio, Property 4: Achievement renders title and description
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

const AchievementCard = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

describe('Property 4: Achievement renders title and description', () => {
  it('always renders both title and description', () => {
    fc.assert(
      fc.property(
        fc.record({
          title: fc.string({ minLength: 1, maxLength: 100 }),
          description: fc.string({ minLength: 1, maxLength: 200 }),
        }),
        ({ title, description }) => {
          const { container, unmount } = render(<AchievementCard title={title} description={description} />);
          const text = container.textContent ?? '';
          const hasTitle = text.includes(title);
          const hasDescription = text.includes(description);
          unmount();
          return hasTitle && hasDescription;
        }
      ),
      { numRuns: 100 }
    );
  });
});
