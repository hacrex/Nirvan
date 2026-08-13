import React from 'react';
import { PageContainer } from '../layout/PageContainer';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Path',
      description: 'Select your specific recovery condition (Cardiac, Neuro, Kidney, Liver) and set a personal goal that matters to your life.',
    },
    {
      number: '02',
      title: 'Follow Your Daily Plan',
      description: 'Engage with guided video exercises, quick daily check-ins, medication reminders, and clinician-reviewed guides at your own pace.',
    },
    {
      number: '03',
      title: 'See Your Progress',
      description: 'Track consistency, celebrate functional milestones, and share clear progress updates with your doctor or physical therapist.',
    },
  ];

  return (
    <section className="py-20 bg-[#fdf9f3]">
      <PageContainer>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            How REVIA Works
          </h2>
          <p className="text-lg text-[#66615C] leading-relaxed">
            Recovery doesn&apos;t need to be overwhelming. We break your journey down into clear, manageable daily steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-8 rounded-[16px] bg-white border border-[#e6e2dc] shadow-soft space-y-4">
              <div className="text-4xl font-extrabold text-[#436444]/30 font-mono">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-[#2D2A26]">{step.title}</h3>
              <p className="text-[#66615C] text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
