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
  HeartHandshake, ShieldCheck, ArrowRight, Phone, BookOpen,
  AlertTriangle, CheckCircle2, Users, Brain, Clock, ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Depression Support — Understanding Low Mood During Recovery',
  description: 'Gentle depression support during recovery. Understand low mood, explore evidence-based self-help, and know when to seek professional support.',
  keywords: [
    'depression support',
    'low mood recovery',
    'mental health recovery',
    'self-help depression',
    'when to seek help',
    'rehabilitation mental health',
  ],
};

export default function DepressionSupportPage() {
  const whatIsDepression = [
    {
      title: 'More Than Ordinary Mood Changes',
      description: 'Depression is more than feeling sad occasionally. It involves persistent low mood or loss of interest that can affect daily life, sleep, appetite, energy, concentration, and self-worth.',
    },
    {
      title: 'Common Signs',
      description: 'Persistent low mood, loss of interest in activities, sleep changes, appetite changes, tiredness, poor concentration, low self-worth, hopelessness, and in some cases thoughts about dying.',
    },
    {
      title: 'How Recovery Can Affect Mood',
      description: 'Physical recovery can bring emotional challenges — frustration, grief, uncertainty, and changes in routine. These feelings are normal but sometimes persistent low mood may need additional support.',
    },
  ];

  const selfHelpResources = [
    {
      title: 'Behavioural Activation',
      description: 'When mood is low, activity decreases — which can lower positive experiences. Small, achievable actions help break this cycle. REVIA encourages gentle steps like a short walk, calling someone, or sitting outside.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
    {
      title: 'Problem Solving',
      description: 'Breaking down challenges into smaller, manageable pieces. REVIA can help you identify one small step you can take today.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
    {
      title: 'CBT-Informed Exercises',
      description: 'Cognitive Behavioural Therapy techniques adapted for self-help. Learn to recognize thought patterns and develop healthier responses.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
    {
      title: 'Relaxation & Stress Management',
      description: 'Simple breathing exercises, guided relaxation, and mindfulness techniques to calm the nervous system.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
    {
      title: 'Social Connection',
      description: 'Staying connected to people who matter. Gentle support for reaching out to family, friends, or healthcare professionals.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
    {
      title: 'Routine Building',
      description: 'Gentle daily consistency helps your body and mind settle. Small routines create structure without pressure.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#4A7C59]" />,
    },
  ];

  const whenToSeekHelp = [
    'Low mood persists for more than two weeks',
    'Loss of interest in activities you used to enjoy',
    'Significant changes in sleep or appetite',
    'Persistent tiredness that doesn\'t improve with rest',
    'Difficulty concentrating or making decisions',
    'Feelings of worthlessness or excessive guilt',
    'Hopelessness about the future',
    'Thoughts of self-harm or suicide',
    'Unable to carry out daily activities',
    'Social withdrawal that feels unhealthy',
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-6 pb-16 bg-gradient-to-b from-[#F2E8DA]/50 to-[#fdf9f3] border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[
            { label: 'Wellbeing', href: '/wellbeing' },
            { label: 'Depression Support' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="secondary" icon={<HeartHandshake className="w-4 h-4 text-[#8c4e33]" />}>
                Depression Support
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight leading-tight">
                You Don&apos;t Have to Handle This Alone
              </h1>

              <p className="text-lg text-[#66615C] leading-relaxed max-w-2xl">
                Sometimes recovery can affect how we feel emotionally. REVIA can help you understand your wellbeing, explore self-help resources, and know when professional support may be appropriate.
              </p>

              <div className="flex items-center gap-2 text-xs text-[#66615C] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Support, not diagnosis. REVIA does not diagnose depression or prescribe treatment.</span>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* What is Depression */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Understanding
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              What is Depression?
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              Depression is more than ordinary mood changes. Understanding it helps you recognize when you or someone you care about may need additional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatIsDepression.map((item, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <span className="w-8 h-8 rounded-full bg-[#E1EADF] text-[#436444] font-bold text-sm flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#2D2A26]">{item.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Self-Help Resources */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
              Evidence-Based Self-Help
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
              What Self-Help Can Do
            </h2>
            <p className="text-[#66615C] leading-relaxed">
              WHO recommends structured psychological interventions for depression, including behavioural activation, CBT, interpersonal therapy, and problem-solving approaches. REVIA provides gentle, evidence-informed support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfHelpResources.map((resource, idx) => (
              <Card key={idx} className="p-7 space-y-4">
                <div className="p-3 rounded-[12px] bg-[#E1EADF]/60 w-fit">
                  {resource.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2D2A26]">{resource.title}</h3>
                <p className="text-sm text-[#66615C] leading-relaxed">{resource.description}</p>
              </Card>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Depression Education */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
                Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                How Physical Recovery & Mental Wellbeing Interact
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                Physical recovery and mental wellbeing are deeply connected. Exercise can support mood, but REVIA must not imply that exercise alone treats depression. Recovery has emotional highs and lows — all feelings are valid.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Physical activity can be part of a broader recovery routine</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Low mood can make activity harder — small steps help</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4A7C59] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#66615C]">Sleep, nutrition, and social connection all support recovery</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="p-8 rounded-[24px] bg-[#F2E8DA]/60 border border-[#e6e2dc] w-full max-w-md space-y-6">
                <h3 className="font-bold text-lg text-[#2D2A26]">Your Recovery Journey</h3>

                <div className="space-y-3">
                  <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#436444] shrink-0" />
                    <span className="text-sm text-[#2D2A26] font-medium">Physical Recovery</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-[#e6e2dc]" />
                  </div>
                  <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#D99100] shrink-0" />
                    <span className="text-sm text-[#2D2A26] font-medium">Mental Wellbeing</span>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-4 bg-[#e6e2dc]" />
                  </div>
                  <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#5B8FB9] shrink-0" />
                    <span className="text-sm text-[#2D2A26] font-medium">Better Living</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* When to Seek Help */}
      <section className="py-16 bg-[#F2E8DA]/30">
        <PageContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#C0564B]">
                Important
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">
                When Low Mood May Need Professional Support
              </h2>
              <p className="text-[#66615C] leading-relaxed">
                REVIA helps with self-awareness and self-help, but some situations need professional support. If you experience any of the following, please reach out to a qualified healthcare professional.
              </p>

              <div className="pt-4">
                <Link href="/wellbeing">
                  <Button variant="outline" size="md" className="gap-2">
                    <span>Back to Wellbeing</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {whenToSeekHelp.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-[12px] bg-white border border-[#e6e2dc]">
                  <AlertTriangle className="w-4 h-4 text-[#D99100] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#2D2A26]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Safety / Get Help */}
      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 space-y-6 bg-[#F2E8DA]/60 border-[#e6e2dc]">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-[#2D2A26]">Get Help Now</h3>
                <p className="text-[#66615C] leading-relaxed">
                  If you may be in immediate danger, please seek emergency help now. You can also contact a mental health professional or trusted person.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-5 rounded-[16px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <Phone className="w-6 h-6 text-[#C0564B] mx-auto" />
                  <h4 className="font-bold text-[#2D2A26]">Emergency Services</h4>
                  <p className="text-sm text-[#66615C]">If you are in immediate danger, call your local emergency number</p>
                </div>

                <div className="p-5 rounded-[16px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <HeartHandshake className="w-6 h-6 text-[#436444] mx-auto" />
                  <h4 className="font-bold text-[#2D2A26]">Mental Health Professional</h4>
                  <p className="text-sm text-[#66615C]">Reach out to a qualified counsellor, psychologist, or psychiatrist</p>
                </div>

                <div className="p-5 rounded-[16px] bg-white border border-[#e6e2dc] text-center space-y-2">
                  <Users className="w-6 h-6 text-[#5B8FB9] mx-auto" />
                  <h4 className="font-bold text-[#2D2A26]">Someone You Trust</h4>
                  <p className="text-sm text-[#66615C]">A family member, friend, or trusted person in your life</p>
                </div>
              </div>

              <p className="text-xs text-[#66615C] italic text-center">
                Crisis and emergency contact information must be country-specific and verified. REVIA will provide verified official resources for your region.
              </p>
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

      <CTA />
    </>
  );
}
