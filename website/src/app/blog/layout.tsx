import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata('/blog', {
  title: 'Recovery & Wellbeing Blog',
  description: 'Clinician-reviewed, evidence-aware guides on rehabilitation, movement, wellbeing, sleep, and recovery for patients and families.',
  keywords: ['rehabilitation blog', 'recovery education', 'cardiac rehabilitation advice', 'stroke recovery guides', 'wellbeing resources'],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
