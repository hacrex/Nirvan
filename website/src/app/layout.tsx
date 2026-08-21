import type { Metadata } from 'next';
import { Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { StickyMobileCTA } from '@/components/ui/StickyMobileCTA';
import { siteUrl } from '@/lib/site';

const atkinson = Atkinson_Hyperlegible({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-atkinson',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'NIRVAN — Move Forward. Live Better.',
    template: '%s | NIRVAN — Move Forward. Live Better.',
  },
  description:
    'NIRVAN supports rehabilitation, movement, wellbeing, and recovery education for cardiac, neuro, kidney, and liver recovery.',
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
  authors: [{ name: 'NIRVAN Health Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'NIRVAN',
    title: 'NIRVAN — Digital Rehabilitation & Wellbeing Companion',
    description:
      'Move Forward. Live Better. NIRVAN brings recovery plans, exercises, wellbeing tracking, and clinical education together.',
    images: [{
      url: '/brand/nirvan-social-landscape.png',
      width: 1920,
      height: 1080,
      alt: 'NIRVAN — Move Forward. Live Better. Digital rehabilitation and wellbeing companion.',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIRVAN — Move Forward. Live Better.',
    description: 'Digital rehabilitation and wellbeing companion.',
    images: ['/brand/nirvan-social-landscape.png'],
  },
  manifest: '/manifest.webmanifest',
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
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
