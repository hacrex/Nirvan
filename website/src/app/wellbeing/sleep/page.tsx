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
  Moon, ShieldCheck, ArrowRight, CheckCircle2, Clock,
  Brain, Wind, Activity, BookOpen
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sleep Support — Better Rest During Recovery',
  description: 'Understand how sleep supports physical healing. Track sleep quality, learn sleep hygiene techniques, and build better rest habits during recovery.',
  keywords: [
    'sleep support',
    'sleep tracking',
    'sleep hygiene',
    'recovery sleep',
    'better rest',
    'insomnia recovery',
    'sleep quality',
    'healing sleep',
  ],
};

export default function SleepPage() {
  const sleepFactors = [
    { factor: 'Duration', description: 'How many hours you slept', icon: <Clock className="w-5 h-5 text-[#5B8FB9]" /> },
    { factor: 'Quality', description: 'How restorative your sleep felt', icon: <Moon className="w-5 h-5 text-[#5B8FB9]" /> },
    { factor: 'Awakenings', description: 'How often you woke during the night', icon: <Activity className="w-5 h-5 text-[#5B8FB9]" /> },
    { factor: 'Restfulness', description: 'How rested you feel this morning', icon: <Brain className="w-5 h-5 text-[#5B8FB9]" /> },
  ];

  const sleepDemo = {
    rating: 'Good',
    duration: '7h 10m',
    restfulness: 'High',
    quality: 'Restorative',
  };

  const hygieneTips = [
    {
      title: 'Consistent Schedule',
      description: 'Go to bed and wake up at roughly the same time each day — even on weekends. Your body\'s internal clock thrives on regularity.',
    },
    {
      title: 'Wind-Down Routine',
      description: 'In the hour before bed, reduce stimulation. Dim lights, avoid screens, try slow breathing or gentle stretching.',
    },
    {
      title: 'Comfortable Environment',
      description: 'Keep your sleeping space cool, dark, and quiet. Small changes — like a pillow adjustment or earplugs — can make a big difference.',
    },
    {
      title: 'Daytime Movement',
      description: 'Regular physical activity (as appropriate for your recovery) helps regulate your sleep-wake cycle. Avoid intense exercise close to bedtime.',
    },
    {
      title: 'Limit Naps',
      description: 'If you need to nap, keep it short (20-30 minutes) and avoid napping late in the afternoon.',
    },
    {
      title: 'Manage Worry',
      description: 'If racing thoughts keep you awake, try writing worries down before bed or using a breathing exercise to calm your mind.',
    },
  ];

  const sleepAndRecovery = [
    {
      title: 'Tissue Repair',
      description: 'Your body repairs damaged tissue and consolidates physical learning during deep sleep stages.',
    },
    {
      title: 'Energy Restoration',
      description: 'Quality sleep restores the energy you need for rehabilitation exercises and daily activities.',
    },
    {
      title: 'Emotional Regulation',
      description: 'Sleep helps regulate mood, reduce irritability, and improve your ability to cope with recovery challenges.',
    },
    {
      title: 'Cognitive Function',
      description: 'Memory, concentration, and decision-making all improve with adequate rest — important for following your recovery plan.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#5B8FB9]/10 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Sleep' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="info" icon={<Moon className="w-4 h-4 text-[#2a4d6c]" />}>
                Sleep & Rest
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Better Rest, Stronger Recovery
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Sleep is when your body repairs damaged tissue and consolidates learning. Understanding your sleep patterns helps you support your recovery more effectively.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>HealthKit / Health Connect data supports this experience — not a diagnosis.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Sleep Tracking Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-xl text-[#2D2A26] text-center">Sleep</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-[14px] bg-[#5B8FB9]/10 text-center space-y-2">
                    <Moon className="w-6 h-6 text-[#5B8FB9] mx-auto" />
                    <span className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">Quality</span>
                    <p className="text-lg font-bold text-[#2D2A26]">{sleepDemo.quality}</p>
                  </div>
                  <div className="p-4 rounded-[14px] bg-[#436444]/10 text-center space-y-2">
                    <Clock className="w-6 h-6 text-[#436444] mx-auto" />
                    <span className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">Duration</span>
                    <p className="text-lg font-bold text-[#2D2A26]">{sleepDemo.duration}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-[14px] bg-[#F2E8DA]/40 space-y-2">
                    <span className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">How did you sleep?</span>
                    <div className="flex gap-3">
                      {['😴 Poor', '😐 Okay', '😊 Good'].map((option, i) => (
                        <div key={i} className={`flex-1 p-3 rounded-[10px] text-center text-sm font-medium cursor-pointer transition-colors ${i === 2 ? 'bg-[#5B8FB9]/20 text-[#2a4d6c] border border-[#5B8FB9]/30' : 'bg-white border border-[#e6e2dc] text-[#66615C] hover:bg-[#F2E8DA]/60'}`}>
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-[14px] bg-[#F2E8DA]/40 space-y-2">
                    <span className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">How rested do you feel?</span>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#66615C]">Low</span>
                      <div className="flex-1 mx-3 h-1.5 bg-[#e6e2dc] rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5B8FB9] border-2 border-white shadow" />
                      </div>
                      <span className="text-xs text-[#66615C]">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
                Sleep Tracking
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Understand Your Sleep
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Track the dimensions of sleep that matter for recovery. Quick daily logging builds a picture of your rest patterns over time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {sleepFactors.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-[10px] bg-white border border-[#e6e2dc]">
                    {item.icon}
                    <div>
                      <span className="font-semibold text-sm text-[#2D2A26]">{item.factor}</span>
                      <p className="text-xs text-[#66615C]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Sleep & Recovery */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Why Sleep Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Sleep & Physical Recovery
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Quality sleep is one of the most powerful recovery tools available. Your body does critical repair work while you rest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sleepAndRecovery.map((item, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <div className="p-3 rounded-[12px] bg-[#5B8FB9]/10 w-fit">
                  <Moon className="w-6 h-6 text-[#5B8FB9]" />
                </div>
                <h3 className="text-lg font-bold text-[#2D2A26]">{item.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Sleep Hygiene */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Sleep Hygiene
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Simple Steps to Better Rest
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Small changes to your daily routine can significantly improve your sleep quality. Start with what feels manageable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hygieneTips.map((tip, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{tip.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{tip.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
              Connected Wellbeing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Sleep Connects to Everything
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Mood', description: 'Sleep quality directly affects your emotional state.', href: '/wellbeing/mood' },
              { title: 'Stress', description: 'Poor sleep increases stress; relaxation improves sleep.', href: '/wellbeing/stress' },
              { title: 'Relaxation', description: 'Breathing exercises before bed improve sleep quality.', href: '/wellbeing/breathing-relaxation' },
            ].map((topic, idx) => (
              <Link key={idx} href={topic.href} className="group">
                <Card className="p-6 space-y-3 h-full hover:shadow-soft transition-all">
                  <h3 className="text-lg font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors">{topic.title}</h3>
                  <p className="text-sm text-[#66615C] leading-relaxed">{topic.description}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#436444]">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <MedicalDisclaimer compact />
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
