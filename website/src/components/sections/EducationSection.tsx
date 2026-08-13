import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ArrowRight, BookOpen, Clock, UserCheck } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const articles = [
    {
      title: 'Understanding Cardiac Rehabilitation: First 30 Days',
      excerpt: 'What to expect during early heart recovery, safe activity thresholds, and building daily consistency.',
      category: 'Cardiac',
      readTime: '4 min read',
      href: '/blog',
    },
    {
      title: 'Motor Recovery & Neuroplasticity After Stroke',
      excerpt: 'How gentle, repeated movement patterns stimulate neural pathways to regain motor control over time.',
      category: 'Neuro & Stroke',
      readTime: '6 min read',
      href: '/blog',
    },
    {
      title: 'Managing Fatigue During Chronic Kidney Care',
      excerpt: 'Practical strategies for balancing physical activity, rest intervals, and muscle function preservation.',
      category: 'Kidney Health',
      readTime: '5 min read',
      href: '/blog',
    },
  ];

  return (
    <section className="py-20 bg-[#F2E8DA]/40">
      <PageContainer>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary" icon={<UserCheck className="w-4 h-4 text-[#436444]" />}>
              Clinician-Reviewed Content
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
              Learn About Your Recovery
            </h2>
            <p className="text-lg text-[#66615C]">
              Clear, evidence-aware education reviewed by healthcare professionals to help you understand your recovery journey.
            </p>
          </div>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-[#436444] font-bold text-base hover:underline">
              <span>View All Articles</span>
              <ArrowRight className="w-5 h-5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <Link key={idx} href={art.href} className="group block">
              <Card className="h-full flex flex-col justify-between p-7 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" size="sm">{art.category}</Badge>
                    <span className="text-xs text-[#66615C] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-[#66615C] text-sm leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e6e2dc] flex items-center gap-2 text-xs font-bold text-[#436444]">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Article</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
