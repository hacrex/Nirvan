import { Metadata } from 'next';
import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import {
  Smile, TrendingUp, ShieldCheck, ArrowRight, CheckCircle2,
  Clock, AlertTriangle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mood Tracking — Daily Check-in & Emotional Awareness',
  description: 'Track your mood during recovery with quick daily check-ins. Spot patterns, understand emotional trends, and build self-awareness — without judgment.',
  keywords: [
    'mood tracking',
    'daily mood check-in',
    'emotional awareness',
    'recovery mood',
    'mood journal',
    'mood trends',
    'mental wellbeing tracking',
  ],
};

export default function MoodPage() {
  const moodOptions = [
    { mood: '😊', label: 'Good', description: 'Feeling positive and capable', color: '#4A7C59' },
    { mood: '🙂', label: 'Okay', description: 'Neutral, neither good nor bad', color: '#5B8FB9' },
    { mood: '😐', label: 'Low', description: 'Something feels off today', color: '#D99100' },
    { mood: '😔', label: 'Sad', description: 'Feeling down or disappointed', color: '#8c4e33' },
    { mood: '😣', label: 'Overwhelmed', description: 'Too much to handle right now', color: '#C0564B' },
  ];

  const weeklyTrend = [
    { day: 'Mon', level: 3, mood: '😊', note: 'Good walk' },
    { day: 'Tue', level: 2, mood: '🙂', note: '' },
    { day: 'Wed', level: 4, mood: '😊', note: 'Completed exercises' },
    { day: 'Thu', level: 1, mood: '😔', note: 'Tough day' },
    { day: 'Fri', level: 2, mood: '🙂', note: '' },
    { day: 'Sat', level: 3, mood: '😊', note: 'Family visit' },
    { day: 'Sun', level: 3, mood: '🙂', note: '' },
  ];

  const benefits = [
    {
      title: 'Build Self-Awareness',
      description: 'Understanding your emotional patterns helps you recognize what supports your wellbeing and what makes it harder.',
    },
    {
      title: 'Spot Trends Over Time',
      description: 'A single check-in is a snapshot. Multiple check-ins reveal patterns — connections between sleep, activity, and mood.',
    },
    {
      title: 'No Judgment',
      description: 'There are no "good" or "bad" moods. All feelings are valid. NIRVAN helps you observe, not evaluate.',
    },
    {
      title: 'Takes Seconds',
      description: 'A quick tap is all it takes. Less than 30 seconds to check in with yourself — skip any question you don\'t want to answer.',
    },
    {
      title: 'Supports Recovery',
      description: 'Emotional wellbeing is part of physical recovery. Tracking mood helps you and your care team understand the full picture.',
    },
    {
      title: 'Evidence-Informed',
      description: 'Mood tracking is a recognized self-awareness tool used in mental health and rehabilitation contexts worldwide.',
    },
  ];

  const relatedTopics = [
    { title: 'Sleep & Rest', description: 'How sleep affects your mood and emotional wellbeing.', href: '/wellbeing/sleep' },
    { title: 'Stress & Anxiety', description: 'Techniques to manage recovery-related stress.', href: '/wellbeing/stress' },
    { title: 'Breathing & Relaxation', description: 'Simple exercises to calm your nervous system.', href: '/wellbeing/breathing-relaxation' },
    { title: 'Depression Support', description: 'Understanding low mood and when to seek help.', href: '/wellbeing/depression-support' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Mood' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="warning" icon={<Smile className="w-4 h-4 text-[#805500]" />}>
                Daily Check-in
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                How Are You Feeling Today?
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                A quick daily moment to check in with yourself. No judgment — just awareness. Over time, these small snapshots build a meaningful picture of your emotional wellbeing.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Support, not diagnosis. Trends are for self-awareness only.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Interactive Mood Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-xl text-[#2D2A26] text-center">How are you feeling today?</h3>

                <div className="space-y-2">
                  {moodOptions.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-[14px] bg-[#F2E8DA]/40 hover:bg-[#F2E8DA]/70 transition-colors cursor-pointer border border-transparent hover:border-[#e6e2dc]">
                      <span className="text-3xl">{item.mood}</span>
                      <div className="flex-1">
                        <span className="font-semibold text-sm text-[#2D2A26]">{item.label}</span>
                        <p className="text-xs text-[#66615C]">{item.description}</p>
                      </div>
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-[#d9c9b8]" />
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e6e2dc] space-y-3">
                  <p className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">Optional</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#F2E8DA]/30">
                      <span className="text-sm text-[#2D2A26]">Energy</span>
                      <span className="text-xs text-[#66615C]">Low ────●──── High</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#F2E8DA]/30">
                      <span className="text-sm text-[#2D2A26]">Sleep</span>
                      <span className="text-xs text-[#66615C]">Poor ──────●─ Good</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#F2E8DA]/30">
                      <span className="text-sm text-[#2D2A26]">Stress</span>
                      <span className="text-xs text-[#66615C]">Low ──●────── High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Daily Mood Check-in
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                A Quick Moment for Yourself
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Keep the daily interaction short. A few seconds to check in with yourself — how you&apos;re feeling, your energy, your sleep. No judgment, just awareness.
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
                  <p className="text-sm text-[#66615C]">Spot trends over time — not just daily snapshots</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Mood Trend Demo */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
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

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26]">Mood — Last 7 Days</h3>

                <div className="flex items-end justify-between gap-2 h-44 px-2">
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

                <div className="flex items-center gap-4 justify-center pt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#4A7C59]" />
                    <span className="text-xs text-[#66615C]">Good</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#D99100]" />
                    <span className="text-xs text-[#66615C]">Okay</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm bg-[#C0564B]" />
                    <span className="text-xs text-[#66615C]">Low</span>
                  </div>
                </div>

                <p className="text-xs text-[#66615C] text-center italic">
                  These trends are for self-awareness and do not diagnose a mental health condition.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Why It Matters
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              The Value of Mood Tracking
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Mood tracking is more than a daily habit. It&apos;s a tool for understanding yourself during recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{benefit.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Connected Wellbeing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Mood Connects to Everything
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Your mood is influenced by sleep, stress, activity, and connection. Explore how these areas interact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedTopics.map((topic, idx) => (
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

      {/* Safety Note */}
      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-[16px] bg-[#F2E8DA]/60 border border-[#e6e2dc]">
              <AlertTriangle className="w-6 h-6 text-[#D99100] shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-[#2D2A26]">When Mood Tracking Needs More</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">
                  Mood tracking supports self-awareness. If you notice persistent low mood, loss of interest, sleep changes, hopelessness, or thoughts of self-harm, please reach out to a qualified healthcare professional. NIRVAN is not a substitute for professional mental health care.
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
