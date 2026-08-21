import { PageContainer } from '@/components/layout/PageContainer';
import { RecoveryPaths } from '@/components/sections/RecoveryPaths';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/rehabilitation', {
  title: 'Rehabilitation Pathways Overview',
  description: 'Explore NIRVAN specialized digital rehabilitation pathways for Cardiac, Neuro, Stroke, Kidney, and Liver recovery.',
});

export default function RehabilitationOverviewPage() {
  return (
    <>
      <section className="py-8 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Rehabilitation' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Recovery Pathways
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Every condition requires a thoughtful, tailored approach. NIRVAN provides personalized, clinician-reviewed digital support designed for your specific recovery pathway.
            </p>
          </div>
        </PageContainer>
      </section>

      <RecoveryPaths />

      <section className="py-16 bg-[#F2E8DA]/20">
        <PageContainer size="narrow">
          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
