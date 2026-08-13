import { MetadataRoute } from 'next';
import { samplePosts } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reviarecovery.com';

  const staticRoutes = [
    '',
    '/rehabilitation',
    '/rehabilitation/cardiac',
    '/rehabilitation/neuro',
    '/rehabilitation/stroke',
    '/rehabilitation/paralysis',
    '/rehabilitation/kidney',
    '/rehabilitation/liver',
    '/wellbeing',
    '/exercises',
    '/resources',
    '/blog',
    '/news',
    '/newsletter',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/medical-disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = samplePosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
