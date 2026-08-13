'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const NewsletterSignup: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to connect. Please check your network.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-[#E1EADF] p-4 rounded-[12px] border border-[#436444]/30 flex items-center gap-3 text-[#2e4e30]">
        <CheckCircle2 className="w-6 h-6 shrink-0 text-[#436444]" />
        <div>
          <p className="font-semibold">Thank you for subscribing!</p>
          <p className="text-sm">We&apos;ll keep you updated with clinician-reviewed recovery insights.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3 items-start`}>
        <div className="w-full flex-1">
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address for newsletter"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            required
          />
        </div>
        <Button type="submit" variant="primary" className="whitespace-nowrap w-full sm:w-auto" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs font-medium text-[#C0564B]">
          <AlertCircle className="w-4 h-4" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-xs text-[#66615C]">
        By subscribing, you agree to receive REVIA recovery updates. No spam, ever. Unsubscribe anytime.
      </p>
    </form>
  );
};
