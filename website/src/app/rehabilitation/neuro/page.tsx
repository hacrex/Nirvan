import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Brain, ShieldCheck, Zap, Activity } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/rehabilitation/neuro', {
  title: 'Neuro Rehabilitation Pathway',
  description: 'Stroke, paralysis, mobility impairment, motor rehabilitation, balance, speech, and cognitive recovery.',
});

export default function NeuroRehabPage() {
  const modules = [
    {
      title: 'Motor & Mobility Rehabilitation',
      description: 'Repeated guided movement routines targeting arm, hand, leg, and trunk control to encourage neuroplastic rewiring.',
      activities: ['Hand grasp & release', 'Seated trunk balance', 'Step-up and weight-shift practice'],
    },
    {
      title: 'Balance & Postural Stability',
      description: 'Exercises focused on vestibular balance, standing stability, and fall prevention in daily home environments.',
      activities: ['Tandem stance practice', 'Weight transfers', 'Supported standing drills'],
    },
    {
      title: 'Functional Daily Activities',
      description: 'Practical practice routines focused on regaining independence with dressing, reaching, standing, and walking.',
      activities: ['Reach and grasp tasks', 'Bed mobility practice', 'Gait training guidance'],
    },
    {
      title: 'Cognitive & Speech Exercises',
      description: 'Short daily brain training and articulation exercises designed for post-stroke recovery.',
      activities: ['Memory & attention tasks', 'Speech articulation prompts', 'Problem-solving exercises'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Neuro & Stroke Recovery"
        subtitle="Regain mobility, motor function, balance, and independence. NIRVAN guides your neuro-rehabilitation with repetitive movement routines built on neuroplasticity principles."
        badge="Neuro & Motor"
        icon={<Brain className="w-4 h-4 text-[#5B8FB9]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Neuro Recovery' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                What is Neurological Rehabilitation?
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Neurological rehabilitation focuses on restoring movement, strength, cognitive function, and daily living skills after a stroke, brain injury, spinal cord impairment, or nerve damage. Neuroplasticity — the brain&apos;s remarkable ability to form new neural connections — is unlocked through consistent, structured practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Zap className="w-5 h-5 text-[#5B8FB9]" />
                    <span>Neuroplastic Repetition</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Clear rep counts and guided video demonstrations encourage neural rewiring.</p>
                </Card>
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Activity className="w-5 h-5 text-[#436444]" />
                    <span>Fall Prevention Focus</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Safety guidance and posture checks before starting every movement routine.</p>
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
                    <span>Stroke survivors (ischemic or hemorrhagic)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Paralysis &amp; hemiparesis recovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Individuals with balance or gait impairment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Fine motor &amp; hand weakness rehabilitation</span>
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
