import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#e6e2dc] bg-[#fdf9f3] pt-4 pb-10 sm:pt-8 sm:pb-16 lg:pt-12 lg:pb-20">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <PageContainer className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:gap-16">
          <div className="max-w-2xl space-y-7 reveal-up">
            <Badge variant="primary" icon={<Sparkles className="h-4 w-4 text-[#436444]" />}>
              A calmer way to keep moving forward
            </Badge>

            <div className="space-y-5">
              <p className="eyebrow text-[#8c4e33]">For the days between appointments</p>
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-[#2D2A26] sm:text-6xl lg:text-[4.65rem]">
                Recovery doesn&apos;t stop when you leave the hospital.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-[#66615C] sm:text-xl">
                REVIA helps you continue your recovery at home with guided movement, wellbeing check-ins, trusted education, and progress you can understand.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#early-access">
                <Button variant="primary" size="lg" className="w-full gap-2 sm:w-auto">
                  Start Your Recovery
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/rehabilitation">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Your Pathway
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-[#ded8cf] pt-5 text-sm font-medium text-[#66615C]">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#436444]" /> Clinician-reviewed content</span>
              <span className="inline-flex items-center gap-2"><HeartPulse className="h-4 w-4 text-[#8c4e33]" /> Four recovery pathways</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#436444]" /> Progress without pressure</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:justify-self-end reveal-up reveal-up-delay">
            <div className="absolute -right-6 top-8 z-10 rounded-2xl border border-[#d7e4d5] bg-[#edf4eb] px-4 py-3 text-sm font-semibold text-[#2e4e30] shadow-soft motion-float">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-[#6f8e70]">Your next step</span>
              8 minutes of mobility
            </div>

            <div className="relative rounded-[32px] border border-[#dfd7cc] bg-[#f4eee5] p-3 shadow-soft-lg sm:p-5">
              <div className="rounded-[25px] border border-white/80 bg-white p-4 sm:p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[#77716a]">Wednesday, 12 June</p>
                    <p className="mt-1 text-xl font-bold text-[#2D2A26]">Good morning, Maya</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e1eadf] text-sm font-bold text-[#436444]">M</div>
                </div>

                <div className="rounded-[22px] bg-[#436444] p-5 text-white shadow-soft">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                    <span>Today&apos;s recovery</span>
                    <span>2 / 4 complete</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-1/2 rounded-full bg-[#feae8c]" />
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/65">Next activity</p>
                      <p className="mt-1 text-lg font-bold">Mobility &amp; balance</p>
                      <p className="mt-1 text-sm text-white/75">8 min · gentle pace</p>
                    </div>
                    <span className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#436444]">Continue</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[#e7e1d9] bg-[#fdf9f3] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8c4e33]">Your goal</p>
                    <p className="mt-2 text-sm font-bold text-[#2D2A26]">Walk independently</p>
                    <div className="mt-3 h-2 rounded-full bg-[#eadfd4]"><div className="h-full w-[78%] rounded-full bg-[#8c4e33]" /></div>
                    <p className="mt-2 text-xs font-semibold text-[#8c4e33]">78% building</p>
                  </div>
                  <div className="rounded-2xl border border-[#e7e1d9] bg-[#fdf9f3] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#436444]">Today</p>
                    <div className="mt-2 space-y-2 text-sm font-medium text-[#2D2A26]">
                      <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#4A7C59]" /> Breathing</span>
                      <span className="flex items-center gap-2 text-[#77716a]"><span className="h-4 w-4 rounded-full border-2 border-[#bcb5ac]" /> Mobility</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-5 hidden max-w-[210px] rounded-2xl border border-[#ead8ca] bg-white/95 p-4 shadow-soft sm:block motion-float motion-float-slow">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8c4e33]">A recovery companion</p>
              <p className="mt-2 text-sm leading-5 text-[#66615C]">Know what matters today. See how far you&apos;ve come.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
