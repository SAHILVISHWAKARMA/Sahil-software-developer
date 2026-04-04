import { describe, it, expect } from 'vitest';
import { metadata } from '@/app/layout';

describe('SEO Metadata', () => {
  it('has correct title', () => {
    expect(metadata.title).toBe('Sahil Vishwakarma | Full Stack Software Developer');
  });

  it('has description', () => {
    expect(metadata.description).toBeTruthy();
    expect(typeof metadata.description).toBe('string');
  });

  it('has openGraph title', () => {
    expect((metadata.openGraph as { title?: string })?.title).toBeTruthy();
  });

  it('has openGraph description', () => {
    expect((metadata.openGraph as { description?: string })?.description).toBeTruthy();
  });
});
