# REVIA — Health Data Model

## 1. Purpose

Create one internal health-data model for iOS and Android while keeping platform-specific APIs isolated.

## 2. Sources

```text
manual
healthkit
health_connect
wearable
future_google_health
```

## 3. Normalized Record

```json
{
  "id": "uuid",
  "type": "steps",
  "value": 5420,
  "unit": "count",
  "startTime": "timestamp",
  "endTime": "timestamp",
  "source": "health_connect",
  "sourceDevice": "device-id",
  "recordedAt": "timestamp"
}
```

## 4. Initial Supported Metrics

### Activity

- Steps
- Walking distance
- Exercise sessions

### Cardiovascular

- Heart rate

### Body

- Weight

### Sleep

- Sleep duration

Additional data types should be added only when there is a clear product and clinical rationale.

## 5. Platform Mapping

```text
REVIA Metric
     │
 ┌───┴─────────────┐
 │                 │
iOS               Android
 │                 │
HealthKit       Health Connect
```

## 6. Permission Model

Request permissions just in time.

Example:

```text
User opens Activity
 ↓
Explain benefit
 ↓
Connect Health
 ↓
OS permission
 ↓
Grant / Deny
```

## 7. Sync Rules

- Sync only permitted data.
- Preserve source.
- Preserve original timestamps.
- Deduplicate records.
- Support incremental synchronization.
- Never overwrite manual data with imported data without explicit rules.

## 8. Privacy

Health data must not be unnecessarily copied into:

- Analytics
- Crash reports
- Logs
- AI prompts
- Public storage

## 9. Health Data vs Clinical Data

Imported consumer health data should not automatically be treated as medically validated clinical measurements.

Display source and context where meaningful.

## 10. Disconnect

Users must be able to disconnect a health provider.

Disconnecting stops future synchronization but does not automatically erase historical data unless the user requests deletion or policy requires it.

## 11. Google Fit

Do not make Google Fit the new Android architecture.

Use Health Connect for Android mobile health integration and evaluate Google Health API for future cloud-centric Google health integrations.

