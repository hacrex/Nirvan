import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PageContainer } from '../layout/PageContainer';
import { Button } from '../ui/Button';
import { Moon, Smile, Wind, Brain, HeartHandshake, ArrowRight } from 'lucide-react';

export const WellbeingSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fdf9f3] overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8c4e33]">
              Whole-Person Recovery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight leading-tight">
              Recovery is More Than Just Physical Exercise
            </h2>
            <p className="text-lg text-[#66615C] leading-relaxed">
              Your mind is part of your recovery too. REVIA supports the emotional side of healing — mood, sleep, stress, motivation, and connection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-start gap-3">
                <Moon className="w-6 h-6 text-[#5B8FB9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D2A26] text-base">Sleep & Rest</h4>
                  <p className="text-xs text-[#66615C]">Track sleep duration and restorative rest quality.</p>
                </div>
              </div>

              <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-start gap-3">
                <Smile className="w-6 h-6 text-[#D99100] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D2A26] text-base">Mood & Energy</h4>
                  <p className="text-xs text-[#66615C]">Daily check-ins for emotional state and fatigue.</p>
                </div>
              </div>

              <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-start gap-3">
                <Brain className="w-6 h-6 text-[#5B8FB9] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D2A26] text-base">Stress & Anxiety</h4>
                  <p className="text-xs text-[#66615C]">Evidence-based techniques for recovery-related stress.</p>
                </div>
              </div>

              <div className="p-4 rounded-[12px] bg-white border border-[#e6e2dc] flex items-start gap-3">
                <Wind className="w-6 h-6 text-[#436444] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2D2A26] text-base">Relaxation</h4>
                  <p className="text-xs text-[#66615C]">Breathing exercises and mindfulness techniques.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/wellbeing">
                <Button variant="secondary" size="md" className="gap-2">
                  <span>Explore Mental Wellbeing</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/wellbeing/depression-support">
                <Button variant="outline" size="md" className="gap-2">
                  <span>Depression Support</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/illustrations/relaxing-outdoors.svg"
                alt="Person meditating for mental wellbeing"
                width={400}
                height={300}
                className="w-full h-auto"
                priority
              />
              <div className="mt-6 p-8 rounded-[24px] bg-[#F2E8DA] border border-[#e6e2dc] space-y-6">
                <h3 className="font-bold text-xl text-[#2D2A26]">Daily Wellbeing Snapshot</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-[16px] shadow-soft space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-[#2D2A26]">Mood Today</span>
                      <span className="text-[#4A7C59]">Feeling Good</span>
                    </div>
                    <div className="w-full bg-[#E1EADF] h-2 rounded-full">
                      <div className="bg-[#4A7C59] h-full w-[80%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-[16px] shadow-soft space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-[#2D2A26]">Sleep Quality</span>
                      <span className="text-[#5B8FB9]">7h 20m</span>
                    </div>
                    <div className="w-full bg-[#5B8FB9]/20 h-2 rounded-full">
                      <div className="bg-[#5B8FB9] h-full w-[88%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-[16px] shadow-soft space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-[#2D2A26]">Energy Level</span>
                      <span className="text-[#8c4e33]">Moderate</span>
                    </div>
                    <div className="w-full bg-[#feae8c]/40 h-2 rounded-full">
                      <div className="bg-[#8c4e33] h-full w-[65%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-[16px] shadow-soft space-y-2">
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-[#2D2A26]">Check-ins This Week</span>
                      <span className="text-[#436444]">5 / 7</span>
                    </div>
                    <div className="w-full bg-[#E1EADF] h-2 rounded-full">
                      <div className="bg-[#436444] h-full w-[71%] rounded-full"></div>
                    </div>
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
