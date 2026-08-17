# REVIA — Mental Wellbeing & Depression Support Module

> **Whole-Person Recovery: Physical Recovery + Mental Wellbeing**

## 1. Purpose

REVIA should extend beyond physical rehabilitation to support the emotional and psychological side of recovery.

The module should be called **Mental Wellbeing**, rather than making **Depression** the primary navigation label.

It can include:

- Mood
- Stress
- Anxiety
- Sleep
- Motivation
- Emotional recovery
- Social connection
- Depression support
- Mindfulness / relaxation
- Evidence-based self-help

WHO describes psychological self-help as an evidence-based, scalable approach for depression and anxiety, including structured interventions that can be delivered digitally with or without brief support. citeturn0search0turn0search6

---

## 2. Product Architecture

```text
REVIA
│
├── ❤️ Heart Recovery
├── 🧠 Neuro Recovery
├── 🫘 Kidney Recovery
├── 🫀 Liver Recovery
│
└── 🧘 Mental Wellbeing
      ├── Mood
      ├── Stress
      ├── Anxiety
      ├── Sleep
      ├── Motivation
      ├── Emotional Recovery
      ├── Depression Support
      ├── Relaxation
      └── Social Connection
```

The long-term concept:

```text
             REVIA
               │
       ┌───────┴───────┐
       ↓               ↓
Physical Recovery   Mental Wellbeing
       │               │
Heart                Mood
Neuro                Stress
Kidney               Anxiety
Liver                Sleep
       │               │
       └───────┬───────┘
               ↓
        WHOLE-PERSON RECOVERY
               ↓
          Better Living
```

---

## 3. Core UX Principle

> **Support, don't diagnose.**

REVIA should help users:

- Understand their wellbeing
- Build healthy routines
- Track mood and energy
- Learn evidence-based self-help techniques
- Stay connected to their recovery
- Recognize when professional support may be appropriate

REVIA should not independently diagnose depression or prescribe treatment.

---

## 4. Mental Wellbeing Home

```text
Mental Wellbeing

How are you feeling today?

😊 Good
🙂 Okay
😐 Low
😔 Sad
😣 Overwhelmed

What would you like support with?

○ Mood
○ Stress
○ Sleep
○ Motivation
○ Anxiety
○ Recovery-related emotions
```

Keep the daily interaction short.

---

## 5. Daily Mood Check-in

### English

> **How are you feeling today?**

### Hindi

> **आज आप कैसा feel कर रहे हैं?**

Options:

```text
😊 Good
🙂 Okay
😐 Low
😔 Sad
😣 Overwhelmed
```

Optional:

- Energy
- Sleep
- Motivation
- Stress
- Social connection

---

## 6. Hindi UX Style

REVIA uses **English + Hindi**.

Hindi should be natural and modern, with familiar English healthcare/product terms.

Reference style:

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

Mental wellbeing examples:

> **आज आपका mood कैसा है?**

> **क्या आज आप थोड़ा overwhelmed feel कर रहे हैं?**

> **आपने आज एक छोटा step लिया है। यह भी progress है।**

Avoid unnecessarily Sanskritized language.

---

## 7. Depression Support Entry

Use gentle language:

> **Feeling low for a while?**

> Sometimes recovery can affect how we feel emotionally. REVIA can help you understand your wellbeing and explore self-help resources.

Buttons:

```text
[ Explore Support ]

[ Talk to a Professional ]
```

Do not tell a user they have depression based only on app data.

---

## 8. Depression Education

Create:

```text
Depression Support

What is depression?

Common signs

When low mood may need
professional support

What self-help can do

How physical recovery
and mental wellbeing can interact

When to seek help
```

WHO describes depression as more than ordinary mood changes and notes symptoms can include persistent low mood or loss of interest, sleep/appetite changes, tiredness, poor concentration, low self-worth, hopelessness and thoughts about dying. citeturn0search5

REVIA should educate without diagnosing.

---

## 9. Evidence-Based Self-Help

Potential approaches:

- Behavioural activation
- Problem solving
- CBT-informed exercises
- Interpersonal approaches
- Relaxation
- Stress management
- Routine building
- Social connection

