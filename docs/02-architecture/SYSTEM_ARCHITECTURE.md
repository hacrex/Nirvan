# REVIA — System Architecture

## 1. Purpose

Define the production architecture for the REVIA iOS/Android rehabilitation and wellbeing platform and its public marketing website.

## 2. Architecture Principles

- Mobile-first
- Firebase-native
- Offline-first for core patient workflows
- Privacy and security by design
- Clinical safety by design
- Modular architecture
- Minimum necessary data collection
- Platform-independent health abstraction
- AI as a supporting capability, never the clinical authority

## 3. High-Level Architecture

```text
iOS / Android
   │
   ├── Flutter App
   │      ├── Auth
   │      ├── Recovery
   │      ├── Wellbeing
   │      ├── Health
   │      ├── Progress
   │      └── Education
   │
   └── Native Health APIs
          ├── Apple HealthKit
          └── Android Health Connect
                 │
                 ▼
             Firebase
   ┌─────────────┼─────────────────────┐
   │             │                     │
 Auth        Firestore              Storage
   │             │                     │
   │          User data              Media
   │             │
   │           RTDB
   │             │
   │         Live state
   │
   └──────── Cloud Functions ──────────┐
                         │             │
                       FCM           AI/RAG
                         │             │
                      Push          Cloud Run
                                     │
                                External LLM
```

## 4. Website

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS
- MDX or headless CMS
- Firebase-backed services where required
- SEO-first rendering

The website is public and should not expose private patient data.

## 5. Application Layers

### Presentation

Flutter screens, navigation, accessibility and design system.

### Domain

Recovery goals, plans, exercise sessions, wellbeing and progress rules.

### Data

Firebase SDKs, local persistence, synchronization and health adapters.

### Infrastructure

Authentication, Firestore, Storage, Functions, FCM, App Check and monitoring.

## 6. Data Flow

```text
User Action
   ↓
Flutter UI
   ↓
Domain Validation
   ↓
Repository
   ↓
Local Cache
   ↓
Firebase
   ↓
Server Validation / Rules
   ↓
Persistent Data
```

## 7. Offline Strategy

Core workflows should continue offline:

- View assigned recovery plan
- View cached exercises
- Record exercise completion
- Record daily check-in
- Record selected health metrics
- Medication reminders

Pending writes are synchronized when connectivity returns.

## 8. Health Abstraction

Never let application business logic depend directly on HealthKit or Health Connect.

Use:

```text
HealthProvider
   ├── HealthKitProvider
   └── HealthConnectProvider
          ↓
     NormalizedHealthRecord
```

## 9. Backend Responsibilities

Cloud Functions / Cloud Run handle trusted operations such as:

- Notifications
- Data normalization
- AI gateway
- Scheduled processing
- Progress aggregation where server-side calculation is required
- External API integrations

## 10. Production Environments

Maintain:

- `REVIA-dev`
- `REVIA-staging`
- `REVIA-prod`

No development testing against production data.

## 11. Scalability

Start with a modular Firebase architecture rather than premature microservices.

Introduce Cloud Run or additional services only when workload boundaries justify them.

## 12. Architecture Decision

**Primary recommendation:**

Flutter + Firebase + Google Cloud + HealthKit + Health Connect + Next.js.

