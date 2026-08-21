import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FAQSection } from '@/components/sections/FAQSection';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/faq', {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find detailed answers to common questions about NIRVAN, rehabilitation pathways, safety, offline capability, and health privacy.',
});

export default function FAQPage() {
  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Find answers to questions about our platform, rehabilitation pathways, clinical content safety, and privacy policies.
            </p>
          </div>
        </PageContainer>
      </section>

      <FAQSection />

      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer size="narrow">
          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
