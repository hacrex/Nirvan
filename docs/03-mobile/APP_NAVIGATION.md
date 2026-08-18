# NIRVAN — App Navigation

## 1. Primary Navigation

```text
Home
Recovery
Wellbeing
Progress
Learn
Profile
```

## 2. Home Routes

```text
/home
/home/today
/home/check-in
/home/notifications
```

## 3. Recovery Routes

```text
/recovery
/recovery/plan
/recovery/exercises
/recovery/exercises/:id
/recovery/session/:id
/recovery/milestones
/recovery/goals
```

## 4. Wellbeing Routes

```text
/wellbeing
/wellbeing/mood
/wellbeing/sleep
/wellbeing/nutrition
/wellbeing/mindfulness
```

## 5. Progress Routes

```text
/progress
/progress/overview
/progress/goals
/progress/activity
/progress/health
```

## 6. Learn Routes

```text
/learn
/learn/conditions
/learn/conditions/:id
/learn/exercises
/learn/articles
/learn/articles/:id
/learn/videos
/learn/faq
```

## 7. Profile Routes

```text
/profile
/profile/account
/profile/conditions
/profile/goals
/profile/medications
/profile/health-connections
/profile/notifications
/profile/accessibility
/profile/privacy
/profile/data
```

## 8. Authentication

```text
/auth
/auth/sign-in
/auth/sign-up
/auth/google
/auth/phone
/auth/forgot-password
```

## 9. Onboarding

```text
/onboarding
/onboarding/profile
/onboarding/language
/onboarding/condition
/onboarding/goals
/onboarding/consent
/onboarding/complete
```

## 10. Global Rules

- Protected routes require authentication.
- Onboarding must be completed before Home.
- Deep links must resolve safely.
- Logout clears private local state.
- Account deletion clears local credentials and starts server-side deletion workflow.
- Permission screens should be reachable again from Settings.

