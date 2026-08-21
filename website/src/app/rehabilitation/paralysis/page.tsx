import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Activity, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata('/rehabilitation/paralysis', {
  title: 'Paralysis Rehabilitation Pathway',
  description: 'Support routines for hemiparesis, paralysis, mobility preservation, and functional independence.',
});

export default function ParalysisRehabPage() {
  const modules = [
    {
      title: 'Passive & Active-Assisted Range of Motion',
      description: 'Gentle joint mobilization and assisted movement routines to prevent contractures and preserve joint health.',
      activities: ['Shoulder & elbow passive range', 'Hip & knee flexion assistance', 'Ankle pumping'],
    },
    {
      title: 'Trunk Control & Core Activation',
      description: 'Seated balance routines, core engagement, and trunk stabilization exercises.',
      activities: ['Seated weight transfer', 'Forward reach stabilization', 'Isometric core holds'],
    },
    {
      title: 'Transfer & Functional Independence',
      description: 'Guided techniques for safe bed mobility, wheelchair transfers, and daily self-care practice.',
      activities: ['Scooting & bridging drills', 'Side-lying to sit transfer', 'Upper body dressing practice'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Paralysis Rehabilitation"
        subtitle="Routines designed to support mobility preservation, trunk stability, joint range of motion, and safe daily transfers."
        badge="Paralysis Support"
        icon={<Activity className="w-4 h-4 text-[#8c4e33]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Neuro', href: '/rehabilitation/neuro' },
          { label: 'Paralysis Support' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Preserving Function & Mobility
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Whether recovering from partial paralysis (hemiparesis) or managing chronic mobility limitations, preserving joint flexibility, muscle tone, and core trunk control is critical. NIRVAN offers safe, step-by-step guidance tailored to your functional mobility level.
              </p>

              <RehabModules modules={modules} />
            </div>

            <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 space-y-4 bg-[#F2E8DA]/60 border-[#e6e2dc]">
                <h3 className="font-bold text-lg text-[#2D2A26]">Program Goals</h3>
                <ul className="space-y-2.5 text-sm text-[#66615C]">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Prevent joint stiffness & muscle tightness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Improve upright posture & trunk stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Enhance transfer safety and confidence</span>
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
