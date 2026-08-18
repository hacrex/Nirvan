import React from 'react';
import Link from 'next/link';
import { PageContainer } from './PageContainer';
import { NewsletterSignup } from '../ui/NewsletterSignup';
import { MedicalDisclaimer } from '../ui/MedicalDisclaimer';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2E8DA]/60 border-t border-[#e6e2dc] pt-16 pb-12 mt-20">
      <PageContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#e6e2dc]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[12px] bg-[#436444] flex items-center justify-center text-white font-bold text-lg">
                R
              </div>
              <span className="font-bold text-2xl text-[#2D2A26] tracking-tight">NIRVAN</span>
            </Link>
            <p className="text-sm text-[#66615C] max-w-sm leading-relaxed">
              Move Forward. Live Better. NIRVAN brings recovery, movement, wellbeing, and evidence-aware education together to support your journey back to strength.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2D2A26] mb-3">
                Stay Informed
              </p>
              <NewsletterSignup compact />
            </div>
          </div>

          {/* Rehabilitation Col */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#2D2A26] text-base">Rehabilitation</h4>
            <ul className="space-y-2 text-sm text-[#66615C]">
              <li>
                <Link href="/rehabilitation" className="hover:text-[#436444] transition-colors">
                  All Pathways Overview
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/cardiac" className="hover:text-[#436444] transition-colors">
                  Cardiac Recovery
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/neuro" className="hover:text-[#436444] transition-colors">
                  Neuro Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/stroke" className="hover:text-[#436444] transition-colors">
                  Stroke Recovery
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/paralysis" className="hover:text-[#436444] transition-colors">
                  Paralysis Support
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/kidney" className="hover:text-[#436444] transition-colors">
                  Kidney Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/rehabilitation/liver" className="hover:text-[#436444] transition-colors">
                  Liver Rehabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Content Col */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#2D2A26] text-base">Explore & Learn</h4>
            <ul className="space-y-2 text-sm text-[#66615C]">
              <li>
                <Link href="/wellbeing" className="hover:text-[#436444] transition-colors">
                  Wellbeing & Sleep
                </Link>
              </li>
              <li>
                <Link href="/exercises" className="hover:text-[#436444] transition-colors">
                  Exercise Library
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#436444] transition-colors">
                  Recovery Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#436444] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#436444] transition-colors">
                  Product & Health News
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#436444] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#2D2A26] text-base">Company & Legal</h4>
            <ul className="space-y-2 text-sm text-[#66615C]">
              <li>
                <Link href="/about" className="hover:text-[#436444] transition-colors">
                  About NIRVAN
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#436444] transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#436444] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#436444] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/medical-disclaimer" className="hover:text-[#436444] transition-colors">
                  Full Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Block */}
        <div className="my-8">
          <MedicalDisclaimer compact />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e6e2dc] text-xs text-[#66615C]">
          <p>© {new Date().getFullYear()} NIRVAN. All rights reserved. Move Forward. Live Better.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/medical-disclaimer" className="hover:underline">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
};
