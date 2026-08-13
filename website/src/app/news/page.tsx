import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleCard } from '@/components/content/ArticleCard';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { samplePosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'REVIA News & Updates',
  description: 'Latest product updates, clinical research highlights, and news from REVIA.',
};

export default function NewsListingPage() {
  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'News' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#436444]">
              Platform & Research Updates
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              REVIA News & Insights
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Product updates, clinical evidence summaries, and news about our patient recovery companion.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {samplePosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
