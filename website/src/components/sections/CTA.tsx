import React from 'react';
import { PageContainer } from '../layout/PageContainer';
import { AppDownload } from '../ui/AppDownload';
import { Smartphone, CheckCircle } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-[#436444] text-white relative overflow-hidden">
      <PageContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider">
              Start Today
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Begin Your Recovery Journey with REVIA
            </h2>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              Download the REVIA mobile application on iOS and Android. Take control of your daily progress, exercise safely, and rebuild your strength.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-white/90 font-medium">
                <CheckCircle className="w-5 h-5 text-[#feae8c] shrink-0" />
                <span>Personalized rehabilitation plan for your specific condition</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90 font-medium">
                <CheckCircle className="w-5 h-5 text-[#feae8c] shrink-0" />
                <span>Offline-first support for uninterrupted daily routines</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90 font-medium">
                <CheckCircle className="w-5 h-5 text-[#feae8c] shrink-0" />
                <span>Free to get started, clinician-reviewed safety standards</span>
              </div>
            </div>

            <div className="pt-6">
              <AppDownload />
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/20 text-white w-full max-w-sm text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-white text-[#436444] flex items-center justify-center mx-auto shadow-soft">
                <Smartphone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">REVIA Mobile Companion</h3>
                <p className="text-xs text-white/80 mt-1">Available on iOS & Android</p>
              </div>
              <div className="pt-4 border-t border-white/15 text-xs text-white/80">
                <p>Compatible with iOS 15.0+ and Android 8.0+</p>
                <p className="mt-1">Supports Apple Health & Health Connect</p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
