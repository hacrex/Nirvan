import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { Heart, Brain, Activity, Stethoscope, ArrowRight } from 'lucide-react';

export const RecoveryPaths: React.FC = () => {
  const pathways = [
    {
      id: 'cardiac',
      title: 'Cardiac Recovery',
      icon: <Heart className="w-8 h-8 text-[#C0564B]" />,
      description: 'Heart attack recovery, cardiac rehabilitation support, and cardiovascular lifestyle management.',
      href: '/rehabilitation/cardiac',
      badge: 'Cardiac Care',
      accentColor: 'border-l-4 border-l-[#C0564B]',
    },
    {
      id: 'neuro',
      title: 'Neuro & Stroke Recovery',
      icon: <Brain className="w-8 h-8 text-[#5B8FB9]" />,
      description: 'Stroke recovery, paralysis mobility, motor rehabilitation, balance, speech, and cognitive restoration.',
      href: '/rehabilitation/neuro',
      badge: 'Neuro & Motor',
      accentColor: 'border-l-4 border-l-[#5B8FB9]',
    },
    {
      id: 'kidney',
      title: 'Kidney Rehabilitation',
      icon: <Activity className="w-8 h-8 text-[#8c4e33]" />,
      description: 'Chronic kidney disease, dialysis physical support, fatigue management, and function preservation.',
      href: '/rehabilitation/kidney',
      badge: 'Renal Support',
      accentColor: 'border-l-4 border-l-[#8c4e33]',
    },
    {
      id: 'liver',
      title: 'Liver Rehabilitation',
      icon: <Stethoscope className="w-8 h-8 text-[#436444]" />,
      description: 'Cirrhosis-related functional support, muscle preservation, physical activity, and nutrition education.',
      href: '/rehabilitation/liver',
      badge: 'Hepatic Health',
      accentColor: 'border-l-4 border-l-[#436444]',
    },
  ];

  return (
    <section className="py-20 bg-[#fdf9f3]">
      <PageContainer>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
            Specialized Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Dedicated Recovery Pathways
          </h2>
          <p className="text-lg text-[#66615C] leading-relaxed">
            Every recovery is unique. REVIA provides specialized guidance tailored to your health condition, built on clinician-reviewed principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((path) => (
            <Link key={path.id} href={path.href} className="group block">
              <Card className={`h-full flex flex-col justify-between p-8 ${path.accentColor}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-[12px] bg-[#F2E8DA]/60">
                      {path.icon}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F2E8DA] text-[#66615C]">
                      {path.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#2D2A26] group-hover:text-[#436444] transition-colors">
                    {path.title}
                  </h3>

                  <p className="text-[#66615C] text-base leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#e6e2dc] flex items-center gap-2 text-[#436444] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Explore {path.title}</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
