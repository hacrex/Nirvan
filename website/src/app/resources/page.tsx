import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { BookOpen, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/resources', {
  title: 'Recovery Resources',
  description: 'Access patient guides, educational explainers, condition overview sheets, and clinician-reviewed recovery materials.',
});

export default function ResourcesPage() {
  const resourceCards = [
    {
      icon: <BookOpen className="w-7 h-7 text-[#436444]" />,
      title: 'Blog & Articles',
      desc: 'Deep dives into recovery science, exercise explanations, and patient stories.',
      href: '/blog',
      cta: 'Explore Articles',
    },
    {
      icon: <HelpCircle className="w-7 h-7 text-[#8c4e33]" />,
      title: 'Frequently Asked Questions',
      desc: 'Clear answers regarding NIRVAN, pathway safety, offline features, and health tracking.',
      href: '/faq',
      cta: 'View FAQ',
    },
    {
      icon: <FileText className="w-7 h-7 text-[#5B8FB9]" />,
      title: 'Medical & Safety Information',
      desc: 'Understand our clinical review workflow, safety guidelines, and patient disclaimer.',
      href: '/medical-disclaimer',
      cta: 'Read Disclaimer',
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Resources' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Recovery Resources
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Explore clinician-reviewed guides, educational articles, and recovery tools designed to keep you informed.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {resourceCards.map((res, idx) => (
              <Link key={idx} href={res.href} className="group block">
                <Card className="h-full p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 rounded-[16px] bg-[#E1EADF] w-fit">
                      {res.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-[#66615C] text-sm leading-relaxed">{res.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-[#e6e2dc] flex items-center gap-2 text-sm font-bold text-[#436444]">
                    <span>{res.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
