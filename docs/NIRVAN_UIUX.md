# NIRVAN — UI/UX Strategy & Product Design Specification

> **Move Forward. Live Better.**

## 1. Purpose

NIRVAN is a patient-focused rehabilitation and wellbeing platform for:

- Cardiac rehabilitation
- Neuro / stroke / paralysis rehabilitation
- Kidney / renal rehabilitation
- Liver rehabilitation
- Wellbeing and healthy routines

NIRVAN should feel like a **recovery companion**, not a hospital dashboard, generic fitness tracker, or AI application.

---

## 2. UX North Star

> **Make recovery feel understandable, achievable and meaningful — one step at a time.**

Every time the patient opens NIRVAN, the interface should answer:

1. Where am I in my recovery?
2. What should I do today?
3. How am I progressing?
4. What am I working toward?

Core loop:

```text
Goal
 ↓
Recovery Plan
 ↓
Activity
 ↓
Daily Check-in
 ↓
Progress
 ↓
Milestone
 ↓
Confidence
 ↓
Updated Goal
 ↺
```

---

## 3. Reference App Insights

### Rehab Guru

Useful patterns:

- HD exercise video
- Step-by-step instructions
- Audio narration
- Sets/reps
- Timers
- Pain/wellness/exertion logging
- Progress tracking
- Reminders
- Apple Health integration

NIRVAN should make exercise execution extremely simple. Rehab Guru demonstrates the value of combining video, instructions, timers, feedback and progress in one rehabilitation workflow. citeturn0search1turn0search2

### Medbridge GO

Useful patterns:

- Achievable daily programmes
- Video demonstrations
- Quick activity logging
- Reminders
- Progress tracking
- Education
- Program adherence

NIRVAN should adopt a strong **Today's Recovery** concept so patients do not have to search through the application to know what matters today. citeturn0search0turn0search3turn0search5

### Apple Health

Useful patterns:

- Health data organization
- Trends
- Activity
- Sleep
- Medications
- Health integrations
- Privacy-oriented presentation

NIRVAN should not copy Apple Health's data density.

Apple Health answers:

> What is my health data?

NIRVAN should answer:

> **What does my available information mean for my recovery journey?**

### Flint Rehab

Useful lesson:

- Rehabilitation can be engaging without becoming a conventional fitness product.

NIRVAN can borrow engagement principles while avoiding pressure, guilt and excessive gamification.

### Cardiac rehabilitation research

Use iterative usability testing rather than designing the complete application in isolation.

Recommended process:

```text
Prototype
 ↓
Patient testing
 ↓
Observe
 ↓
Simplify
 ↓
Retest
 ↓
Build
```

---

# 4. NIRVAN Product Positioning

Existing products often emphasize one dimension:

```text
Exercise Prescription → Rehab Guru / Medbridge
Health Data           → Apple Health
Neurorehab Technology → Flint Rehab
Cardiac Monitoring    → Cardiac-specific apps
```

NIRVAN should occupy a broader position:

# **Recovery Journey Platform**

Not:

> Here are your exercises.

Not:

> Here are your health numbers.

Instead:

> **Here is where you are, what you can do today, how you're progressing, and what you're working toward.**

---

# 5. Primary Navigation

Recommended bottom navigation:

```text
Home · Recovery · Progress · Learn · Profile
```

### Home
Today's recovery and most important actions.

### Recovery
Recovery plan, exercises, activities, goals and milestones.

### Progress
Meaningful recovery progress, trends and health information.

### Learn
Education, articles, videos, FAQs and resources.

### Profile
Account, health connections, medications, notifications, accessibility and privacy.

Do not make AI, Health, Exercise, Medication, News or Settings primary navigation items.

---

# 6. Home — Today's Recovery

The Home screen is the most important screen in NIRVAN.

It should not be a medical dashboard.

Recommended structure:

