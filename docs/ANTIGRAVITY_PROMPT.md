# REVIA — Antigravity + Stitch MCP Full Build Prompt

> **Copy this entire prompt into Google Antigravity to design and build the REVIA application.**
> **Prerequisites:** Stitch MCP server configured in Antigravity with valid API key.

---

## PROJECT SETUP

Create a new Antigravity project called `revia` with the following workspace structure:

```
revia/
├── mobile/                    # Flutter app (iOS + Android)
│   ├── lib/
│   │   ├── main.dart
│   │   ├── app/
│   │   │   ├── app.dart
│   │   │   ├── routes.dart
│   │   │   └── theme.dart
│   │   ├── core/
│   │   │   ├── constants/
│   │   │   ├── theme/
│   │   │   ├── utils/
│   │   │   └── widgets/
│   │   ├── data/
│   │   │   ├── models/
│   │   │   ├── repositories/
│   │   │   └── services/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── usecases/
│   │   └── presentation/
│   │       ├── screens/
│   │       │   ├── auth/
│   │       │   ├── onboarding/
│   │       │   ├── home/
│   │       │   ├── recovery/
│   │       │   ├── exercise/
│   │       │   ├── wellbeing/
│   │       │   ├── progress/
│   │       │   ├── learn/
│   │       │   ├── profile/
│   │       │   └── health/
│   │       └── widgets/
│   ├── pubspec.yaml
│   └── android/ & ios/
├── website/                   # Next.js marketing site
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── content/
│   │   └── lib/
│   ├── package.json
│   └── next.config.js
├── docs/                      # Documentation (already exists)
└── functions/                 # Firebase Cloud Functions
    └── src/
```

---

## PHASE 1: DESIGN ALL MOBILE SCREENS USING STITCH MCP

Use the Stitch MCP server to generate high-fidelity UI designs for every screen in the REVIA mobile app. Generate screens in this order:

---

### Step 1: Design System Foundation

**Stitch Prompt:**

Create a design system for a mobile rehabilitation app called REVIA.

Brand: "Move Forward. Live Better."
Personality: Human, Calm, Encouraging, Trustworthy, Respectful, Hopeful, Resilient, Modern

