'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Activity, ArrowRight, Brain, Heart, HeartHandshake, Stethoscope } from 'lucide-react';
import { PageContainer } from '../layout/PageContainer';

const pathways = [
  {
    id: 'cardiac',
    short: 'Heart',
    title: 'Cardiac recovery',
    badge: 'Heart pathway',
    icon: Heart,
    iconColor: '#A7473D',
    description: 'Build confidence with gentle movement, energy-aware pacing, and clear recovery education.',
    focus: ['Activity & endurance', 'Breathing & mobility', 'Lifestyle education'],
    metrics: 'Heart rate · Steps · Energy',
    href: '/rehabilitation/cardiac',
    background: 'from-[#f8e9e4] to-[#f8f5ef]',
  },
  {
    id: 'neuro',
    short: 'Neuro',
    title: 'Neuro & stroke recovery',
    badge: 'Neuro pathway',
    icon: Brain,
    iconColor: '#4f7f83',
    description: 'Practise small, repeatable movements and notice functional progress over time.',
    focus: ['Movement & balance', 'Speech & cognition', 'Functional activities'],
    metrics: 'Mobility · Practice · Confidence',
    href: '/rehabilitation/neuro',
    background: 'from-[#e7f0f0] to-[#f8f5ef]',
  },
  {
    id: 'kidney',
    short: 'Kidney',
    title: 'Kidney recovery',
    badge: 'Kidney pathway',
    icon: Activity,
    iconColor: '#a7651e',
    description: 'Balance activity, fatigue, rest, and everyday routines at your own pace.',
    focus: ['Energy-aware movement', 'Function & activity', 'Rest & wellbeing'],
    metrics: 'Energy · Activity · Sleep',
    href: '/rehabilitation/kidney',
    background: 'from-[#f6ecdd] to-[#f8f5ef]',
  },
  {
    id: 'liver',
    short: 'Liver',
    title: 'Liver recovery',
    badge: 'Liver pathway',
    icon: Stethoscope,
    iconColor: '#285b4a',
    description: 'Support strength, mobility, lifestyle education, and meaningful daily activity.',
    focus: ['Strength & mobility', 'Nutrition education', 'Healthy routines'],
    metrics: 'Strength · Mobility · Routine',
    href: '/rehabilitation/liver',
    background: 'from-[#e7f0e6] to-[#f8f5ef]',
  },
  {
    id: 'wellbeing',
    short: 'Wellbeing',
    title: 'Wellbeing & sleep',
    badge: 'Whole-person support',
    icon: HeartHandshake,
    iconColor: '#c66b4a',
    description: 'Make room for rest, mood, energy, stress support, and healthier routines.',
    focus: ['Sleep & rest', 'Mood & energy', 'Stress & relaxation'],
    metrics: 'Sleep · Mood · Energy',
    href: '/wellbeing',
    background: 'from-[#f4e7df] to-[#f8f5ef]',
  },
];

export const RecoveryPaths: React.FC = () => {
  const [activeId, setActiveId] = useState('cardiac');
  const activePath = pathways.find((path) => path.id === activeId) ?? pathways[0];
  const ActiveIcon = activePath.icon;

  return (
    <section id="pathways" className="bg-[#f8f5ef] py-20 sm:py-28">
      <PageContainer>
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="max-w-xl lg:sticky lg:top-32">
            <p className="eyebrow text-[#285b4a]">Find your next step</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#1f2a24] sm:text-5xl">Where would a little more support help right now?</h2>
            <p className="mt-5 text-lg leading-8 text-[#46514a]">REVIA keeps one calm design system while adapting the guidance, education, activities, and progress signals to your recovery pathway.</p>
            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Recovery pathways">
              {pathways.map((path) => {
                const Icon = path.icon;
                const isActive = activeId === path.id;
                return (
                  <button
                    key={path.id}
                    type="button"
                    role="tab"
                    id={`pathway-tab-${path.id}`}
                    aria-selected={isActive}
                    aria-controls={`pathway-panel-${path.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveId(path.id)}
                    onKeyDown={(event) => {
                      const currentIndex = pathways.findIndex((item) => item.id === path.id);
                      const nextIndex = event.key === 'ArrowRight' || event.key === 'ArrowDown'
                        ? (currentIndex + 1) % pathways.length
                        : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
                          ? (currentIndex - 1 + pathways.length) % pathways.length
                          : event.key === 'Home'
                            ? 0
                            : event.key === 'End'
                              ? pathways.length - 1
                              : -1;
                      if (nextIndex === -1) return;
                      event.preventDefault();
                      const nextPath = pathways[nextIndex];
                      setActiveId(nextPath.id);
                      document.getElementById(`pathway-tab-${nextPath.id}`)?.focus();
                    }}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-all ${isActive ? 'border-[#285b4a] bg-[#285b4a] text-white shadow-soft' : 'border-[#cbd8ce] bg-white text-[#46514a] hover:border-[#285b4a] hover:text-[#285b4a]'}`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {path.short}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[#dce4dc] pt-5 text-sm text-[#708078]">
              <HeartHandshake className="h-5 w-5 text-[#c66b4a]" aria-hidden="true" />
              <span>Start with your needs. Add the right support over time.</span>
            </div>
          </div>

          <div id={`pathway-panel-${activePath.id}`} role="tabpanel" className={`relative overflow-hidden rounded-[32px] border border-[#dce4dc] bg-gradient-to-br ${activePath.background} p-6 shadow-soft-lg sm:p-10`}>
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/60 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white shadow-soft" style={{ color: activePath.iconColor }}>
                    <ActiveIcon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#708078]">{activePath.badge}</span>
                    <h3 className="mt-1 text-2xl font-bold text-[#1f2a24] sm:text-3xl">{activePath.title}</h3>
                  </div>
                </div>
                <span className="hidden rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#285b4a] sm:inline-flex">Personalized focus</span>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#46514a]">{activePath.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {activePath.focus.map((item, index) => (
                  <div key={item} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                    <span className="text-xs font-bold text-[#c66b4a]">0{index + 1}</span>
                    <p className="mt-3 text-sm font-bold leading-5 text-[#1f2a24]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-[#d6ded5] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#708078]">Helpful context</p>
                  <p className="mt-1 text-sm font-semibold text-[#285b4a]">{activePath.metrics}</p>
                </div>
                <Link href={activePath.href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#173d32] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#285b4a]">
                  Explore {activePath.short.toLowerCase()}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};
