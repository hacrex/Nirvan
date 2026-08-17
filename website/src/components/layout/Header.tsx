'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Heart, Brain, Activity, Stethoscope, HeartHandshake, Wind } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { PageContainer } from './PageContainer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isWellbeingDropdownOpen, setIsWellbeingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fdf9f3]/90 backdrop-blur-md shadow-soft border-b border-[#e6e2dc]'
            : 'bg-[#fdf9f3]'
        }`}
      >
        <PageContainer>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-[12px] bg-[#436444] flex items-center justify-center text-white font-bold text-lg shadow-soft group-hover:bg-[#2e4e30] transition-colors">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-[#2D2A26] tracking-tight leading-none">
                  REVIA
                </span>
                <span className="text-[10px] tracking-wider text-[#66615C] uppercase font-semibold mt-1">
                  Rehabilitation & Wellbeing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Rehabilitation Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link
                  href="/rehabilitation"
                  className="flex items-center gap-1.5 py-2 font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
                >
                  <span>Rehabilitation</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#436444]' : 'text-[#66615C]'}`} />
                </Link>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="bg-white rounded-[16px] p-3 shadow-soft-lg border border-[#e6e2dc] space-y-1">
                      <Link
                        href="/rehabilitation/cardiac"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Heart className="w-5 h-5 text-[#C0564B] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Cardiac Recovery</div>
                          <div className="text-xs text-[#66615C]">Heart attack & cardiovascular</div>
                        </div>
                      </Link>

                      <Link
                        href="/rehabilitation/neuro"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Brain className="w-5 h-5 text-[#5B8FB9] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Neuro & Stroke</div>
                          <div className="text-xs text-[#66615C]">Stroke, mobility & motor</div>
                        </div>
                      </Link>

                      <Link
                        href="/rehabilitation/kidney"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Activity className="w-5 h-5 text-[#8c4e33] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Kidney Support</div>
                          <div className="text-xs text-[#66615C]">CKD & physical function</div>
                        </div>
                      </Link>

                      <Link
                        href="/rehabilitation/liver"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Stethoscope className="w-5 h-5 text-[#436444] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Liver Rehabilitation</div>
                          <div className="text-xs text-[#66615C]">Cirrhosis & muscle preservation</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Wellbeing Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsWellbeingDropdownOpen(true)}
                onMouseLeave={() => setIsWellbeingDropdownOpen(false)}
              >
                <Link
                  href="/wellbeing"
                  className="flex items-center gap-1.5 py-2 font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
                >
                  <span>Wellbeing</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isWellbeingDropdownOpen ? 'rotate-180 text-[#436444]' : 'text-[#66615C]'}`} />
                </Link>

                {isWellbeingDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="bg-white rounded-[16px] p-3 shadow-soft-lg border border-[#e6e2dc] space-y-1">
                      <Link
                        href="/wellbeing"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <HeartHandshake className="w-5 h-5 text-[#8c4e33] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Wellbeing Overview</div>
                          <div className="text-xs text-[#66615C]">Whole-person recovery support</div>
                        </div>
                      </Link>

                      <Link
                        href="/wellbeing/mental-health"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Brain className="w-5 h-5 text-[#5B8FB9] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Mental Wellbeing</div>
                          <div className="text-xs text-[#66615C]">Mood, sleep, stress & motivation</div>
                        </div>
                      </Link>

                      <Link
                        href="/wellbeing/depression-support"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <HeartHandshake className="w-5 h-5 text-[#436444] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Depression Support</div>
                          <div className="text-xs text-[#66615C]">Understanding low mood & self-help</div>
                        </div>
                      </Link>

                      <Link
                        href="/wellbeing/breathing-relaxation"
                        className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#F2E8DA]/60 transition-colors group"
                      >
                        <Wind className="w-5 h-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="font-semibold text-sm text-[#2D2A26]">Breathing & Relaxation</div>
                          <div className="text-xs text-[#66615C]">Calming exercises & techniques</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/exercises"
                className="font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
              >
                Exercises
              </Link>
              <Link
                href="/resources"
                className="font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
              >
                Resources
              </Link>
              <Link
                href="/blog"
                className="font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="font-medium text-[#2D2A26] hover:text-[#436444] transition-colors text-base"
              >
                About
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="#early-access">
                <Button variant="primary" size="md">
                  Start Your Recovery
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-[12px] text-[#2D2A26] hover:bg-[#F2E8DA] transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </PageContainer>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
