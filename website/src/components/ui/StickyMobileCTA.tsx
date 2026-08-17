'use client';

import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const StickyMobileCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 lg:hidden">
      <a
        href="#early-access"
        className="flex items-center justify-center gap-2 w-full bg-[#436444] text-white font-semibold py-4 px-6 rounded-[16px] shadow-soft-lg hover:bg-[#2e4e30] transition-colors"
      >
        Get Early Access
        <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  );
};
