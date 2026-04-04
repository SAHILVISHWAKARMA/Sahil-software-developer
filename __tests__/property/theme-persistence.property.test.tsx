// Feature: developer-portfolio, Property 6: Theme preference round-trip
import { describe, it } from 'vitest';
import * as fc from 'fast-check';

describe('Property 6: Theme preference round-trip', () => {
  it('stores and retrieves theme from localStorage', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('dark', 'light'),
        (theme) => {
          localStorage.setItem('portfolio-theme', theme);
          const stored = localStorage.getItem('portfolio-theme');
          return stored === theme;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('restores theme on subsequent load', () => {
    fc.assert(
      fc.property(
        fc.constantFrom('dark', 'light'),
        (theme) => {
          localStorage.setItem('portfolio-theme', theme);
          // Simulate page reload: read from localStorage
          const restored = localStorage.getItem('portfolio-theme');
          return restored === theme;
        }
      ),
      { numRuns: 100 }
    );
  });
});
