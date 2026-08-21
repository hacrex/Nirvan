import Link from 'next/link';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MedicalDisclaimer } from '@/components/ui/MedicalDisclaimer';
import { CTA } from '@/components/sections/CTA';
import { createPageMetadata } from '@/lib/metadata';
import {
  Target, ShieldCheck, ArrowRight, CheckCircle2, TrendingUp,
  Moon, Brain, Users, Sparkles, Heart
} from 'lucide-react';

export const metadata = createPageMetadata('/wellbeing/goals', {
  title: 'Wellbeing Goals — Small Steps Toward Better Living',
  description: 'Set gentle wellbeing goals during recovery. Build healthy routines around sleep, stress, connection, and motivation — one small step at a time.',
  keywords: [
    'wellbeing goals',
    'recovery goals',
    'mental health goals',
    'sleep goals',
    'stress management goals',
    'motivation goals',
    'routine building',
    'small steps recovery',
  ],
});

export default function GoalsPage() {
  const goalOptions = [
    { icon: <Moon className="w-5 h-5 text-[#5B8FB9]" />, goal: 'Improve sleep', description: 'Better rest supports physical healing and emotional wellbeing.' },
    { icon: <Target className="w-5 h-5 text-[#436444]" />, goal: 'Build a daily routine', description: 'Gentle consistency creates structure without pressure.' },
    { icon: <Brain className="w-5 h-5 text-[#5B8FB9]" />, goal: 'Reduce stress', description: 'Learn techniques to manage recovery-related anxiety.' },
    { icon: <Users className="w-5 h-5 text-[#436444]" />, goal: 'Stay connected', description: 'Reach out to family, friends, or your care team.' },
    { icon: <Sparkles className="w-5 h-5 text-[#8c4e33]" />, goal: 'Build motivation', description: 'Small achievable actions rebuild momentum.' },
    { icon: <Heart className="w-5 h-5 text-[#C0564B]" />, goal: 'Manage recovery emotions', description: 'Understand and navigate the emotional side of healing.' },
    { icon: <TrendingUp className="w-5 h-5 text-[#4A7C59]" />, goal: 'Understand my mood', description: 'Build self-awareness through daily check-ins.' },
  ];

  const goalDemo = [
    { goal: 'Improve sleep', progress: 60, status: 'in-progress', note: 'Going to bed 30 min earlier' },
    { goal: 'Daily mood check-in', progress: 85, status: 'in-progress', note: '5 of 7 days this week' },
    { goal: 'Call a friend', progress: 100, status: 'completed', note: 'Called sister yesterday' },
  ];

  const principles = [
    {
      title: 'Small Steps, Not Leaps',
      description: 'Recovery goals should feel achievable. A 5-minute walk is a valid goal. So is one deep breath. Small steps create momentum.',
    },
    {
      title: 'No Guilt for Setbacks',
      description: 'Some days are harder. Missing a goal doesn\'t mean failure. NIRVAN never punishes you for a difficult day.',
    },
    {
      title: 'Your Goals, Your Pace',
      description: 'Goals are personal. What matters to you may not matter to someone else. There\'s no comparison, no competition.',
    },
    {
      title: 'Flexible, Not Rigid',
      description: 'Goals can change. What felt achievable last week might need adjusting. That\'s not failure — it\'s wisdom.',
    },
    {
      title: 'Celebrate Progress',
      description: 'Every step forward matters. NIRVAN acknowledges your effort, not just your outcomes.',
    },
    {
      title: 'No False Promises',
      description: 'NIRVAN will never promise to cure anything in 30 days. Recovery is a journey, not a countdown.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#436444]/5 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Goals' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="success" icon={<Target className="w-4 h-4 text-[#2e4e30]" />}>
                Wellbeing Goals
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                Small Steps Toward Better Living
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Wellbeing goals help you build healthy routines during recovery. Not targets to hit — gentle directions to move toward, at your own pace.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>No pressure. No guilt. Just small steps that matter.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Goal Selection Demo */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-xl text-[#2D2A26] text-center">My Goal</h3>

                <div className="space-y-2">
                  {goalOptions.map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-3 rounded-[12px] cursor-pointer transition-colors ${idx === 0 ? 'bg-[#436444]/10 border border-[#436444]/20' : 'bg-[#F2E8DA]/30 hover:bg-[#F2E8DA]/60 border border-transparent hover:border-[#e6e2dc]'}`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${idx === 0 ? 'border-[#436444] bg-[#436444]' : 'border-[#d9c9b8]'}`}>
                        {idx === 0 && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <div className="flex items-center gap-2.5 flex-1">
                        {item.icon}
                        <span className="text-sm font-medium text-[#2D2A26]">{item.goal}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-[#66615C] italic text-center">
                  You can change your goal anytime. There&apos;s no commitment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
                Wellbeing Goals
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Choose What Matters to You
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                NIRVAN offers gentle goal categories based on what supports wellbeing during recovery. You choose one — or none — and adjust whenever you need to.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">No pressure to complete goals on a specific timeline</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Change or remove goals anytime</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Progress is tracked gently — not as pass/fail</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Progress Demo */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#5B8FB9]">
                Track Progress
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                Gentle Progress Tracking
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                See how you&apos;re moving toward your goals — without harsh metrics or deadlines. Progress is measured in effort, not perfection.
              </p>

              <div className="space-y-3 pt-2">
                {goalDemo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.status === 'completed' ? 'bg-[#4A7C59]/15' : 'bg-[#5B8FB9]/15'}`}>
                      {item.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-[#5B8FB9]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm text-[#2D2A26]">{item.goal}</span>
                        <span className="text-xs text-[#66615C]">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e6e2dc] rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${item.status === 'completed' ? 'bg-[#4A7C59]' : 'bg-[#5B8FB9]'}`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-[#66615C] mt-1.5 italic">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[28px] bg-white border border-[#e6e2dc] w-full max-w-md space-y-6 shadow-soft">
                <h3 className="font-bold text-lg text-[#2D2A26] text-center">Your Recovery</h3>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-[12px] bg-[#436444]/10 text-center space-y-2">
                    <Target className="w-5 h-5 text-[#436444] mx-auto" />
                    <span className="text-xs font-semibold text-[#66615C]">Goals</span>
                    <p className="text-lg font-bold text-[#2D2A26]">3</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#5B8FB9]/10 text-center space-y-2">
                    <TrendingUp className="w-5 h-5 text-[#5B8FB9] mx-auto" />
                    <span className="text-xs font-semibold text-[#66615C]">Progress</span>
                    <p className="text-lg font-bold text-[#2D2A26]">82%</p>
                  </div>
                  <div className="p-4 rounded-[12px] bg-[#D99100]/10 text-center space-y-2">
                    <Sparkles className="w-5 h-5 text-[#D99100] mx-auto" />
                    <span className="text-xs font-semibold text-[#66615C]">Wins</span>
                    <p className="text-lg font-bold text-[#2D2A26]">5</p>
                  </div>
                </div>

                <div className="p-4 rounded-[14px] bg-[#F2E8DA]/40 text-center space-y-1">
                  <p className="text-sm font-semibold text-[#436444]">3 small steps completed today</p>
                  <p className="text-xs text-[#66615C]">Every step matters.</p>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Principles */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Our Approach
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              How NIRVAN Thinks About Goals
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              NIRVAN treats wellbeing goals as gentle directions, not rigid targets. Here&apos;s what that means.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{principle.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{principle.description}</p>
              </Card>
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
              Goals Connect to Everything
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Mood', description: 'Track how your mood changes as you work toward goals.', href: '/wellbeing/mood' },
              { title: 'Sleep', description: 'Set gentle goals for better rest and recovery.', href: '/wellbeing/sleep' },
              { title: 'Journal', description: 'Reflect on your goal progress and what you\'ve learned.', href: '/wellbeing/journal' },
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
