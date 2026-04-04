import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Navbar } from '@/components/Navbar';

vi.mock('@/hooks/useScrollY', () => ({ useScrollY: () => 0 }));
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'dark', setTheme: vi.fn() }),
}));

describe('Navbar', () => {
  it('renders all 7 nav links', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Achievements').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
  });

  it('renders ThemeToggle button', () => {
    render(<Navbar />);
    expect(screen.getAllByRole('button', { name: /toggle theme/i }).length).toBeGreaterThan(0);
  });

  it('renders ResumeButton', () => {
    render(<Navbar />);
    expect(screen.getAllByText('Resume').length).toBeGreaterThan(0);
  });

  it('hamburger toggles mobile menu', () => {
    render(<Navbar />);
    const hamburger = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(hamburger);
    expect(screen.getByRole('button', { name: /close menu/i })).toBeTruthy();
  });
});
