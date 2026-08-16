import { ArrowUpRight, CheckCircle2, Footprints, HeartPulse, Moon, Play } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

export const ProductShowcase: React.FC = () => {
  return (
    <section id="experience" className="overflow-hidden bg-[#2e4e30] py-20 text-white sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#feae8c]">The REVIA recovery loop</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">Know what matters today. See how far you&apos;ve come.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/72">
              REVIA brings your plan, daily activities, wellbeing, education, and progress into one gentle rhythm—so recovery feels less fragmented between appointments.
            </p>
            <div className="mt-8 space-y-4">
              {[
                ['01', 'A clear next step', 'Start with the activity that matters most today.'],
                ['02', 'Guidance at your pace', 'Move with safety notes, audio guidance, and simple feedback.'],
                ['03', 'Progress you can feel', 'Build confidence through consistency and meaningful milestones.'],
              ].map(([number, title, detail]) => (
                <div key={number} className="flex gap-4 border-t border-white/15 pt-4">
                  <span className="text-sm font-bold text-[#feae8c]">{number}</span>
                  <div><p className="font-bold">{title}</p><p className="mt-1 text-sm leading-6 text-white/62">{detail}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px]">
            <div className="absolute left-0 top-12 hidden w-52 -rotate-6 rounded-[24px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur sm:block">
              <div className="flex items-center justify-between text-xs text-white/60"><span>Recovery</span><span>Week 4</span></div>
              <p className="mt-5 text-lg font-bold">Building strength</p>
              <div className="mt-4 h-2 rounded-full bg-white/15"><div className="h-full w-[64%] rounded-full bg-[#feae8c]" /></div>
              <div className="mt-6 space-y-3 text-xs text-white/75"><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#feae8c]" /> Mobility</p><p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#feae8c]" /> Consistency</p><p className="flex items-center gap-2 text-white/45"><span className="h-4 w-4 rounded-full border border-white/35" /> Strength</p></div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[330px] rounded-[30px] border-8 border-[#1c3b22] bg-[#fdf9f3] p-4 text-[#2D2A26] shadow-2xl sm:ml-auto sm:mr-8">
              <div className="flex items-center justify-between"><div><p className="text-xs text-[#77716a]">Today&apos;s recovery</p><p className="mt-1 text-xl font-bold">One step at a time.</p></div><div className="h-9 w-9 rounded-full bg-[#e1eadf] text-center text-sm font-bold leading-9 text-[#436444]">R</div></div>
              <div className="mt-5 rounded-[22px] bg-[#436444] p-4 text-white"><div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-white/70"><span>Next activity</span><span>8 min</span></div><div className="mt-5 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15"><Footprints className="h-6 w-6" /></div><div><p className="font-bold">Mobility &amp; balance</p><p className="mt-1 text-xs text-white/65">Gentle guided session</p></div></div><button className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-bold text-[#436444]">Start session <Play className="h-4 w-4 fill-current" /></button></div>
              <div className="mt-4 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-[#f2e8da] p-3"><HeartPulse className="h-5 w-5 text-[#8c4e33]" /><p className="mt-4 text-xs text-[#77716a]">Wellbeing</p><p className="mt-1 font-bold">Feeling good</p></div><div className="rounded-2xl bg-[#edf4eb] p-3"><Moon className="h-5 w-5 text-[#436444]" /><p className="mt-4 text-xs text-[#77716a]">Sleep</p><p className="mt-1 font-bold">7h 20m</p></div></div>
              <div className="mt-4 flex items-center justify-between border-t border-[#e7e1d9] pt-4"><span className="text-xs font-semibold text-[#77716a]">Your progress</span><span className="inline-flex items-center gap-1 text-xs font-bold text-[#436444]">+14% <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
            </div>

            <div className="absolute bottom-5 left-4 hidden w-52 rotate-6 rounded-[24px] border border-[#ead8ca] bg-[#fffaf4] p-4 text-[#2D2A26] shadow-2xl sm:block">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c4e33]">Your win</p><p className="mt-3 text-lg font-bold">You showed up 4 times this week.</p><p className="mt-2 text-xs leading-5 text-[#77716a]">Keep going at your own pace. Consistency is progress.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
