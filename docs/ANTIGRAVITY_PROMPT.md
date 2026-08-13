# REVIA — Antigravity Build Prompt (Stitch Designs Ready)

> **Copy this into Google Antigravity to build the REVIA application.**
> **Prerequisites:** Stitch MCP configured, all screen designs already generated in Stitch.

---

## PROJECT OVERVIEW

REVIA is a mobile-first rehabilitation and wellbeing platform for cardiac, neuro, kidney, and liver recovery. Tagline: "Move Forward. Live Better."

**Stitch designs are already complete.** Your job is to:
1. Fetch the existing Stitch designs via MCP
2. Build the Flutter mobile app matching those designs
3. Set up Firebase backend

---

## STEP 1: FETCH STITCH DESIGNS VIA MCP

```
Use the Stitch MCP server to list all projects. Find the REVIA project.
List all screens in the REVIA project.
Fetch the Design DNA (colors, typography, spacing, components) and generate a DESIGN.md file.
Fetch each screen's HTML/CSS export and save them as reference files in the project.
```

---

## STEP 2: PROJECT STRUCTURE

Create this workspace structure:

```
revia/
├── mobile/
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
├── docs/
└── functions/
    └── src/
```

---

## STEP 3: FLUTTER FOUNDATION (Agent 1)

```
Build the Flutter project foundation for REVIA in the mobile/ directory.

1. Create Flutter project: flutter create --org com.revia --project-name revia mobile

2. pubspec.yaml dependencies:
   firebase_core, firebase_auth, cloud_firestore, firebase_storage,
   firebase_messaging, flutter_riverpod, go_router, health,
   video_player, cached_network_image, flutter_localizations,
   intl, shared_preferences, connectivity_plus, permission_handler

3. Theme setup with exact Stitch design tokens:
   primary: #2A9D8F, primaryContainer: #E0F5F1, secondary: #E9C46A
   background: #FAFAF8, surface: #FFFFFF, surfaceVariant: #F5F5F3
   textPrimary: #1A1A1A, textSecondary: #6B6B6B
   success: #4CAF50, warning: #FFA726, error: #EF5350, info: #42A5F5
   Font: Inter or system sans-serif
   Border radius: 16px cards, 12px buttons, 24px bottom sheets

4. GoRouter with ALL routes:
   Auth: /auth/sign-in, /auth/sign-up, /auth/google, /auth/phone, /auth/forgot-password
   Onboarding: /onboarding/profile, /onboarding/language, /onboarding/condition,
     /onboarding/goals, /onboarding/consent, /onboarding/complete
   Home: /home, /home/today, /home/check-in, /home/notifications
   Recovery: /recovery, /recovery/plan, /recovery/exercises,
     /recovery/exercises/:id, /recovery/session/:id, /recovery/milestones, /recovery/goals
   Wellbeing: /wellbeing, /wellbeing/mood, /wellbeing/sleep,
     /wellbeing/nutrition, /wellbeing/mindfulness
   Progress: /progress, /progress/overview, /progress/goals,
     /progress/activity, /progress/health
   Learn: /learn, /learn/conditions, /learn/conditions/:id,
     /learn/exercises, /learn/articles, /learn/articles/:id, /learn/videos, /learn/faq
   Profile: /profile, /profile/account, /profile/conditions, /profile/goals,
     /profile/medications, /profile/health-connections, /profile/notifications,
     /profile/accessibility, /profile/privacy, /profile/data

5. Firebase initialization in main.dart
6. Auth state listener (redirects to auth or home)
7. Route guards: unauthenticated -> auth, no onboarding -> onboarding, else -> home
8. Bottom navigation shell: Home, Recovery, Wellbeing, Progress, Learn, Profile
```

---

## STEP 4: DATA LAYER (Agent 2)

