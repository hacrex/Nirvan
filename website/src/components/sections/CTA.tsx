import { CheckCircle2, Mail } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { NewsletterSignup } from '../ui/NewsletterSignup';

const promises = [
  'One practical recovery idea',
  'New guides and wellbeing resources',
  'A clear invitation when early access opens',
];

export const CTA: React.FC = () => {
  return (
    <section id="early-access" className="relative overflow-hidden bg-[#f2e9dc] py-20 sm:py-28">
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#f5ded2] blur-3xl" aria-hidden="true" />
      <PageContainer className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#c66b4a]">Stay close to your recovery</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#1f2a24] sm:text-5xl">Join the early-access list.</h2>
            <p className="mt-5 text-lg leading-8 text-[#46514a]">Receive one practical recovery idea, new resources, and product updates as REVIA grows. We will be clear about availability before asking you to download or pay.</p>
            <div className="mt-7 space-y-3 text-sm font-semibold text-[#285b4a]">
              {promises.map((promise) => <p key={promise} className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /> {promise}</p>)}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#dfcdbd] bg-white p-6 shadow-soft-lg sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#285b4a] text-white"><Mail className="h-6 w-6" aria-hidden="true" /></div>
            <h3 className="mt-6 text-2xl font-bold text-[#1f2a24]">Get early access updates</h3>
            <p className="mt-2 text-sm leading-6 text-[#46514a]">Tell us which pathway feels closest to your recovery. You can unsubscribe anytime.</p>
            <div className="mt-6"><NewsletterSignup /></div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
