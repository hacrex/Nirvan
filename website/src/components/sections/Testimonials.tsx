import Link from 'next/link';
import { Accessibility, ArrowRight, HeartHandshake, ShieldCheck, Stethoscope, Users, Clock, Star } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';
import { WalkingTogetherSVG } from '../illustrations/Index';

const stats = [
  { icon: Users, value: '2,400+', label: 'Early access signups', color: '#436444' },
  { icon: Clock, value: '4', label: 'Recovery pathways', color: '#8c4e33' },
  { icon: Star, value: '100+', label: 'Exercises & guides', color: '#5B8FB9' },
];

const principles = [
  {
    icon: HeartHandshake,
    title: 'Human before technology',
    description: 'Every feature starts with a recovery need: knowing what to do today, building confidence, and staying connected between appointments.',
    color: '#8c4e33',
  },
  {
    icon: Stethoscope,
    title: 'Clinical responsibility',
    description: 'Education and rehabilitation support are designed around review workflows and clear boundaries—not diagnosis or treatment promises.',
    color: '#436444',
  },
  {
    icon: Accessibility,
    title: 'Designed for real life',
    description: 'Readable screens, voice support, gentle interactions, multilingual foundations, and offline thinking help more people participate.',
    color: '#5B8FB9',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#f2e8da]/45 py-20 sm:py-28">
      <PageContainer>
        <div className="grid items-center gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-16">
          <div className="hidden lg:flex justify-center lg:order-1">
            <WalkingTogetherSVG className="w-full h-auto max-w-sm" />
          </div>

          <div className="lg:order-2">
            <div className="grid items-end gap-8 border-b border-[#dfd5ca] pb-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow text-[#8c4e33]">Designed around real recovery needs</p>
                <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#2D2A26] sm:text-5xl">Support that feels human, careful, and useful.</h2>
              </div>
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-[#66615C]">REVIA is being shaped around the difficult days as well as the visible wins. We want the experience to be encouraging without becoming noisy, competitive, or overconfident.</p>
                <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#436444] hover:text-[#2e4e30]">
                  Learn how REVIA is designed
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="text-center p-4 sm:p-6 rounded-[20px] bg-white/60 border border-[#dfd5ca]">
                  <Icon className="h-6 w-6 mx-auto mb-2" style={{ color }} />
                  <p className="text-2xl sm:text-3xl font-bold text-[#2D2A26]">{value}</p>
                  <p className="text-xs sm:text-sm text-[#66615C] mt-1">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map(({ icon: Icon, title, description, color }) => (
                <article key={title} className="rounded-[24px] border border-[#dfd5ca] bg-white/75 p-6 sm:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fdf9f3]" style={{ color }}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-[#2D2A26]">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#66615C]">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[24px] border border-[#d7e4d5] bg-[#edf4eb] p-5 text-sm text-[#2e4e30] sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" /><p><span className="font-bold">Trust should be inspectable.</span> Explore REVIA&apos;s safety boundaries, privacy principles, and clinical-content approach.</p></div>
              <Link href="/medical-disclaimer" className="inline-flex shrink-0 items-center gap-2 font-bold text-[#436444] hover:text-[#2e4e30]">Read the safety boundary <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
