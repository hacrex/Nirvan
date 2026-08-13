import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { Card } from '../ui/Card';
import { Video, Heart, TrendingUp, BookOpen, Bell, Activity } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      icon: <Video className="w-6 h-6 text-[#436444]" />,
      title: 'Guided Exercise Library',
      description: 'Step-by-step videos with audio instructions, difficulty levels, and safety notes for mobility, strength, and balance.',
    },
    {
      icon: <Heart className="w-6 h-6 text-[#C0564B]" />,
      title: 'Daily Wellbeing Check-in',
      description: 'Quick, skippable daily check-ins for mood, energy, fatigue, and sleep tracking in seconds.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#8c4e33]" />,
      title: 'Meaningful Progress Tracking',
      description: 'Clear trend graphs, consistency streaks, and milestone achievements without stressful clinical overload.',
    },
    {
      icon: <Activity className="w-6 h-6 text-[#5B8FB9]" />,
      title: 'Health Data Integration',
      description: 'Sync steps, heart rate, blood pressure, and sleep from Apple HealthKit and Android Health Connect.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#436444]" />,
      title: 'Clinician-Reviewed Guides',
      description: 'Understandable medical articles, recovery explainers, and lifestyle guidance written for patients.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#D99100]" />,
      title: 'Medication Reminders',
      description: 'Simple schedule tracking and gentle notifications to keep your daily routines consistent.',
    },
  ];

  return (
    <section className="py-20 bg-[#F2E8DA]/30">
      <PageContainer>
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
            Comprehensive Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Everything You Need to Recover
          </h2>
          <p className="text-lg text-[#66615C] leading-relaxed">
            Designed to address physical movement, mental wellbeing, daily routines, and medical understanding in one connected place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feat, idx) => (
            <Card key={idx} className="p-7 space-y-4 text-left">
              <div className="p-3.5 rounded-[12px] bg-[#E1EADF] w-fit">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2D2A26]">{feat.title}</h3>
              <p className="text-[#66615C] text-base leading-relaxed">{feat.description}</p>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