```text
┌──────────────────────────────────┐
│ NIRVAN                            │
│                                  │
│ Good morning                     │
│ One step at a time.              │
│                                  │
│ ┌──────────────────────────────┐ │
│ │ YOUR RECOVERY TODAY          │ │
│ │                              │ │
│ │ 2 of 4 completed             │ │
│ │ ██████████░░░░               │ │
│ │                              │ │
│ │ Next: Mobility · 8 min       │ │
│ │                              │ │
│ │ [ CONTINUE RECOVERY ]        │ │
│ └──────────────────────────────┘ │
│                                  │
│ YOUR GOAL                        │
│ Walk independently               │
│ ███████████░░ 78%                │
│                                  │
│ TODAY                            │
│ ✓ Breathing          5 min       │
│ ✓ Check-in           2 min       │
│ ○ Mobility            8 min      │
│ ○ Walking            10 min      │
│                                  │
│ YOUR PROGRESS                    │
│ 12 sessions · 82% consistency    │
└──────────────────────────────────┘
```

Primary principle:

> **What matters today?**

---

# 7. Recovery Section

Recovery is the heart of the application.

```text
Recovery
├── Today's Plan
├── My Program
├── Exercises
├── Activities
├── Goals
└── Milestones
```

Example:

```text
YOUR RECOVERY

Phase 2
Building Strength

████████░░░░

Week 4 of 8

This week's focus

✓ Mobility
✓ Consistency
○ Strength
○ Endurance

[ View This Week ]
```

The experience should communicate a journey rather than a list of exercises.

---

# 8. Recovery Journey Visualization

```text
             YOUR JOURNEY

          Starting Point
                │
                ●
                │
            Foundation
                │
                ●
                │
        Building Strength
                │
                ●  ← YOU ARE HERE
                │
            Independence
                │
                ●
                │
          Everyday Life
```

This should represent progress without promising a specific clinical outcome.

---

# 9. Exercise UX

The exercise experience should be one of NIRVAN's strongest screens.

```text
← Back

     SIT TO STAND

     [ VIDEO ]

     Beginner
     2 sets · 8 reps

     Before you begin
     • Keep your feet stable
     • Move at a comfortable pace

     ┌──────────────────────┐
     │       ▶ START        │
     └──────────────────────┘

     Need help?
     How to perform this
```

During exercise:

```text
        SIT TO STAND

          5 / 8

       ● ● ● ● ● ○ ○ ○

          00:42

       [ Pause ]

   How does this feel?

   😊 Comfortable
   😐 Challenging
   😟 Difficult
```

Exercise capabilities:

- Video
- Audio guidance
- Captions
- Step-by-step instructions
- Sets/repetitions
- Timer
- Difficulty
- Safety information
- Completion
- Feedback

---

# 10. Daily Check-in

Keep it fast.

```text
How are you feeling today?

       😊
      Good

   😐      😔
 Okay      Low

       😴
      Tired
```

Then:

```text
Energy
Low ─────●──── High

Sleep
Poor ─────────● Good

Mood
Low ────●────── Good
```

Prefer taps, sliders and predefined options over long text entry.

---

# 11. Progress

Progress should focus on meaningful outcomes rather than raw metrics.

```text
YOUR PROGRESS

This month

Recovery sessions
12

Consistency
82%

Mobility
↑ Improving

Activity
↑ 14%

YOUR GOAL

"Walk independently"

██████████░░ 80%

YOUR WINS

✓ Completed 10 recovery sessions
✓ Improved activity consistency
✓ Completed mobility goal
✓ 4 weeks of regular practice
```

Avoid leaderboards and competitive recovery metrics.

---

# 12. Health Data

Health data should be secondary to recovery.

```text
Health

Activity
7,240 steps

Heart
Resting HR 68 bpm

Sleep
7h 12m

Weight
68.4 kg

Connected
✓ Apple Health
✓ Health Connect
```

Then:

> **View trends**

Prioritize meaning over measurement.

Do not display every available metric merely because it can be imported.

---

# 13. Wellbeing

Wellbeing should feel gentle rather than clinical.

Include:

- Mood
- Sleep
- Energy
- Fatigue
- Nutrition education
- Stress management
- Mindfulness
- Lifestyle
- Healthy routines

