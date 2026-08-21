import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpenCheck, LockKeyhole, ScanText, ShieldCheck } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const trustItems = [
  {
    icon: BookOpenCheck,
    title: 'Reviewed before it reaches you',
    description: 'Recovery education should be understandable, sourced, and reviewed before publication.',
    href: '/about',
    label: 'Learn about content review',
  },
  {
    icon: LockKeyhole,
    title: 'Your data choices stay clear',
    description: 'See what information NIRVAN may use, why it may help, and how you can manage your choices.',
    href: '/privacy',
    label: 'Read privacy principles',
  },
  {
    icon: ScanText,
    title: 'More ways to participate',
    description: 'Readable type, captions, audio guidance, reduced motion, and language foundations are part of the design.',
    href: '/about',
    label: 'Explore accessibility',
  },
];

export const TrustModule: React.FC = () => {
  return (
    <section className="bg-[#ffffff] py-20 sm:py-28">
      <PageContainer>
        <div className="rounded-[32px] bg-[#173d32] p-7 text-white shadow-soft-lg sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow text-[#f5ded2]">Designed with care</p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] sm:text-5xl">Clear support. Clear boundaries.</h2>
              <p className="mt-6 text-lg leading-8 text-white/75">NIRVAN is being shaped around clinical responsibility, readable design, privacy choices, and the difficult days as well as the visible wins.</p>
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#f5ded2]" aria-hidden="true" />
                <p className="text-sm leading-6 text-white/80">NIRVAN supports recovery education and routines. It does not diagnose, prescribe, replace your care team, or provide emergency services.</p>
              </div>
              <Link href="/medical-disclaimer" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#f5ded2] hover:text-white">
                Read the safety boundary <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <div className="mt-8 max-w-[280px] rounded-2xl border border-white/15 bg-white/10 p-4">
                <Image
                  src="/illustrations/undraw/progress-overview.svg"
                  alt="Illustration of a person reviewing progress over time"
                  width={360}
                  height={320}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 70vw, 20vw"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <Icon className="h-6 w-6 text-[#f5ded2]" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
                    <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f5ded2] hover:text-white">
                      {item.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
