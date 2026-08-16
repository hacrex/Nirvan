'use client';

import React from 'react';
import Link from 'next/link';
import { X, Heart, Brain, Activity, Stethoscope, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity">
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#fdf9f3] p-6 shadow-soft-lg flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-[#e6e2dc]">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#436444] flex items-center justify-center text-white font-bold text-sm">
              R
            </div>
            <span className="font-bold text-xl text-[#2D2A26] tracking-tight">REVIA</span>
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-full hover:bg-[#F2E8DA] text-[#2D2A26] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 py-6 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#66615C] px-3">
              Rehabilitation Pathways
            </span>
            <div className="mt-3 space-y-1">
              <Link
                href="/rehabilitation/cardiac"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#C0564B]" />
                  <span>Cardiac Recovery</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#66615C]" />
              </Link>
              <Link
                href="/rehabilitation/neuro"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-[#5B8FB9]" />
                  <span>Neuro Recovery</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#66615C]" />
              </Link>
              <Link
                href="/rehabilitation/kidney"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-[#8c4e33]" />
                  <span>Kidney Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#66615C]" />
              </Link>
              <Link
                href="/rehabilitation/liver"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-[#436444]" />
                  <span>Liver Rehab</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#66615C]" />
              </Link>
            </div>
          </div>

          <div className="border-t border-[#e6e2dc] pt-6 space-y-2">
            <Link
              href="/wellbeing"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base"
            >
              Wellbeing
            </Link>
            <Link
              href="/exercises"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base"
            >
              Exercise Library
            </Link>
            <Link
              href="/blog"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base"
            >
              Blog & Articles
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base"
            >
              About REVIA
            </Link>
            <Link
              href="/faq"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-[12px] hover:bg-[#F2E8DA] text-[#2D2A26] font-medium text-base"
            >
              FAQ
            </Link>
          </div>
        </nav>

        <div className="pt-6 border-t border-[#e6e2dc] space-y-3">
          <Link href="#early-access" onClick={onClose} className="block w-full">
            <Button variant="primary" fullWidth size="lg">
              Start Your Recovery
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
