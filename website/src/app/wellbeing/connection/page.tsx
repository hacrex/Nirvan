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
  Users, ShieldCheck, ArrowRight, CheckCircle2, Heart,
  Phone, Brain, Clock, MessageCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Connection — Staying Connected During Recovery',
  description: 'Recovery is easier when you feel connected. Gentle support for staying in touch with family, friends, and healthcare professionals during your healing journey.',
  keywords: [
    'social connection',
    'recovery support',
    'family connection',
    'healthcare communication',
    'recovery groups',
    'loneliness recovery',
    'staying connected',
  ],
};

export default function ConnectionPage() {
  const connectionTypes = [
    {
      icon: <Heart className="w-6 h-6 text-[#C0564B]" />,
      title: 'Family',
      description: 'Your family can be a source of strength, practical help, and emotional support during recovery.',
      suggestions: ['Share how you\'re feeling today', 'Ask for help with a specific task', 'Simply spend time together', 'Watch something together'],
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#5B8FB9]" />,
      title: 'Friends',
      description: 'Friends help you feel like yourself again. Even a short message can brighten your day and reduce isolation.',
      suggestions: ['Send a quick text or voice note', 'Share a recovery win, no matter how small', 'Ask about their day', 'Make a plan for when you\'re ready'],
    },
    {
      icon: <Users className="w-6 h-6 text-[#436444]" />,
      title: 'Recovery Groups',
      description: 'Connecting with others on similar journeys reduces isolation and provides shared understanding.',
      suggestions: ['Join an online recovery community', 'Attend a local support group', 'Share your experience if you feel comfortable', 'Listen to others\' stories'],
    },
    {
      icon: <Phone className="w-6 h-6 text-[#8c4e33]" />,
      title: 'Healthcare Professionals',
      description: 'Your care team is part of your support network. Don\'t hesitate to reach out with questions or concerns.',
      suggestions: ['Ask questions about your recovery plan', 'Share changes in how you feel', 'Request clarification on exercises', 'Discuss goals and progress'],
    },
  ];

  const benefits = [
    { title: 'Reduces Isolation', description: 'Feeling connected reminds you that you\'re not going through recovery alone.' },
    { title: 'Improves Mood', description: 'Positive social interactions boost mood and increase motivation for recovery activities.' },
    { title: 'Provides Practical Help', description: 'Family and friends can assist with daily tasks, appointments, and recovery exercises.' },
    { title: 'Strengthens Resilience', description: 'Strong social support helps you cope better with setbacks and difficult days.' },
    { title: 'Encourages Consistency', description: 'When someone knows your goals, you\'re more likely to stay on track with your recovery plan.' },
    { title: 'Speeds Recovery', description: 'Research shows social support is one of the strongest predictors of rehabilitation success.' },
  ];

  const gentlePrompts = [
    'What\'s one small thing you feel able to do today?',
    'Who would you like to connect with today?',
    'Is there someone you\'ve been meaning to call?',
    'Would a short message to a friend feel good right now?',
    'Is there a healthcare question you\'ve been holding onto?',
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#436444]/5 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Social Connection' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="primary" icon={<Users className="w-4 h-4 text-[#2e4e30]" />}>
                Social Connection
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Recovery Is Easier When You Feel Connected
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Recovery can feel isolating. REVIA supports gentle outreach to the people and communities that matter to you — at your own pace, without pressure.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Connection is optional. Never pressured. Always at your comfort level.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Gentle Prompt Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-xl text-[#2D2A26] text-center">Connection</h3>

                <p className="text-sm text-[#66615C] text-center">Who would you like to connect with today?</p>

                <div className="space-y-2">
                  {['Family', 'Friend', 'Recovery group', 'Healthcare professional', 'No one today'].map((option, i) => (
                    <div key={i} className={`flex items-center gap-3 p-4 rounded-[12px] cursor-pointer transition-colors ${i === 4 ? 'bg-[#F2E8DA]/60 border border-[#e6e2dc]' : 'bg-[#F2E8DA]/30 hover:bg-[#F2E8DA]/60 border border-transparent hover:border-[#e6e2dc]'}`}>
                      <div className="w-5 h-5 rounded-full border-2 border-[#d9c9b8]" />
                      <span className="text-sm text-[#2D2A26] font-medium">{option}</span>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#66615C] italic text-center pt-2">
                  It&apos;s okay to choose &quot;No one today.&quot; Recovery includes rest.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
                Gentle Support
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Connection at Your Pace
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                REVIA doesn&apos;t pressure you to socialize. It offers gentle prompts and simple options — you choose what feels right today.
              </p>

              <div className="space-y-3 pt-2">
                {gentlePrompts.map((prompt, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-[10px] bg-white border border-[#e6e2dc]">
                    <Brain className="w-4 h-4 text-[#5B8FB9] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#66615C] italic">{prompt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Connection Types */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Ways to Connect
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              Your Support Network
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Different types of connection serve different needs. All are valuable during recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {connectionTypes.map((type, idx) => (
              <Card key={idx} className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-[12px] bg-[#E1EADF]/60 shrink-0">
                    {type.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2A26]">{type.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#66615C] leading-relaxed">{type.description}</p>

                <div className="pt-4 border-t border-[#e6e2dc]">
                  <span className="text-xs font-bold text-[#2D2A26] uppercase tracking-wider">Try this</span>
                  <ul className="mt-3 space-y-2">
                    {type.suggestions.map((suggestion, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#66615C]">
                        <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
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
              The Power of Connection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 space-y-3">
                <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
                <h3 className="text-lg font-bold text-[#2D2A26]">{benefit.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{benefit.description}</p>
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
              Connection Supports Everything
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Mood', description: 'Social interaction naturally lifts mood and reduces loneliness.', href: '/wellbeing/mood' },
              { title: 'Depression Support', description: 'Connection is a key protective factor against depression.', href: '/wellbeing/depression-support' },
              { title: 'Motivation', description: 'Sharing goals with others increases accountability and momentum.', href: '/wellbeing/goals' },
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
