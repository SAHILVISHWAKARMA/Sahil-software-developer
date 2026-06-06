import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AboutSection } from '@/components/sections/AboutSection';

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

describe('AboutSection', () => {
  it('renders professional summary mentioning 3.5+ years', () => {
    render(<AboutSection />);
    expect(screen.getByText(/3\.5\+ years/i)).toBeTruthy();
  });

  it('renders React and .NET expertise', () => {
    render(<AboutSection />);
    expect(screen.getByText(/React and \.NET/i)).toBeTruthy();
  });

  it('renders all 4 strengths', () => {
    render(<AboutSection />);
    expect(screen.getByText('Strong debugging and problem-solving in complex distributed systems')).toBeTruthy();
    expect(screen.getByText('Comfortable modernizing legacy codebases incrementally')).toBeTruthy();
    expect(screen.getByText('Focus on code correctness, maintainability, and production stability')).toBeTruthy();
    expect(screen.getByText('Effective communicator in technical discussions, PR reviews, and issue analysis')).toBeTruthy();
  });
});