Color tokens:
- primary: Warm teal/green (#2A9D8F) — recovery and growth
- primaryContainer: Light teal tint (#E0F5F1)
- secondary: Warm amber (#E9C46A) — energy and optimism
- background: Soft off-white (#FAFAF8)
- surface: White (#FFFFFF)
- surfaceVariant: Light gray (#F5F5F3)
- textPrimary: Dark charcoal (#1A1A1A)
- textSecondary: Medium gray (#6B6B6B)
- success: Green (#4CAF50)
- warning: Amber (#FFA726)
- error: Soft red (#EF5350)
- info: Blue (#42A5F5)

Typography: Inter or system sans-serif
- Display: 32px bold
- Headline: 24px semibold
- Title: 20px semibold
- Body: 16px regular (1.5 line height)
- Label: 14px medium
- Caption: 12px regular

Spacing: 4, 8, 12, 16, 24, 32, 48, 64
Border radius: 16px cards, 12px buttons, 24px bottom sheets

Components: Button (primary/secondary/icon), Card (standard/progress/exercise/metric/goal/milestone), Bottom nav bar (5 tabs), Text field, Search field, Chip/filter, Slider, Progress bar (linear/circular), Bottom sheet, Dialog, Snackbar, Empty state, Error state, Loading skeleton, Video player placeholder.

No hospital-dashboard aesthetics. No neon fitness gradients. No aggressive red/green indicators. Use soft backgrounds, rounded corners, generous whitespace, subtle shadows.

---

### Step 2: Authentication Screens

**Stitch Prompt:**

Design these authentication screens for REVIA mobile app:

1. SPLASH — REVIA logo centered, tagline "Move Forward. Live Better.", soft teal gradient background, subtle loading indicator.

2. WELCOME — Headline "Welcome to REVIA", subtext "Your recovery is a journey. Let's understand where you'd like to go.", primary CTA "Get Started", warm calm background.

3. SIGN IN — REVIA logo, "Sign in to continue your recovery", 4 tappable sign-in cards: Google Sign-In, Apple Sign-In, Email/Password, Phone OTP. "Create Account" link. Medical disclaimer footer.

4. CREATE ACCOUNT — Email field, Password field with show/hide, Confirm password, "Create Account" button, "Already have an account? Sign In" link, Terms/Privacy consent checkbox.

Design for iPhone 14 Pro (393x852). Portrait only. Large touch targets (48px minimum).

---

### Step 3: Onboarding Screens

**Stitch Prompt:**

Design the onboarding flow for REVIA:

1. PROFILE SETUP — "Let's set up your profile", Name text field, Language selector (English/Hindi/Marathi) as tappable chips, "Continue" button.

2. CONDITION SELECTION — "What would you like support with?", 4 cards in 2x2 grid: Heart Recovery, Neuro Recovery, Kidney Recovery, Liver Recovery. Each with icon, title, description. Single selection. "Continue" button.

3. GOALS — "What would you like to improve?", Multi-select checklist: Movement, Strength, Stamina, Independence, Daily activities, Overall wellbeing. "Continue" button.

4. PERSONAL GOAL — "What matters most to you?", text input "I want to...", example chips: "Walk independently", "Build strength", "Sleep better". "Continue" button.

5. CONSENT & SAFETY — Medical disclaimer, emergency guidance, consent checkboxes (Terms, Privacy, Health data optional), "I understand" button.

6. ONBOARDING COMPLETE — Checkmark, "You're ready to begin.", displayed personal goal, "Start" button.

Design for iPhone 14 Pro. Calm, encouraging, simple.

---

### Step 4: Home Screen

**Stitch Prompt:**

Design the Home screen for REVIA — the most important screen.

Layout:
```
+----------------------------------+
| REVIA                    [bell]  |
|                                  |
| Good morning, Priya              |
| One step at a time.              |
|                                  |
| +------------------------------+ |
| | YOUR RECOVERY TODAY          | |
| | 2 of 4 completed             | |
| | ██████████░░░░░░░░░░░░░░░░  | |
| | Next: Mobility - 8 min       | |
| | [ CONTINUE RECOVERY ]        | |
| +------------------------------+ |
|                                  |
| YOUR GOAL                        |
| +------------------------------+ |
| | Walk independently           | |
| | ███████████░░░░░░░ 78%       | |
| +------------------------------+ |
|                                  |
| TODAY                            |
| +------------------------------+ |
| | check Breathing        5 min | |
| | check Check-in         2 min | |
| | circle Mobility        8 min | |
| | circle Walking        10 min | |
| +------------------------------+ |
|                                  |
| YOUR PROGRESS                    |
| +------------------------------+ |
| | 12 sessions, 82% consistency | |
| +------------------------------+ |
|                                  |
| [Home][Recovery][Well][Pro][Learn][Prof] |
+----------------------------------+
```

"What matters today?" is the only question. No medical dashboard. Large Continue Recovery button. Activity list with checkmarks/circles. Goal progress bar. Bottom nav: Home, Recovery, Wellbeing, Progress, Learn, Profile. Greeting: Good morning/afternoon/evening. Rotating subtitle.

---

### Step 5: Recovery Screens

**Stitch Prompt:**

Design the Recovery section for REVIA:

1. RECOVERY MAIN — Phase card "Phase 2 - Building Strength" with progress bar, "Week 4 of 8", focus chips (Mobility check, Consistency check, Strength circle, Endurance circle), quick links: Today's Plan, My Program, Exercises, Goals, Milestones, "View This Week" button.

2. TODAY'S PLAN — Progress bar "2 of 4 completed", activity cards (icon, name, duration, status), completed items with green checkmark, pending with circle outline, "Start Next" button.

3. EXERCISE LIBRARY — Search bar, filter chips (All, Mobility, Strength, Balance, Walking, Breathing, Speech, Cognitive, Functional), exercise cards with thumbnail, name, difficulty badge, duration, category tag.

4. GOALS — Current goal with progress bar, goal history list, "Add Goal" button.

5. MILESTONES — Vertical timeline: Started, Building, Consistent, Independence. Each with icon, title, description, date. Achieved filled, not yet outlined.

6. JOURNEY VISUALIZATION — Vertical timeline: Starting Point, Foundation, Building Strength (YOU ARE HERE), Independence, Everyday Life. Current highlighted, past filled, future outlined.

---

### Step 6: Exercise Screens

**Stitch Prompt:**

Design the Exercise experience for REVIA:

1. EXERCISE DETAIL — Back arrow, exercise name "SIT TO STAND", video player (16:9), difficulty badge, metadata "2 sets, 8 reps, 5 min", "Before you begin" bullet points, safety note card (amber), large "START EXERCISE" button, "How to perform this" link, audio toggle.

2. EXERCISE SESSION — Exercise name, large rep counter "5 / 8", visual dots (5 filled, 3 empty), timer "00:42", video, large "Pause" button, "How does this feel?" with 3 tappable buttons: Comfortable, Challenging, Difficult.

3. EXERCISE COMPLETION — Checkmark animation, "Exercise Complete", stats (duration, reps, feeling), encouraging message, tips card, "Done" and "Next Exercise" buttons.

---

### Step 7: Daily Check-in

**Stitch Prompt:**

Design the Daily Check-in for REVIA:

Screen 1 — Mood: "How are you feeling today?", 5 large emoji options (Great, Good, Okay, Low, Very Low), "Skip" button.

Screen 2 — Sliders: "Tell us a bit more", Energy slider, Sleep slider, Fatigue slider, "Skip" and "Submit" buttons.

Screen 3 — Complete: Checkmark, "Thanks for checking in", "Your wellbeing matters.", "Done" button.

Fast. Max 3 screens. Skip always visible. Tap and slider only.

---

### Step 8: Progress Screens

**Stitch Prompt:**

Design the Progress section for REVIA:

1. PROGRESS MAIN — Time range selector (This Week/Month/3 Months/All), stats cards (2-column): Sessions 12, Consistency 82%, Mobility Improving, Activity +14%. Goal card "Walk independently" 80%. Wins list with checkmarks.

2. ACTIVITY/TRENDS — Weekly consistency grid (Mon-Sun checkmarks), simple charts (line/bar) for trends, clear labels, time ranges, units.

3. HEALTH — Connected providers, metric cards: Steps 7240, Heart Rate 68 bpm, Sleep 7h 12m, Weight 68.4 kg. "View trends" button.

---

### Step 9: Wellbeing Screens

**Stitch Prompt:**

Design the Wellbeing section for REVIA:

1. WELLBEING MAIN — Quick mood/sleep/energy cards, daily check-in prompt, nutrition education link, mindfulness section, lifestyle tips. Gentle, not clinical.

2. MOOD LOG — History of mood entries with dates, simple visualization.

3. SLEEP LOG — Sleep duration and quality entries, simple trend.

---

### Step 10: Learn Screens

**Stitch Prompt:**

Design the Learn section for REVIA:

1. LEARN MAIN — Search bar "Search recovery topics", featured content cards (condition-specific), "For You" personalized section, content type badges (read time/video).

2. ARTICLE DETAIL — Title, author, clinical reviewer badge, "Reviewed by a qualified healthcare professional", clean reading layout, short paragraphs, related articles, share/save.

---

### Step 11: Profile Screens

**Stitch Prompt:**

Design the Profile section for REVIA:

1. PROFILE MAIN — List layout: Account, Recovery Path, Goals, Medications, Health Connections, Notifications, Accessibility, Language, Privacy, Data & Export, Delete Account, About REVIA.

2. HEALTH CONNECTIONS — Connected providers (Apple Health, Health Connect), metric cards with source labels, disconnect option.

3. MEDICATION — Time-based checklist (Morning/Afternoon/Evening), taken/reminder states, medication list.

---

## PHASE 2: BUILD THE FLUTTER MOBILE APP

After all screens are designed in Stitch, use Antigravity agents to implement the Flutter app:

**Agent 1 — Foundation:**

```
Build the Flutter project foundation for REVIA:
1. Create Flutter project in mobile/ directory
2. pubspec.yaml with dependencies: firebase_core, firebase_auth, cloud_firestore, firebase_storage, firebase_messaging, flutter_riverpod, go_router, health, video_player, cached_network_image, flutter_localizations
3. Theme setup matching the Stitch design system colors and typography
4. Go router configuration with all routes:
   /auth/sign-in, /auth/sign-up, /auth/google, /auth/phone
   /onboarding/profile, /onboarding/language, /onboarding/condition, /onboarding/goals, /onboarding/consent, /onboarding/complete
   /home, /home/today, /home/check-in
   /recovery, /recovery/plan, /recovery/exercises, /recovery/exercises/:id, /recovery/session/:id, /recovery/milestones, /recovery/goals
   /wellbeing, /wellbeing/mood, /wellbeing/sleep, /wellbeing/nutrition, /wellbeing/mindfulness
   /progress, /progress/overview, /progress/goals, /progress/activity, /progress/health
   /learn, /learn/conditions, /learn/conditions/:id, /learn/exercises, /learn/articles, /learn/articles/:id, /learn/videos, /learn/faq
   /profile, /profile/account, /profile/conditions, /profile/goals, /profile/medications, /profile/health-connections, /profile/notifications, /profile/accessibility, /profile/privacy, /profile/data
5. Firebase initialization
6. Auth state listener
7. Route guards (auth required, onboarding required)
```

**Agent 2 — Data Layer:**

```
Build the data layer for REVIA:
1. Firestore data models (matching database schema):
   - UserProfile, Condition, Goal, RecoveryPlan, Exercise, ExerciseSession
   - DailyCheckin, HealthMetric, Medication, MedicationLog
   - Progress, Milestone, DeviceConnection, Consent
2. Repository pattern for each model
3. Firestore CRUD operations
4. Offline support with local cache
5. Health data abstraction layer:
   - HealthProvider interface
   - HealthKitProvider (iOS)
   - HealthConnectProvider (Android)
   - NormalizedHealthRecord model
6. Firebase Auth service (Google, Apple, Email, Phone)
7. Firebase Storage service for media
```

**Agent 3 — Auth & Onboarding:**

```
Build authentication and onboarding screens for REVIA using the Stitch designs:
1. Splash screen with logo and loading
2. Welcome screen with "Get Started"
3. Sign-in screen with 4 auth options
4. Create account screen
5. Onboarding flow:
   - Profile setup (name, language)
   - Condition selection (4 cards, single select)
   - Goals selection (multi-select checklist)
   - Personal goal (text input with chips)
   - Consent and safety
   - Onboarding complete
6. Firebase Auth integration
7. Store profile data to Firestore
8. Mark onboarding complete
```

**Agent 4 — Home & Recovery:**

```
Build Home and Recovery screens for REVIA using Stitch designs:
1. Home screen — Today's Recovery:
   - Greeting based on time of day
   - Recovery progress card with progress bar
   - Goal card with progress
   - Today's activity list (completed/pending)
   - Progress summary
   - Continue Recovery button
2. Recovery main screen:
   - Phase/week info
   - Focus chips
   - Quick links
3. Today's Plan screen
4. Exercise library with search and filter
5. Exercise detail with video player
6. Exercise session with timer, rep counter, pause
7. Exercise completion with summary
8. Goals screen
9. Milestones timeline
10. Journey visualization
```

**Agent 5 — Wellbeing, Progress, Learn:**

```
Build Wellbeing, Progress, and Learn screens for REVIA:
1. Wellbeing main with mood/sleep/energy cards
2. Daily check-in flow (mood selection, sliders, complete)
3. Mood/sleep/nutrition logs
4. Progress main with stats cards
5. Activity/trends with charts
6. Health overview with connected providers
7. Learn main with search and featured content
8. Article detail with clean reading layout
9. Profile main with settings list
10. Health connections management
11. Medication tracker
```

---

## PHASE 3: BUILD THE NEXT.JS WEBSITE

**Agent 6 — Website:**

```
Build the REVIA marketing website using Next.js, TypeScript, and Tailwind CSS:

1. Project setup in website/ directory
2. Pages:
   - / (Homepage: Hero, Recovery Paths, Why REVIA, How It Works, Features, Newsletter, FAQ, Disclaimer)
   - /rehabilitation (Overview)
   - /rehabilitation/cardiac
   - /rehabilitation/neuro
   - /rehabilitation/stroke
   - /rehabilitation/kidney
   - /rehabilitation/liver
   - /wellbeing
   - /exercises
   - /resources
   - /blog
   - /news
   - /newsletter
   - /about
   - /contact
   - /faq
   - /privacy
   - /terms
   - /medical-disclaimer
3. Design system matching the mobile app brand
4. SEO: semantic HTML, structured metadata, sitemap, robots.txt, Open Graph
5. Responsive design (mobile-first)
6. App download links (App Store, Google Play)
7. Newsletter signup
8. Blog/news with MDX or headless CMS
9. Medical disclaimer on all health content
10. WCAG-aligned accessibility
```

---

## PHASE 4: FIREBASE CLOUD FUNCTIONS

**Agent 7 — Backend:**

```
Build Firebase Cloud Functions for REVIA:
1. Notification functions (FCM):
   - Exercise reminders
   - Medication reminders
   - Daily check-in reminders
   - Milestone celebrations
2. Data normalization functions
3. Progress aggregation
4. Scheduled processing
5. AI gateway (future, stub only)
6. Firestore security rules:
   - User ownership enforcement
   - Field-level validation
   - Immutable fields
   - Valid state transitions
7. Storage security rules
8. App Check integration
```

---

## PHASE 5: TESTING & VERIFICATION

Use Antigravity's browser subagent to verify:

1. All screens render correctly matching Stitch designs
2. Navigation works across all routes
3. Auth flow completes (sign in, onboarding, home)
4. Exercise session flow works end-to-end
5. Daily check-in flow works
6. Offline behavior for core workflows
7. Accessibility: large touch targets, readable text, screen reader labels
8. Error states display correctly
9. Loading states display correctly
10. Empty states display correctly

---

## KEY FEATURES TO IMPLEMENT

### Recovery Module
- Personalized recovery plans based on condition and goals
- Exercise library with 13 categories: Mobility, Strength, Balance, Walking, Hand, Arm, Leg, Shoulder, Breathing, Speech, Cognitive, Functional Movement
- Exercise sessions: intro, safety, demo, performance, feedback, summary
- Recovery milestones and timeline visualization
- Phase-based progression (Foundation, Building Strength, Independence, Everyday Life)

### Wellbeing Module
- Mood, sleep, energy tracking
- Daily check-in (fast, skippable, tap-based)
- Nutrition education
- Mindfulness support
- Stress management

### Health Tracking
- Manual entry: Blood pressure, heart rate, SpO2, weight, steps, sleep, symptoms, energy, mood
- Apple HealthKit (iOS) and Android Health Connect integration
- Source distinction (manual vs device-imported)
- Just-in-time permission requests

### Education
- Condition guides, exercise education, articles, videos, FAQs
- Clinical review metadata (reviewer, date, version, sources)
- Trust signals: "Reviewed by a qualified healthcare professional"

### Medication
- Reminder and tracking system
- Schedule, taken/missed logging, refill reminders, history
- NO dosage changes, NO medication recommendations

### Engagement
- Push notifications (exercise, medication, check-in, milestones)
- Non-judgmental, encouraging language
- Milestones: Started, Building, Consistent, Independence

---

## SAFETY BOUNDARIES (MUST ENFORCE)

- REVIA is NOT a replacement for doctors or healthcare professionals
- REVIA does NOT diagnose medical conditions
- REVIA does NOT prescribe or change medication
- REVIA does NOT provide emergency services
- AI is educational/support only, never clinical authority
- All clinical content requires review workflow
- Symptom escalation with appropriate medical guidance
- Emergency boundary: redirect to local emergency services

---

## OFFLINE SUPPORT

Core workflows that must work offline:
- View assigned recovery plan
- View cached exercises
- Record exercise completion
- Record daily check-in
- Record selected health metrics
- Medication reminders
- Pending writes sync when connected

---

## ACCESSIBILITY REQUIREMENTS

- Large touch targets (minimum 48x48px)
- Body text 16-18px
- High contrast ratios
- Dynamic text support
- Screen reader labels
- Captions on video
- Audio instructions for exercises
- Reduced motion support
- No color-only status indicators
- Minimal gesture dependence

---

## LOCALIZATION

Initial languages: English, Hindi, Marathi
Design for translation from the start.
Support longer translated text, local date/time, local measurement units.
Future RTL readiness.

---

## SUMMARY

This prompt covers the complete REVIA application:
1. Design system via Stitch MCP
2. 25+ mobile screens designed in Stitch
3. Flutter mobile app (iOS + Android) with Firebase
4. Next.js marketing website
5. Firebase Cloud Functions
6. Testing and verification
7. All features: Recovery, Wellbeing, Health, Education, Medication, Engagement
8. Safety boundaries and clinical governance
9. Offline support
10. Accessibility
11. Localization

Build the smallest useful recovery loop first: Goal -> Recovery Plan -> Exercise -> Daily Check-in -> Progress.

---

*REVIA — Move Forward. Live Better.*