WHO recommends structured psychological interventions for depression, including behavioural activation, CBT, interpersonal therapy and problem-solving approaches. citeturn0search4turn0search10

WHO's 2026 guidance also describes structured digital self-help as an evidence-based approach that can be delivered with or without brief support. citeturn0search0turn0search6

---

## 10. Behavioural Activation

A potential REVIA experience:

```text
Low mood
   ↓
Less activity
   ↓
Less positive experience
   ↓
Lower motivation
   ↓
More withdrawal
   ↺
```

REVIA can encourage small, achievable actions:

```text
What is one small thing
you would like to do today?

○ Take a short walk
○ Call someone
○ Sit outside
○ Take a shower
○ Listen to music
○ Do my recovery exercise
○ Something else
```

Do not promise that completing an activity will treat depression.

---

## 11. Recovery + Mental Wellbeing

This can be a major REVIA differentiator.

```text
Your Recovery

Physical
✓ 2 activities

Mental Wellbeing
✓ Mood check-in

Lifestyle
✓ Sleep logged

Today
3 small steps completed
```

Show relationships carefully without claiming causality.

---

## 12. Sleep

```text
Sleep

How did you sleep?

😴 Poor
😐 Okay
😊 Good

Duration
7h 10m

How rested do you feel?

Low ─────●──── High
```

HealthKit / Health Connect data can support this experience, but should not be presented as a diagnosis.

---

## 13. Motivation

Instead of:

> **You need to exercise.**

Use:

> **What's one small thing you feel able to do today?**

Examples:

```text
5-minute walk
Breathing
Mobility
Call someone
Read
Rest
```

The system should respect the user's clinically appropriate recovery plan.

---

## 14. Social Connection

```text
Connection can be part of recovery.

Who would you like to connect with today?

○ Family
○ Friend
○ Recovery group
○ Healthcare professional
○ No one today
```

Do not pressure users to socialize.

---

## 15. Relaxation

Potential activities:

- Slow breathing
- Guided relaxation
- Mindful attention
- Body awareness
- Grounding exercises

Example:

```text
Take a moment

Breathe in
   ↓
Hold
   ↓
Breathe out
   ↓
Repeat

2 minutes
```

All activities should be reviewed for appropriateness across REVIA's recovery pathways.

---

## 16. Mental Wellbeing Content

```text
Mental Wellbeing
│
├── Understanding Mood
├── Stress
├── Anxiety
├── Sleep
├── Motivation
├── Emotional Recovery
├── Depression Support
├── Relaxation
├── Social Connection
└── When to Seek Help
```

Content should be:

- Short
- Practical
- Evidence-informed
- Easy to read
- Available in English and Hindi
- Clinically reviewed where appropriate

---

## 17. Mental Wellbeing Dashboard

```text
Mental Wellbeing

This week

Mood
   ↑ Improving

Sleep
   → Stable

Energy
   ↑ Improving

Stress
   ↓ Lower

Check-ins
5 / 7 days

Small Wins

✓ Completed 3 recovery activities
✓ Connected with family
✓ Completed 5 check-ins
```

Do not turn this into a diagnostic dashboard.

---

## 18. Mood Trends

Show simple trends:

```text
Mood
Last 7 days

😊
│      ●
│   ●     ●
│ ●
│       ●
└────────────
 Mon ... Sun
```

Display:

> **These trends are for self-awareness and do not diagnose a mental health condition.**

---

## 19. Screening Boundary

REVIA should distinguish:

### Wellbeing check-in
Allowed.

### Self-awareness questionnaire
Potentially allowed with appropriate clinical review and validated instrument licensing.

### Depression screening
Only implement using a validated instrument under an appropriate clinical and legal framework.

### Diagnosis
Not performed by REVIA.

### Treatment decision
Not performed by REVIA unless appropriately regulated and clinically supervised.

---

## 20. Validated Questionnaires

If REVIA later implements screening, possible instruments include:

- PHQ-2
- PHQ-9
- GAD-2
- GAD-7

Before implementation:

1. Verify current licensing/usage terms.
2. Confirm translation rights.
3. Use validated Hindi versions where available.
4. Have clinical experts determine thresholds and interpretation.
5. Define the follow-up pathway.
6. Implement safety escalation.

