'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Activity, ArrowRight, Brain, Heart, HeartPulse, Stethoscope } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const pathways = [
  {
    id: 'cardiac',
    short: 'Heart',
    title: 'Cardiac Recovery',
    badge: 'Cardiac Care',
    icon: Heart,
    iconColor: '#C0564B',
    description: 'Support for rebuilding activity, endurance, and healthy routines after a heart event or during cardiac rehabilitation.',
    focus: ['Activity & endurance', 'Breathing & mobility', 'Lifestyle education'],
    metrics: 'Heart rate · Steps · Energy',
    href: '/rehabilitation/cardiac',
    background: 'from-[#fff4ed] to-[#fdf9f3]',
  },
  {
    id: 'neuro',
    short: 'Neuro',
    title: 'Neuro & Stroke Recovery',
    badge: 'Neuro & Motor',
    icon: Brain,
    iconColor: '#5B8FB9',
    description: 'A clearer rhythm for movement, balance, speech, cognition, and everyday function after stroke or neurological change.',
    focus: ['Movement & balance', 'Speech & cognition', 'Functional activities'],
    metrics: 'Mobility · Practice · Confidence',
    href: '/rehabilitation/neuro',
    background: 'from-[#edf5fb] to-[#fdf9f3]',
  },
  {
    id: 'kidney',
    short: 'Kidney',
    title: 'Kidney Rehabilitation',
    badge: 'Renal Support',
    icon: Activity,
    iconColor: '#8c4e33',
    description: 'Gentle support for activity, fatigue, function, and wellbeing around the realities of chronic kidney care.',
    focus: ['Energy-aware movement', 'Function & activity', 'Rest & wellbeing'],
    metrics: 'Energy · Activity · Sleep',
    href: '/rehabilitation/kidney',
    background: 'from-[#fff5ed] to-[#fdf9f3]',
  },
  {
    id: 'liver',
    short: 'Liver',
    title: 'Liver Rehabilitation',
    badge: 'Hepatic Health',
    icon: Stethoscope,
    iconColor: '#436444',
    description: 'Support for strength, mobility, muscle preservation, nutrition education, and everyday confidence.',
    focus: ['Strength & mobility', 'Nutrition education', 'Healthy routines'],
    metrics: 'Strength · Mobility · Routine',
    href: '/rehabilitation/liver',
    background: 'from-[#eff6ed] to-[#fdf9f3]',
  },
];

export const RecoveryPaths: React.FC = () => {
  const [activeId, setActiveId] = useState('cardiac');
  const activePath = pathways.find((path) => path.id === activeId) ?? pathways[0];
  const ActiveIcon = activePath.icon;

  return (
    <section className="bg-[#fdf9f3] py-20 sm:py-28">
      <PageContainer>
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-xl lg:sticky lg:top-32">
            <p className="eyebrow text-[#436444]">Specialized care, one connected experience</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.03em] text-[#2D2A26] sm:text-5xl">Find the path that feels closest to your recovery.</h2>
            <p className="mt-5 text-lg leading-8 text-[#66615C]">REVIA keeps one calm design system while adapting the focus, education, activities, and progress signals to your pathway.</p>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Recovery pathways">
              {pathways.map((path) => {
                const Icon = path.icon;
                const isActive = activeId === path.id;
                return (
                  <button
                    key={path.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveId(path.id)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all ${isActive ? 'border-[#436444] bg-[#436444] text-white shadow-soft' : 'border-[#dcd5cd] bg-white text-[#66615C] hover:border-[#436444] hover:text-[#436444]'}`}
                  >
                    <Icon className="h-4 w-4" />
                    {path.short}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#e3ddd5] pt-5 text-sm text-[#77716a]">
              <HeartPulse className="h-5 w-5 text-[#8c4e33]" />
              <span>Start with your needs. Add the right support over time.</span>
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-[32px] border border-[#e2dcd4] bg-gradient-to-br ${activePath.background} p-6 shadow-soft-lg sm:p-10`}>
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/60 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white shadow-soft" style={{ color: activePath.iconColor }}>
                    <ActiveIcon className="h-8 w-8" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#77716a]">{activePath.badge}</span>
                    <h3 className="mt-1 text-2xl font-bold text-[#2D2A26] sm:text-3xl">{activePath.title}</h3>
                  </div>
                </div>
                <span className="hidden rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#436444] sm:inline-flex">Personalized focus</span>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#4f4a45]">{activePath.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {activePath.focus.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                    <span className="text-xs font-bold text-[#8c4e33]">0{index + 1}</span>
                    <p className="mt-3 text-sm font-bold leading-5 text-[#2D2A26]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[#dfd6cc] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#77716a]">Helpful context</p>
                  <p className="mt-1 text-sm font-semibold text-[#436444]">{activePath.metrics}</p>
                </div>
                <Link href={activePath.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2e4e30] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#436444]">
                  Explore this pathway
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
