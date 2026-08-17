import { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import {
  Wind, Leaf, Activity, ShieldCheck, ArrowRight, CheckCircle2,
  Brain, Heart, Clock, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Breathing & Relaxation Techniques for Recovery',
  description: 'Simple guided breathing exercises, mindfulness, and relaxation techniques to calm the nervous system and manage recovery-related stress.',
  keywords: [
    'breathing exercises',
    'relaxation techniques',
    'guided breathing',
    'mindfulness',
    'stress relief',
    'calm exercises',
    'recovery relaxation',
    'diaphragmatic breathing',
    'grounding exercises',
  ],
};

export default function BreathingRelaxationPage() {
  const techniques = [
    {
      icon: <Wind className="w-7 h-7 text-[#436444]" />,
      title: 'Slow Breathing',
      description: 'Guided diaphragmatic breathing to activate your body\'s natural relaxation response. Simple, effective, and available anytime.',
      duration: '2 minutes',
      steps: [
        'Breathe in slowly through your nose',
        'Hold gently for a moment',
        'Breathe out slowly through your mouth',
        'Repeat at your own pace',
      ],
    },
    {
      icon: <Leaf className="w-7 h-7 text-[#4A7C59]" />,
      title: 'Mindful Attention',
      description: 'Present-moment awareness without judgment. Notice what you feel — thoughts, sensations, sounds — and let them pass.',
      duration: '3-5 minutes',
      steps: [
        'Sit comfortably with eyes closed or soft gaze',
        'Notice your breathing without changing it',
        'Observe thoughts as they come and go',
        'Gently return attention to the present moment',
      ],
    },
    {
      icon: <Activity className="w-7 h-7 text-[#5B8FB9]" />,
      title: 'Body Awareness',
      description: 'Notice sensations in different parts of your body. This helps you reconnect with yourself and release physical tension.',
      duration: '5 minutes',
      steps: [
        'Start at the top of your head',
        'Slowly move attention down through your body',
        'Notice any tension or discomfort',
        'Breathe into those areas gently',
      ],
    },
    {
      icon: <Heart className="w-7 h-7 text-[#C0564B]" />,
      title: 'Grounding Exercises',
      description: 'When anxiety or overwhelm hits, grounding brings you back to the present moment using your senses.',
      duration: '2-3 minutes',
      steps: [
        'Name 5 things you can see',
        'Name 4 things you can touch',
        'Name 3 things you can hear',
        'Name 2 things you can smell',
        'Name 1 thing you can taste',
      ],
    },
  ];

  const benefits = [
    {
      title: 'Calms the Nervous System',
      description: 'Slow breathing activates your parasympathetic nervous system — the body\'s "rest and digest" mode.',
    },
    {
      title: 'Reduces Anxiety',
      description: 'Simple breathing techniques can lower heart rate and reduce feelings of panic or worry.',
    },
    {
      title: 'Improves Sleep',
      description: 'Relaxation before sleep helps your body wind down and prepare for restorative rest.',
    },
    {
      title: 'Manages Pain Perception',
      description: 'Focused breathing can change how you experience discomfort during recovery.',
    },
    {
      title: 'No Equipment Needed',
      description: 'All techniques can be done anywhere — sitting, lying down, or even in a hospital bed.',
    },
    {
      title: 'Evidence-Based',
      description: 'These techniques are supported by research and recommended by healthcare professionals worldwide.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Breathing & Relaxation' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="success" icon={<Wind className="w-4 h-4 text-[#2e4e30]" />}>
                Relaxation
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Take a Moment
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Simple guided breathing and relaxation techniques to calm your nervous system. No experience needed — just a few minutes for yourself.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>All activities reviewed for appropriateness across recovery pathways.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Breathing Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center">
              <div className="p-10 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-sm space-y-8 shadow-soft">
                <h3 className="font-bold text-xl text-[#2D2A26] text-center">Breathe</h3>

                <div className="flex justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-full bg-[#436444]/10 animate-pulse" />
                    <div className="absolute inset-6 rounded-full bg-[#436444]/15 flex items-center justify-center">
                      <div className="text-center">
                        <Wind className="w-10 h-10 text-[#436444] mx-auto mb-2" />
                        <span className="text-sm font-semibold text-[#436444]">2 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 text-center">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#2D2A26]">Breathe in</p>
                    <div className="w-20 h-0.5 bg-[#436444]/20 mx-auto" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#2D2A26]">Hold</p>
                    <div className="w-20 h-0.5 bg-[#436444]/20 mx-auto" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[#2D2A26]">Breathe out</p>
                    <div className="w-20 h-0.5 bg-[#436444]/20 mx-auto" />
                  </div>
                  <p className="text-xs text-[#66615C] italic pt-2">Repeat at your own pace</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
                Why It Helps
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                The Power of Breath
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Slow, controlled breathing activates your body&apos;s natural relaxation response. It&apos;s one of the simplest and most effective ways to calm your nervous system during recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-sm text-[#2D2A26]">{benefit.title}</span>
                      <p className="text-xs text-[#66615C] mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Techniques
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Relaxation Techniques
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Choose the technique that feels right for you right now. All are simple, evidence-based, and require no special equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, idx) => (
              <Card key={idx} className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-[12px] bg-[#F2E8DA]/60 shrink-0">
                    {technique.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2A26]">{technique.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#66615C]" />
                      <span className="text-xs text-[#66615C]">{technique.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#66615C] leading-relaxed">{technique.description}</p>

                <div className="pt-4 border-t border-[#e6e2dc]">
                  <span className="text-xs font-bold text-[#2D2A26] uppercase tracking-wider">How to do it</span>
                  <ol className="mt-3 space-y-2">
                    {technique.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#66615C]">
                        <span className="w-6 h-6 rounded-full bg-[#E1EADF] text-[#436444] text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* When to Use */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
                When to Use
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                A Moment for Yourself
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Relaxation techniques can help at any time — but they&apos;re especially useful during recovery when stress, anxiety, or overwhelm may be part of your journey.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                { time: 'Morning', description: 'Start your day with a calming breath before your recovery activities.' },
                { time: 'Before Sleep', description: 'Wind down with slow breathing to improve your sleep quality.' },
                { time: 'During Stress', description: 'When anxiety or overwhelm hits, take 2 minutes to ground yourself.' },
                { time: 'After Exercise', description: 'Cool down with gentle breathing after your rehabilitation session.' },
                { time: 'Anytime', description: 'Whenever you need a moment of calm — no reason needed.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-[16px] bg-white border border-[#e6e2dc]">
                  <div className="p-2.5 rounded-[10px] bg-[#E1EADF]/60 shrink-0">
                    <Sparkles className="w-5 h-5 text-[#436444]" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-[#2D2A26]">{item.time}</span>
                    <p className="text-sm text-[#66615C] mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-[#F2E8DA]/30">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
