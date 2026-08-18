'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Activity, Brain, ChevronDown, Heart, HeartHandshake, Menu, Stethoscope, Wind } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { PageContainer } from './PageContainer';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRecoveryOpen, setIsRecoveryOpen] = useState(false);
  const [isWellbeingOpen, setIsWellbeingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = 'font-semibold text-[#46514a] transition-colors hover:text-[#285b4a]';
  const menuLink = 'flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#eef4ee]';

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'border-b border-[#dce4dc] bg-[#f8f5ef]/90 shadow-soft backdrop-blur-md' : 'bg-[#f8f5ef]'}`}>
        <PageContainer>
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="group flex items-center gap-2 lg:gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#285b4a] text-base font-bold text-white shadow-soft transition-colors group-hover:bg-[#173d32] lg:h-10 lg:w-10">R</div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none tracking-tight text-[#1f2a24] lg:text-2xl">NIRVAN</span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#708078]">Rehabilitation &amp; wellbeing</span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
              <div className="relative" onMouseEnter={() => setIsRecoveryOpen(true)} onMouseLeave={() => setIsRecoveryOpen(false)}>
                <Link href="/rehabilitation" className={`${navLink} flex items-center gap-1.5 py-2`} aria-haspopup="true" aria-expanded={isRecoveryOpen}>
                  Recovery <ChevronDown className={`h-4 w-4 transition-transform ${isRecoveryOpen ? 'rotate-180 text-[#285b4a]' : 'text-[#708078]'}`} aria-hidden="true" />
                </Link>
                {isRecoveryOpen && (
                  <div className="absolute left-0 top-full z-50 w-72 pt-2">
                    <div className="space-y-1 rounded-2xl border border-[#dce4dc] bg-white p-3 shadow-soft-lg">
                      <Link href="/rehabilitation/cardiac" className={menuLink}><Heart className="h-5 w-5 text-[#a7473d]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Heart recovery</strong><small className="text-xs text-[#708078]">Activity, confidence, and pacing</small></span></Link>
                      <Link href="/rehabilitation/neuro" className={menuLink}><Brain className="h-5 w-5 text-[#4f7f83]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Neuro &amp; stroke</strong><small className="text-xs text-[#708078]">Movement, balance, and function</small></span></Link>
                      <Link href="/rehabilitation/kidney" className={menuLink}><Activity className="h-5 w-5 text-[#a7651e]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Kidney recovery</strong><small className="text-xs text-[#708078]">Energy-aware routines and rest</small></span></Link>
                      <Link href="/rehabilitation/liver" className={menuLink}><Stethoscope className="h-5 w-5 text-[#285b4a]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Liver recovery</strong><small className="text-xs text-[#708078]">Strength and everyday activity</small></span></Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative" onMouseEnter={() => setIsWellbeingOpen(true)} onMouseLeave={() => setIsWellbeingOpen(false)}>
                <Link href="/wellbeing" className={`${navLink} flex items-center gap-1.5 py-2`} aria-haspopup="true" aria-expanded={isWellbeingOpen}>
                  Wellbeing <ChevronDown className={`h-4 w-4 transition-transform ${isWellbeingOpen ? 'rotate-180 text-[#285b4a]' : 'text-[#708078]'}`} aria-hidden="true" />
                </Link>
                {isWellbeingOpen && (
                  <div className="absolute left-0 top-full z-50 w-72 pt-2">
                    <div className="space-y-1 rounded-2xl border border-[#dce4dc] bg-white p-3 shadow-soft-lg">
                      <Link href="/wellbeing/depression-support" className={menuLink}><HeartHandshake className="h-5 w-5 text-[#c66b4a]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Depression support</strong><small className="text-xs text-[#708078]">Understanding low mood and self-help</small></span></Link>
                      <Link href="/wellbeing/sleep" className={menuLink}><Wind className="h-5 w-5 text-[#4f7f83]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Sleep &amp; rest</strong><small className="text-xs text-[#708078]">Make space for recovery</small></span></Link>
                      <Link href="/wellbeing/mental-health" className={menuLink}><Brain className="h-5 w-5 text-[#285b4a]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Mental wellbeing</strong><small className="text-xs text-[#708078]">Mood, energy, and motivation</small></span></Link>
                      <Link href="/wellbeing/breathing-relaxation" className={menuLink}><Wind className="h-5 w-5 text-[#285b4a]" aria-hidden="true" /><span><strong className="block text-sm text-[#1f2a24]">Breathing &amp; relaxation</strong><small className="text-xs text-[#708078]">Calming exercises and techniques</small></span></Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/resources" className={navLink}>Learn</Link>
              <Link href="/about" className={navLink}>About</Link>
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <Link href="#early-access"><Button variant="primary" size="md">Join early access</Button></Link>
            </div>

            <button onClick={() => setIsMobileMenuOpen(true)} className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl p-2 text-[#1f2a24] transition-colors hover:bg-[#f2e9dc] lg:hidden" aria-label="Open navigation menu">
              <Menu className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
        </PageContainer>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