Do not deploy a screening instrument merely because it is technically easy to implement.

---

## 21. Safety Architecture

```text
User Interaction
       ↓
Mood / Wellbeing Check
       ↓
Safety Signals
       │
       ├───────────────┐
       ↓               ↓
No urgent signal    Safety concern
       │               │
       ↓               ↓
Self-help        Human support pathway
                       │
                       ↓
                Professional / emergency
                     guidance
```

REVIA should never depend solely on an AI model to determine whether someone is in danger.

---

## 22. Self-Harm / Suicide Safety

If a user indicates thoughts of self-harm, suicide, immediate danger, or inability to stay safe, normal wellbeing flows should stop and a clear safety pathway should appear.

Example:

```text
We're glad you told us.

You don't have to handle this alone.

If you may be in immediate danger,
please seek emergency help now.

You can also contact a mental health
professional or trusted person.

[ Get Help ]

[ Contact Someone You Trust ]
```

Crisis and emergency contact information must be **country-specific, verified and kept current**.

For an India launch, use verified official Indian mental-health and emergency resources rather than hard-coding an unverified number.

---

## 23. AI Safety

AI should not be presented as:

- Therapist
- Psychiatrist
- Doctor
- Diagnostic system
- Crisis counselor
- Medication advisor

Preferred positioning:

# **REVIA Companion**

It can help with:

- Explaining educational content
- Guided reflection
- Routine planning
- Navigation
- Summarizing logged wellbeing data
- Encouragement
- Finding relevant REVIA resources

---

## 24. AI Example

User:

> "I'm feeling low today."

REVIA:

> **I'm sorry today feels difficult. Would you like to tell me a little more about what's making today harder?**

Options:

```text
○ My recovery
○ Sleep
○ Pain
○ Family
○ Work / money
○ Feeling lonely
○ I don't know
```

The AI should not immediately diagnose.

---

## 25. High-Risk AI Conversation

```text
AI
 ↓
Detect safety signal
 ↓
STOP normal conversation
 ↓
Activate safety flow
 ↓
Encourage immediate human help
 ↓
Provide verified local resources
 ↓
Offer trusted-person contact
```

Do not continue with generic motivational conversation.

---

## 26. AI + Health Data

Do not send the complete health profile to the AI.

Use minimum necessary context.

### Prefer

```text
User:
"Why has my mood changed this week?"

AI context:
Relevant mood entries
Relevant sleep trend
Relevant activity trend
```

### Avoid

```text
Full health history
+
Medication history
+
All health metrics
+
Unrelated personal data
```

---

## 27. Notifications

### Good

> **How are you feeling today?**

> **A small step is still a step.**

> **Take a moment for yourself today.**

> **Your recovery plan is ready.**

### Avoid

> **You missed your mental health goal!**

> **Your mood is getting worse!**

> **You haven't completed today's wellness target!**

Never use guilt or fear to drive engagement.

---

## 28. Privacy

Mental-health information is highly sensitive.

REVIA should:

- Minimize collection
- Encrypt data in transit and at rest
- Restrict internal access
- Provide clear consent
- Allow account/data deletion
- Explain health-data use
- Minimize AI data sharing
- Separate analytics from identifiable health data where possible
- Log access to sensitive data where appropriate

Design the privacy model before launch.

---

## 29. Firebase Data Model

Recommended conceptual structure:

```text
users/
  {uid}/

    wellbeing/
      current_state

    wellbeing_checkins/
      {checkinId}
        mood
        energy
        sleep
        stress
        motivation
        created_at

    wellbeing_goals/
      {goalId}
        type
        title
        status

    wellbeing_activities/
      {activityId}
        type
        completed
        created_at

    safety_events/
      {eventId}
        type
        severity
        created_at
        handled
```

Safety-event access should be tightly restricted.

---

## 30. Firestore Security

Conceptually:

```text
Patient
  ↓
Own wellbeing data only

Admin
  ↓
No default access

Analytics
  ↓
Aggregated / de-identified where possible

AI
  ↓
Minimum necessary context
```

Never expose mental-health records through public APIs.

---

## 31. Storage

Firebase Storage can contain:

