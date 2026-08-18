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
  PenLine, ShieldCheck, ArrowRight, CheckCircle2, Lock,
  Eye, EyeOff, Brain, Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Private Journal — Reflect on Your Recovery Journey',
  description: 'A private journal to reflect on your recovery journey. Write about your day, what helped, and what you\'re grateful for — stored securely and never shared.',
  keywords: [
    'recovery journal',
    'private journal',
    'emotional journal',
    'gratitude journal',
    'recovery reflection',
    'mental health journal',
    'wellbeing journal',
  ],
};

export default function JournalPage() {
  const journalPrompts = [
    { prompt: 'How was today?', placeholder: 'Write something about your day...', icon: '📝' },
    { prompt: 'What helped?', placeholder: 'What made today a little easier?', icon: '💚' },
    { prompt: 'One small thing I\'m grateful for:', placeholder: 'It can be anything — big or small...', icon: '✨' },
  ];

  const features = [
    {
      icon: <Lock className="w-5 h-5 text-[#436444]" />,
      title: 'Private & Secure',
      description: 'Your journal entries are encrypted and stored securely. No one — not NIRVAN, not your care team — can read them without your explicit consent.',
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#5B8FB9]" />,
      title: 'Never Shared with AI',
      description: 'NIRVAN does not automatically send journal content to any AI system. Your reflections remain yours.',
    },
    {
      icon: <PenLine className="w-5 h-5 text-[#8c4e33]" />,
      title: 'Simple & Gentle',
      description: 'No word counts, no prompts that feel intrusive. Just a quiet space to write what matters to you.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#D99100]" />,
      title: 'For Self-Reflection',
      description: 'Journaling supports self-awareness — understanding your emotions, recognizing patterns, and processing your recovery journey.',
    },
  ];

  const journalingBenefits = [
    {
      title: 'Processes Emotions',
      description: 'Writing helps you make sense of complex feelings — frustration, hope, grief, progress — that recovery brings.',
    },
    {
      title: 'Reduces Stress',
      description: 'Putting thoughts on paper can reduce the mental load of carrying worries and concerns.',
    },
    {
      title: 'Tracks Progress',
      description: 'Over time, your journal becomes a record of how far you\'ve come — something you can look back on.',
    },
    {
      title: 'Builds Self-Awareness',
      description: 'Regular reflection helps you understand your triggers, strengths, and what supports your wellbeing.',
    },
    {
      title: 'No Right Way',
      description: 'There\'s no correct way to journal. A few sentences, a single word, or several paragraphs — it all counts.',
    },
    {
      title: 'Completely Optional',
      description: 'Journaling is never required. It\'s a tool available when you want it, not something NIRVAN pushes you to do.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Journal' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="secondary" icon={<PenLine className="w-4 h-4 text-[#6f371e]" />}>
                Private Journal
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                A Quiet Space to Reflect
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Your recovery journey involves more than physical exercises. A private journal helps you process emotions, recognize patterns, and notice progress — all in a space that belongs entirely to you.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <Lock className="w-4 h-4 text-[#436444]" />
                <span>Encrypted. Private. Never shared without your consent.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Journal Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-xl text-[#2D2A26]">How was today?</h3>
                  <Lock className="w-4 h-4 text-[#436444]" />
                </div>

                <div className="space-y-4">
                  {journalPrompts.map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm font-semibold text-[#2D2A26]">{item.prompt}</span>
                      </div>
                      <div className="p-4 rounded-[14px] bg-[#F2E8DA]/30 border border-[#e6e2dc] min-h-[80px]">
                        <p className="text-sm text-[#66615C] italic">{item.placeholder}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#e6e2dc] flex items-center justify-between">
                  <p className="text-xs text-[#66615C]">Saved locally & encrypted</p>
                  <div className="px-4 py-2 rounded-[10px] bg-[#436444] text-white text-sm font-semibold cursor-pointer">
                    Save privately
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Private Journal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Your Words, Your Space
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                NIRVAN&apos;s journal is designed for self-reflection, not performance. There are no prompts that feel clinical, no word targets, and no sharing features. Just a quiet space for your thoughts.
              </p>

              <div className="space-y-4 pt-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-[10px] bg-white border border-[#e6e2dc]">
                    {feature.icon}
                    <div>
                      <span className="font-semibold text-sm text-[#2D2A26]">{feature.title}</span>
                      <p className="text-xs text-[#66615C] mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Why Journal?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              The Benefits of Reflective Writing
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              You don&apos;t need to be a writer. Research shows that even brief, regular reflection supports emotional wellbeing during recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalingBenefits.map((benefit, idx) => (
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

      {/* Privacy */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 space-y-6 bg-[#F2E8DA]/60 border-[#e6e2dc]">
              <div className="text-center space-y-3">
                <Lock className="w-8 h-8 text-[#436444] mx-auto" />
                <h3 className="text-2xl font-bold text-[#2D2A26]">Your Privacy, Protected</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Encrypted Storage', description: 'Your entries are encrypted at rest and in transit.' },
                  { title: 'No AI Access', description: 'Journal content is never sent to AI systems automatically.' },
                  { title: 'No Sharing', description: 'Your entries are not visible to anyone unless you choose to share them.' },
                  { title: 'Delete Anytime', description: 'You can delete your journal data at any time from your account settings.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] space-y-2">
                    <h4 className="font-bold text-sm text-[#2D2A26]">{item.title}</h4>
                    <p className="text-xs text-[#66615C]">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#66615C] italic text-center">
                If AI analysis is introduced in the future, NIRVAN will require clear, explicit consent and explain exactly what is processed.
              </p>
            </Card>
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
              Journal Alongside Your Recovery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Mood Tracking', description: 'Pair journaling with daily mood check-ins for deeper self-awareness.', href: '/wellbeing/mood' },
              { title: 'Goals', description: 'Journal about your wellbeing goals and what\'s helping you reach them.', href: '/wellbeing/goals' },
              { title: 'Depression Support', description: 'Journaling can be part of evidence-based self-help approaches.', href: '/wellbeing/depression-support' },
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
