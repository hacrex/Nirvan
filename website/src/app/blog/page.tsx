'use client';

import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ArticleCard } from '@/components/content/ArticleCard';
import { CategoryFilter } from '@/components/content/CategoryFilter';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { samplePosts } from '@/lib/mdx';

const categories = ['All', 'Cardiac', 'Neuro', 'Kidney', 'Liver', 'Wellbeing'];

export default function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? samplePosts
    : samplePosts.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Blog & Articles' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#436444]">
              Clinician-Reviewed Education
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              NIRVAN Health & Recovery Blog
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Understandable, evidence-aware guides written for patients and families on the journey of rehabilitation.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <div className="mb-10">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
