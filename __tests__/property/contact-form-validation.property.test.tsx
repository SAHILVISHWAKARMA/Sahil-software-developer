// Feature: developer-portfolio, Property 5: Contact form rejects invalid inputs
import { describe, it, vi } from 'vitest';
import * as fc from 'fast-check';
import { render, fireEvent, within, cleanup } from '@testing-library/react';
import React from 'react';
import { ContactForm } from '@/components/ui/ContactForm';

vi.mock('@emailjs/browser', () => ({
  send: vi.fn().mockResolvedValue({ status: 200 }),
}));

const invalidEmail = fc.oneof(
  fc.constant(''),
  fc.constant('notanemail'),
  fc.constant('@nodomain'),
  fc.constant('no@'),
  fc.constant('spaces in@email.com'),
);

describe('Property 5: Contact form rejects invalid inputs', () => {
  it('shows error when name is empty', () => {
    fc.assert(
      fc.property(
        fc.constant(''),
        fc.emailAddress(),
        fc.string({ minLength: 1 }),
        (name, email, message) => {
          cleanup();
          const { container } = render(<ContactForm />);
          const scope = within(container);
          fireEvent.change(scope.getByLabelText('Name'), { target: { value: name, name: 'name' } });
          fireEvent.change(scope.getByLabelText('Email'), { target: { value: email, name: 'email' } });
          fireEvent.change(scope.getByLabelText('Message'), { target: { value: message, name: 'message' } });
          fireEvent.click(scope.getByRole('button', { name: /send message/i }));
          const hasError = scope.queryByText('Name is required') !== null;
          cleanup();
          return hasError;
        }
      ),
      { numRuns: 20 }
    );
  });

  it('shows error for invalid email format', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }),
        invalidEmail,
        fc.string({ minLength: 1 }),
        (name, email, message) => {
          cleanup();
          const { container } = render(<ContactForm />);
          const scope = within(container);
          fireEvent.change(scope.getByLabelText('Name'), { target: { value: name, name: 'name' } });
          fireEvent.change(scope.getByLabelText('Email'), { target: { value: email, name: 'email' } });
          fireEvent.change(scope.getByLabelText('Message'), { target: { value: message, name: 'message' } });
          fireEvent.click(scope.getByRole('button', { name: /send message/i }));
          const hasEmailError = scope.queryByText('Please enter a valid email address') !== null
            || scope.queryByText('Email is required') !== null;
          cleanup();
          return hasEmailError;
        }
      ),
      { numRuns: 20 }
    );
  });
});
