import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';

const atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-atkinson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'REVIA — Move Forward. Live Better.',
    template: '%s | REVIA — Move Forward. Live Better.',
  },
  description:
    'REVIA is a patient-focused recovery companion bringing rehabilitation, movement, wellbeing, education, and progress together. Cardiac, Neuro, Kidney, and Liver recovery support.',
  keywords: [
    'rehabilitation',
    'recovery',
    'cardiac rehab',
    'stroke recovery',
    'neuro rehabilitation',
    'kidney rehabilitation',
    'liver rehabilitation',
    'wellbeing',
    'exercise library',
    'patient recovery',
  ],
  authors: [{ name: 'REVIA Health Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reviarecovery.com',
    siteName: 'REVIA',
    title: 'REVIA — Digital Rehabilitation & Wellbeing Companion',
    description:
      'Move Forward. Live Better. REVIA brings recovery plans, exercises, wellbeing tracking, and clinical education together.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVIA — Move Forward. Live Better.',
    description: 'Digital rehabilitation and wellbeing companion.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${atkinson.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdf9f3] text-[#2D2A26]">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
