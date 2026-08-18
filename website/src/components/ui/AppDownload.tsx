import React from 'react';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';

interface AppDownloadProps {
  className?: string;
  variant?: 'light' | 'dark' | 'primary';
}

export const AppDownload: React.FC<AppDownloadProps> = ({ className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-4 items-center ${className}`}>
      <Link
        href="/#early-access"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-[12px] bg-[#2D2A26] text-white hover:bg-[#1a1816] transition-all shadow-soft min-h-[48px]"
        aria-label="Apple App Store coming soon — join the NIRVAN waitlist"
      >
        <Apple className="w-7 h-7 shrink-0 text-white" />
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">COMING SOON</div>
          <div className="text-base font-bold">Apple App Store</div>
        </div>
      </Link>

      <Link
        href="/#early-access"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-[12px] bg-[#2D2A26] text-white hover:bg-[#1a1816] transition-all shadow-soft min-h-[48px]"
        aria-label="Google Play coming soon — join the NIRVAN waitlist"
      >
        <Play className="w-6 h-6 shrink-0 fill-current text-white" />
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">COMING SOON</div>
          <div className="text-base font-bold">Google Play</div>
        </div>
      </Link>
    </div>
  );
};