Core philosophy:

> **Recover better. Live better.**

---

# 14. Learn

The Learn section should feel like a simple education library.

```text
Learn

Search recovery topics

[ What would you like to learn? ]

Featured

❤️ Understanding Cardiac Rehab
🧠 Stroke Recovery Basics
🫘 Kidney Health & Movement
🫀 Liver Recovery & Strength

For You

3-minute read
"Why consistency matters during recovery"
```

Content types:

- Articles
- Guides
- Videos
- Audio
- FAQs
- Research summaries
- News
- Educational explainers

---

# 15. AI UX

Do not make AI a primary navigation item initially.

Avoid:

```text
Home
AI
Recovery
Progress
Learn
Profile
```

Use contextual AI instead:

### Exercise
> Ask NIRVAN

### Article
> Explain this

### Progress
> Help me understand my progress

### Recovery
> What's next in my plan?

AI should be a supporting layer across NIRVAN, not the identity of the product.

---

# 16. AI Safety

AI must not present itself as:

- A doctor
- A physiotherapist
- A diagnostic system
- A medication prescriber
- A replacement for professional care

Clearly distinguish:

**Education / support**

from:

**Clinical diagnosis / treatment**

High-risk medical interactions should move toward appropriate professional or emergency guidance rather than speculative AI advice.

---

# 17. Personalization

The UI should adapt to the selected recovery pathway.

### Neuro

```text
🧠 Neuro Recovery

Today's focus
Movement
Balance
Mobility
```

### Cardiac

```text
❤️ Cardiac Recovery

Today's focus
Activity
Endurance
Lifestyle
```

### Kidney

```text
🫘 Kidney Recovery

Today's focus
Activity
Function
Wellbeing
```

### Liver

```text
🫀 Liver Recovery

Today's focus
Strength
Mobility
Lifestyle
```

Keep one platform and design system. Change content, programs, exercises, goals and relevant metrics.

---

# 18. Onboarding

Start with the patient's goal, not technical account setup.

### Step 1

**Welcome to NIRVAN**

> Your recovery is a journey. Let's understand where you'd like to go.

### Step 2

**What would you like support with?**

```text
❤️ Heart Recovery
🧠 Neuro Recovery
🫘 Kidney Recovery
🫀 Liver Recovery
Something else
```

### Step 3

**What would you like to improve?**

```text
○ Movement
○ Strength
○ Stamina
○ Independence
○ Daily activities
○ Overall wellbeing
```

### Step 4

**What matters most to you?**

Example:

> I want to walk independently.

This becomes the emotional anchor of the experience.

---

# 19. Accessibility

Design for users who may have:

- Reduced mobility
- Visual limitations
- Older age
- Cognitive load challenges
- Limited digital literacy
- Neurological impairments

Requirements:

- Large touch targets
- Readable typography
- High contrast
- Dynamic text
- Screen readers
- VoiceOver
- TalkBack
- Captions
- Audio instructions
- Reduced motion
- Clear labels
- Minimal gesture dependence
- No color-only status indicators

---

# 20. Visual Design

NIRVAN should feel:

- Calm
- Human
- Trustworthy
- Modern
- Warm
- Encouraging
- Accessible

Avoid:

- Hospital-dashboard aesthetics
- Excessive clinical blue
- Neon fitness gradients
- Aggressive red/green indicators
- Excessive charts
- Badge overload
- Fear-based messaging

Preferred language:

```text
Soft backgrounds
Large typography
Rounded cards
Natural imagery
Gentle illustrations
Clear progress indicators
Subtle motion
Generous whitespace
```

Desired emotional reaction:

> **"This feels like a calm companion helping me recover."**

---

# 21. Typography

Use a highly readable system-friendly sans-serif.

Hierarchy:

```text
Display
Headline
Title
Body
Label
Caption
```

Requirements:

- Dynamic text support
- Comfortable line height
- Strong hierarchy
- Avoid long uppercase blocks
- Practical body text around 16–18px for core patient content

