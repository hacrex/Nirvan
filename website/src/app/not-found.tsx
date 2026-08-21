import type { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The NIRVAN page you requested could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-[#fdf9f3] py-20">
      <PageContainer size="narrow" className="text-center">
        <p className="eyebrow text-[#9f4f35]">404</p>
        <h1 className="mt-4 text-4xl font-bold text-[#2D2A26] sm:text-5xl">This page could not be found.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#46514a]">
          The link may be outdated, or the page may have moved. Return to NIRVAN and continue exploring recovery and wellbeing support.
        </p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#285b4a] px-6 py-3 font-bold text-white transition-colors hover:bg-[#173d32]">
          Return to NIRVAN home
        </Link>
      </PageContainer>
    </section>
  );
}
