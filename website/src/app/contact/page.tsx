'use client';

import React, { useState } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mail, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <>
      <section className="py-12 bg-[#F2E8DA]/40 border-b border-[#e6e2dc]">
        <PageContainer>
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div className="max-w-3xl space-y-4 pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D2A26] tracking-tight">
              Contact &amp; Support
            </h1>
            <p className="text-lg text-[#66615C] leading-relaxed">
              We&apos;d love to hear from you. Whether you have questions about REVIA, feedback, or partnerships, send us a message.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 bg-[#fdf9f3]">
        <PageContainer size="narrow">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Contact Form */}
            <div className="md:col-span-8">
              <Card className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-[#2D2A26]">Send Us a Message</h2>

                {status === 'success' ? (
                  <div className="p-6 rounded-[12px] bg-[#E1EADF] border border-[#436444]/30 flex items-start gap-4 text-[#2e4e30]">
                    <CheckCircle2 className="w-6 h-6 text-[#436444] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-base">Message Sent Successfully!</h4>
                      <p className="text-sm mt-1">Thank you for reaching out. Our support team will get back to you within 24–48 hours.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      id="contact-name"
                      label="Your Name *"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />

                    <Input
                      id="contact-email"
                      type="email"
                      label="Email Address *"
                      placeholder="e.g. rahul@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />

                    <Input
                      id="contact-subject"
                      label="Subject"
                      placeholder="e.g. General Inquiry / App Support"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />

                    <div className="flex flex-col gap-1.5 w-full">
                      <label htmlFor="contact-message" className="text-sm font-semibold text-[#2D2A26]">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        className="w-full p-4 bg-white border border-[#c2c8be] rounded-[12px] text-[#2D2A26] placeholder-[#66615C]/60 focus:outline-none focus:border-[#436444] focus:ring-2 focus:ring-[#436444]/20 transition-all text-base"
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-sm text-[#C0564B]">
                        <AlertCircle className="w-4 h-4" />
                        <span>Please fill in all required fields.</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'} className="w-full sm:w-auto">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Support Info */}
            <div className="md:col-span-4 space-y-6">
              <Card className="p-6 space-y-4 bg-[#F2E8DA]/60 border-[#e6e2dc]">
                <div className="p-3 rounded-[12px] bg-[#E1EADF] w-fit text-[#436444]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-[#2D2A26]">Support Email</h3>
                <p className="text-sm text-[#66615C]">
                  For app inquiries, feedback, or general support:
                </p>
                <a href="mailto:support@reviarecovery.com" className="text-[#436444] font-bold text-base hover:underline block">
                  support@reviarecovery.com
                </a>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#2D2A26]">
                  <MessageSquare className="w-5 h-5 text-[#8c4e33]" />
                  <span>Emergency Notice</span>
                </div>
                <p className="text-xs text-[#66615C] leading-relaxed">
                  REVIA does not provide emergency medical services. If you are experiencing severe symptoms or a medical emergency, please dial emergency services immediately.
                </p>
              </Card>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
