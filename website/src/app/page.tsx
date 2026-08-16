import { RecoveryPaths } from '@/components/sections/RecoveryPaths';
import { WhyRevia } from '@/components/sections/WhyRevia';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { WellbeingSection } from '@/components/sections/WellbeingSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { PageContainer } from '@/components/layout/PageContainer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <RecoveryPaths />
      <ProductShowcase />
      <WhyRevia />
      <HowItWorks />
      <Features />
      <WellbeingSection />
      <EducationSection />
      <Testimonials />
      <CTA />
      <FAQSection />
      <section className="border-t border-[#e6e2dc] bg-[#f2e8da]/35 py-12">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
