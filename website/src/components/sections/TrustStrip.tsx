import { Accessibility, BookOpenCheck, LockKeyhole, ShieldCheck } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const trustItems = [
  { icon: BookOpenCheck, label: 'Clinician-reviewed', detail: 'Content workflow' },
  { icon: LockKeyhole, label: 'Privacy-first', detail: 'Clear data choices' },
  { icon: Accessibility, label: 'Designed for access', detail: 'Readable and inclusive' },
  { icon: ShieldCheck, label: 'Progress without pressure', detail: 'Support, not diagnosis' },
];

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-b border-[#e6e2dc] bg-white">
      <PageContainer>
        <div className="grid grid-cols-2 divide-x divide-y divide-[#e8e2da] sm:grid-cols-4 sm:divide-y-0">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-3 px-3 py-5 first:pl-0 sm:px-5 lg:py-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4ec] text-[#436444]">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#2D2A26]">{label}</p>
                <p className="mt-0.5 text-xs text-[#77716a]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};
