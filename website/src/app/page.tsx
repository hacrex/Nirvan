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