```
Build the data layer for REVIA matching the Firestore schema.

1. Data models (use freezed or json_serializable):
   UserProfile: uid, displayName, preferredLanguage, timezone, onboardingCompleted
   Condition: id, type (cardiac/neuro/kidney/liver), name, description
   Goal: id, title, category, target, status (active/completed)
   RecoveryPlan: id, phase, week, focusAreas, exercises[], startDate, endDate
   Exercise: id, name, conditionIds[], category, difficulty, durationSeconds,
     equipment[], videoPath, languages[], clinicalReviewStatus
   ExerciseSession: id, exerciseId, startedAt, completedAt, completionStatus,
     patientFeedback, source
   DailyCheckin: id, mood, energy, fatigue, sleepQuality, createdAt
   HealthMetric: id, type, value, unit, source, recordedAt, sourceDevice
   Medication: id, name, schedule[], active
   MedicationLog: id, medicationId, takenAt, status, notes
   Progress: id, type, value, period, createdAt
   Milestone: id, type, title, description, achievedAt
   DeviceConnection: id, platform, connected, lastSync
   Consent: id, type, version, granted, grantedAt, revokedAt

2. Repository pattern: abstract interface + Firestore implementation per model

3. Offline support: local cache for core workflows

4. Health data abstraction:
   HealthProvider abstract class
   HealthKitProvider (iOS), HealthConnectProvider (Android)
   NormalizedHealthRecord model

5. Firebase Auth service: Google, Apple, Email, Phone
6. Firebase Storage service for media

---

## STEP 5: AUTH & ONBOARDING SCREENS (Agent 3)

```
Build authentication and onboarding screens for REVIA.
Reference the Stitch HTML/CSS exports for exact layout and styling.

Screens to build:

1. SPLASH — Logo centered, tagline, teal gradient, loading indicator
2. WELCOME — "Welcome to REVIA", "Get Started" button
3. SIGN IN — 4 auth option cards (Google, Apple, Email, Phone), "Create Account" link
4. CREATE ACCOUNT — Email, password, confirm password, consent checkbox
5. ONBOARDING PROFILE — Name field, language chips (English/Hindi/Marathi)
6. ONBOARDING CONDITION — 4 cards (Heart, Neuro, Kidney, Liver), single select
7. ONBOARDING GOALS — Multi-select checklist (Movement, Strength, etc.)
8. ONBOARDING PERSONAL GOAL — Text input "I want to...", example chips
9. ONBOARDING CONSENT — Medical disclaimer, emergency guidance, checkboxes
10. ONBOARDING COMPLETE — Checkmark, "You're ready to begin", "Start" button

Firebase Auth integration:
- Google Sign-In via firebase_auth
- Apple Sign-In via firebase_auth
- Email/password via firebase_auth
- Phone OTP via firebase_auth

After auth: store profile to Firestore, mark onboarding complete.
```

---

## STEP 6: HOME & RECOVERY SCREENS (Agent 4)

```
Build Home and Recovery screens for REVIA.
Reference Stitch designs for exact visual matching.

Screens to build:

1. HOME (Most important screen):
   - Greeting (Good morning/afternoon/evening) + name
   - Rotating subtitle ("One step at a time.")
   - Recovery Today card: progress bar, completed count, next activity, Continue button
   - Goal card: goal title, progress bar with percentage
   - Today list: activity items with checkmark (done) or circle (pending)
   - Progress summary: sessions count, consistency percentage
   - Bottom nav: Home, Recovery, Wellbeing, Progress, Learn, Profile

2. RECOVERY MAIN:
   - Phase card ("Phase 2 - Building Strength") with progress bar
   - Week indicator ("Week 4 of 8")
   - Focus chips with check/circle states
   - Quick links: Today's Plan, My Program, Exercises, Goals, Milestones

3. TODAY'S PLAN:
   - Progress bar "2 of 4 completed"
   - Activity cards (icon, name, duration, status)
   - "Start Next" button

4. EXERCISE LIBRARY:
   - Search bar
   - Filter chips (All, Mobility, Strength, Balance, Walking, etc.)
   - Exercise cards (thumbnail, name, difficulty badge, duration)

5. EXERCISE DETAIL:
   - Back arrow, exercise name, video player (16:9)
   - Difficulty badge, metadata (sets/reps/duration)
   - "Before you begin" bullet points
   - Safety note card (amber)
   - Large "START EXERCISE" button
   - Audio guidance toggle

6. EXERCISE SESSION:
   - Large rep counter "5 / 8"
   - Visual dots progress
   - Timer "00:42"
   - Video/illustration
   - Large "Pause" button
   - "How does this feel?" with 3 tappable options

7. EXERCISE COMPLETION:
   - Checkmark animation
   - Stats (duration, reps, feeling)
   - "Done" and "Next Exercise" buttons

8. GOALS — Current goal with progress bar, history, "Add Goal"
9. MILESTONES — Vertical timeline (Started, Building, Consistent, Independence)
10. JOURNEY — Vertical timeline with YOU ARE HERE marker
```

---

## STEP 7: WELLBEING, PROGRESS, LEARN (Agent 5)

```
Build Wellbeing, Progress, Learn, Profile, and Health screens.
Reference Stitch designs for exact styling.

Screens to build:

WELLBEING:
1. Main — mood/sleep/energy cards, check-in prompt, nutrition/mindfulness links
2. Daily Check-in flow:
   - Screen 1: Mood selection (5 emoji options, Skip button)
   - Screen 2: Sliders (Energy, Sleep, Fatigue)
   - Screen 3: Completion ("Thanks for checking in")
