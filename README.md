# NIRVAN

> **Move Forward. Live Better.**

A mobile-first digital rehabilitation and wellbeing platform designed to support people through the journey of recovery.

---

## About

NIRVAN brings rehabilitation, movement, wellbeing, education and progress together in one patient-focused experience. Built for people recovering from cardiac events, stroke, kidney disease, liver conditions and more — NIRVAN helps patients stay connected to their recovery journey between appointments, understand their progress, build healthy routines and keep moving forward.

**NIRVAN is not a replacement for doctors or healthcare professionals.** It is a supportive digital companion that helps make recovery easier to understand, easier to follow and easier to measure.

### The Name

- **RE** — Return, Recovery, Renewal, Rebuild
- **VIA** — Path, Journey, Way Forward

> **NIRVAN = The path back to strength and wellbeing.**

Inspired by ancient ideas of resilience — *Dhṛti* (fortitude), *Utthāna* (rising), *Pratyāgati* (returning) — and the modern story of the wanderer who walks The Path regardless of what lies ahead.

---

## Recovery Pathways

| Pathway | Focus |
|---------|-------|
| **Cardiac** | Heart attack recovery, cardiac rehabilitation, cardiovascular lifestyle management |
| **Neuro** | Stroke, paralysis, mobility impairment, motor rehabilitation, balance, speech and cognitive recovery |
| **Kidney** | Chronic kidney disease, dialysis rehabilitation, fatigue and physical-function support |
| **Liver** | Cirrhosis-related functional decline, muscle preservation, nutrition education, physical rehabilitation |

---

## Key Features

### Recovery
- Personalized recovery plans based on condition, goals and clinician-approved principles
- Exercise library with categories: Mobility, Strength, Balance, Walking, Hand, Arm, Leg, Shoulder, Breathing, Speech, Cognitive, Functional Movement
- Exercise sessions with introduction, safety info, demonstration, performance tracking, feedback and summary
- Recovery milestones and timeline visualization

### Wellbeing
- Mood, sleep and energy tracking
- Nutrition education and mindfulness support
- Daily check-in — short, skippable interactions
- Stress management and healthy habit building

### Health Tracking
- Blood pressure, heart rate, SpO2, weight, steps, sleep, exercise, symptoms, energy, mood
- Apple HealthKit (iOS) and Android Health Connect integration
- Manual entry and device-imported data with clear source distinction

### Education
- Condition guides, exercise education, articles, videos, FAQs
- All clinical content reviewed by qualified professionals with tracked review metadata

### Medication Management
- Reminder and tracking system with schedule, taken/missed logging, refill reminders and history

### More
- Offline-first functionality for core workflows
- Multilingual support (English, Hindi, Marathi; more planned)
- Voice-first accessibility (speech-to-text, text-to-speech, voice navigation)
- Push notifications for exercises, medication, check-ins and milestones
- Privacy controls, data export and account deletion

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Mobile** | Flutter (Dart) — single codebase for iOS + Android |
| **Backend** | Firebase (Firestore, Authentication, Cloud Storage, Cloud Functions, FCM, App Check) |
| **Health APIs** | Apple HealthKit, Android Health Connect |
| **Website** | Next.js, TypeScript, Tailwind CSS |
| **AI** | LLM API, RAG pipeline, Cloud Run (future) |
| **Secrets** | Google Cloud Secret Manager |

### Architecture Principles

- Mobile-first, Firebase-native
- Offline-first for core patient workflows
- Privacy and security by design
- Clinical safety by design
- Modular, scalable architecture
- AI as supporting capability, never clinical authority

---

## Project Structure

```
Nirvan/
├── docs/
│   ├── 01-product/          # Product definition and brand story
│   ├── 02-architecture/     # System architecture and database schema
│   ├── 03-mobile/           # UX specification, design system, navigation
│   ├── 04-health/           # Health data model and clinical safety
│   ├── 05-security/         # Security, privacy and Firebase rules
│   ├── 06-website/          # Website spec, SEO and content strategy
│   ├── 07-development/      # Development plan, testing and contributing
│   └── NIRVAN_Brand_Story.md # Complete brand narrative
├── .git/
└── README.md
```

---

## Brand Philosophy

> **Every step forward matters.**

Recovery is not linear. A difficult day does not erase previous progress. NIRVAN celebrates meaningful progress without turning recovery into a competition.

> **Consistency over perfection.**

### Brand Personality

Human, Calm, Encouraging, Trustworthy, Respectful, Hopeful, Resilient, Modern

### Five-Word Philosophy

**Return. Rebuild. Recover. Regain. Renew.**

---

## Development

### Status

Pre-Development / Product Definition

### Development Phases

| Phase | Name | Focus |
|-------|------|-------|
| 0 | Discovery | Scope confirmation, clinical advisors, user research, regulatory review |
| 1 | Foundation | Project setup, Firebase infrastructure, authentication, CI/CD |
| 2 | Onboarding | Welcome flow, profile, language, condition selection, consent |
| 3 | Recovery | Recovery plans, exercise library, sessions, milestones, progress |
| 4 | Wellbeing | Mood, sleep, daily check-in, nutrition, lifestyle |
| 5 | Health | Manual metrics, HealthKit/Health Connect integration |
| 6 | Engagement | Notifications, reminders, milestone celebrations |
| 7 | Website | Next.js site, SEO, content, blog, newsletter |
| 8 | AI | AI assistant, RAG pipeline, safety classification, voice |
| 9 | Advanced | Computer vision, wearables, personalization |

### Testing

- Unit and widget tests for business logic and UI components
- Integration tests for Firebase, authentication and health integrations
- Security tests for Firestore rules, storage rules and authentication
- Offline sync and conflict resolution tests
- Accessibility tests (VoiceOver, TalkBack, Dynamic Type)
- Performance and device matrix testing

---

## Contributing

See [docs/07-development/CONTRIBUTING.md](docs/07-development/CONTRIBUTING.md) for branch naming, commit conventions, PR requirements and code quality standards.

### Branch Naming

- `main` — production
- `develop` — integration
- `feature/*` — new features
- `fix/*` — bug fixes
- `chore/*` — maintenance
- `docs/*` — documentation

### Commit Format

```
feat: add recovery plan screen
fix: resolve offline sync conflict
docs: update brand story with Rivia inspiration
```

---

## Clinical Safety

NIRVAN provides clinician-reviewed educational content and rehabilitation support. It does **not**:

- Diagnose medical conditions
- Prescribe medication or change dosages
- Replace doctors, physiotherapists or healthcare professionals
- Provide emergency services

All clinical content follows a review workflow: **Draft → Clinical Review → Safety Review → Approved → Publish → Periodic Review**

---

## Privacy & Security

- Firebase Authentication with Google, Email, Phone OTP and Apple Sign-In
- Firestore Security Rules enforcing user ownership and data validation
- Firebase App Check for API attestation
- TLS encryption in transit, provider-managed encryption at rest
- Minimum necessary data collection
- Consent tracking for Terms, Privacy and Health-data integration
- Account deletion and data export mechanisms

See [docs/05-security/](docs/05-security/) for full security architecture, privacy architecture and Firebase rules.

---

## License

[Add license here]
