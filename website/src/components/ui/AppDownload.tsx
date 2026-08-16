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
        aria-label="Join REVIA early access on iOS"
      >
        <Apple className="w-7 h-7 shrink-0 text-white" />
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">JOIN THE</div>
          <div className="text-base font-bold">iOS Early Access</div>
        </div>
      </Link>

      <Link
        href="/#early-access"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-[12px] bg-[#2D2A26] text-white hover:bg-[#1a1816] transition-all shadow-soft min-h-[48px]"
        aria-label="Join REVIA early access on Android"
      >
        <Play className="w-6 h-6 shrink-0 fill-current text-white" />
        <div className="text-left leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">STAY IN THE LOOP</div>
          <div className="text-base font-bold">Android Early Access</div>
        </div>
      </Link>
    </div>
  );
};
