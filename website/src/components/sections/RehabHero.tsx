import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../layout/PageContainer';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Breadcrumbs, BreadcrumbItem } from '../layout/Breadcrumbs';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface RehabHeroProps {
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  accentColor?: string;
}

export const RehabHero: React.FC<RehabHeroProps> = ({
  title,
  subtitle,
  badge,
  icon,
  breadcrumbs,
  ctaText = 'Start Your Recovery Journey',
}) => {
  return (
    <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
      <PageContainer>
        <Breadcrumbs items={breadcrumbs} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
          <div className="lg:col-span-8 space-y-6">
            <Badge variant="primary" icon={icon}>
              {badge}
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="#download">
                <Button variant="primary" size="lg" className="gap-2">
                  <span>{ctaText}</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
              <ShieldCheck className="w-4 h-4 text-[#436444]" />
              <span>Clinician-reviewed educational content and structured physical support.</span>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
