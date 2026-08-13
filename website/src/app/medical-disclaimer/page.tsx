import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';

export const metadata: Metadata = {
  title: 'Full Medical Disclaimer',
  description: 'REVIA full medical disclaimer regarding clinical educational content, patient responsibility, and emergency guidance.',
};

export default function MedicalDisclaimerPage() {
  return (
    <section className="py-12 bg-[#fdf9f3]">
      <PageContainer size="narrow">
        <Breadcrumbs items={[{ label: 'Medical Disclaimer' }]} />

        <div className="bg-white p-8 sm:p-12 rounded-[16px] border border-[#e6e2dc] shadow-soft space-y-8 mt-6">
          <div className="border-b border-[#e6e2dc] pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D2A26]">Full Medical & Safety Disclaimer</h1>
            <p className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">
              Clinical Responsibility & Scope
            </p>
          </div>

          <MedicalDisclaimer />

          <div className="prose prose-slate max-w-none text-[#2D2A26] space-y-6 text-base leading-relaxed pt-4">
            <h2 className="text-xl font-bold text-[#2D2A26]">1. Educational Companion Only</h2>
            <p>
              REVIA provides clinician-reviewed educational content and structured routine tracking. It is intended solely as a supportive companion for patients recovering from cardiac events, stroke, kidney disease, or liver conditions. <strong>It does not diagnose medical conditions, prescribe medications, adjust drug dosages, or replace healthcare professionals.</strong>
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">2. Consult Your Doctor</h2>
            <p>
              Before beginning any physical rehabilitation program, exercise routine, or lifestyle modification featured in REVIA, always seek the advice of your physician, physical therapist, or qualified medical specialist. Never disregard professional medical advice or delay seeking it because of something you read on REVIA.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">3. Emergency Situations</h2>
            <p>
              REVIA is not monitored in real-time by medical personnel and does not provide emergency medical response. If you experience chest pain, severe shortness of breath, sudden numbness or weakness, severe dizziness, or any life-threatening symptoms, immediately stop exercising and call emergency services (such as 108 or your local emergency number).
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">4. Clinical Content Review Process</h2>
            <p>
              Educational content published on REVIA undergoes a structured editorial and clinical review workflow prior to publication:
            </p>

            <div className="p-4 rounded-[12px] bg-[#E1EADF]/60 border border-[#436444]/20 font-medium text-sm text-[#2e4e30]">
              Drafting → Clinical Review → Safety Check → Editorial Verification → Publishing → Periodic Re-Review
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
