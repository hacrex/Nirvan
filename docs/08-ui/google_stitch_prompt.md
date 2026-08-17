# REVIA — Google Stitch UI/UX Generation Prompt

> **Copy this prompt into Google Stitch to generate REVIA's mobile UI/UX designs.**

---

## System / App Identity

Design a **mobile-first rehabilitation and wellbeing platform** called **REVIA** — tagline: **"Move Forward. Live Better."**

REVIA is a patient-focused recovery companion for people recovering from cardiac events, stroke/paralysis, kidney disease, and liver conditions. It is NOT a hospital dashboard, generic fitness tracker, or AI product. It should feel like a **calm recovery companion** that helps patients understand where they are, what to do today, how they are progressing, and what they are working toward.

**Platform:** iOS and Android (single design system)
**Framework:** Flutter (Dart)
**Design orientation:** Mobile-first, portrait-primary

---

## Brand Personality & Visual Tone

- **Human, Calm, Encouraging, Trustworthy, Respectful, Hopeful, Resilient, Modern**
- Soft backgrounds, large typography, rounded cards, natural imagery, gentle illustrations, clear progress indicators, subtle motion, generous whitespace
- Desired emotional reaction: *"This feels like a calm companion helping me recover."*

**AVOID:**
- Hospital-dashboard aesthetics
- Excessive clinical blue
- Neon fitness gradients
- Aggressive red/green indicators
- Excessive charts or badge overload
- Fear-based messaging
- Childish gamification
- Dense dashboards
- AI-obsessed branding

**USE:**
- Warm, accessible color palette with semantic tokens (primary, primaryContainer, secondary, background, surface, surfaceVariant, textPrimary, textSecondary, success, warning, error, info)
- Highly readable sans-serif typeface with hierarchy: Display, Headline, Title, Body, Label, Caption
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64
- Rounded corners on cards and buttons
- Status indicators always use Icon + Color + Text (never color alone)

---

## Primary Navigation (Bottom Tab Bar)

```
Home | Recovery | Wellbeing | Progress | Learn | Profile
```

- Home: Today's recovery and most important daily actions
- Recovery: Recovery plan, exercises, activities, goals, milestones
- Wellbeing: Mood, sleep, energy, nutrition, mindfulness
- Progress: Meaningful recovery progress, trends, health data
- Learn: Education library — articles, videos, guides, FAQs
- Profile: Account, health connections, medications, notifications, accessibility, privacy

**Do NOT make AI, Health, Exercise, Medication, or Settings primary navigation items.** These are secondary features within existing sections.

---

## Screen Inventory & Specifications

### 1. SPLASH SCREEN
- REVIA logo centered
- Tagline: "Move Forward. Live Better."
- Soft gradient or solid background in brand primary color
- Loading indicator

### 2. WELCOME SCREEN
- Headline: "Welcome to REVIA"
- Subtext: "Your recovery is a journey. Let's understand where you'd like to go."
- Primary CTA: "Get Started"
- Background: Warm, calm illustration or soft gradient
- No overwhelming information

### 3. SIGN IN SCREEN
- REVIA logo
- "Sign in to continue your recovery"
- Options: Google Sign-In, Apple Sign-In, Email/Password, Phone OTP
- "Create Account" link
- Medical disclaimer footer

### 4. ONBOARDING — CONDITION SELECTION
- Headline: "What would you like support with?"
- Cards (large, tappable):
  - ❤️ Heart Recovery
  - 🧠 Neuro Recovery
  - 🫘 Kidney Recovery
  - 🫀 Liver Recovery
  - Something else
- Each card has icon, title, short description
- Single selection, clear visual selected state

### 5. ONBOARDING — GOALS
- Headline: "What would you like to improve?"
- Checklist/multi-select options:
  - Movement
  - Strength
  - Stamina
  - Independence
  - Daily activities
  - Overall wellbeing
- Next CTA

### 6. ONBOARDING — PERSONAL GOAL
- Headline: "What matters most to you?"
- Example: "I want to walk independently."
- Text input with placeholder
- This becomes the emotional anchor of the experience
- "Continue" CTA

### 7. ONBOARDING — CONSENT / SAFETY
- Medical disclaimer
- Emergency guidance
- Privacy summary
- Consent checkboxes (Terms, Privacy, Health data integration)
- "I understand" CTA

### 8. ONBOARDING — COMPLETE
- Celebration screen (subtle, not gamified)
- "You're ready to begin your recovery journey."
- "Start" CTA → Home

---

## Core App Screens

