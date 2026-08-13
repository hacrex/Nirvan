'use client';

import React, { useState } from 'react';
import { PageContainer } from '../layout/PageContainer';
import { FAQJsonLd } from '../seo/JsonLd';
import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    question: 'What is REVIA?',
    answer: 'REVIA is a patient-focused digital rehabilitation companion designed to support people recovering from cardiac events, stroke, paralysis, kidney disease, and liver conditions. It brings exercises, wellbeing tracking, medication reminders, and clinician-reviewed education together in one easy-to-use mobile experience.',
  },
  {
    question: 'Is REVIA a replacement for my doctor or physical therapist?',
    answer: 'No. REVIA is strictly a supportive digital companion and educational tool. It does not replace medical advice, diagnosis, or treatment from your doctors or physiotherapists. Always consult your healthcare team before starting or modifying any rehabilitation plan.',
  },
  {
    question: 'What health conditions does REVIA support?',
    answer: 'REVIA provides specialized pathways for 4 primary areas: Cardiac Recovery (heart attack, post-cardiac events), Neuro Recovery (stroke, paralysis, motor/balance support), Kidney Rehabilitation (CKD, dialysis support), and Liver Rehabilitation (cirrhosis functional support and muscle preservation).',
  },
  {
    question: 'Does REVIA work offline?',
    answer: 'Yes! REVIA is built with an offline-first architecture. Your daily exercise guides, plans, check-ins, and logs remain accessible even without an active internet connection. Progress automatically syncs when you reconnect.',
  },
  {
    question: 'Is REVIA free to use?',
    answer: 'REVIA offers essential core features, rehabilitation plans, exercise guides, and educational content free of charge to support patient recovery access.',
  },
  {
    question: 'How does REVIA protect my health privacy?',
    answer: 'Your health data privacy is fundamental. REVIA uses end-to-end encryption in transit, strict user data ownership rules, and explicit permission controls for health API integration (Apple Health & Android Health Connect). We never sell your personal health data.',
  },
];

export const FAQSection: React.FC<{ faqs?: FAQItem[] }> = ({ faqs = defaultFAQs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#fdf9f3]">
      <FAQJsonLd faqs={faqs} />
      <PageContainer size="narrow">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-[#436444]">
            Answers to Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2A26] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#66615C]">
            Everything you need to know about REVIA, our rehabilitation pathways, and privacy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#e6e2dc] overflow-hidden shadow-soft transition-all"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-lg text-[#2D2A26] hover:text-[#436444] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#66615C] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#436444]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#66615C] text-base leading-relaxed border-t border-[#F2E8DA] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};
