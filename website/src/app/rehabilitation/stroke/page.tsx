import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Brain, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Stroke Recovery Pathway',
  description: 'Targeted stroke rehabilitation exercises for motor control, speech, balance, and post-stroke independence.',
};

export default function StrokeRehabPage() {
  const modules = [
    {
      title: 'Post-Stroke Motor Retraining',
      description: 'Progressive range-of-motion and passive/active movement drills for affected arm, leg, and hand muscles.',
      activities: ['Arm reach & sweep', 'Finger flexion/extension', 'Sit-to-stand repetitions'],
    },
    {
      title: 'Gait & Balance Rehabilitation',
      description: 'Weight-bearing exercises, foot-clearance drills, and standing balance practice to restore safe walking.',
      activities: ['Weight-shifting practice', 'Side-stepping drills', 'Ankle mobility exercises'],
    },
    {
      title: 'Speech & Cognitive Support',
      description: 'Daily articulation drills, memory games, and naming exercises to support speech therapy goals.',
      activities: ['Word retrieval prompts', 'Facial muscle exercises', 'Attention building drills'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Stroke Recovery"
        subtitle="Dedicated stroke rehabilitation routines focused on motor control, arm and hand function, walking balance, and cognitive restoration."
        badge="Stroke Recovery"
        icon={<Brain className="w-4 h-4 text-[#5B8FB9]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Neuro', href: '/rehabilitation/neuro' },
          { label: 'Stroke Recovery' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Targeted Rehabilitation After Stroke
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Recovery after a stroke takes persistence, patience, and repetitive task-oriented training. REVIA structures your daily routines into bite-sized sessions with step-by-step video guidance to help you stay consistent at home between physical therapy appointments.
              </p>

              <RehabModules modules={modules} />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 space-y-4 bg-[#F2E8DA]/60 border-[#e6e2dc]">
                <h3 className="font-bold text-lg text-[#2D2A26]">Key Focus Areas</h3>
                <ul className="space-y-2.5 text-sm text-[#66615C]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Upper limb function & hand dexterity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Lower limb strength & walking posture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Spasticity reduction & gentle stretching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Speech & cognitive practice</span>
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