### 9. HOME — TODAY'S RECOVERY (Most Important Screen)

**Structure:**
```
┌──────────────────────────────────┐
│ REVIA                            │
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

**Key principles:**
- What matters today? — this is the ONLY question the home screen answers
- No medical dashboard feel
- Large, clear "Continue Recovery" button
- Activity list with checkmarks for completed, circles for pending
- Progress bar for goal
- Simple stats summary at bottom

### 10. RECOVERY — MAIN

**Sections:**
- Today's Plan (with progress bar)
- My Program (phase/week info)
- Exercises (browse exercise categories)
- Activities
- Goals
- Milestones

**Layout:**
```
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

### 11. RECOVERY — EXERCISE LIBRARY

- Category filter chips: Mobility, Strength, Balance, Walking, Breathing, Speech, Cognitive, Functional
- Exercise cards with: thumbnail, name, difficulty badge, duration, category
- Search bar at top
- Only show exercises relevant to patient's pathway

### 12. EXERCISE DETAIL

```
← Back

     SIT TO STAND

     [ VIDEO PLAYER ]

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

**Features:**
- Video player with captions, play/pause, replay
- Audio guidance toggle
- Step-by-step instructions
- Safety information clearly visible
- Large, accessible START button
- Difficulty and duration badges

### 13. EXERCISE SESSION (During Exercise)

```
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

**Features:**
- Large rep counter
- Visual rep progress dots
- Timer
- Pause button (large, accessible)
- Real-time feedback prompt (taps, not typing)
- Audio guidance option

### 14. EXERCISE COMPLETION / SUMMARY

- "Exercise Complete" with subtle celebration
- Duration, reps completed
- Feedback summary
- "How do you feel?" prompt
- Tips for next session
- "Done" / "Next Exercise" buttons

### 15. DAILY CHECK-IN

```
How are you feeling today?

       😊
      Good

   😐      😔
 Okay      Low

       😴
      Tired
```

Then:
```
Energy
Low ─────●──── High

Sleep
Poor ─────────● Good

Mood
Low ────●────── Good
```

**Key:**
- Keep it fast and skippable
- Tap-based mood selection (emoji + label)
- Sliders for energy, sleep, mood
- No long text entry
- "Skip" option always visible

### 16. PROGRESS — MAIN

```
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

**Key principles:**
- Meaningful outcomes over raw metrics
- No leaderboards or competitive metrics
- Progress bars for goals
- Checkmark list for wins
- Trend arrows with context
- Simple, clear labels

### 17. PROGRESS — ACTIVITY / TRENDS

- Weekly consistency grid (Mon ✓, Tue ✓, Wed ○, etc.)
- Simple line/bar charts for trends
- Clear labels, time ranges, units, context
- Charts must be interpretable without medical expertise

### 18. WELLBEING — MAIN

```
Wellbeing

Mood     😊 Good
Sleep    7h 12m
Energy   ████████░░
Fatigue  Low

[Todays Check-in]

Nutrition
Mindfulness
Lifestyle
```

- Gentle, not clinical feel
- Quick-glance cards
- Daily check-in prompt
- Educational content links

### 19. LEARN — MAIN

```
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

- Search bar prominent
- Featured content cards (condition-specific)
- Personalized recommendations
- Content types: Articles, Guides, Videos, FAQs
- Reading time badges
- Clean, readable layout

### 20. ARTICLE DETAIL

- Title, author, clinical reviewer badge
- "Reviewed by a qualified healthcare professional" trust signal
- Clean reading layout
- Short paragraphs, bullets, visuals
- Related articles section
- Share/save options
- Font size controls

### 21. PROFILE — MAIN

```
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
About REVIA
```

- Clean list layout
- Current recovery pathway shown
- Current goal shown
- Account info section

### 22. HEALTH CONNECTIONS

```
Health

Connected
✓ Apple Health
✓ Health Connect

Activity
7,240 steps

Heart
Resting HR 68 bpm

Sleep
7h 12m

Weight
68.4 kg
```

- Platform-specific connection cards
- Clear source labels (manual vs device-imported)
- Disconnect option
- Just-in-time permission requests
- "View trends" CTA

### 23. MEDICATION

```
Medication

Morning
✓ Taken

Afternoon
○ Reminder

Evening
○ Reminder
```

- Simple checklist
- Time-based grouping
- Reminder toggle
- Medication list (editable)
- History log
- **NO dosage changes, NO medication recommendations**

### 24. GOALS DETAIL

- Current goal with progress bar
- Goal history
- Milestone timeline
- "Update Goal" option (within approved workflow)

