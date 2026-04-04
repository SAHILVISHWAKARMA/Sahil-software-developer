import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SkillsSection } from '@/components/sections/SkillsSection';

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

describe('SkillsSection', () => {
  it('renders all 4 category headings', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Frontend')).toBeTruthy();
    expect(screen.getByText('Backend')).toBeTruthy();
    expect(screen.getByText('Database')).toBeTruthy();
    expect(screen.getByText('Tools')).toBeTruthy();
  });

  it('renders skill names', () => {
    render(<SkillsSection />);
    expect(screen.getByText('ReactJS')).toBeTruthy();
    expect(screen.getByText('.NET Core')).toBeTruthy();
    expect(screen.getByText('SQL Server')).toBeTruthy();
    expect(screen.getByText('Git')).toBeTruthy();
  });
});
