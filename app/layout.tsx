import type { Metadata } from 'next';
import './globals.css';
import FloatingParticles from '@/components/floating-particles';

export const metadata: Metadata = {
  title: 'STAN | Stanley T. M. Menbah Jr.',
  description:
    'Personal portfolio of Stanley T. M. Menbah Jr., a full stack developer, cybersecurity enthusiast, STEM advocate, and peer educator.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'STAN | Stanley T. M. Menbah Jr.',
    description: 'Modern portfolio website for Stanley T. M. Menbah Jr.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#050B1A] text-white antialiased">
        <FloatingParticles />
        <main className="site-content">{children}</main>
      </body>
    </html>
  );
}
