export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Cardiac' | 'Neuro' | 'Kidney' | 'Liver' | 'Wellbeing' | 'News';
  date: string;
  author: string;
  reviewer?: string;
  readTime: string;
  content: string;
}

export const samplePosts: Post[] = [
  {
    slug: 'cardiac-rehab-first-30-days',
    title: 'Understanding Cardiac Rehabilitation: The First 30 Days',
    excerpt: 'What to expect during early heart recovery, safe activity thresholds, and building daily consistency without fear.',
    category: 'Cardiac',
    date: '2026-08-10',
    author: 'NIRVAN Medical Team',
    reviewer: 'Dr. A. Sharma, Cardiologist',
    readTime: '4 min read',
    content: `
# Understanding Cardiac Rehabilitation: The First 30 Days

Recovering from a cardiac event—whether a heart attack (myocardial infarction), stent placement, or bypass surgery—marks the beginning of a renewal journey. The first 30 days after hospital discharge are vital for building physical confidence while respecting your body's healing signals.

## Why Early Movement Matters

After a heart event, resting completely for extended periods can actually lead to muscle deconditioning, reduced lung capacity, and increased fatigue. Guided, progressive movement helps:

- Strengthen the heart muscle gradually
- Lower resting heart rate and blood pressure
- Reduce anxiety surrounding physical activity
- Improve energy levels for everyday tasks

## Safe Activity Guidelines

During the early weeks, physical activity should be light, steady, and comfortable. Always follow these clinician-recommended safety principles:

1. **Pacing Over Speed:** Walk at a conversational pace. You should be able to speak comfortably without feeling gasped for breath.
2. **Warm-Up and Cool-Down:** Spend 3–5 minutes doing gentle arm rolls and slow walking before and after exercise.
3. **Listen to Warnings:** Stop immediately if you feel chest tightness, dizziness, unusual shortness of breath, or nausea.

## Building Your Daily Routine

Consistency is far more beneficial than pushing for intensity. Starting with just 5 to 10 minutes of gentle walking twice a day creates a solid foundation for your recovery.
    `,
  },
  {
    slug: 'motor-recovery-neuroplasticity-after-stroke',
    title: 'Motor Recovery & Neuroplasticity After Stroke',
    excerpt: 'How gentle, repeated movement patterns stimulate neural pathways to regain motor control over time.',
    category: 'Neuro',
    date: '2026-08-08',
    author: 'NIRVAN Rehabilitation Specialist',
    reviewer: 'Dr. R. Kulkarni, Neurologist',
    readTime: '6 min read',
    content: `
# Motor Recovery & Neuroplasticity After Stroke

Following a stroke, regaining arm movement, hand grip, or walking balance depends on a remarkable biological capability of the human brain called **neuroplasticity**.

## What is Neuroplasticity?

Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections. When stroke damages brain tissue responsible for controlling movement, healthy regions of the brain can adapt and take over those motor commands through repetitive, task-specific training.

## Key Principles of Neuro-Rehabilitation

To stimulate neuroplastic rewiring effectively, rehabilitation routines rely on three core pillars:

1. **Repetition:** Repetitive movement signals to the brain that a specific neural pathway is active and essential.
2. **Task-Specific Focus:** Practicing functional movements—such as reaching for a cup or standing up from a chair—yields better neural activation than arbitrary movements.
3. **Patience and Consistency:** Neural reorganization takes time. Showing up for 10–15 minutes daily produces far greater long-term recovery than sporadic intense sessions.
    `,
  },
  {
    slug: 'managing-fatigue-chronic-kidney-disease',
    title: 'Managing Fatigue During Chronic Kidney Care',
    excerpt: 'Practical strategies for balancing physical activity, rest intervals, and muscle function preservation.',
    category: 'Kidney',
    date: '2026-08-05',
    author: 'NIRVAN Renal Care Team',
    reviewer: 'Dr. M. Mehta, Nephrologist',
    readTime: '5 min read',
    content: `
# Managing Fatigue During Chronic Kidney Care

Fatigue is one of the most common and challenging symptoms reported by individuals living with Chronic Kidney Disease (CKD) or undergoing dialysis treatment. 

## The Fatigue-Inactivity Cycle

When fatigue sets in, the natural tendency is to reduce physical activity. However, prolonged inactivity accelerates muscle loss (sarcopenia) and reduces cardiovascular endurance, which in turn makes even basic daily tasks require more effort—creating a vicious cycle of increasing tiredness.

## Pacing & Energy Management

1. **Listen to Dialysis Days:** On non-dialysis days, schedule short 10-minute walks or seated leg exercises. On dialysis days, focus on rest and gentle breathing.
2. **Hydration & Nutrition Alignment:** Ensure your activity aligns with your clinical fluid restrictions and nutritional guidance.
3. **Small Movement Bouts:** Breaking physical activity into two 5-minute sessions throughout the day prevents overwhelming fatigue while preserving muscle tone.
    `,
  },
  {
    slug: 'sarcopenia-muscle-preservation-cirrhosis',
    title: 'Muscle Preservation & Exercise in Liver Cirrhosis',
    excerpt: 'How light resistance exercises help combat sarcopenia and maintain independence in chronic liver conditions.',
    category: 'Liver',
    date: '2026-08-02',
    author: 'NIRVAN Clinical Content Team',
    reviewer: 'Dr. P. Deshmukh, Hepatologist',
    readTime: '5 min read',
    content: `
# Muscle Preservation & Exercise in Liver Cirrhosis

Chronic liver conditions, particularly cirrhosis, can significantly alter metabolism, leading to rapid muscle loss (sarcopenia). Maintaining muscle mass is not just about strength—it plays a direct role in liver disease recovery, stamina, and quality of life.

## Why Muscle Mass is Vital in Liver Health

In cirrhosis, the liver's ability to store glycogen and process proteins is reduced. As a result, skeletal muscles become a secondary energy reserve and play a critical role in ammonia detoxification and metabolic balance.

## Safe Resistance Exercises

1. **Seated Resistance Bands:** Gentle arm curls and shoulder presses sitting securely in a chair.
2. **Lower Body Strength:** Sit-to-stand repetitions from a sturdy chair to maintain quad and glute strength.
3. **Paced Daily Walking:** Gentle walking to stimulate circulation without causing physical exhaustion.
    `,
  },
  {
    slug: 'role-of-sleep-in-physical-rehabilitation',
    title: 'The Essential Role of Sleep in Physical Rehabilitation',
    excerpt: 'Why quality restorative rest is the cornerstone of tissue repair, memory consolidation, and motor learning.',
    category: 'Wellbeing',
    date: '2026-07-28',
    author: 'NIRVAN Health Team',
    readTime: '4 min read',
    content: `
# The Essential Role of Sleep in Physical Rehabilitation

During physical rehabilitation, much of the actual healing and neural adaptation happens while you rest. Sleep is when growth hormone is released to repair micro-tears in muscle tissue and when the brain consolidates motor memory learned during exercise sessions.

## Sleep Hygiene Tips for Recovery

- **Consistent Bedtime:** Aim for the same sleep and wake times daily.
- **Wind-Down Breathing:** Practice 3 minutes of diaphragmatic breathing before sleep.
- **Comfortable Positioning:** Use supportive pillows to alleviate joint or surgical site pressure.
    `,
  },
];

export function getAllPosts(): Post[] {
  return samplePosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return samplePosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  if (category === 'All') return samplePosts;
  return samplePosts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}
