'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { AlertCircle, Clock3 } from 'lucide-react';

export const NewsletterSignup: React.FC<{ compact?: boolean; id?: string }> = ({ compact = false, id }) => {
  const inputId = id ?? (compact ? 'newsletter-email-footer' : 'newsletter-email-main');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'notice' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // GitHub Pages is static; a live provider will be connected before launch.
    setStatus('notice');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3 items-start`}>
        <div className="w-full flex-1">
          <Input
            id={inputId}
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address for early-access updates"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            required
          />
        </div>
        <Button type="submit" variant="primary" className="whitespace-nowrap w-full sm:w-auto">
          Request updates
        </Button>
      </div>

      {status === 'notice' && (
        <div className="bg-[#F2E8DA] p-4 rounded-[12px] border border-[#8c4e33]/25 flex items-start gap-3 text-[#5e3728]">
          <Clock3 className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm leading-5">REVIA&apos;s email list is being connected for launch. Your address has not been submitted yet, so please check back soon.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs font-medium text-[#C0564B]">
          <AlertCircle className="w-4 h-4" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-xs text-[#66615C]">
        REVIA will connect a privacy-conscious early-access form before launch. No address is collected from this preview.
      </p>
    </form>
  );
};
