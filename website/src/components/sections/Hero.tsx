import React from 'react';
import Link from 'next/link';
import { PageContainer } from '../layout/PageContainer';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fdf9f3] via-[#F2E8DA]/40 to-[#fdf9f3]">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="primary" icon={<Sparkles className="w-4 h-4 text-[#436444]" />}>
              Patient-Centered Recovery Companion
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2A26] tracking-tight leading-[1.15]">
              Move Forward.{' '}
              <span className="text-[#436444] inline-block">Live Better.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#66615C] leading-relaxed max-w-2xl">
              Rehabilitation is a journey, not a single exercise or appointment. REVIA brings recovery plans, wellbeing, clinician-reviewed education, and meaningful progress together — to help you move forward, one step at a time.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="#download">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/rehabilitation">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Rehabilitation
                </Button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-[#e6e2dc] flex flex-wrap items-center gap-6 text-xs text-[#66615C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#436444]" />
                <span>Clinician-Reviewed Principles</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#8c4e33]" />
                <span>4 Dedicated Pathways</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4A7C59]"></span>
                <span>Offline-First Capability</span>
              </div>
            </div>
          </div>

          {/* Right Mockup Preview Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm rounded-[24px] bg-white p-4 shadow-soft-lg border border-[#e6e2dc]">
              {/* Mockup Header */}
              <div className="bg-[#fdf9f3] rounded-[16px] p-5 space-y-4 border border-[#F2E8DA]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#66615C]">Good morning</p>
                    <p className="text-lg font-bold text-[#2D2A26]">One step at a time.</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#436444]/10 text-[#436444] font-bold text-sm flex items-center justify-center">
                    R
                  </div>
                </div>

                {/* Daily Recovery Card */}
                <div className="bg-[#436444] text-white rounded-[16px] p-4 space-y-3 shadow-soft">
                  <div className="flex items-center justify-between text-xs opacity-90 font-medium">
                    <span>YOUR RECOVERY TODAY</span>
                    <span>2 of 4 done</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-1/2 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-xs text-white/80">Next Session</p>
                      <p className="font-semibold text-sm">Mobility & Balance · 8 min</p>
                    </div>
                    <span className="px-3 py-1 bg-white text-[#436444] rounded-[8px] text-xs font-bold">
                      Continue
                    </span>
                  </div>
                </div>

                {/* Personal Goal Tracker */}
                <div className="bg-white rounded-[12px] p-3.5 border border-[#e6e2dc] space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-[#2D2A26]">Personal Goal: Walk independently</span>
                    <span className="text-[#8c4e33] font-bold">78%</span>
                  </div>
                  <div className="w-full bg-[#F2E8DA] h-2 rounded-full overflow-hidden">
                    <div className="bg-[#8c4e33] h-full w-[78%] rounded-full"></div>
                  </div>
                </div>

                {/* Quick Activities */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-[10px] bg-white border border-[#e6e2dc]">
                    <span className="flex items-center gap-2 font-medium text-[#2D2A26]">
                      <span className="text-[#4A7C59]">✓</span> Deep Breathing & Relaxation
                    </span>
                    <span className="text-[#66615C]">5 min</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-[10px] bg-white border border-[#e6e2dc]">
                    <span className="flex items-center gap-2 font-medium text-[#2D2A26]">
                      <span className="text-[#4A7C59]">✓</span> Daily Wellbeing Check-in
                    </span>
                    <span className="text-[#66615C]">2 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