---

# 22. Interaction Design

Prefer:

- Tap
- Obvious swipe
- Large buttons
- Simple cards
- Clear hierarchy
- Predictable navigation
- Visible back navigation

Avoid:

- Hidden gestures
- Tiny controls
- Deep nested navigation
- Dense dashboards
- Excessive popups
- Long forms

---

# 23. Motion

Use motion to communicate:

- Progress
- Completion
- Navigation
- State changes

Avoid motion that:

- Distracts
- Delays task completion
- Creates dizziness
- Creates pressure

Support reduced-motion preferences.

---

# 24. Gamification

Use engagement, not pressure.

### Good

> You've completed 4 sessions this week. That's progress.

### Better

> You've shown up 4 times this week. Keep going at your own pace.

### Avoid

> You lost your streak!

Recovery can include setbacks, fatigue and difficult days. NIRVAN should not create guilt.

---

# 25. Recovery Language

### Avoid

> You failed today's target.

### Prefer

> Today was difficult. That's okay. Your journey continues tomorrow.

### Avoid

> Your recovery is behind schedule.

### Prefer

> Progress can take time. If you have concerns, discuss them with your healthcare professional.

### Avoid

> AI recommends changing your exercise.

### Prefer

> Your activity has changed recently. Follow the plan provided by your healthcare professional and discuss changes with them.

---

# 26. Notifications

Notifications should be helpful, contextual and non-judgmental.

Examples:

> Your recovery plan is ready.

> Ready for today's mobility session?

> You have one activity remaining today.

> Take a moment for your daily check-in.

Avoid guilt-driven messages and excessive frequency.

---

# 27. Medication UX

Medication should be a reminder feature, not a prescribing feature.

```text
Medication

Morning
✓ Taken

Afternoon
○ Reminder

Evening
○ Reminder
```

NIRVAN must not:

- Change dosage
- Recommend medication
- Stop medication
- Diagnose based on medication

---

# 28. Offline UX

Core recovery workflows should work offline where technically appropriate:

- Cached recovery plan
- Cached exercise content
- Exercise completion
- Daily check-in
- Local reminders
- Pending synchronization

Example:

> **You're offline. Your progress will sync when you're connected.**

---

# 29. Error States

Every major screen needs:

- Loading
- Empty
- Error
- Offline
- Success
- Permission denied

Example:

```text
We couldn't load your recovery plan.

Your saved activities are still available.

[ Try Again ]
```

Never expose raw Firebase/API errors to patients.

---

# 30. Health Permissions

Do not request every health permission during onboarding.

Use just-in-time permission requests:

```text
User opens Activity
 ↓
Explain benefit
 ↓
Connect Health
 ↓
OS permission
 ↓
Granted / Denied
```

Explain:

- What data is requested
- Why it is useful
- What happens if permission is denied

---

# 31. Health Integration

```text
                 NIRVAN
                   │
        ┌──────────┴──────────┐
        │                     │
       iOS                  Android
        │                     │
    HealthKit            Health Connect
        │                     │
        └──────────┬──────────┘
                   ↓
          NIRVAN Health Model
```

The patient should experience one consistent health interface regardless of platform.

---

# 32. Progress Visualization

Use simple visualizations.

### Goal

```text
Walk independently

██████████░░ 80%
```

### Consistency

```text
Mon ✓
Tue ✓
Wed ○
Thu ✓
Fri ✓
Sat ✓
Sun ○
```

### Trends

Use clear labels, time range, units and context.

Avoid charts that require medical interpretation.

---

# 33. Milestones

Celebrate meaningful progress.

```text
🌱 Started
Completed first recovery session

🌿 Building
Completed 10 sessions

🌳 Consistent
Four weeks of regular practice

🏡 Independence
Reached a personal functional goal
```

Milestones should be supportive, not competitive.

---

# 34. Profile

Recommended structure:

```text
Profile

Account
Recovery Path
Goals
Medications
Health Connections
Notifications
Accessibility
Language
Privacy
Data & Export
Delete Account
About NIRVAN
```

