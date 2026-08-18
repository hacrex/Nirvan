import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'NIRVAN Terms of Service governing the use of our website and mobile application.',
};

export default function TermsPage() {
  return (
    <section className="py-12 bg-[#fdf9f3]">
      <PageContainer size="narrow">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <div className="bg-white p-8 sm:p-12 rounded-[16px] border border-[#e6e2dc] shadow-soft space-y-8 mt-6">
          <div className="border-b border-[#e6e2dc] pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D2A26]">Terms of Service</h1>
            <p className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">
              Last Updated: August 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D2A26] space-y-6 text-base leading-relaxed">
            <p>
              Welcome to NIRVAN. By accessing or using our website and mobile applications, you agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">1. Nature of the Service</h2>
            <p>
              NIRVAN provides digital rehabilitation tracking, routine support, and clinician-reviewed educational content. <strong>NIRVAN IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL ADVICE OR EMERGENCY SERVICES.</strong> The content provided is for informational and recovery support purposes only and is not a substitute for professional medical care, diagnosis, or treatment.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">2. User Responsibilities</h2>
            <p>
              By using NIRVAN, you represent that you have consulted your physician or healthcare provider regarding your physical rehabilitation readiness. You agree to stop exercising immediately if you experience pain, dizziness, shortness of breath, or discomfort.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">3. Account Registration</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">4. Intellectual Property</h2>
            <p>
              All materials, including video exercise guides, text, logos, and design elements, are the intellectual property of NIRVAN and are protected by applicable copyright and trademark laws.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, NIRVAN shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use the service.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
