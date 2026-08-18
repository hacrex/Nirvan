import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { siteUrl } from '@/lib/site';
import { Clock, UserCheck, Calendar } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${siteUrl}/blog/${post.slug}`}
        datePublished={post.date}
        authorName={post.author}
        reviewerName={post.reviewer}
      />

      <section className="py-12 bg-[#F2E8DA]/30 border-b border-[#e6e2dc]">
        <PageContainer size="narrow">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />

          <div className="space-y-4 pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" size="sm">
                {post.category}
              </Badge>
              <span className="text-xs text-[#66615C] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="text-xs text-[#66615C] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
              {post.title}
            </h1>

            {post.reviewer && (
              <div className="p-4 rounded-[12px] bg-[#E1EADF] border border-[#436444]/30 inline-flex items-center gap-2 text-sm text-[#2e4e30] font-semibold">
                <UserCheck className="w-5 h-5 text-[#436444]" />
                <span>Clinician-Reviewed by {post.reviewer}</span>
              </div>
            )}
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer size="narrow">
          <article className="prose prose-lg prose-slate max-w-none text-[#2D2A26] leading-relaxed space-y-6">
            <div className="whitespace-pre-line">{post.content}</div>
          </article>

          <div className="mt-16 pt-8 border-t border-[#e6e2dc]">
            <MedicalDisclaimer />
          </div>
        </PageContainer>
      </section>
    </>
  );
}
