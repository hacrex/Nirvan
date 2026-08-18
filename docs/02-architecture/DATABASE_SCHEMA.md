# NIRVAN — Database Schema

## 1. Database Strategy

Cloud Firestore is the primary persistent database.

Firebase Realtime Database is reserved for realtime/ephemeral state.

Cloud Storage stores binary media.

## 2. Firestore Structure

```text
/users/{uid}

/users/{uid}/profile/main
/users/{uid}/conditions/{conditionId}
/users/{uid}/goals/{goalId}
/users/{uid}/recoveryPlans/{planId}
/users/{uid}/exerciseSessions/{sessionId}
/users/{uid}/dailyCheckins/{checkinId}
/users/{uid}/healthMetrics/{metricId}
/users/{uid}/medications/{medicationId}
/users/{uid}/medicationLogs/{logId}
/users/{uid}/progress/{progressId}
/users/{uid}/milestones/{milestoneId}
/users/{uid}/deviceConnections/{deviceId}
/users/{uid}/consents/{consentId}
/users/{uid}/notificationPreferences/main
/users/{uid}/aiSessions/{sessionId}

/conditions/{conditionId}
/exercises/{exerciseId}
/programs/{programId}
/content/{contentId}
/articles/{articleId}
/news/{newsId}
/faq/{faqId}
/appConfig/{configId}
```

## 3. User Document

```json
{
  "uid": "firebase-uid",
  "displayName": "User",
  "preferredLanguage": "en",
  "timezone": "Asia/Kolkata",
  "onboardingCompleted": true,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

Avoid storing unnecessary sensitive information.

## 4. Recovery Goal

```json
{
  "title": "Walk independently",
  "category": "mobility",
  "target": "50 meters",
  "status": "active",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 5. Exercise

```json
{
  "name": "Sit to Stand",
  "conditionIds": ["neuro"],
  "category": "mobility",
  "difficulty": "beginner",
  "durationSeconds": 300,
  "equipment": [],
  "videoPath": "exercises/neuro/sit-to-stand.mp4",
  "languages": ["en", "hi", "mr"],
  "clinicalReviewStatus": "approved",
  "clinicalReviewDate": "timestamp",
  "version": 1
}
```

## 6. Exercise Session

```json
{
  "exerciseId": "exercise123",
  "startedAt": "timestamp",
  "completedAt": "timestamp",
  "completionStatus": "completed",
  "patientFeedback": "comfortable",
  "source": "assigned_plan"
}
```

## 7. Health Metric

```json
{
  "type": "heart_rate",
  "value": 76,
  "unit": "bpm",
  "source": "health_connect",
  "recordedAt": "timestamp",
  "sourceDevice": "device-id"
}
```

## 8. Medication

```json
{
  "name": "Medication",
  "schedule": [
    {"hour": 8, "minute": 0}
  ],
  "active": true,
  "createdAt": "timestamp"
}
```

NIRVAN records reminders and patient-entered adherence. It must not alter prescribed medication.

## 9. Daily Check-in

```json
{
  "mood": "good",
  "energy": 3,
  "fatigue": 2,
  "sleepQuality": 4,
  "createdAt": "timestamp"
}
```

Use controlled scales with documented meanings.

## 10. Consent

```json
{
  "type": "health_data",
  "version": "1.0",
  "granted": true,
  "grantedAt": "timestamp",
  "revokedAt": null
}
```

## 11. Realtime Database

Use only where appropriate:

```text
/presence/{uid}
/liveSessions/{sessionId}
/syncState/{uid}
```

Firestore remains the source of truth for permanent application data.

## 12. Indexing

Create indexes only for actual query requirements.

Examples:

- User + createdAt
- User + status
- Condition + category
- Exercise + difficulty
- Content + publication status + publishedAt

## 13. Retention

Define retention periods before production launch for:

- Health logs
- Exercise sessions
- AI sessions
- Audit data
- Deleted-account data
- Backups