3. Mood log — history with dates
4. Sleep log — duration and quality entries

PROGRESS:
1. Main — time range selector, stats cards (2-column grid), goal card, wins list
2. Activity/Trends — weekly consistency grid, simple charts
3. Health — connected providers, metric cards (Steps, Heart Rate, Sleep, Weight)

LEARN:
1. Main — search bar, featured content cards, "For You" section
2. Article Detail — title, reviewer badge, clean reading layout, related articles

PROFILE:
1. Main — list: Account, Recovery Path, Goals, Medications, Health Connections,
   Notifications, Accessibility, Language, Privacy, Data & Export, Delete Account
2. Health Connections — connected providers, metric cards, disconnect option
3. Medication — time-based checklist (Morning/Afternoon/Evening)
```

---

## STEP 8: FIREBASE CLOUD FUNCTIONS (Agent 6)

```
Build Firebase Cloud Functions for REVIA.

1. Notification functions (FCM):
   - Exercise reminders
   - Medication reminders
   - Daily check-in reminders
   - Milestone celebrations

2. Data normalization functions
3. Progress aggregation
4. Scheduled processing
5. AI gateway (stub only, future)

6. Firestore security rules:
   - User ownership enforcement
   - Field-level validation
   - Immutable fields (createdAt, uid)
   - Valid state transitions

7. Storage security rules
8. App Check integration
```

---

## STEP 10: TESTING & VERIFICATION

```
After building, verify using Antigravity's browser subagent:

1. All screens render matching Stitch designs
2. Navigation works across all routes
3. Auth flow completes (sign in -> onboarding -> home)
4. Exercise session flow works end-to-end
5. Daily check-in flow works
6. Offline behavior for core workflows
7. Accessibility: large touch targets, readable text, screen reader labels
8. Error states display correctly
9. Loading states display correctly
10. Empty states display correctly
```

---

## FEATURES SUMMARY

### Recovery Module
- Personalized recovery plans (condition + goals)
- Exercise library: Mobility, Strength, Balance, Walking, Hand, Arm, Leg, Shoulder, Breathing, Speech, Cognitive, Functional Movement
- Exercise sessions: intro, safety, demo, performance, feedback, summary
- Milestones and timeline visualization
- Phase-based progression (Foundation, Building Strength, Independence, Everyday Life)

### Wellbeing Module
- Mood, sleep, energy tracking
- Daily check-in (fast, skippable, tap-based)
- Nutrition education, mindfulness, stress management

### Health Tracking
- Manual entry: BP, HR, SpO2, weight, steps, sleep, symptoms, energy, mood
- Apple HealthKit (iOS) + Android Health Connect
- Source distinction (manual vs device-imported)
- Just-in-time permission requests

### Education
- Condition guides, articles, videos, FAQs
- Clinical review metadata
- Trust signals: "Reviewed by a qualified healthcare professional"

### Medication
- Reminder and tracking system
- Schedule, taken/missed, refill reminders, history
- NO dosage changes, NO recommendations

### Engagement
- Push notifications (exercise, medication, check-in, milestones)
- Non-judgmental, encouraging language

---

## SAFETY BOUNDARIES

- NOT a replacement for doctors or healthcare professionals
- Does NOT diagnose medical conditions
- Does NOT prescribe or change medication
- Does NOT provide emergency services
- AI is educational/support only
- All clinical content requires review workflow
- Symptom escalation with appropriate guidance
- Emergency boundary: redirect to local emergency services

---

## OFFLINE SUPPORT

Core workflows offline:
- View recovery plan, view cached exercises
- Record exercise completion, daily check-in, health metrics
- Medication reminders
- Pending writes sync when connected

---

## ACCESSIBILITY

- Large touch targets (min 48x48px)
- Body text 16-18px
- High contrast, dynamic text
- Screen reader labels, captions, audio instructions
- Reduced motion support
- No color-only indicators

---

## LOCALIZATION

Languages: English, Hindi, Marathi
Design for translation from start.
Support longer text, local date/time, measurement units.
Future RTL readiness.

---

## BUILD ORDER

Build the smallest useful recovery loop first:

1. Foundation (Flutter, routing, Firebase, theme)
2. Auth + Onboarding
3. Home screen
4. Recovery plan + Exercise library
5. Exercise session flow
6. Daily check-in
7. Progress view
8. Then: Wellbeing, Learn, Profile, Health
9. Then: Cloud Functions

---

*REVIA — Move Forward. Live Better.*
```