---

# 35. Information Architecture

```text
NIRVAN
│
├── Home
│   ├── Today's Recovery
│   ├── Goal
│   ├── Next Activity
│   ├── Progress Snapshot
│   └── Check-in
│
├── Recovery
│   ├── Plan
│   ├── Exercises
│   ├── Activities
│   ├── Goals
│   └── Milestones
│
├── Progress
│   ├── Recovery Progress
│   ├── Health
│   ├── Activity
│   └── Trends
│
├── Learn
│   ├── Conditions
│   ├── Exercises
│   ├── Articles
│   ├── Videos
│   ├── News
│   └── FAQ
│
└── Profile
    ├── Account
    ├── Recovery
    ├── Medications
    ├── Health Connections
    ├── Notifications
    ├── Accessibility
    ├── Privacy
    └── Data
```

---

# 36. Design System Components

Core reusable components:

- App bar
- Bottom navigation
- Button
- Secondary button
- Icon button
- Text field
- Search field
- Card
- Progress card
- Exercise card
- Goal card
- Metric card
- Milestone card
- Timeline
- Chip
- Slider
- Bottom sheet
- Dialog
- Snackbar
- Empty state
- Error state
- Loading skeleton
- Video player
- Progress indicator
- Chart
- Health connection card

Every component should define:

- Default
- Loading
- Error
- Disabled
- Accessibility
- Dark mode

---

# 37. MVP Screen Inventory

## Authentication

1. Splash
2. Welcome
3. Sign in
4. Google Sign-In
5. Account creation

## Onboarding

6. Profile
7. Language
8. Recovery pathway
9. Goals
10. Consent
11. Onboarding complete

## Core App

12. Home / Today's Recovery
13. Recovery
14. Recovery Plan
15. Exercise Detail
16. Exercise Session
17. Exercise Completion
18. Daily Check-in
19. Progress
20. Goal Detail
21. Milestones
22. Learn
23. Article Detail
24. Profile

## Health

25. Health Connections
26. Health Permission
27. Health Overview

Design approximately these 25 core screens first rather than attempting every future feature.

---

# 38. MVP Priority

### P0 — Must have

- Welcome
- Authentication
- Onboarding
- Home
- Recovery Plan
- Exercise Detail
- Exercise Session
- Completion
- Check-in
- Progress
- Profile

### P1 — Important

- Goals
- Milestones
- Learn
- Article
- Health Connection
- Notifications
- Accessibility

### P2 — Later

- AI
- Advanced analytics
- Computer vision
- Advanced wearable features
- Social features
- Advanced personalization

---

# 39. Patient Testing

Recommended process:

```text
Low-fidelity prototype
 ↓
5–8 user sessions
 ↓
Identify confusion
 ↓
Simplify
 ↓
High-fidelity prototype
 ↓
Second usability round
 ↓
Development
 ↓
Beta testing
```

Test representative users where possible:

- Older adults
- Rehabilitation users
- Stroke/neuro users
- Cardiac rehabilitation users
- Users with limited digital literacy
- Users with accessibility needs

Clinical professionals should review clinical content, but should not be the only UX testers.

---

# 40. Usability Tasks

Test whether users can:

1. Start today's recovery.
2. Find the next exercise.
3. Start and complete an exercise.
4. Record how they feel.
5. Find recovery progress.
6. Connect Apple Health / Health Connect.
7. Find condition information.
8. Change notification settings.

Measure:

- Task completion
- Time
- Errors
- Assistance required
- Confusion
- Confidence
- Accessibility issues

---

# 41. UX Success Metrics

### Recovery engagement

- Recovery sessions completed
- Plan completion
- Exercise completion
- Check-in completion

### Usability

- Task completion
- Time to task
- Error rate
- Support requests

### Retention

- 7-day engagement
- 30-day engagement
- Program adherence

### Patient experience

- Self-reported confidence
- Ease of use
- Perceived usefulness

### Health integration

- Connection rate
- Permission acceptance
- Sync reliability

Do not optimize only for daily active users.

