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
  Moon, Smile, Battery, Brain, ShieldCheck, ArrowRight,
  Users, BookOpen, TrendingUp, CheckCircle2, Clock, Sparkles,
  Wind, Leaf, AlertTriangle, Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mental Wellbeing — Mood, Sleep, Stress & Motivation',
  description: 'Comprehensive mental wellbeing support during recovery. Track mood, manage stress, improve sleep, and build motivation with evidence-based self-help techniques.',
  keywords: [
    'mental wellbeing',
    'mood tracking',
    'sleep support',
    'stress management',
    'anxiety support',
    'motivation recovery',
    'emotional recovery',
    'rehabilitation mental health',
  ],
};

export default function MentalHealthPage() {
  const modules = [
    {
      icon: <Moon className="w-6 h-6 text-[#5B8FB9]" />,
      title: 'Sleep',
      description: 'Sleep is when your body repairs damaged tissue and consolidates learning. Track sleep duration, nighttime awakenings, and rest quality to understand how rest affects your recovery.',
      features: ['Sleep duration tracking', 'Rest quality rating', 'Sleep trends over time', 'Sleep hygiene education'],
    },
    {
      icon: <Smile className="w-6 h-6 text-[#D99100]" />,
      title: 'Mood',
      description: 'Quick 10-second daily check-ins help you spot mood trends and stay encouraged. No judgment — just awareness of how you\'re feeling.',
      features: ['Daily mood rating', 'Mood trend visualization', 'Emotional pattern insights', 'Mood & recovery connections'],
    },
    {
      icon: <Brain className="w-6 h-6 text-[#5B8FB9]" />,
      title: 'Stress & Anxiety',
      description: 'Recovery can bring uncertainty and worry. Learn practical techniques to manage stress and anxiety during your healing journey.',
      features: ['Stress level tracking', 'Breathing exercises', 'Grounding techniques', 'Stress management education'],
    },
    {
      icon: <Battery className="w-6 h-6 text-[#8c4e33]" />,
      title: 'Energy & Motivation',
      description: 'Learn to pace your daily activities around natural energy peaks. Build motivation through small, achievable actions without pressure.',
      features: ['Energy level tracking', 'Activity pacing guidance', 'Small-step goal setting', 'Motivation without guilt'],
    },
    {
      icon: <Users className="w-6 h-6 text-[#436444]" />,
      title: 'Social Connection',
      description: 'Recovery is easier when you feel connected. NIRVAN supports gentle outreach to family, friends, healthcare professionals, or recovery groups.',
      features: ['Connection prompts', 'Social goal setting', 'Recovery group awareness', 'Professional contact guidance'],
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#8c4e33]" />,
      title: 'Emotional Recovery',
      description: 'Understand the emotional side of recovery — from frustration and grief to hope and progress. All feelings are valid during healing.',
      features: ['Emotional awareness education', 'Recovery-related emotions support', 'Journaling prompts', 'Progress recognition'],
    },
  ];

  const checkinExample = [
    { mood: '😊', label: 'Good', description: 'Feelling positive and capable' },
    { mood: '🙂', label: 'Okay', description: 'Neutral, neither good nor bad' },
    { mood: '😐', label: 'Low', description: 'Something feels off today' },
    { mood: '😔', label: 'Sad', description: 'Feeling down or disappointed' },
    { mood: '😣', label: 'Overwhelmed', description: 'Too much to handle right now' },
  ];

  const weeklyTrend = [
    { day: 'Mon', level: 3, mood: '😊' },
    { day: 'Tue', level: 2, mood: '🙂' },
    { day: 'Wed', level: 4, mood: '😊' },
    { day: 'Thu', level: 1, mood: '😔' },
    { day: 'Fri', level: 2, mood: '🙂' },
    { day: 'Sat', level: 3, mood: '😊' },
    { day: 'Sun', level: 3, mood: '🙂' },
  ];

  const selfHelpApproaches = [
    {
      title: 'Behavioural Activation',
      description: 'When mood is low, activity tends to decrease — which can lower positive experiences and motivation. Small, achievable actions help break this cycle.',
      example: '"What is one small thing you feel able to do today?" — a short walk, calling someone, sitting outside.',
    },
    {
      title: 'Routine Building',
      description: 'Gentle daily consistency helps your body and mind settle into recovery. Small routines create structure without pressure.',
      example: 'Morning check-in, afternoon activity, evening relaxation — simple patterns that support healing.',
    },
    {
      title: 'Mindfulness & Relaxation',
      description: 'Simple breathing exercises and present-moment awareness can calm the nervous system and reduce recovery-related anxiety.',
      example: 'A 2-minute breathing exercise: breathe in, hold, breathe out. No special equipment or training needed.',
    },
  ];

  const contentTopics = [
    'Understanding Mood',
    'Recovery & Emotions',
    'Sleep Quality',
    'Stress Management',
    'Anxiety Awareness',
    'Building Motivation',
    'Social Connection',
    'When to Seek Help',
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Mental Wellbeing' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="info" icon={<Brain className="w-4 h-4 text-[#2a4d6c]" />}>
                Mental Wellbeing
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Support for the Emotional Side of Recovery
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Your mind is part of your recovery too. NIRVAN helps you track mood, manage stress, improve sleep, and build motivation — with evidence-based guidance and no judgment.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Support, not diagnosis. Content reviewed by clinical professionals.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Core Principle */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Support, Don&apos;t Diagnose
            </h2>
            <p className="text-[#66615C] leading-relaxed text-lg">
              NIRVAN helps you understand your wellbeing, build healthy routines, track mood and energy, learn evidence-based self-help techniques, and stay connected to your recovery. NIRVAN should not independently diagnose depression or prescribe treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfHelpApproaches.map((approach, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{approach.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{approach.description}</p>
                <div className="pt-3 border-t border-[#e6e2dc]">
                  <p className="text-xs text-[#8c4e33] italic leading-relaxed">{approach.example}</p>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Wellbeing Modules */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              What NIRVAN Supports
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Your Mental Wellbeing Toolkit
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Each area of mental wellbeing is interconnected. NIRVAN helps you understand and support the whole picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => (
              <Card key={idx} className="p-7 space-y-4 flex flex-col">
                <div className="p-3 rounded-[12px] bg-[#F2E8DA]/60 w-fit">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D2A26]">{mod.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed flex-1">{mod.description}</p>
                <div className="pt-4 border-t border-[#e6e2dc] space-y-2">
                  <span className="text-xs font-bold text-[#2D2A26] uppercase tracking-wider">Features</span>
                  <ul className="space-y-1.5">
                    {mod.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-[#66615C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Daily Check-in Detail */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Daily Check-In
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                How Are You Feeling Today?
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                A quick daily moment to check in with yourself. Choose the option that best describes how you feel right now. Optional: energy, sleep, stress, and motivation ratings.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#8c4e33] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Takes less than 30 seconds</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Skip any question you don&apos;t want to answer</p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#5B8FB9] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Build a picture of your wellbeing over time</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26]">How are you feeling today?</h3>

                <div className="space-y-2">
                  {checkinExample.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-[12px] bg-[#F2E8DA]/40 hover:bg-[#F2E8DA]/70 transition-colors cursor-pointer">
                      <span className="text-2xl">{item.mood}</span>
                      <div>
                        <span className="font-semibold text-sm text-[#2D2A26]">{item.label}</span>
                        <p className="text-xs text-[#66615C]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Mood Trends */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26]">Mood — Last 7 Days</h3>

                <div className="flex items-end justify-between gap-2 h-40 px-2">
                  {weeklyTrend.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                      <span className="text-lg">{day.mood}</span>
                      <div
                        className="w-full max-w-[32px] rounded-t-[8px] transition-all"
                        style={{
                          height: `${day.level * 25}%`,
                          backgroundColor: day.level >= 3 ? '#4A7C59' : day.level === 2 ? '#D99100' : '#C0564B',
                        }}
                      />
                      <span className="text-xs text-[#66615C] font-medium">{day.day}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#66615C] text-center italic">
                  These trends are for self-awareness and do not diagnose a mental health condition.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
                Trends & Awareness
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                See Your Patterns
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Simple mood trends help you understand your emotional patterns over time. Spot connections between sleep, activity, and mood — without turning data into a diagnosis.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Weekly mood visualization</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Mood, sleep, energy, and stress trends</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Small wins and check-in completion tracking</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Recovery + Wellbeing Integration */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Connected Recovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Physical + Mental = Whole-Person Recovery
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Mental wellbeing is woven into every part of NIRVAN. Your mood check-in, sleep tracking, and emotional state are part of your recovery journey — not a separate feature.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 space-y-6 bg-[#F2E8DA]/60 border-[#e6e2dc]">
              <div className="text-center">
                <h3 className="font-bold text-lg text-[#2D2A26]">Your Recovery</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <Activity className="w-5 h-5 text-[#436444] mx-auto" />
                  <span className="font-semibold text-sm text-[#2D2A26]">Physical</span>
                  <p className="text-xs text-[#66615C]">2 activities completed</p>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <Smile className="w-5 h-5 text-[#D99100] mx-auto" />
                  <span className="font-semibold text-sm text-[#2D2A26]">Mental Wellbeing</span>
                  <p className="text-xs text-[#66615C]">Mood check-in done</p>
                </div>
                <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <Moon className="w-5 h-5 text-[#5B8FB9] mx-auto" />
                  <span className="font-semibold text-sm text-[#2D2A26]">Lifestyle</span>
                  <p className="text-xs text-[#66615C]">Sleep logged</p>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-[#e6e2dc]">
                <p className="text-sm font-semibold text-[#436444]">3 small steps completed today</p>
              </div>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Learn
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Wellbeing Content
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Short, practical, evidence-informed content to help you understand the emotional side of recovery. Available in English and Hindi.
              </p>

              <div className="pt-4">
                <Link href="/wellbeing/depression-support">
                  <Button variant="secondary" size="md" className="gap-2">
                    <span>Depression Support</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {contentTopics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-[12px] bg-white border border-[#e6e2dc] hover:shadow-soft transition-all">
                  <BookOpen className="w-5 h-5 text-[#8c4e33] shrink-0" />
                  <span className="font-semibold text-sm text-[#2D2A26]">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Safety */}
      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-[16px] bg-[#F2E8DA]/60 border border-[#e6e2dc]">
              <AlertTriangle className="w-6 h-6 text-[#D99100] shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-[#2D2A26]">When to Seek Professional Support</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">
                  If you experience persistent low mood, loss of interest, sleep or appetite changes, persistent tiredness, poor concentration, low self-worth, hopelessness, or thoughts about dying, please reach out to a qualified healthcare professional. NIRVAN is not a substitute for professional mental health care.
                </p>
              </div>
            </div>

            <MedicalDisclaimer compact />
          </div>
        </PageContainer>
      </section>

      <CTA />
    </>
  );
}
