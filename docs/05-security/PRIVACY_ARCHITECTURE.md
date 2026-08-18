# NIRVAN — Privacy Architecture

## 1. Privacy Principle

Collect the minimum data required to provide the product.

## 2. Data Classes

### Public

- Marketing pages
- Blog
- News
- Public education

### Internal

- Product configuration
- Operational metrics

### Sensitive

- Profile
- Goals
- Recovery history
- Medication
- Health metrics
- Wellbeing logs

### Highly Sensitive

- Medical documents
- Raw patient video
- Detailed health records

## 3. Data Flow

```text
Mobile
 ↓
Authenticated Firebase
 ↓
Validated Application Data
 ↓
Firestore / Storage
```

## 4. AI Privacy

Do not send the entire patient profile to an LLM.

Send minimum necessary context.

## 5. Analytics Privacy

Analytics should track product events without unnecessary health details.

Bad:

```text
exercise_completed_condition=cirrhosis
```

Better:

```text
exercise_completed
```

## 6. Consent

Track consent versions and timestamps for:

- Terms
- Privacy
- Health-data integration
- Optional communications
- AI features where required

## 7. Health Integrations

Explain:

- What data is accessed
- Why it is accessed
- How it is used
- How to disconnect

## 8. Account Deletion

Account deletion should initiate:

```text
Request
 ↓
Verify identity
 ↓
Delete / anonymize applicable records
 ↓
Delete storage objects
 ↓
Revoke sessions
 ↓
Complete deletion workflow
```

Backups must follow documented retention rules.

## 9. Data Export

Provide an export mechanism where required.

## 10. Retention

Define retention separately for:

- Active account data
- Deleted account data
- Logs
- Backups
- AI sessions
- Analytics

## 11. Privacy Documentation

Before launch:

- Privacy Policy
- Terms
- Consent language
- Data retention policy
- Data deletion procedure
- Security incident process

## 12. Regulatory Review

Obtain professional review for applicable Indian and international privacy, healthcare and software regulations before production launch.

