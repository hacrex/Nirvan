# REVIA — Clinical Safety Framework

## 1. Purpose

Define boundaries that prevent REVIA from being interpreted as a replacement for qualified healthcare professionals.

## 2. REVIA CAN

- Provide clinician-reviewed educational content.
- Present rehabilitation content within defined product boundaries.
- Track user-entered activity.
- Track selected health metrics.
- Track adherence.
- Provide reminders.
- Display progress.
- Provide supportive wellbeing content.
- Explain general rehabilitation concepts.
- Help users find relevant educational resources.

## 3. REVIA MUST NOT

- Diagnose a medical condition.
- Prescribe medication.
- Change medication dosage.
- Independently prescribe clinical treatment.
- Override clinician instructions.
- Claim to replace a clinician.
- Provide false emergency reassurance.
- Claim a disease is cured.
- Make unsupported medical claims.
- Present AI output as clinical fact.

## 4. Clinical Content Workflow

```text
Draft
 ↓
Clinical Review
 ↓
Safety Review
 ↓
Approved
 ↓
Publish
 ↓
Periodic Review
```

Every clinical content item should record:

- Reviewer
- Review date
- Version
- Sources
- Next review date

## 5. Exercise Safety

Every exercise should have:

- Intended purpose
- Instructions
- Appropriate population/context
- Safety notes
- Stop/seek-help guidance where applicable
- Clinical review status

## 6. Symptom Escalation

```text
User reports symptom
       ↓
Product safety logic
       ↓
Normal / non-urgent guidance
       │
       └── Concerning
              ↓
       Appropriate medical guidance
```

Thresholds must be clinically reviewed before implementation.

## 7. Emergency Boundary

REVIA is not an emergency service.

When an interaction indicates a possible emergency, the app should provide clear, locally appropriate emergency guidance rather than attempting diagnosis.

## 8. AI Safety

AI must:

- Identify high-risk requests.
- Use approved knowledge where possible.
- Avoid diagnosis.
- Avoid medication changes.
- Avoid unsupported treatment recommendations.
- Escalate high-risk scenarios.
- Clearly communicate limitations.

## 9. Clinical Advisory

Before public launch, establish qualified clinical review for:

- Cardiac pathway
- Neuro pathway
- Kidney pathway
- Liver pathway
- Exercise library
- Safety guidance
- Patient education
- AI safety prompts

## 10. Incident Management

Create a process for:

- Incorrect content
- Safety reports
- User complaints
- AI failures
- Exercise concerns
- Data incidents

All safety incidents should have documented ownership and resolution.

