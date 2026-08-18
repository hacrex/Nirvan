import { ArrowRight, CheckCircle2, Footprints, HeartPulse, Moon, Play } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const steps = [
  ['01', 'Choose a goal', 'Start with something that matters in everyday life, such as walking independently or returning to a routine.'],
  ['02', 'Follow today’s plan', 'Begin with a clear next activity, supported by simple guidance, safety notes, captions, and audio where available.'],
  ['03', 'Notice your progress', 'Build confidence through consistency, personal milestones, and progress you can understand.'],
];

export const ProductShowcase: React.FC = () => {
  return (
    <section id="experience" className="overflow-hidden bg-[#173d32] py-20 text-white sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#f5ded2]">The REVIA recovery loop</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl">Know what matters today. See how far you&apos;ve come.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">Recovery can feel fragmented between appointments. REVIA brings your plan, daily activities, wellbeing check-ins, education, and progress into one gentle rhythm.</p>
            <div className="mt-8 space-y-4">
              {steps.map(([number, title, detail]) => (
                <div key={number} className="flex gap-4 border-t border-white/15 pt-4">
                  <span className="text-sm font-bold text-[#f5ded2]">{number}</span>
                  <div><p className="font-bold">{title}</p><p className="mt-1 text-sm leading-6 text-white/65">{detail}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[530px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -left-4 top-10 hidden w-48 -rotate-6 rounded-[24px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:block">
              <div className="flex items-center justify-between text-xs text-white/60"><span>Recovery</span><span>Week 4</span></div>
              <p className="mt-5 text-lg font-bold">Building strength</p>
              <div className="mt-4 h-2 rounded-full bg-white/15"><div className="h-full w-[64%] rounded-full bg-[#f5ded2]" /></div>
              <div className="mt-6 space-y-3 text-xs text-white/75"><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#f5ded2]" aria-hidden="true" /> Mobility</p><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#f5ded2]" aria-hidden="true" /> Consistency</p><p className="flex items-center gap-2 text-white/45"><span className="h-4 w-4 rounded-full border border-white/35" /> Strength</p></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[340px] rounded-[30px] border-8 border-[#0e2a22] bg-[#ffffff] p-4 text-[#1f2a24] shadow-2xl sm:ml-auto sm:mr-8">
              <div className="flex items-center justify-between"><div><p className="text-xs text-[#708078]">Good morning, Maya</p><p className="mt-1 text-xl font-bold">One step at a time.</p></div><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce8df] text-sm font-bold text-[#285b4a]">M</div></div>
              <div className="mt-5 rounded-[22px] bg-[#285b4a] p-4 text-white">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-white/70"><span>Today&apos;s recovery</span><span>2 of 4 complete</span></div>
                <div className="mt-4 h-2 rounded-full bg-white/15" aria-label="Two of four activities complete"><div className="h-full w-1/2 rounded-full bg-[#f5ded2]" /></div>
                <div className="mt-5 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Footprints className="h-6 w-6" aria-hidden="true" /></div><div><p className="font-bold">Mobility &amp; balance</p><p className="mt-1 text-xs text-white/65">8 min · gentle pace</p></div></div>
                <button type="button" className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-[#285b4a]">Continue recovery <Play className="h-4 w-4 fill-current" aria-hidden="true" /></button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#f2e9dc] p-3"><HeartPulse className="h-5 w-5 text-[#c66b4a]" aria-hidden="true" /><p className="mt-4 text-xs text-[#708078]">Wellbeing</p><p className="mt-1 font-bold">Feeling good</p></div><div className="rounded-2xl bg-[#eef4ee] p-3"><Moon className="h-5 w-5 text-[#285b4a]" aria-hidden="true" /><p className="mt-4 text-xs text-[#708078]">Sleep</p><p className="mt-1 font-bold">7h 20m</p></div></div>
              <div className="mt-4 flex items-center justify-between border-t border-[#dce4dc] pt-4"><span className="text-xs font-semibold text-[#708078]">Your progress</span><span className="inline-flex items-center gap-1 text-xs font-bold text-[#285b4a]">+14% <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span></div>
            </div>

            <div className="absolute bottom-2 left-2 hidden w-48 rotate-6 rounded-[24px] border border-[#ead5c9] bg-[#fffaf4] p-4 text-[#1f2a24] shadow-2xl sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c66b4a]">Your win</p><p className="mt-3 text-lg font-bold">You showed up 4 times this week.</p><p className="mt-2 text-xs leading-5 text-[#708078]">Keep going at your own pace. Consistency is progress.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
