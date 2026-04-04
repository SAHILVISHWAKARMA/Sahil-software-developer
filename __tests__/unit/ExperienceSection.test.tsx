import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

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

describe('ExperienceSection', () => {
  it('renders employer name', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('Aloha Technology Pvt. Ltd.')).toBeTruthy();
  });

  it('renders tenure', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('Sep 2022 – Present')).toBeTruthy();
  });

  it('renders role title', () => {
    render(<ExperienceSection />);
    expect(screen.getByText('Full Stack Software Developer')).toBeTruthy();
  });

  it('renders achievements', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/30\+ REST APIs/i)).toBeTruthy();
  });
});
