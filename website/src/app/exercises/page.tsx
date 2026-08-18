import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Video, ShieldCheck, Activity, Dumbbell, Footprints, Armchair, Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Exercise Library',
  description: 'Guided rehabilitation exercises with video demonstrations, step-by-step safety notes, and progress tracking.',
};

export default function ExercisesPage() {
  const categories = [
    {
      icon: <Activity className="w-6 h-6 text-[#436444]" />,
      name: 'Mobility & Range of Motion',
      count: '24 Exercises',
      desc: 'Gentle joint mobilizations for shoulders, elbows, hips, knees, and ankles.',
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#8c4e33]" />,
      name: 'Functional Strength',
      count: '18 Exercises',
      desc: 'Bodyweight and light-resistance exercises to build daily independence.',
    },
    {
      icon: <Footprints className="w-6 h-6 text-[#5B8FB9]" />,
      name: 'Balance & Walking',
      count: '15 Exercises',
      desc: 'Standing balance, weight transfers, and gait stability drills.',
    },
    {
      icon: <Armchair className="w-6 h-6 text-[#D99100]" />,
      name: 'Hand & Fine Motor',
      count: '12 Exercises',
      desc: 'Grasp, release, finger isolation, and wrist dexterity practice.',
    },
    {
      icon: <Wind className="w-6 h-6 text-[#4A7C59]" />,
      name: 'Breathing & Relaxation',
      count: '10 Exercises',
      desc: 'Diaphragmatic breathing and relaxation techniques for thoracic expansion.',
    },
    {
      icon: <Video className="w-6 h-6 text-[#436444]" />,
      name: 'Speech & Articulation',
      count: '14 Drills',
      desc: 'Post-stroke articulation, facial mobility, and word retrieval practice.',
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Exercise Library' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <Badge variant="primary" icon={<Video className="w-4 h-4 text-[#436444]" />}>
              Video-Guided Practice
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Rehabilitation Exercise Library
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Every exercise in NIRVAN includes video demonstration, voice guidance, clear repetition goals, and essential safety instructions.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((cat, idx) => (
              <Card key={idx} className="p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-[12px] bg-[#E1EADF]">
                      {cat.icon}
                    </div>
                    <Badge variant="neutral" size="sm">{cat.count}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2A26]">{cat.name}</h3>
                  <p className="text-[#66615C] text-sm leading-relaxed">{cat.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#e6e2dc] flex items-center gap-2 text-xs text-[#66615C] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#436444]" />
                  <span>Includes safety precautions</span>
                </div>
              </Card>
            ))}
          </div>

          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
