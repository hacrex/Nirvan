import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const benefits = [
  ['Movement', 'Guided activity that fits into real days, not ideal ones.'],
  ['Wellbeing', 'Simple check-ins for mood, sleep, energy, and rest.'],
  ['Confidence', 'Progress that reflects what matters to you.'],
];

export const HumanBenefit: React.FC = () => {
  return (
    <section className="bg-[#f8f5ef] py-20 sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative overflow-hidden rounded-[28px] border border-[#dce4dc] bg-[#eef4ee] p-5 shadow-soft sm:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/70 blur-3xl" aria-hidden="true" />
            <Image
              src="/illustrations/relaxing-outdoors.svg"
              alt="Illustration of a person taking a calm moment outdoors"
              width={640}
              height={520}
              className="relative h-auto w-full"
            />
          </div>

          <div className="max-w-xl">
            <p className="eyebrow text-[#285b4a]">From recovery to everyday life</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#1f2a24] sm:text-5xl">Recovery is not only about completing an exercise. It is about getting closer to everyday life.</h2>
            <p className="mt-6 text-lg leading-8 text-[#46514a]">One more step. One more repetition. One better night of sleep. One thing you can do more independently. REVIA is being designed to help you understand those moments and keep moving forward without pressure or comparison.</p>

            <div className="mt-8 space-y-4 border-t border-[#dce4dc] pt-6">
              {benefits.map(([title, detail]) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#285b4a]" aria-hidden="true" />
                  <div><p className="font-bold text-[#1f2a24]">{title}</p><p className="mt-1 text-sm leading-6 text-[#708078]">{detail}</p></div>
                </div>
              ))}
            </div>

            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#285b4a] hover:text-[#173d32]">
              Read how REVIA is designed <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
