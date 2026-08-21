import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';

const socialImage = '/brand/nirvan-social-landscape.png';
const socialImageAlt = 'NIRVAN — Move Forward. Live Better. Digital rehabilitation and wellbeing companion.';

export function createPageMetadata(path: string, metadata: Metadata): Metadata {
  const canonical = `${siteUrl}${path}`;
  const title = typeof metadata.title === 'string' ? metadata.title : 'NIRVAN — Move Forward. Live Better.';
  const description = typeof metadata.description === 'string'
    ? metadata.description
    : 'NIRVAN supports rehabilitation, movement, wellbeing, and recovery education.';

  const existingOpenGraph = (metadata.openGraph ?? {}) as Record<string, unknown>;
  const existingTwitter = (metadata.twitter ?? {}) as Record<string, unknown>;

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...existingOpenGraph,
      type: (existingOpenGraph.type as 'website' | 'article' | undefined) ?? 'website',
      url: canonical,
      siteName: 'NIRVAN',
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1920,
          height: 1080,
          alt: socialImageAlt,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      ...existingTwitter,
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
  };
}
