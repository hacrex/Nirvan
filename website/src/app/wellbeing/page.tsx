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
  Moon, Smile, Battery, Utensils, HeartHandshake, Sparkles,
  Brain, ShieldCheck, ArrowRight, Phone, BookOpen, Activity,
  Users, Wind, Leaf, TrendingUp, CheckCircle2, AlertTriangle,
  Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mental Wellbeing & Recovery Support',
  description: 'NIRVAN supports your emotional wellbeing during recovery — mood tracking, sleep support, stress management, breathing exercises, and evidence-based self-help guidance.',
  keywords: [
    'mental wellbeing',
    'recovery wellbeing',
    'mood tracking',
    'sleep support',
    'stress management',
    'breathing exercises',
    'depression support',
    'rehabilitation wellbeing',
    'mindfulness',
    'emotional recovery',
  ],
};

export default function WellbeingPage() {
  const pillars = [
    {
      icon: <Moon className="w-7 h-7 text-[#5B8FB9]" />,
      title: 'Sleep & Rest',
      description: 'Track sleep duration, nighttime awakenings, and rest quality. Understand how sleep supports physical healing.',
      href: '/wellbeing/sleep',
    },
    {
      icon: <Smile className="w-7 h-7 text-[#D99100]" />,
      title: 'Mood & Emotions',
      description: 'Quick daily check-ins to spot mood trends and stay encouraged — without judgment.',
      href: '/wellbeing/mood',
    },
    {
      icon: <Battery className="w-7 h-7 text-[#8c4e33]" />,
      title: 'Energy & Fatigue',
      description: 'Learn to pace your daily activities around natural energy peaks and avoid post-exertional fatigue.',
      href: '/wellbeing/mood',
    },
    {
      icon: <Wind className="w-7 h-7 text-[#436444]" />,
      title: 'Breathing & Relaxation',
      description: 'Guided diaphragmatic breathing, mindful attention, and grounding exercises to calm the nervous system.',
      href: '/wellbeing/breathing-relaxation',
    },
    {
      icon: <Brain className="w-7 h-7 text-[#5B8FB9]" />,
      title: 'Stress & Anxiety',
      description: 'Evidence-based techniques to manage recovery-related stress and anxiety.',
      href: '/wellbeing/stress',
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-[#436444]" />,
      title: 'Depression Support',
      description: 'Understanding low mood during recovery, self-help resources, and when to seek professional support.',
      href: '/wellbeing/depression-support',
    },
    {
      icon: <Utensils className="w-7 h-7 text-[#4A7C59]" />,
      title: 'Nutrition Guidance',
      description: 'Condition-aware hydration and meal advice reviewed by clinicians.',
      href: '/wellbeing/mental-health',
    },
    {
      icon: <Users className="w-7 h-7 text-[#8c4e33]" />,
      title: 'Social Connection',
      description: 'Recovery is easier when you feel connected. Gentle support for staying in touch with people who matter.',
      href: '/wellbeing/connection',
    },
  ];

  const dailyCheckinSteps = [
    { step: '1', label: 'How are you feeling today?', options: 'Good · Okay · Low · Sad · Overwhelmed', color: '#D99100' },
    { step: '2', label: 'Energy level', options: 'Low ────── High', color: '#8c4e33' },
    { step: '3', label: 'How did you sleep?', options: 'Poor · Okay · Good', color: '#5B8FB9' },
    { step: '4', label: 'Stress level', options: 'Low ────── High', color: '#C0564B' },
  ];

  const safetyPrinciples = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#436444]" />,
      title: 'Support, Don\'t Diagnose',
      description: 'NIRVAN helps you understand your wellbeing and build healthy routines. It never diagnoses conditions or prescribes treatment.',
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-[#D99100]" />,
      title: 'Safety First',
      description: 'If you indicate thoughts of self-harm or immediate danger, NIRVAN provides clear pathways to professional help and emergency resources.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#5B8FB9]" />,
      title: 'Evidence-Based',
      description: 'Content is informed by WHO guidelines and clinically reviewed. Self-help approaches include behavioural activation, CBT-informed exercises, and relaxation techniques.',
    },
  ];

  const wellbeingContent = [
    {
      title: 'Understanding Mood',
      description: 'Learn how recovery affects your emotions and what healthy emotional variation looks like.',
      icon: <Smile className="w-5 h-5 text-[#D99100]" />,
    },
    {
      title: 'Managing Stress',
      description: 'Practical techniques to reduce stress during recovery — from breathing exercises to routine building.',
      icon: <Brain className="w-5 h-5 text-[#5B8FB9]" />,
    },
    {
      title: 'Sleep Hygiene',
      description: 'How sleep quality affects physical healing, and simple steps to improve your rest.',
      icon: <Moon className="w-5 h-5 text-[#5B8FB9]" />,
    },
    {
      title: 'Building Motivation',
      description: 'Small, achievable actions to rebuild momentum without pressure.',
      icon: <Sparkles className="w-5 h-5 text-[#8c4e33]" />,
    },
    {
      title: 'When to Seek Help',
      description: 'Recognizing when low mood may need professional support — and how to take that next step.',
      icon: <Phone className="w-5 h-5 text-[#C0564B]" />,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Wellbeing' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="secondary" icon={<HeartHandshake className="w-4 h-4 text-[#8c4e33]" />}>
                Whole-Person Recovery
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Recovery is More Than Physical
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Your mind is part of your recovery too. NIRVAN supports the emotional side of healing — mood, sleep, stress, motivation, and connection — so you can recover as a whole person.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/wellbeing/mental-health">
                  <Button variant="primary" size="lg" className="gap-2">
                    <span>Explore Mental Wellbeing</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/wellbeing/depression-support">
                  <Button variant="outline" size="lg" className="gap-2">
                    <span>Depression Support</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Clinician-reviewed content. Support, not diagnosis.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Wellbeing Pillars */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Mental Wellbeing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              What Would You Like Support With?
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Recovery can affect how you feel emotionally. NIRVAN supports every dimension of your wellbeing — not just your body.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <Link key={idx} href={pillar.href} className="group">
                <Card className="p-6 space-y-4 h-full">
                  <div className="p-3 rounded-[12px] bg-[#F2E8DA]/60 w-fit group-hover:bg-[#F2E8DA] transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#66615C] leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Daily Mood Check-in Showcase */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Daily Check-In
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                A Quick Moment for Yourself
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Keep the daily interaction short. A few seconds to check in with yourself — how you&apos;re feeling, your energy, your sleep. No judgment, just awareness.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Takes less than 30 seconds</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Skip any question you don&apos;t want to answer</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Spot trends over time — not just daily snapshots</p>
                </div>
              </div>

              <Link href="/wellbeing/mental-health">
                <Button variant="secondary" size="md" className="gap-2 mt-4">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26]">How are you feeling today?</h3>

                <div className="space-y-3">
                  {dailyCheckinSteps.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-[16px] bg-[#F2E8DA]/40 space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.step}
                        </span>
                        <span className="font-semibold text-sm text-[#2D2A26]">{item.label}</span>
                      </div>
                      <p className="text-xs text-[#66615C] pl-10">{item.options}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Safety Principles */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Safety First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Designed with Care
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Mental wellbeing support requires clinical responsibility. NIRVAN follows strict safety principles to protect you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyPrinciples.map((principle, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <div className="p-3 rounded-full bg-[#E1EADF]/60 w-fit">
                  {principle.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2A26]">{principle.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{principle.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Wellbeing Content Topics */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Learn & Grow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Understanding Your Wellbeing
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Short, practical, evidence-informed content to help you understand the emotional side of recovery. Available in English and Hindi.
              </p>

              <div className="pt-4">
                <Link href="/wellbeing/mental-health">
                  <Button variant="primary" size="md" className="gap-2">
                    <span>Explore Wellbeing Topics</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {wellbeingContent.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-[16px] bg-white border border-[#e6e2dc] hover:shadow-soft transition-all">
                  <div className="p-2.5 rounded-[10px] bg-[#F2E8DA]/60 shrink-0">
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2A26] text-base">{topic.title}</h3>
                    <p className="text-sm text-[#66615C] mt-1 leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Depression Support */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[24px] bg-[#F2E8DA]/60 border border-[#e6e2dc] w-full max-w-md space-y-6">
                <div className="p-4 rounded-[16px] bg-white border border-[#e6e2dc] space-y-3">
                  <p className="text-base font-semibold text-[#2D2A26]">Feeling low for a while?</p>
                  <p className="text-sm text-[#66615C] leading-relaxed">
                    Sometimes recovery can affect how we feel emotionally. NIRVAN can help you understand your wellbeing and explore self-help resources.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-[16px] bg-white border border-[#e6e2dc] text-center">
                    <span className="font-semibold text-sm text-[#436444]">Explore Support</span>
                  </div>
                  <div className="p-4 rounded-[16px] bg-white border border-[#e6e2dc] text-center">
                    <span className="font-semibold text-sm text-[#66615C]">Talk to a Professional</span>
                  </div>
                </div>

                <p className="text-xs text-[#66615C] italic text-center">
                  NIRVAN does not diagnose depression or prescribe treatment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Depression Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                You Don&apos;t Have to Handle This Alone
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Recovery can bring emotional challenges. NIRVAN provides gentle support to help you understand low mood, explore evidence-based self-help, and know when professional support may be appropriate.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Understand what depression is and how it differs from normal mood changes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Explore evidence-based self-help techniques</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Recognize when professional support may be appropriate</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Access verified crisis resources when needed</p>
                </div>
              </div>

              <Link href="/wellbeing/depression-support">
                <Button variant="secondary" size="md" className="gap-2 mt-4">
                  <span>Learn About Depression Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Breathing & Relaxation Preview */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
                Relaxation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Take a Moment
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Simple breathing and relaxation techniques to calm your nervous system. No experience needed — just a few minutes for yourself.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                  <Wind className="w-5 h-5 text-[#436444] shrink-0" />
                  <div>
                    <span className="font-semibold text-sm text-[#2D2A26]">Slow Breathing</span>
                    <p className="text-xs text-[#66615C]">Guided diaphragmatic breathing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                  <Leaf className="w-5 h-5 text-[#4A7C59] shrink-0" />
                  <div>
                    <span className="font-semibold text-sm text-[#2D2A26]">Mindful Attention</span>
                    <p className="text-xs text-[#66615C]">Present-moment awareness</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                  <Activity className="w-5 h-5 text-[#5B8FB9] shrink-0" />
                  <div>
                    <span className="font-semibold text-sm text-[#2D2A26]">Grounding Exercises</span>
                    <p className="text-xs text-[#66615C]">Body awareness and grounding</p>
                  </div>
                </div>
              </div>

              <Link href="/wellbeing/breathing-relaxation">
                <Button variant="primary" size="md" className="gap-2 mt-4">
                  <span>Explore Relaxation Techniques</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26] text-center">Breathe</h3>

                <div className="flex justify-center">
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-[#436444]/10 animate-pulse" />
                    <div className="absolute inset-4 rounded-full bg-[#436444]/15 flex items-center justify-center">
                      <div className="text-center">
                        <Wind className="w-8 h-8 text-[#436444] mx-auto mb-1" />
                        <span className="text-xs font-semibold text-[#436444]">2 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <p className="text-sm text-[#2D2A26] font-medium">Breathe in</p>
                  <div className="w-16 h-0.5 bg-[#436444]/20 mx-auto" />
                  <p className="text-sm text-[#2D2A26] font-medium">Hold</p>
                  <div className="w-16 h-0.5 bg-[#436444]/20 mx-auto" />
                  <p className="text-sm text-[#2D2A26] font-medium">Breathe out</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Journal Preview */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Private Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                A Quiet Space to Reflect
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Your recovery journey involves more than physical exercises. A private journal helps you process emotions, recognize patterns, and notice progress — all in a space that belongs entirely to you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Encrypted and private — never shared without consent</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Simple prompts: How was today? What helped? What are you grateful for?</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">No word counts, no pressure — just a quiet space for your thoughts</p>
                </div>
              </div>

              <Link href="/wellbeing/journal">
                <Button variant="secondary" size="md" className="gap-2 mt-4">
                  <span>Start Journaling</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#2D2A26]">How was today?</h3>
                  <Lock className="w-4 h-4 text-[#436444]" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📝</span>
                      <span className="text-sm font-semibold text-[#2D2A26]">How was today?</span>
                    </div>
                    <div className="p-4 rounded-[14px] bg-[#F2E8DA]/30 border border-[#e6e2dc] min-h-[60px]">
                      <p className="text-sm text-[#66615C] italic">Write something about your day...</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">💚</span>
                      <span className="text-sm font-semibold text-[#2D2A26]">What helped?</span>
                    </div>
                    <div className="p-4 rounded-[14px] bg-[#F2E8DA]/30 border border-[#e6e2dc] min-h-[60px]">
                      <p className="text-sm text-[#66615C] italic">What made today a little easier?</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#66615C] italic text-center">Saved locally & encrypted</p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Goals Preview */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[24px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26] text-center">My Goal</h3>

                <div className="space-y-2">
                  {[
                    { goal: 'Improve sleep', selected: true },
                    { goal: 'Daily mood check-in', selected: false },
                    { goal: 'Reduce stress', selected: false },
                    { goal: 'Stay connected', selected: false },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-3 rounded-[12px] ${item.selected ? 'bg-[#436444]/10 border border-[#436444]/20' : 'bg-[#F2E8DA]/30 border border-transparent'}`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${item.selected ? 'border-[#436444] bg-[#436444]' : 'border-[#d9c9b8]'}`}>
                        {item.selected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm font-medium text-[#2D2A26]">{item.goal}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#66615C] italic text-center">Small steps, no pressure.</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
                Wellbeing Goals
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Small Steps Toward Better Living
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Set gentle wellbeing goals during recovery. Not targets to hit — directions to move toward, at your own pace. No guilt for setbacks, no pressure to perform.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Choose from sleep, mood, stress, connection, and motivation goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Track progress gently — effort matters more than perfection</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Change or remove goals anytime</p>
                </div>
              </div>

              <Link href="/wellbeing/goals">
                <Button variant="primary" size="md" className="gap-2 mt-4">
                  <span>Explore Goals</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Recovery + Wellbeing Integration */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Whole-Person Recovery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Your Recovery, Connected
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Mental wellbeing is woven into every part of NIRVAN — not a separate feature. Your mood, sleep, and emotional state are part of your recovery journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-7 space-y-4">
              <div className="p-3 rounded-full bg-[#E1EADF]/60 w-fit">
                <Activity className="w-5 h-5 text-[#436444]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2A26]">Physical Recovery</h3>
              <p className="text-sm text-[#66615C] leading-relaxed">
                Exercise, mobility, functional activities — your clinically appropriate rehabilitation plan.
              </p>
              <div className="pt-3 border-t border-[#e6e2dc] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Guided exercises</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Recovery plan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Progress tracking</span>
                </div>
              </div>
            </Card>

            <Card className="p-7 space-y-4">
              <div className="p-3 rounded-full bg-[#F2E8DA]/60 w-fit">
                <HeartHandshake className="w-5 h-5 text-[#8c4e33]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2A26]">Mental Wellbeing</h3>
              <p className="text-sm text-[#66615C] leading-relaxed">
                Mood, sleep, stress, motivation — the emotional side of recovery that matters just as much.
              </p>
              <div className="pt-3 border-t border-[#e6e2dc] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Daily mood check-in</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Sleep tracking</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Relaxation exercises</span>
                </div>
              </div>
            </Card>

            <Card className="p-7 space-y-4">
              <div className="p-3 rounded-full bg-[#E1EADF]/60 w-fit">
                <TrendingUp className="w-5 h-5 text-[#5B8FB9]" />
              </div>
              <h3 className="text-lg font-bold text-[#2D2A26]">Better Living</h3>
              <p className="text-sm text-[#66615C] leading-relaxed">
                When physical and mental recovery come together, you build a foundation for long-term wellbeing.
              </p>
              <div className="pt-3 border-t border-[#e6e2dc] space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Whole-person progress</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Healthier routines</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#66615C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4A7C59]" />
                  <span>Confidence & connection</span>
                </div>
              </div>
            </Card>
          </div>
        </PageContainer>
      </section>

      {/* Medical Disclaimer */}
      <section className="py-12 bg-[#F2E8DA]/30">
        <PageContainer>
          <MedicalDisclaimer />
        </PageContainer>
      </section>

      {/* CTA */}
      <CTA />
    </>
  );
}