### 25. MILESTONES

```
🌱 Started
Completed first recovery session

🌿 Building
Completed 10 sessions

🌳 Consistent
Four weeks of regular practice

🏡 Independence
Reached a personal functional goal
```

- Achievement-style cards (supportive, not competitive)
- Subtle illustrations for each milestone
- Date achieved
- Encouraging language

### 26. JOURNEY VISUALIZATION

```
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

- Vertical timeline with dots
- Current position clearly marked
- Past achievements filled, future goals outlined
- No specific clinical outcome promises

---

## Onboarding Flow (Detailed)

### Step 1: Splash
- REVIA logo
- "Move Forward. Live Better."
- Auto-advance after 2-3 seconds

### Step 2: Welcome
- Warm illustration or soft gradient background
- "Welcome to REVIA"
- "Your recovery is a journey. Let's understand where you'd like to go."
- "Get Started" button

### Step 3: Sign In
- Clean authentication options
- Medical disclaimer at bottom

### Step 4: Profile Setup
- Name
- Preferred language (English, Hindi, Marathi)
- Accessibility preferences
- Minimal, non-invasive

### Step 5: Condition Selection
- Large, tappable cards with icons
- Clear descriptions
- Single selection

### Step 6: Goals
- Multi-select improvements
- Clear, simple options

### Step 7: Personal Goal
- Free text or guided input
- "I want to..." prompt
- Emotional anchor

### Step 8: Consent & Safety
- Clear, readable consent text
- Emergency guidance
- Checkboxes for required consents

### Step 9: Complete
- Subtle celebration
- "You're ready to begin"
- "Start" → Home

---

## Design System Components

### Buttons
- Primary: Large, rounded, brand primary color, white text
- Secondary: Outlined or subtle fill
- Icon buttons: Large touch targets (48x48 minimum)
- Disabled state: Muted, clear disabled indicator

### Cards
- Rounded corners (16px)
- Subtle shadows
- Generous padding
- Clear hierarchy: title, description, action
- Progress cards with visual indicators

### Progress Indicators
- Progress bars (rounded, branded colors)
- Circular progress where appropriate
- Consistency grids (day markers)
- Journey timeline (vertical dots)

### Inputs
- Large text fields with clear labels
- Search fields with icon
- Sliders for scales (Energy, Sleep, Mood)
- Taps/predefined options preferred over text entry

### Bottom Sheets
- Used for quick actions (feedback, filters)
- Rounded top corners
- Clear close/dismiss
- Accessible

### Dialogs
- Simple, clear message
- Maximum 2 actions
- Accessible

### Empty States
- Illustration or icon
- Clear message
- Action button
- Friendly tone

### Error States
- Illustration or icon
- Clear, non-technical message
- "Try Again" button
- Fallback content where possible
- Never expose raw Firebase/API errors

### Loading States
- Skeleton loaders for content
- Spinner for actions
- Progress indicators for long operations

---

## Accessibility Requirements

- Large touch targets (minimum 48x48px)
- Readable typography (16-18px body text)
- High contrast ratios
- Dynamic text support (system font scaling)
- Screen reader labels on all interactive elements
- VoiceOver (iOS) and TalkBack (Android) support
- Captions on all video content
- Audio instructions for exercises
- Reduced motion support
- Clear, visible back navigation
- No color-only status indicators
- Minimal gesture dependence
- Predictable navigation patterns

---

## Interaction Design Rules

**PREFER:**
- Tap interactions
- Obvious swipe gestures
- Large buttons
- Simple cards
- Clear visual hierarchy
- Predictable navigation
- Visible back navigation
- Bottom sheets for quick actions

**AVOID:**
- Hidden gestures
- Tiny controls
- Deep nested navigation
- Dense dashboards
- Excessive popups
- Long forms
- Complex gestures
- Swipe-only navigation

---

## Motion Design

**USE MOTION TO COMMUNICATE:**
- Progress (subtle fill animations)
- Completion (gentle checkmark animation)
- Navigation (smooth transitions)
- State changes (subtle emphasis)

**AVOID MOTION THAT:**
- Distracts from task
- Delays task completion
- Creates dizziness
- Creates pressure
- Triggers vestibular issues

**REQUIREMENT:** Support reduced-motion system preference

---

## Error & Edge States

Every major screen must design for:
1. **Loading** — Skeleton/placeholder content
2. **Empty** — Friendly message + action
3. **Error** — Clear message + retry
4. **Offline** — Cached content + sync message
5. **Success** — Confirmation with subtle celebration
6. **Permission denied** — Explanation + settings redirect

**Offline message example:**
"You're offline. Your progress will sync when you're connected."

---

## Notification Design

- Exercise reminder: "Ready for today's mobility session?"
- Medication reminder: "Time for your afternoon medication."
- Check-in: "Take a moment for your daily check-in."
- Milestone: "You've completed 10 sessions. Well done."
- Progress: "Your recovery plan is ready."

**AVOID:** Guilt-driven messages, excessive frequency, "You lost your streak!"

---

## Language & Tone

**USE:**
- Plain, simple language
- Short sentences
- Encouraging tone
- "You've shown up 4 times this week. Keep going at your own pace."
- "Today was difficult. That's okay. Your journey continues tomorrow."
- "Progress can take time."

**AVOID:**
- Medical jargon
- "You failed today's target."
- "Your recovery is behind schedule."
- "AI recommends changing your exercise."
- Fear-based messaging

---

## Pathway Personalization

The UI should adapt content for the selected pathway while keeping one design system:

**Cardiac Recovery:**
- Focus: Activity, Endurance, Lifestyle
- Metrics: Heart rate, Blood pressure, Steps, Weight

**Neuro Recovery:**
- Focus: Movement, Balance, Mobility
- Metrics: Mobility exercises, Balance scores, Functional activities

**Kidney Recovery:**
- Focus: Activity, Function, Wellbeing
- Metrics: Fatigue levels, Activity, Weight

**Liver Recovery:**
- Focus: Strength, Mobility, Lifestyle
- Metrics: Strength exercises, Mobility, Nutrition

---

## Dark Mode

- Full dark mode support
- Validate contrast ratios
- Subtle shadows in dark theme
- Same semantic tokens, adapted palette

---

## Key Screens Priority (Design These First)

1. **Onboarding — Condition Selection** — "Where do you want to go?"
2. **Home — Today's Recovery** — "What matters today?"
3. **Recovery — Main** — "What am I working on?"
4. **Exercise Detail** — "Help me do it correctly."
5. **Exercise Session** — "Guide me through it."
6. **Progress** — "Show me how I'm moving forward."
7. **Daily Check-in** — "Quick wellbeing snapshot."
8. **Profile** — "Account and settings."
9. **Learn** — "Educational content library."
10. **Health Connections** — "Connect my devices."

---

## MVP Screen Count: 25 Core Screens

### Authentication (5)
1. Splash
2. Welcome
3. Sign In
4. Account Creation
5. Forgot Password

### Onboarding (5)
6. Profile Setup
7. Language Selection
8. Condition Selection
9. Goals Selection
10. Consent & Safety

### Core App (12)
11. Home / Today's Recovery
12. Recovery Main
13. Recovery Plan
14. Exercise Detail
15. Exercise Session
16. Exercise Completion
17. Daily Check-in
18. Progress Main
19. Goal Detail
20. Milestones
21. Learn Main
22. Article Detail

### Profile & Settings (3)
23. Profile Main
24. Health Connections
25. Medication

---

## Responsive Considerations

- Design for iPhone SE (375px) through iPad Pro (1024px)
- Primary layout: Single-column, portrait
- Tablet: Can use two-column for certain screens (e.g., Learn, Progress)
- Bottom navigation: Fixed, always visible
- Content cards: Full-width with generous margins

---

## Summary Statement

REVIA should make recovery feel understandable, achievable, and meaningful — one step at a time. The patient should feel:

- "I know what I need to do today."
- "I can see how far I've come."
- "My progress matters."
- "I am moving forward."

Every screen should answer: **What matters today?**

The design should communicate forward movement, recovery, progress, human connection, and vitality — while remaining calm, accessible, and trustworthy.

---

## Technical Notes for Stitch

- **Framework:** Flutter (Dart)
- **Navigation:** Bottom tab bar with stack navigation per tab
- **State:** Offline-first with sync
- **Health APIs:** HealthKit (iOS), Health Connect (Android)
- **Backend:** Firebase (Firestore, Auth, Storage, Functions, FCM)
- **Typography:** System sans-serif, 16-18px body
- **Spacing:** 4px base unit
- **Border radius:** 16px for cards, 12px for buttons, 24px for bottom sheets
- **Shadows:** Subtle, layered
- **Colors:** Semantic tokens, warm palette, high contrast
- **Icons:** Consistent icon set, 24px standard size
- **Images:** Soft illustrations, natural imagery, avoid clinical stock photos

---

*REVIA — Move Forward. Live Better.*