---

# 42. Privacy UX

Clearly explain:

- What health data NIRVAN accesses
- Why it is needed
- Where it is used
- How it can be disconnected
- How data can be deleted
- What AI features receive

Avoid dark patterns around consent.

Do not make optional health permissions feel mandatory.

---

# 43. AI + Health Data Privacy

Never send the entire patient profile to an AI model.

Prefer minimum necessary context.

### Prefer

```text
User:
"Explain my walking trend."

AI context:
Only the relevant walking trend data.
```

### Avoid

```text
Full profile
+
Full health history
+
Medication list
+
All metrics
+
Unrelated personal data
```

---

# 44. Content Design

Use plain language.

Prefer:

> Why movement matters during recovery

over:

> Physiological implications of post-acute functional activity

Prefer:

> How to perform this exercise

over:

> Exercise execution methodology

Use:

- Short paragraphs
- Bullets
- Visual explanations
- Audio
- Captions
- Examples

---

# 45. Clinical Content UX

Clinical education should have internal metadata:

```text
Content
├── Author
├── Clinical reviewer
├── Review date
├── Version
├── Sources
└── Next review date
```

Where appropriate, expose trust signals such as:

> **Reviewed by a qualified healthcare professional**

---

# 46. Localization

Initial languages:

- English
- Hindi
- Marathi

Design for translation from the beginning.

Support:

- Localization files
- Dynamic strings
- Longer translated text
- Local date/time formats
- Local measurement units
- Future RTL readiness

---

# 47. Website-to-App UX

The marketing website and app should share the same brand system.

Website:

> **Learn → Trust → Download**

App:

> **Onboard → Recover → Progress → Return**

The website must not make clinical promises that the app cannot safely support.

---

# 48. Core Design Principles

## Today's Principle

> **What matters today?**

## Meaning Over Metrics

> **What useful decision or understanding does this metric provide?**

If a metric does not provide meaningful value, do not place it on the primary screen.

## Progress Without Pressure

Good:

> You're building consistency.

Avoid:

> You missed your goal.

Avoid:

> You're behind.

## Human Before AI

```text
Human Need
 ↓
Recovery Experience
 ↓
Clinical Content
 ↓
Health Data
 ↓
Technology
 ↓
AI
```

Not:

```text
AI
 ↓
Everything else
```

---

# 49. Recommended First Figma Prototype

Design these five experiences first:

1. **Onboarding — "Where do you want to go?"**
2. **Home — "What matters today?"**
3. **Recovery — "What am I working on?"**
4. **Exercise — "Help me do it correctly."**
5. **Progress — "Show me how I'm moving forward."**

Then add:

- Wellbeing
- Health integrations
- Learn
- Medication
- Notifications
- AI
- Advanced analytics

---

# 50. Final NIRVAN UX Architecture

```text
                         NIRVAN
                           │
                 ┌─────────┴─────────┐
                 │                   │
              TODAY                JOURNEY
                 │                   │
          What do I do?       Where am I going?
                 │                   │
                 └─────────┬─────────┘
                           │
                     RECOVERY LOOP
                           │
             ┌─────────────┼─────────────┐
             ↓             ↓             ↓
          ACTIVITY      CHECK-IN      HEALTH
             │             │             │
             └─────────────┼─────────────┘
                           ↓
                        PROGRESS
                           ↓
                          GOALS
                           ↓
                       WELLBEING
                           ↓
                     BETTER LIVING
```

---

# 51. Final UX Statement

> **NIRVAN should make recovery feel understandable, achievable and meaningful — one step at a time.**

The patient should feel:

> **"I know what I need to do today."**

> **"I can see how far I've come."**

> **"My progress matters."**

> **"I am moving forward."**

# NIRVAN
## **Move Forward. Live Better.**

---

## References

- Rehab Guru patient app and exercise workflow. citeturn0search1turn0search2
- Medbridge GO patient experience and home exercise programs. citeturn0search0turn0search3turn0search5
- Mobile health application adoption and feature research. citeturn0academia78
