'use client';

import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';

const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdI5c3mjvzJgxtW1RUVdvYhKfKM3tWKNwvSbwqz-VIvqFHGzA/formResponse';
const EMAIL_ENTRY = 'entry.1162263471';
const PATHWAY_ENTRY = 'entry.414158521';

const pathwayOptions = [
  'General REVIA updates',
  'Heart recovery',
  'Neuro and stroke recovery',
  'Kidney or liver recovery',
  'Wellbeing and sleep',
];

export const NewsletterSignup: React.FC<{ compact?: boolean; id?: string }> = ({ compact = false, id }) => {
  const inputId = id ?? (compact ? 'newsletter-email-footer' : 'newsletter-email-main');
  const [email, setEmail] = useState('');
  const [pathway, setPathway] = useState('General REVIA updates');
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
      setPathway('General REVIA updates');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or use the Google Form directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3">
      <div className="flex flex-col items-start gap-3 sm:flex-row">
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
        <Button type="submit" variant="primary" className="w-full whitespace-nowrap sm:w-auto" disabled={status === 'submitting'}>
          {status === 'submitting' ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Joining…</> : 'Join the waitlist'}
        </Button>
      </div>

      {!compact && (
        <label htmlFor={`${inputId}-pathway`} className="flex flex-col gap-2 text-xs font-semibold text-[#5e5a55]">
          What would you like to hear about? <span className="font-normal text-[#77716a]">Optional</span>
          <select
            id={`${inputId}-pathway`}
            value={pathway}
            onChange={(e) => setPathway(e.target.value)}
            className="min-h-11 rounded-xl border border-[#d9c9b8] bg-white px-3 text-sm font-normal text-[#2D2A26] outline-none transition focus:border-[#436444] focus:ring-2 focus:ring-[#436444]/20"
          >
            {pathwayOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      )}

      {status === 'success' && (
        <div className="flex items-start gap-3 rounded-xl border border-[#436444]/25 bg-[#eaf1e8] p-4 text-[#315336]" role="status">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-sm leading-5">You’re on the list. We’ll send occasional REVIA launch updates—never noise.</p>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 text-xs font-medium text-[#C0564B]" role="alert">
          <AlertCircle className="h-4 w-4" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-xs leading-5 text-[#66615C]">By joining, you agree to receive REVIA early-access updates. You can unsubscribe anytime. Your response is stored by Google Forms and linked to the REVIA waitlist sheet.</p>
    </form>
  );
};

export default NewsletterSignup;

/* Style note: warm recovery-journal palette, compact editorial form rhythm, and calm feedback states keep the waitlist useful without diluting REVIA’s clinical responsibility. */
