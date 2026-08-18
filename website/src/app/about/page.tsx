import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Heart, Compass, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About NIRVAN — Our Brand Story & Mission',
  description: 'Learn about NIRVAN origin, brand story, philosophy, and mission to support recovery step by step.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'About NIRVAN' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <Badge variant="primary" icon={<Sparkles className="w-4 h-4 text-[#436444]" />}>
              The Path Back to Strength
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              About NIRVAN
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              NIRVAN brings recovery, movement, wellbeing, education, and progress together into one patient-focused companion.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer size="narrow">
          <div className="space-y-12">
            {/* The Name & Origin */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">The Meaning Behind NIRVAN</h2>
              <div className="space-y-3 rounded-[16px] border border-[#436444]/20 bg-[#E1EADF]/60 p-6">
                <p className="eyebrow text-[#436444]">The NIRVAN idea</p>
                <p className="text-lg font-semibold leading-relaxed text-[#2D2A26]">
                  NIRVAN represents the journey beyond illness — rebuilding strength, restoring confidence, and finding a new rhythm for everyday living.
                </p>
              </div>
              <p className="text-base leading-relaxed text-[#66615C]">
                The name reflects a direction rather than a promise: moving toward greater resilience, independence, wellbeing, and everyday possibility. NIRVAN supports that journey with thoughtful rehabilitation guidance, useful education, and gentle routines — without claiming to cure illness or replace professional care.
              </p>
            </div>

            {/* Five-Word Philosophy */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">Our Five-Word Philosophy</h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                {['Return', 'Rebuild', 'Recover', 'Regain', 'Renew'].map((word, i) => (
                  <div key={i} className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] shadow-soft font-bold text-[#436444] text-lg">
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">Our Core Beliefs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-lg text-[#2D2A26]">
                    <Heart className="w-5 h-5 text-[#C0564B]" />
                    <span>Every Step Matters</span>
                  </div>
                  <p className="text-sm text-[#66615C] leading-relaxed">
                    Recovery is non-linear. A difficult day does not erase previous progress. We celebrate meaningful small victories without turning recovery into a stressful competition.
                  </p>
                </Card>

                <Card className="p-6 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-lg text-[#2D2A26]">
                    <Compass className="w-5 h-5 text-[#436444]" />
                    <span>Consistency over Perfection</span>
                  </div>
                  <p className="text-sm text-[#66615C] leading-relaxed">
                    Small daily actions sustained over time create lasting physical and mental renewal. NIRVAN makes showing up simple and achievable.
                  </p>
                </Card>
              </div>
            </div>

            <MedicalDisclaimer />
          </div>
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
