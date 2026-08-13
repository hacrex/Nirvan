import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { Link2, LineChart, WifiOff } from 'lucide-react';

export const WhyRevia: React.FC = () => {
  const values = [
    {
      icon: <Link2 className="w-8 h-8 text-[#436444]" />,
      title: 'Your Recovery, Connected',
      description: 'Rehabilitation plans, exercise video guides, daily check-ins, and education brought together into one supportive, seamless experience.',
    },
    {
      icon: <LineChart className="w-8 h-8 text-[#8c4e33]" />,
      title: 'Progress You Can See',
      description: 'Track meaningful personal outcomes and consistency, not just confusing numbers or clinical overload. Celebrate every step forward.',
    },
    {
      icon: <WifiOff className="w-8 h-8 text-[#5B8FB9]" />,
      title: 'Built for Real Life',
      description: 'Works offline so your recovery routine is never interrupted. Accessible touch targets, clear text scaling, and multilingual support.',
    },
  ];

  return (
    <section className="py-20 bg-[#F2E8DA]/40">
      <PageContainer>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
            Our Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Why Choose REVIA?
          </h2>
          <p className="text-lg text-[#66615C] leading-relaxed">
            REVIA is built around empathy, clinical responsibility, and consistency. Designed to feel like a calm companion rather than a hospital dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <Card key={idx} className="p-8 text-left space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-4 rounded-[16px] bg-[#E1EADF]/60 w-fit">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2D2A26]">{val.title}</h3>
                <p className="text-[#66615C] text-base leading-relaxed">{val.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
