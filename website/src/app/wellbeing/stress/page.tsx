import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { createPageMetadata } from '@/lib/metadata';
import {
  Brain, ShieldCheck, ArrowRight, Clock,
  Wind, Leaf, Activity, AlertTriangle, Heart
} from 'lucide-react';

export const metadata = createPageMetadata('/wellbeing/stress', {
  title: 'Stress & Anxiety Management During Recovery',
  description: 'Evidence-based techniques to manage recovery-related stress and anxiety. Breathing exercises, grounding, and practical strategies for everyday calm.',
  keywords: [
    'stress management',
    'anxiety relief',
    'recovery stress',
    'calm techniques',
    'grounding exercises',
    'breathing for anxiety',
    'recovery anxiety',
    'stress relief',
  ],
});

export default function StressPage() {
  const stressSources = [
    { source: 'Uncertainty', description: 'Not knowing how recovery will go or how long it will take.', icon: '❓' },
    { source: 'Pain', description: 'Physical discomfort can increase tension and emotional strain.', icon: '💫' },
    { source: 'Loss of Independence', description: 'Needing help with tasks you used to do easily.', icon: '🔄' },
    { source: 'Sleep Disruption', description: 'Poor sleep increases stress and reduces coping ability.', icon: '😴' },
    { source: 'Social Isolation', description: 'Feeling disconnected from your usual life and routines.', icon: '👥' },
    { source: 'Fear of the Future', description: 'Worrying about whether you\'ll fully recover or return to normal.', icon: '🔮' },
  ];

  const techniques = [
    {
      icon: <Wind className="w-6 h-6 text-[#436444]" />,
      title: 'Slow Breathing',
      duration: '2 minutes',
      description: 'Activate your body\'s natural relaxation response with controlled, diaphragmatic breathing.',
      steps: ['Breathe in through your nose for 4 counts', 'Hold gently for 4 counts', 'Breathe out through your mouth for 6 counts', 'Repeat 5-10 times'],
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#4A7C59]" />,
      title: '5-4-3-2-1 Grounding',
      duration: '2-3 minutes',
      description: 'When anxiety overwhelms, grounding brings you back to the present using your five senses.',
      steps: ['Name 5 things you can see', 'Name 4 things you can touch', 'Name 3 things you can hear', 'Name 2 things you can smell', 'Name 1 thing you can taste'],
    },
    {
      icon: <Activity className="w-6 h-6 text-[#5B8FB9]" />,
      title: 'Progressive Muscle Relaxation',
      duration: '5-10 minutes',
      description: 'Tense and release different muscle groups to release physical stress stored in your body.',
      steps: ['Start with your toes — tense for 5 seconds', 'Release and notice the difference', 'Move up to your calves, thighs, abdomen', 'Continue through each muscle group to your face'],
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C0564B]" />,
      title: 'Compassionate Self-Talk',
      duration: 'Anytime',
      description: 'Replace harsh inner criticism with the kindness you\'d offer a friend going through recovery.',
      steps: ['Notice when you\'re being self-critical', 'Ask: "Would I say this to a friend?"', 'Reframe with compassion and patience', '"This is hard, and I\'m doing my best"'],
    },
  ];

  const dailyStrategies = [
    {
      title: 'Morning Check-in',
      description: 'Start the day by noticing how you feel — without judgment. A quick mood check-in sets a calm tone.',
    },
    {
      title: 'Pace Your Day',
      description: 'Alternate activity with rest. Overexertion increases stress; pacing helps you do more with less strain.',
    },
    {
      title: 'Set One Small Goal',
      description: 'Instead of a long to-do list, choose one achievable thing. Completing it builds momentum.',
    },
    {
      title: 'Connect with Someone',
      description: 'A short conversation with a family member, friend, or healthcare provider can reduce isolation.',
    },
    {
      title: 'Wind Down Before Bed',
      description: 'Use breathing exercises or gentle stretching to transition from activity to rest.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#C0564B]/5 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Stress & Anxiety' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="warning" icon={<Brain className="w-4 h-4 text-[#805500]" />}>
                Stress & Anxiety
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Managing Recovery-Related Stress
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Recovery can bring uncertainty, discomfort, and worry. These feelings are normal. Evidence-based techniques can help you manage stress and anxiety during your healing journey.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Practical strategies — not a substitute for professional mental health care.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Stress Sources */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Understanding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              What Causes Stress During Recovery?
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Knowing the sources of your stress is the first step toward managing it. Recovery-related stress is common and valid.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stressSources.map((item, idx) => (
              <Card key={idx} className="p-6 space-y-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{item.source}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Techniques */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Techniques
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Evidence-Based Stress Relief
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Simple, practical techniques you can use anywhere — during recovery sessions, at home, or whenever stress rises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, idx) => (
              <Card key={idx} className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-[12px] bg-[#E1EADF]/60 shrink-0">
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

      {/* Daily Strategies */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
              Daily Strategies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Everyday Stress Management
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Small daily habits create a foundation for managing stress over time. Start with what feels easiest.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {dailyStrategies.map((strategy, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-[16px] bg-white border border-[#e6e2dc] hover:shadow-soft transition-all">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#2D2A26]">{strategy.title}</h3>
                  <p className="text-sm text-[#66615C] mt-1 leading-relaxed">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Related */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Connected Wellbeing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Stress Connects to Everything
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Breathing & Relaxation', description: 'The fastest way to calm your nervous system.', href: '/wellbeing/breathing-relaxation' },
              { title: 'Mood', description: 'Stress affects mood; tracking helps you spot patterns.', href: '/wellbeing/mood' },
              { title: 'Sleep', description: 'Stress disrupts sleep; relaxation before bed helps.', href: '/wellbeing/sleep' },
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

      {/* Safety */}
      <section className="py-12 bg-[#fdf9f3]">
        <PageContainer>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-6 rounded-[16px] bg-[#F2E8DA]/60 border border-[#e6e2dc]">
              <AlertTriangle className="w-6 h-6 text-[#D99100] shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="font-bold text-[#2D2A26]">When Stress Feels Unmanageable</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">
                  If stress or anxiety feels overwhelming, persists for weeks, interferes with daily life, or includes thoughts of self-harm, please reach out to a qualified healthcare professional. NIRVAN is not a substitute for professional mental health care.
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
