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
              <div className="p-6 rounded-[16px] bg-[#E1EADF]/60 border border-[#436444]/20 space-y-3">
                <div className="flex items-center gap-4 text-lg font-bold text-[#2e4e30]">
                  <span>RE — Return, Renewal, Rebuild</span>
                  <span>+</span>
                  <span>VIA — Path, Journey, Way Forward</span>
                </div>
                <p className="text-[#2D2A26] font-semibold text-base">
                  NIRVAN = The path back to strength and wellbeing.
                </p>
              </div>
              <p className="text-[#66615C] text-base leading-relaxed">
                Inspired by ancient ideas of resilience — <em>Dhṛti</em> (fortitude), <em>Utthāna</em> (rising), and <em>Pratyāgati</em> (returning) — NIRVAN is designed for the wanderer who walks the path of recovery regardless of how steep it may feel.
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
