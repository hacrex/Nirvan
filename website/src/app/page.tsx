import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { PageContainer } from '@/components/layout/PageContainer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const RecoveryPaths = dynamic(() => import('@/components/sections/RecoveryPaths').then(m => m.RecoveryPaths));
const ProductShowcase = dynamic(() => import('@/components/sections/ProductShowcase').then(m => m.ProductShowcase));
const WhyRevia = dynamic(() => import('@/components/sections/WhyRevia').then(m => m.WhyRevia));
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks').then(m => m.HowItWorks));
const Features = dynamic(() => import('@/components/sections/Features').then(m => m.Features));
const WellbeingSection = dynamic(() => import('@/components/sections/WellbeingSection').then(m => m.WellbeingSection));
const EducationSection = dynamic(() => import('@/components/sections/EducationSection').then(m => m.EducationSection));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then(m => m.Testimonials));
const CTA = dynamic(() => import('@/components/sections/CTA').then(m => m.CTA));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then(m => m.FAQSection));

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ScrollReveal>
        <RecoveryPaths />
      </ScrollReveal>
      <ScrollReveal>
        <ProductShowcase />
      </ScrollReveal>
      <ScrollReveal>
        <WhyRevia />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      <ScrollReveal>
        <WellbeingSection />
      </ScrollReveal>
      <ScrollReveal>
        <EducationSection />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <section className="border-t border-[#e6e2dc] bg-[#f2e8da]/35 py-12">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>
    </>
  );
}
