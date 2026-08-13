import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { Moon, Smile, Utensils, HeartHandshake, Battery, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wellbeing & Recovery',
  description: 'Holistic support for sleep, mood, energy tracking, nutrition, and mindfulness during rehabilitation.',
};

export default function WellbeingPage() {
  const pillars = [
    {
      icon: <Moon className="w-8 h-8 text-[#5B8FB9]" />,
      title: 'Sleep & Restorative Rest',
      description: 'Sleep is when the body repairs damaged tissue and consolidates neural learning. Track sleep duration, nighttime awakenings, and rest quality.',
    },
    {
      icon: <Smile className="w-8 h-8 text-[#D99100]" />,
      title: 'Mood & Emotional State',
      description: 'Recovery has emotional highs and lows. Quick 10-second daily check-ins help you spot mood trends and stay encouraged without judgment.',
    },
    {
      icon: <Battery className="w-8 h-8 text-[#8c4e33]" />,
      title: 'Energy & Fatigue Pacing',
      description: 'Learn to pace your daily activities around natural energy peaks and avoid post-exertional fatigue spikes.',
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#4A7C59]" />,
      title: 'Condition-Aware Nutrition',
      description: 'Clinician-reviewed nutritional education tailored to cardiac health, renal fluid balance, and liver protein needs.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-[#436444]" />,
      title: 'Mindfulness & Breathing',
      description: 'Simple guided diaphragmatic breathing and relaxation techniques to calm the nervous system and manage recovery anxiety.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-[#8c4e33]" />,
      title: 'Healthy Daily Routines',
      description: 'Build gentle consistency with daily check-ins, medication logs, and small functional habit milestones.',
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Wellbeing' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8c4e33]">
              Whole-Person Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Recovery and Wellbeing
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Healing extends far beyond physical exercise. REVIA supports your mood, sleep, nutrition, and mental resilience throughout your journey.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pil, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <div className="p-3.5 rounded-[12px] bg-[#F2E8DA]/60 w-fit">
                  {pil.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D2A26]">{pil.title}</h3>
                <p className="text-[#66615C] text-sm leading-relaxed">{pil.description}</p>
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