- Guided audio
- Educational videos
- Relaxation audio
- Illustrations
- Localized content assets

Do not store sensitive journal content in publicly accessible storage.

---

## 32. Journal

Optional private journal:

```text
How was today?

[ Write something... ]

What helped?

[ Write something... ]

One small thing I'm grateful for:

[ Write something... ]

[ Save privately ]
```

Do not automatically send journal content to AI.

If AI analysis is introduced later, require clear consent and explain exactly what is processed.

---

## 33. Mental Wellbeing Goals

```text
My Goal

○ Improve sleep
○ Build a daily routine
○ Reduce stress
○ Stay connected
○ Build motivation
○ Manage recovery-related emotions
○ Understand my mood
```

Avoid promises such as:

> Cure depression in 30 days.

---

## 34. Integration Across REVIA

Mental wellbeing should appear throughout the app.

### Home

```text
Today's Recovery

✓ Mobility
✓ Walking
○ Mood check-in
○ Breathing
```

### Progress

```text
Physical Recovery
Mental Wellbeing
Lifestyle
```

### Notifications

```text
Your recovery plan is ready.

Take a moment for today's check-in.
```

Mental wellbeing should feel integrated, not bolted on.

---

## 35. Exercise + Mental Wellbeing

Physical activity can be part of a broader recovery routine, but REVIA must not imply that exercise alone treats depression.

Example:

> **Your mobility session is ready.**

> **If you're feeling able, completing your prescribed activity can be one small step in today's routine.**

Always prioritize the user's clinically appropriate recovery plan.

---

## 36. Clinical Review

Mental wellbeing content should have metadata:

```text
content/
  {contentId}

    title
    body
    language

    clinical_review:
      reviewed: true
      reviewer_type
      reviewed_at
      review_version

    sources[]
    status
```

Potential reviewers:

- Clinical psychologist
- Psychiatrist
- Mental-health professional
- Rehabilitation specialist
- Medical content reviewer

---

## 37. Content Safety Review

Every mental-health article should be checked for:

- Diagnostic claims
- Treatment claims
- Medication claims
- Suicide/self-harm language
- Unsafe advice
- Cultural sensitivity
- Hindi translation accuracy
- Crisis escalation
- Evidence/source quality

---

## 38. English + Hindi Examples

### English

> **How are you feeling today?**

> **You completed two activities today. Your mobility exercise is still remaining.**

### Hindi

> **आज आप कैसा feel कर रहे हैं?**

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

This is the preferred REVIA Hindi style:

> **Natural Hindi + familiar English healthcare terms.**

---

## 39. MVP Scope

Do not build a full digital psychiatry platform in the first release.

### P0

- Mental Wellbeing section
- Daily mood check-in
- Energy
- Sleep
- Stress
- Motivation
- Wellbeing education
- Basic relaxation
- Mental-health safety flow
- Professional-help guidance
- English + Hindi

### P1

- Behavioural activation activities
- Structured self-help
- Mood trends
- Wellbeing goals
- Journal
- Guided audio
- Recovery/mental wellbeing correlations

### P2

- AI Companion
- Validated screening instruments
- Guided programs
- Professional referral integrations
- Advanced personalization
- Research / clinical outcome studies

---

## 40. MVP Screens

```text
1. Mental Wellbeing Home
2. Daily Mood Check-in
3. Mood Detail
4. Stress
5. Sleep
6. Motivation
7. Wellbeing Activity
8. Relaxation
9. Depression Support
10. Mental Wellbeing Article
11. Safety / Get Help
12. Wellbeing Progress
13. Wellbeing Goals
14. Settings / Privacy
```

---

## 41. UX Flow

```text
Mental Wellbeing
       ↓
Daily Check-in
       ↓
Mood / Energy / Sleep
       ↓
Personalized Support
       │
       ├── Learn
       ├── Small Activity
       ├── Relax
       ├── Connect
       └── Seek Professional Support
       ↓
Progress
       ↓
Next Check-in
```

---

## 42. Safety-First Logic

