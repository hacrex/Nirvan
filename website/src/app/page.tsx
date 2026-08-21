import { Hero } from '@/components/sections/Hero';
import { RecoveryPaths } from '@/components/sections/RecoveryPaths';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { HumanBenefit } from '@/components/sections/HumanBenefit';
import { TrustModule } from '@/components/sections/TrustModule';
import { EducationSection } from '@/components/sections/EducationSection';
import { CTA } from '@/components/sections/CTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { PageContainer } from '@/components/layout/PageContainer';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/', {
  title: 'NIRVAN — Move Forward. Live Better.',
  description: 'NIRVAN supports rehabilitation, movement, wellbeing, and recovery education for cardiac, neuro, kidney, and liver recovery.',
  keywords: ['digital rehabilitation', 'recovery support', 'wellbeing companion', 'cardiac recovery', 'stroke recovery'],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecoveryPaths />
      <ProductShowcase />
      <HumanBenefit />
      <TrustModule />
      <EducationSection />
      <CTA />
      <FAQSection />
      <section className="border-t border-[#dce4dc] bg-[#f2e9dc] py-12">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
