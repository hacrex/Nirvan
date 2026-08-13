import { Metadata } from 'next';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'REVIA Privacy Policy explaining how we handle health data, security, and user privacy.',
};

export default function PrivacyPage() {
  return (
    <section className="py-12 bg-[#fdf9f3]">
      <PageContainer size="narrow">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white p-8 sm:p-12 rounded-[16px] border border-[#e6e2dc] shadow-soft space-y-8 mt-6">
          <div className="border-b border-[#e6e2dc] pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2D2A26]">Privacy Policy</h1>
            <p className="text-xs font-semibold text-[#66615C] uppercase tracking-wider">
              Last Updated: August 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-[#2D2A26] space-y-6 text-base leading-relaxed">
            <p>
              At REVIA (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), we prioritize your trust and health data privacy above all else. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or use our mobile application.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">1. Data We Collect</h2>
            <p>
              We adhere to strict data minimization principles. We only collect information necessary to provide and improve your recovery experience:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#66615C]">
              <li><strong>Account Information:</strong> Name, email address, and language preferences.</li>
              <li><strong>Recovery Selections:</strong> Selected pathway (Cardiac, Neuro, Kidney, Liver) and personal functional goals.</li>
              <li><strong>Self-Reported Logs:</strong> Daily check-in ratings (mood, sleep, energy, fatigue) and exercise session completion counts.</li>
              <li><strong>Connected Health Data (Optional):</strong> If you explicitly grant permission, we import steps, heart rate, or sleep metrics via Apple HealthKit or Android Health Connect.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#2D2A26]">2. How We Use Your Information</h2>
            <p>
              Your data is used solely to personalize your daily recovery experience, display your progress, and provide relevant educational guides. <strong>We do not sell, rent, or trade your personal or health data to third-party advertisers.</strong>
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">3. Data Security &amp; Storage</h2>
            <p>
              All data transmitted between your device and our servers is encrypted in transit using industry-standard TLS encryption. Data stored at rest is protected using managed server-side encryption and Firebase security rules that strictly limit access to your authenticated account.
            </p>

            <h2 className="text-xl font-bold text-[#2D2A26]">4. Your Data Control &amp; Rights</h2>
            <p>
              You maintain full ownership of your data. You may at any time:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#66615C]">
              <li>Disconnect Apple HealthKit or Android Health Connect.</li>
              <li>Export your logged progress data.</li>
              <li>Request full account and data deletion through profile settings or support.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#2D2A26]">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at{' '}
              <a href="mailto:privacy@reviarecovery.com" className="text-[#436444] font-bold hover:underline">
                privacy@reviarecovery.com
              </a>.
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
