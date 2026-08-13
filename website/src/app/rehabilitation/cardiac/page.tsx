import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Heart, Activity, ShieldCheck, Flame } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Cardiac Rehabilitation Pathway',
  description: 'Heart attack recovery, cardiac rehabilitation, safe movement exercises, and cardiovascular lifestyle management.',
};

export default function CardiacRehabPage() {
  const modules = [
    {
      title: 'Progressive Aerobic Activity',
      description: 'Structured interval walking and low-impact aerobic routines to gradually rebuild cardiovascular endurance safely.',
      activities: ['Guided walking sessions', 'Heart rate awareness', 'Warm-up & cool-down routines'],
    },
    {
      title: 'Gentle Mobility & Breathing',
      description: 'Breathing exercises and thoracic mobility to reduce anxiety, lower resting heart rate, and enhance lung capacity.',
      activities: ['Diaphragmatic breathing', 'Chest expansion exercises', 'Gentle shoulder rolls'],
    },
    {
      title: 'Light Functional Strength',
      description: 'Low-resistance bodyweight and band movements designed to preserve muscle tone without straining heart tissue.',
      activities: ['Seated leg extensions', 'Wall push-ups', 'Sit-to-stand practice'],
    },
    {
      title: 'Heart Health Education',
      description: 'Clinician-reviewed explainers on blood pressure, symptom recognition, nutrition, and safe exercise limits.',
      activities: ['Symptom check-in logs', 'Blood pressure guidance', 'Heart-healthy dietary tips'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Cardiac Rehabilitation"
        subtitle="Recover safely after a cardiac event or heart procedure. REVIA helps you rebuild cardiovascular endurance, track vital signs, and restore confidence step by step."
        badge="Cardiac Recovery"
        icon={<Heart className="w-4 h-4 text-[#C0564B]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Cardiac Recovery' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                What is Cardiac Rehabilitation?
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Cardiac rehabilitation is a medically supervised program designed to improve cardiovascular health following a heart attack, angioplasty, heart surgery, or heart failure diagnosis. Consistent, safe physical activity combined with lifestyle support is key to preventing future cardiac events and regaining vitality.
              </p>

              <h3 className="text-xl font-bold text-[#2D2A26] pt-4">How REVIA Supports Your Heart</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Activity className="w-5 h-5 text-[#C0564B]" />
                    <span>Safe Intensity Tracking</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Monitors how you feel during exercise with simple RPE rating scales.</p>
                </Card>
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Flame className="w-5 h-5 text-[#8c4e33]" />
                    <span>Gradual Progression</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Increases session length gradually as your stamina and confidence grow.</p>
                </Card>
              </div>

              <RehabModules modules={modules} />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 space-y-4 bg-[#F2E8DA]/60 border-[#e6e2dc]">
                <h3 className="font-bold text-lg text-[#2D2A26]">Who is this for?</h3>
                <ul className="space-y-2.5 text-sm text-[#66615C]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Recovering from heart attack (myocardial infarction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Post-stent or bypass surgery (CABG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Managing stable angina or heart failure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Building long-term heart-healthy habits</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
