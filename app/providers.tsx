'use client';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" storageKey="portfolio-theme" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
