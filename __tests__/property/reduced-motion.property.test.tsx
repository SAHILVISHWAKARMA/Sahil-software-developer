// Feature: developer-portfolio, Property 8: prefers-reduced-motion disables animations
import { describe, it, vi, beforeEach, afterEach } from 'vitest';
import * as fc from 'fast-check';
import { renderHook } from '@testing-library/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

vi.mock('framer-motion', () => ({
  useAnimation: () => ({ start: vi.fn() }),
  useInView: () => false,
}));

describe('Property 8: prefers-reduced-motion disables animations', () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('returns no-op variants when prefers-reduced-motion is active', () => {
    fc.assert(
      fc.property(
        fc.constant(true),
        (prefersReduced) => {
          window.matchMedia = vi.fn().mockImplementation((query: string) => ({
            matches: query === '(prefers-reduced-motion: reduce)' ? prefersReduced : false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
          }));

          const { result } = renderHook(() => useScrollAnimation());
          const { variants } = result.current;

          const hiddenOpacity = variants.hidden.opacity;
          const visibleOpacity = variants.visible.opacity;
          const hiddenY = variants.hidden.y;
          const visibleY = variants.visible.y;

          return hiddenOpacity === 1 && visibleOpacity === 1 && hiddenY === 0 && visibleY === 0;
        }
      ),
      { numRuns: 100 }
    );
  });

  it('returns motion variants when prefers-reduced-motion is not active', () => {
    fc.assert(
      fc.property(
        fc.constant(false),
        (prefersReduced) => {
          window.matchMedia = vi.fn().mockImplementation((query: string) => ({
            matches: query === '(prefers-reduced-motion: reduce)' ? prefersReduced : false,
            media: query,
            onchange: null,
            addListener: vi.fn(),
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
          }));

          const { result } = renderHook(() => useScrollAnimation());
          const { variants } = result.current;

          return variants.hidden.opacity === 0 && variants.hidden.y === 40;
        }
      ),
      { numRuns: 100 }
    );
  });
});
