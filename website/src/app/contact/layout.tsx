import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata('/contact', {
  title: 'Contact NIRVAN Support',
  description: 'Contact the NIRVAN team with questions about recovery education, wellbeing resources, early access, privacy, or support.',
  keywords: ['NIRVAN contact', 'recovery support contact', 'rehabilitation support', 'health app support'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
