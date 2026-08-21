import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#dce4dc] bg-[#f8f5ef] pb-12 pt-3 sm:pb-16 sm:pt-5 lg:pb-20 lg:pt-7">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <PageContainer className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(440px,1.1fr)] lg:gap-20">
          <div className="max-w-2xl space-y-7 reveal-up">
            <div className="space-y-5">
              <p className="eyebrow text-[#285b4a]">Your recovery journey, connected</p>
              <h1 className="max-w-2xl text-[clamp(2.5rem,6vw,4.25rem)] font-bold leading-[1] tracking-[-0.05em] text-[#1f2a24]">
                Recovery continues at home.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#46514a] sm:text-lg">
                A calmer way to know what to do next, keep moving safely, and notice the progress that matters to you.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="#early-access">
                <Button variant="primary" size="lg" className="w-full gap-2 sm:w-auto">
                  Join early access
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="#pathways">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore recovery pathways
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-[#dce4dc] pt-5 text-sm font-semibold text-[#46514a]">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#285b4a]" aria-hidden="true" /> Clinician-reviewed education</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#c66b4a]" aria-hidden="true" /> Gentle daily guidance</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#285b4a]" aria-hidden="true" /> Support, not diagnosis</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[590px] lg:mx-0 lg:justify-self-end reveal-up reveal-up-delay">
            <div className="absolute -left-5 -top-8 z-20 hidden max-w-[210px] rounded-2xl border border-[#ead5c9] bg-[#fffaf4] p-4 shadow-soft sm:block motion-float">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c66b4a]">A recovery companion</p>
              <p className="mt-2 text-sm leading-5 text-[#46514a]">Know what matters today. See how far you&apos;ve come.</p>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-[#b9cbbb] bg-[#dce8df] p-4 shadow-soft-lg sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.8),transparent_30%),linear-gradient(135deg,#dce8df_0%,#eef4ee_58%,#f2e9dc_100%)]" aria-hidden="true" />
              <div className="relative grid items-end gap-5 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="hidden min-h-[320px] items-end rounded-[24px] border border-white/70 bg-white/30 p-4 sm:flex">
                  <Image
                    src="/illustrations/undraw/walking-together.svg"
                    alt="Two people walking together, representing supported recovery at home"
                    width={360}
                    height={360}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 0vw, 28vw"
                    priority
                  />
                </div>

                <div className="mx-auto w-full max-w-[330px] rounded-[28px] border-8 border-[#173d32] bg-[#ffffff] p-4 text-[#1f2a24] shadow-2xl sm:mx-0 sm:justify-self-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#58685f]">Wednesday, 12 June</p>
                      <p className="mt-1 text-xl font-bold">Good morning, Maya</p>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8df] text-sm font-bold text-[#285b4a]">M</div>
                  </div>

                  <div className="mt-5 rounded-[22px] bg-[#285b4a] p-4 text-white">
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-white/70">
                      <span>Today&apos;s recovery</span>
                      <span>2 of 4 complete</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20" role="progressbar" aria-label="Two of four activities complete" aria-valuemin={0} aria-valuemax={4} aria-valuenow={2}>
                      <div className="h-full w-1/2 rounded-full bg-[#f5ded2]" />
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xs text-white/75">Next activity</p>
                        <p className="mt-1 text-lg font-bold">Mobility</p>
                        <p className="mt-1 text-sm text-white/75">8 min · gentle pace</p>
                      </div>
                      <span className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#285b4a]">Continue</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-[#dce4dc] bg-[#f8f5ef] p-3">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#9f4f35]">Your goal</p>
                      <p className="mt-2 text-sm font-bold">Walk independently</p>
                      <div className="mt-3 h-2 rounded-full bg-[#eadfd4]"><div className="h-full w-[78%] rounded-full bg-[#c66b4a]" /></div>
                      <p className="mt-2 text-xs font-bold text-[#9f4f35]">78% building</p>
                    </div>
                    <div className="rounded-2xl border border-[#dce4dc] bg-[#eef4ee] p-3">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#285b4a]">Today</p>
                      <div className="mt-2 space-y-2 text-sm font-semibold">
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#2f7256]" aria-hidden="true" /> Breathing</span>
                        <span className="flex items-center gap-2 text-[#58685f]"><span className="h-4 w-4 rounded-full border-2 border-[#9ba9a0]" /> Mobility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 hidden max-w-[190px] rounded-2xl border border-[#b9cbbb] bg-[#ffffff]/95 p-4 shadow-soft sm:block motion-float motion-float-slow">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#285b4a]">Preview</p>
              <p className="mt-2 text-sm leading-5 text-[#46514a]">A glimpse of the NIRVAN experience.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
