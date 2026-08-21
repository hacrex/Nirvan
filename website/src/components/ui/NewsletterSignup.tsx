'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdI5c3mjvzJgxtW1RUVdvYhKfKM3tWKNwvSbwqz-VIvqFHGzA/formResponse';
const EMAIL_ENTRY = 'entry.1162263471';
const PATHWAY_ENTRY = 'entry.414158521';

const pathwayOptions = [
  'General NIRVAN updates',
  'Heart recovery',
  'Neuro and stroke recovery',
  'Kidney or liver recovery',
  'Wellbeing and sleep',
];

export const NewsletterSignup: React.FC<{ compact?: boolean; id?: string }> = ({ compact = false, id }) => {
  const inputId = id ?? (compact ? 'newsletter-email-footer' : 'newsletter-email-main');
  const [email, setEmail] = useState('');
  const [pathway, setPathway] = useState('General NIRVAN updates');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await fetch(GOOGLE_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          [EMAIL_ENTRY]: email.trim(),
          [PATHWAY_ENTRY]: pathway,
        }),
      });
      setStatus('success');
      setEmail('');
      setPathway('General NIRVAN updates');
    } catch {
      setStatus('error');
      setErrorMessage('We couldn’t add you right now. Please check your email address and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3" noValidate>
      <div className="flex flex-col items-start gap-3 sm:flex-row">
        <div className="w-full flex-1">
          <label htmlFor={inputId} className="sr-only">Email address</label>
          <Input
            id={inputId}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            aria-label="Email address for NIRVAN early access"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            required
          />
        </div>
        <Button type="submit" variant="primary" className="w-full whitespace-nowrap sm:w-auto" disabled={status === 'submitting'}>
          {status === 'submitting' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />Joining…</> : 'Join early access'}
        </Button>
      </div>

      {!compact && (
        <label htmlFor={`${inputId}-pathway`} className="flex flex-col gap-2 text-xs font-semibold text-[#46514a]">
          I&apos;m most interested in <span className="font-normal text-[#58685f]">Optional</span>
          <select
            id={`${inputId}-pathway`}
            value={pathway}
            onChange={(e) => setPathway(e.target.value)}
            className="min-h-11 rounded-xl border border-[#b9cbbb] bg-white px-3 text-sm font-normal text-[#1f2a24] outline-none transition focus:border-[#285b4a] focus:ring-2 focus:ring-[#285b4a]/20"
          >
            {pathwayOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      )}

      {status === 'success' && (
        <div className="flex items-start gap-3 rounded-xl border border-[#285b4a]/25 bg-[#eef4ee] p-4 text-[#285b4a]" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-sm leading-5">You&apos;re on the list. We&apos;ll send useful recovery resources first, then let you know when early access opens for your pathway.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs font-medium text-[#a7473d]" role="alert">
          <AlertCircle className="h-4 w-4" aria-hidden="true" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-xs leading-5 text-[#58685f]">By joining, you agree to receive NIRVAN updates. You can unsubscribe anytime. Your response is stored by Google Forms and linked to the NIRVAN waitlist sheet.</p>
    </form>
  );
};

export default NewsletterSignup;
