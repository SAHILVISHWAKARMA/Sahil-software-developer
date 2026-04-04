import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sahil Vishwakarma | Full Stack Software Developer',
  description: 'Portfolio of Sahil Vishwakarma, a Full Stack Software Developer with 3.5+ years of experience building scalable web applications with React and .NET.',
  openGraph: {
    title: 'Sahil Vishwakarma | Full Stack Software Developer',
    description: 'Portfolio of Sahil Vishwakarma, a Full Stack Software Developer with 3.5+ years of experience.',
    type: 'website',
    url: 'https://sahilvishwakarma.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahil Vishwakarma | Full Stack Software Developer',
    description: 'Portfolio of Sahil Vishwakarma, a Full Stack Software Developer.',
  },
  metadataBase: new URL('https://sahilvishwakarma.dev'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
