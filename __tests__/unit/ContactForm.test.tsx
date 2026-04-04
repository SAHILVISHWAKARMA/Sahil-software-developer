import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ContactForm } from '@/components/ui/ContactForm';

vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200 }),
}));

describe('ContactForm', () => {
  it('shows error messages on empty submit', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeTruthy();
      expect(screen.getByText('Email is required')).toBeTruthy();
      expect(screen.getByText('Message is required')).toBeTruthy();
    });
  });

  it('shows email validation error for invalid email', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test', name: 'name' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'notanemail', name: 'email' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeTruthy();
    });
  });

  it('shows success message on valid submission', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test User', name: 'name' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello there', name: 'message' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeTruthy();
    });
  });
});
