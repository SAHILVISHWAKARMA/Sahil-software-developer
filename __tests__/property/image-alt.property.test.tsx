// Feature: developer-portfolio, Property 7: All images have non-empty alt text
import { describe, it, vi } from 'vitest';
import * as fc from 'fast-check';
import { render } from '@testing-library/react';
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

import { SkillBar } from '@/components/ui/SkillBar';

describe('Property 7: All images have non-empty alt text', () => {
  it('SkillBar img has non-empty alt text when icon is provided', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 30 }),
        fc.integer({ min: 0, max: 100 }),
        fc.webUrl(),
        (name, level, icon) => {
          const { container, unmount } = render(<SkillBar name={name} level={level} icon={icon} />);
          const imgs = container.querySelectorAll('img');
          const allHaveAlt = Array.from(imgs).every(
            (img) => img.hasAttribute('alt') && img.getAttribute('alt') !== ''
          );
          unmount();
          return allHaveAlt;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('SkillBar renders no img when icon is not provided', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 30 }),
        fc.integer({ min: 0, max: 100 }),
        (name, level) => {
          const { container, unmount } = render(<SkillBar name={name} level={level} />);
          const imgs = container.querySelectorAll('img');
          unmount();
          return imgs.length === 0;
        }
      ),
      { numRuns: 100 }
    );
  });
});