```text
                    User
                      │
                      ↓
              Wellbeing Check
                      │
          ┌───────────┴───────────┐
          ↓                       ↓
    Normal wellbeing        Distress signal
          │                       │
          ↓                       ↓
      Self-help              Safety check
          │                       │
          │              ┌────────┴────────┐
          │              ↓                 ↓
          │          No immediate       Immediate
          │             danger            concern
          │              ↓                 ↓
          │        Professional       Urgent human
          │          support              help
          │                                │
          └──────────────┬─────────────────┘
                         ↓
                   Continued Care
```

---

## 43. What REVIA Should Never Do

Do not:

- Diagnose depression from mood data
- Diagnose anxiety from a check-in
- Recommend prescription medication
- Recommend changing medication
- Tell a patient to stop medication
- Replace a psychologist/psychiatrist
- Promise recovery
- Treat suicide risk as an ordinary chatbot conversation
- Use guilt-based mental-health notifications
- Sell identifiable mental-health data
- Automatically expose journals to AI
- Infer sensitive conditions for advertising
- Present AI output as medical advice

---

## 44. Evidence & Clinical Foundation

WHO recommends structured psychological interventions for depression, including behavioural activation, CBT, interpersonal therapy and problem-solving treatment. citeturn0search4turn0search10

WHO's 2026 psychological self-help guidance describes structured self-help as an evidence-based, scalable approach and includes the **Step-by-Step** depression intervention and **Doing What Matters in Times of Stress**. citeturn0search0turn0search1

The WHO 2026 self-help manual is available under a CC BY-NC-SA 3.0 IGO licence; commercial use requires permission. Do not copy WHO intervention content directly into a commercial REVIA product without confirming licensing and permissions. citeturn0search7

---

## 45. Research & Validation Strategy

Before positioning REVIA as a depression treatment product:

```text
Prototype
 ↓
Usability Study
 ↓
Clinical Content Review
 ↓
Safety Review
 ↓
Pilot
 ↓
Outcome Measurement
 ↓
Clinical Validation
 ↓
Regulatory Assessment
 ↓
Scale
```

Do not market an unvalidated mental-health intervention as a treatment.

---

## 46. Success Metrics

### Product

- Check-in completion
- Wellbeing activity completion
- Self-help module completion
- Return usage
- Content completion

### Experience

- User-reported usefulness
- Ease of use
- Confidence
- Satisfaction

### Safety

- Safety-flow activation
- Successful help-seeking pathways
- False-positive / false-negative review
- Escalation completion

### Clinical research

If formally validated later:

- Validated symptom measures
- Functional outcomes
- Adherence
- Clinical outcomes
- Safety outcomes

Clinical metrics should be defined with qualified mental-health professionals and appropriate study design.

---

## 47. Positioning

Do not call REVIA:

- AI Therapist
- Depression Cure App
- Psychiatrist in Your Phone
- Mental Health Doctor

Instead:

# **REVIA Mental Wellbeing**

Supporting message:

> **Support for the emotional side of recovery.**

Alternative:

> **Your mind is part of your recovery too.**

---

## 48. Marketing Message

Primary:

> **Recovery is more than physical.**

Supporting:

> **REVIA supports your physical recovery and mental wellbeing in one journey.**

Then:

```text
❤️ Heart
🧠 Neuro
🫘 Kidney
🫀 Liver
🧘 Mental Wellbeing
```

CTA:

> **Start Your Recovery**

---

## 49. Final Product Vision

REVIA evolves from:

```text
Rehabilitation App
```

into:

```text
                    REVIA
                      │
             Recovery Companion
                      │
       ┌──────────────┴──────────────┐
       ↓                             ↓
Physical Recovery              Mental Wellbeing
       │                             │
Heart                           Mood
Neuro                           Stress
Kidney                          Anxiety
Liver                           Sleep
                                Motivation
                                Connection
       │                             │
       └──────────────┬──────────────┘
                      ↓
                Whole-Person
                   Recovery
                      ↓
                Better Living
```

---

## 50. Final UX Statement

> **REVIA should help people recover as a whole person — not just as a body.**

Physical recovery matters.

Mental wellbeing matters.

Daily routines matter.

Connection matters.

Progress matters.

And when someone needs professional mental-health care, REVIA should make that next step **clear, safe and easy**.

# REVIA
## **Move Forward. Live Better.**
