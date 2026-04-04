import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AchievementsSection } from '@/components/sections/AchievementsSection';

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

describe('AchievementsSection', () => {
  it('renders all 4 achievement titles', () => {
    render(<AchievementsSection />);
    expect(screen.getByText('Performance Optimization')).toBeTruthy();
    expect(screen.getByText('Critical Workflow Resolution')).toBeTruthy();
    expect(screen.getByText('Edge Case Identification')).toBeTruthy();
    expect(screen.getByText('Complex Debugging')).toBeTruthy();
  });
});
