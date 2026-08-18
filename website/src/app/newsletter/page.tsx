import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { NewsletterSignup } from '@/components/ui/NewsletterSignup';
import { Card } from '@/components/ui/Card';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Subscribe to NIRVAN Newsletter',
  description: 'Receive clinician-reviewed recovery insights, new exercise guides, and product updates in your inbox.',
};

export default function NewsletterPage() {
  return (
    <section className="py-16 bg-[#fdf9f3]">
      <PageContainer size="narrow">
        <Breadcrumbs items={[{ label: 'Newsletter' }]} />
        
        <Card className="p-8 sm:p-12 space-y-8 mt-6 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#E1EADF] text-[#436444] flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-[#2D2A26]">Stay Informed & Inspired</h1>
            <p className="text-[#66615C] text-base leading-relaxed">
              Get clinician-reviewed recovery insights, new exercise guides, patient stories, and product announcements delivered directly to your inbox.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <NewsletterSignup />
          </div>

          <div className="pt-6 border-t border-[#e6e2dc] text-left space-y-3 text-sm text-[#66615C]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
              <span>Bi-weekly curated recovery insights</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
              <span>Strictly clinician-reviewed evidence-aware content</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#436444] shrink-0" />
              <span>Zero spam, easy 1-click unsubscribe anytime</span>
            </div>
          </div>
        </Card>
      </PageContainer>
    </section>
  );
}
