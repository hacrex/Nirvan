import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Activity, ShieldCheck, BatteryCharging, Droplet } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Kidney Rehabilitation Pathway',
  description: 'Renal rehabilitation, chronic kidney disease (CKD), dialysis physical function support, and fatigue management.',
};

export default function KidneyRehabPage() {
  const modules = [
    {
      title: 'Low-Intensity Aerobic Activity',
      description: 'Short, gentle exercise bouts adapted for non-dialysis and dialysis days to combat muscle wasting and fatigue.',
      activities: ['Comfortable pace walking', 'Seated leg cycling', 'Interval rest periods'],
    },
    {
      title: 'Muscle Preservation & Strength',
      description: 'Light resistance routines targeting major muscle groups to maintain independence and daily strength.',
      activities: ['Seated leg lifts', 'Light resistance band exercises', 'Arm curls'],
    },
    {
      title: 'Fatigue & Energy Management',
      description: 'Pacing strategies and daily check-ins designed to align physical activity with energy fluctuations.',
      activities: ['Energy level logging', 'Rest interval planning', 'Hydration education'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Kidney Rehabilitation"
        subtitle="Physical activity, fatigue management, and strength preservation tailored for individuals living with Chronic Kidney Disease (CKD) or undergoing dialysis."
        badge="Renal Support"
        icon={<Activity className="w-4 h-4 text-[#8c4e33]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Kidney Rehabilitation' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                What is Renal Rehabilitation?
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Renal rehabilitation focuses on counteracting fatigue, muscle loss (sarcopenia), and functional decline associated with Chronic Kidney Disease (CKD) and dialysis treatment. Tailored physical exercise improves cardiovascular health, muscle stamina, and quality of life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <BatteryCharging className="w-5 h-5 text-[#8c4e33]" />
                    <span>Dialysis-Aware Pacing</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Flexible scheduling adapted for post-dialysis recovery days.</p>
                </Card>
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Droplet className="w-5 h-5 text-[#5B8FB9]" />
                    <span>Fluid & Lifestyle Education</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Clinician-reviewed education on fluid intake, nutrition, and energy preservation.</p>
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
                    <span>Chronic Kidney Disease (CKD Stages 3-5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Hemodialysis & peritoneal dialysis patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Individuals experiencing renal fatigue & weakness</span>
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
