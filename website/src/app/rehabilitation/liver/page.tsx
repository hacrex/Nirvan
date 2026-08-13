import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { RehabHero } from '@/components/sections/RehabHero';
import { RehabModules } from '@/components/sections/RehabModules';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Stethoscope, ShieldCheck, Dumbbell, Apple } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Liver Rehabilitation Pathway',
  description: 'Cirrhosis-related functional support, muscle preservation, physical rehabilitation, and nutrition education.',
};

export default function LiverRehabPage() {
  const modules = [
    {
      title: 'Muscle Preservation & Resistance',
      description: 'Progressive resistance training focused on combating muscle wasting (sarcopenia) common in chronic liver disease.',
      activities: ['Seated resistance band presses', 'Leg strengthening', 'Grasp & forearm exercises'],
    },
    {
      title: 'Functional Mobility & Balance',
      description: 'Gentle aerobic walking and balance drills to maintain mobility and prevent functional decline.',
      activities: ['Paced daily walking', 'Postural alignment', 'Balance maintenance'],
    },
    {
      title: 'Nutrition & Lifestyle Education',
      description: 'Clinician-reviewed dietary education focusing on protein intake, sodium awareness, and energy management.',
      activities: ['Protein timing education', 'Sodium restriction tips', 'Hydration tracking'],
    },
  ];

  return (
    <>
      <RehabHero
        title="Liver Rehabilitation"
        subtitle="Physical activity, muscle preservation, and lifestyle guidance designed for individuals managing cirrhosis and chronic liver conditions."
        badge="Hepatic Health"
        icon={<Stethoscope className="w-4 h-4 text-[#436444]" />}
        breadcrumbs={[
          { label: 'Rehabilitation', href: '/rehabilitation' },
          { label: 'Liver Rehabilitation' },
        ]}
      />

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Physical Support in Chronic Liver Disease
              </h2>
              <p className="text-[#66615C] leading-relaxed text-base">
                Chronic liver conditions such as cirrhosis can cause significant muscle loss (sarcopenia), fatigue, and weakness. Structured light resistance exercises and tailored nutritional education help preserve lean muscle mass, protect functional independence, and improve overall quality of life.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Dumbbell className="w-5 h-5 text-[#436444]" />
                    <span>Sarcopenia Countermeasures</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Targeted exercises designed specifically to preserve skeletal muscle mass.</p>
                </Card>
                <Card className="p-5 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                    <Apple className="w-5 h-5 text-[#8c4e33]" />
                    <span>Dietary Alignment</span>
                  </div>
                  <p className="text-xs text-[#66615C]">Educational guidance aligning exercise routines with optimal nutrition timing.</p>
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
                    <span>Liver cirrhosis (compensated or managed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Non-alcoholic fatty liver disease (MASLD/MASH)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0 mt-0.5" />
                    <span>Individuals experiencing sarcopenia & weakness</span>
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
