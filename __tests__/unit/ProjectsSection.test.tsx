import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

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

describe('ProjectsSection', () => {
  it('renders all 3 project titles', () => {
    render(<ProjectsSection />);
    expect(screen.getByText('Automotive CRM Platform')).toBeTruthy();
    expect(screen.getByText('Field Service Suite (FSS)')).toBeTruthy();
    expect(screen.getByText('Payables Approval & Tracking (PAT)')).toBeTruthy();
  });
});
