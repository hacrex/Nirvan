'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Heart, Brain, Activity, Stethoscope, ChevronRight, HeartHandshake, Wind } from 'lucide-react';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panel) return;
      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const itemClass = 'flex items-center justify-between rounded-xl px-3 py-2.5 text-base font-semibold text-[#1f2a24] transition-colors hover:bg-[#eef4ee]';

  return (
    <div id="nirvan-mobile-menu" className="fixed inset-0 z-50 bg-[#173d32]/45 backdrop-blur-sm lg:hidden" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={panelRef} className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-[#f8f5ef] p-6 shadow-soft-lg" role="dialog" aria-modal="true" aria-label="NIRVAN navigation">
        <div className="flex items-center justify-between border-b border-[#dce4dc] pb-6">
          <Link href="/" onClick={onClose} aria-label="NIRVAN home" className="flex items-center">
            <Image
              src="/brand/nirvan-logo-horizontal.png"
              alt="NIRVAN — Move Forward. Live Better."
              width={180}
              height={120}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-full text-[#1f2a24] transition-colors hover:bg-[#f2e9dc]"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 space-y-6 py-6" aria-label="Mobile navigation">
          <div>
            <span className="px-3 text-xs font-bold uppercase tracking-[0.14em] text-[#708078]">Recovery pathways</span>
            <div className="mt-3 space-y-1">
              <Link href="/rehabilitation/cardiac" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Heart className="h-5 w-5 text-[#a7473d]" aria-hidden="true" />Heart recovery</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/rehabilitation/neuro" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Brain className="h-5 w-5 text-[#4f7f83]" aria-hidden="true" />Neuro &amp; stroke</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/rehabilitation/kidney" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Activity className="h-5 w-5 text-[#a7651e]" aria-hidden="true" />Kidney recovery</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/rehabilitation/liver" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Stethoscope className="h-5 w-5 text-[#285b4a]" aria-hidden="true" />Liver recovery</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="space-y-1 border-t border-[#dce4dc] pt-6">
            <span className="px-3 text-xs font-bold uppercase tracking-[0.14em] text-[#708078]">Wellbeing</span>
            <div className="mt-3 space-y-1">
              <Link href="/wellbeing/mental-health" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Brain className="h-5 w-5 text-[#4f7f83]" aria-hidden="true" />Mental wellbeing</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/wellbeing/sleep" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Wind className="h-5 w-5 text-[#4f7f83]" aria-hidden="true" />Sleep &amp; rest</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/wellbeing/depression-support" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><HeartHandshake className="h-5 w-5 text-[#c66b4a]" aria-hidden="true" />Depression support</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
              <Link href="/wellbeing/breathing-relaxation" onClick={onClose} className={itemClass}><span className="flex items-center gap-3"><Wind className="h-5 w-5 text-[#285b4a]" aria-hidden="true" />Breathing &amp; relaxation</span><ChevronRight className="h-4 w-4 text-[#708078]" aria-hidden="true" /></Link>
            </div>
          </div>

          <div className="space-y-2 border-t border-[#dce4dc] pt-6">
            <Link href="/resources" onClick={onClose} className={itemClass}>Learn</Link>
            <Link href="/about" onClick={onClose} className={itemClass}>About NIRVAN</Link>
            <Link href="/faq" onClick={onClose} className={itemClass}>FAQ</Link>
          </div>
        </nav>

        <div className="space-y-3 border-t border-[#dce4dc] pt-6">
          <Link href="#early-access" onClick={onClose} className="block w-full">
            <Button variant="primary" fullWidth size="lg">Join early access</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
