import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const stories = [
    {
      quote: "REVIA gave me a clear, manageable plan after my heart event. Being able to see small daily improvements kept me motivated when recovery felt slow.",
      name: "Rajesh M.",
      condition: "Cardiac Recovery Pathway",
    },
    {
      quote: "After my stroke, movement exercises felt daunting. REVIA's simple video demonstrations and rep counters made my home practice clear and safe.",
      name: "Sunita K.",
      condition: "Neuro & Stroke Pathway",
    },
    {
      quote: "Managing fatigue during dialysis was hard. Having exercises tailored to my energy levels and tracking my sleep has made a huge difference.",
      name: "Anand P.",
      condition: "Kidney Rehabilitation Pathway",
    },
  ];

  return (
    <section className="py-20 bg-[#F2E8DA]/40">
      <PageContainer>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Encouragement from the Journey
          </h2>
          <p className="text-lg text-[#66615C]">
            Real recovery is built one consistent day at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <Card key={idx} className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#8c4e33]/40" />
                <p className="text-[#2D2A26] italic text-base leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#e6e2dc]">
                <p className="font-bold text-[#2D2A26] text-base">{item.name}</p>
                <p className="text-xs font-medium text-[#436444] mt-0.5">{item.condition}</p>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
