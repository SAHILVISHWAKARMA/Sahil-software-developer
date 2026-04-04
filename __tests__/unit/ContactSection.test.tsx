import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContactSection } from '@/components/sections/ContactSection';

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

describe('ContactSection', () => {
  it('renders mailto link', () => {
    render(<ContactSection />);
    const link = screen.getByText('sahilvishwakarma6260@gmail.com');
    expect(link.closest('a')?.href).toContain('mailto:');
  });

  it('renders LinkedIn link', () => {
    render(<ContactSection />);
    const link = screen.getByText('LinkedIn');
    expect(link.closest('a')?.href).toContain('linkedin.com');
  });

  it('renders contact form fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText('Name')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByLabelText('Message')).toBeTruthy();
  });
});
