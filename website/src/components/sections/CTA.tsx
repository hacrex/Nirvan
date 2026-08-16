import { ArrowRight, CheckCircle2, Mail, Smartphone } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { NewsletterSignup } from '../ui/NewsletterSignup';
import { AppDownload } from '../ui/AppDownload';

export const CTA: React.FC = () => {
  return (
    <section id="early-access" className="relative overflow-hidden bg-[#f2e8da] py-20 sm:py-28">
      <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#feae8c]/25 blur-3xl" aria-hidden="true" />
      <PageContainer className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow text-[#8c4e33]">Stay close to your recovery</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#2D2A26] sm:text-5xl">Build a steadier rhythm, one day at a time.</h2>
            <p className="mt-5 text-lg leading-8 text-[#66615C]">Join the REVIA community for practical recovery guidance, new resources, and early access updates as the mobile companion grows.</p>
            <div className="mt-7 space-y-3 text-sm font-semibold text-[#436444]">
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" /> Guided movement and wellbeing support</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" /> Education designed to be understood</p>
              <p className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" /> Progress without guilt or competition</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#dfcdbd] bg-white p-6 shadow-soft-lg sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#436444] text-white"><Mail className="h-6 w-6" /></div>
            <h3 className="mt-6 text-2xl font-bold text-[#2D2A26]">Get early access updates</h3>
            <p className="mt-2 text-sm leading-6 text-[#66615C]">A short recovery insight, one practical wellbeing idea, and new REVIA resources—without the noise.</p>
            <div className="mt-6"><NewsletterSignup /></div>
            <div className="mt-7 border-t border-[#ebe3da] pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8c4e33]">Download when REVIA launches</p>
              <AppDownload className="mt-3" />
              <p className="mt-3 flex items-center gap-2 text-xs text-[#77716a]"><Smartphone className="h-4 w-4 text-[#436444]" /><span>Both app stores are coming soon. Join the waitlist above for launch updates.</span></p>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
