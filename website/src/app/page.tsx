import { Hero } from '@/components/sections/Hero';
import { RecoveryPaths } from '@/components/sections/RecoveryPaths';
import { WhyRevia } from '@/components/sections/WhyRevia';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Features } from '@/components/sections/Features';
import { WellbeingSection } from '@/components/sections/WellbeingSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { PageContainer } from '@/components/layout/PageContainer';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Recovery Pathways */}
      <RecoveryPaths />

      {/* 3. Why REVIA */}
      <WhyRevia />

      {/* 4. How It Works */}
      <HowItWorks />

      {/* 5. Features Grid */}
      <Features />

      {/* 6. Wellbeing */}
      <WellbeingSection />

      {/* 7. Education */}
      <EducationSection />

      {/* 8. Patient Stories / Testimonials */}
      <Testimonials />

      {/* 9. App Download CTA */}
      <CTA />

      {/* 10. FAQ Accordion */}
      <FAQSection />

      {/* 11. Homepage Medical Disclaimer */}
      <section className="py-12 bg-[#F2E8DA]/30">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
