import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ResumeButton } from '@/components/ResumeButton';

describe('ResumeButton', () => {
  it('has download attribute', () => {
    render(<ResumeButton />);
    const link = screen.getByText('Resume').closest('a');
    expect(link?.hasAttribute('download')).toBe(true);
  });

  it('has target="_blank"', () => {
    render(<ResumeButton />);
    const link = screen.getByText('Resume').closest('a');
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('links to resume.pdf', () => {
    render(<ResumeButton />);
    const link = screen.getByText('Resume').closest('a');
    expect(link?.getAttribute('href')).toBe('/resume.pdf');
  });
});
