import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HeroSection } from '@/components/sections/HeroSection';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p {...props}>{children}</p>,
  },
}));

describe('HeroSection', () => {
  it('renders name', () => {
    render(<HeroSection />);
    expect(screen.getByText('Sahil Vishwakarma')).toBeTruthy();
  });

  it('renders role', () => {
    render(<HeroSection />);
    expect(screen.getByText('Full Stack Software Developer')).toBeTruthy();
  });

  it('renders tagline', () => {
    render(<HeroSection />);
    expect(screen.getByText('Building scalable, high-performance web applications')).toBeTruthy();
  });

  it('renders View Projects CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText('View Projects')).toBeTruthy();
  });

  it('renders Contact Me CTA', () => {
    render(<HeroSection />);
    expect(screen.getByText('Contact Me')).toBeTruthy();
  });
});
