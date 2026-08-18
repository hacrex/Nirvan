# NIRVAN — English & Hindi Language UX Specification

> **Move Forward. Live Better.**

## 1. Purpose

NIRVAN will support Indian users with two language options:

- **English**
- **हिन्दी (Hindi)**

The language choice appears **when the app starts, before Sign Up or Login**.

The objective is simple:

> **Make NIRVAN easy to understand in both English and natural, modern Hindi.**

Hindi should not be overly formal or Sanskritized. Familiar healthcare and product terms may remain in English when that makes the sentence clearer.

Example:

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

This is the preferred Hindi style for NIRVAN.

---

# 2. First-Launch Flow

```text
NIRVAN Splash
     ↓
Choose Your Language
     ↓
English / हिन्दी
     ↓
Sign Up / Login
     ↓
Onboarding
     ↓
Recovery Path
     ↓
Personal Goal
     ↓
Today's Recovery
```

---

# 3. Language Selection Screen

```text
┌──────────────────────────────┐
│                              │
│            NIRVAN             │
│                              │
│      Move Forward.           │
│        Live Better.          │
│                              │
│      Choose your language    │
│                              │
│  ┌────────────────────────┐  │
│  │  🇬🇧  English           │  │
│  └────────────────────────┘  │
│                              │
│  ┌────────────────────────┐  │
│  │  🇮🇳  हिन्दी            │  │
│  └────────────────────────┘  │
│                              │
│     You can change this      │
│     later in Settings.       │
│                              │
└──────────────────────────────┘
```

Use the native language name:

- **English**
- **हिन्दी**

Do not add Hinglish as a separate option.

---

# 4. Language Identifiers

Recommended internal identifiers:

| ID | Language |
|---|---|
| `en-IN` | English |
| `hi-IN` | Hindi |

Keep the localization architecture extensible so additional Indian languages can be added later.

---

# 5. Brand Language

Never translate the brand name.

Always:

# **NIRVAN**

Pronunciation:

> **Ree-vee-ya / री-वी-या**

The global tagline remains:

> **Move Forward. Live Better.**

Hindi version:

> **आगे बढ़ें। बेहतर जिएँ।**

The English tagline should remain the primary global brand expression.

---

# 6. Hindi Writing Philosophy

NIRVAN Hindi should be:

- Natural
- Modern
- Conversational
- Clear
- Respectful
- Healthcare-friendly
- Easy for older users to understand

Avoid unnecessarily formal Hindi.

### Avoid

> **आज अपने पुनर्वास कार्यक्रम का अनुपालन करें।**

### Prefer

> **आज का Recovery Plan पूरा करें।**

---

# 7. Hindi + Familiar English Terms

NIRVAN should allow commonly understood English healthcare/product words inside Hindi sentences.

### Example

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

This is preferred over forcing every English word into formal Hindi.

Other examples:

> **आज की recovery कैसी चल रही है?**

> **आपका Recovery Plan तैयार है।**

> **आज की exercise शुरू करें।**

> **आपकी progress अच्छी चल रही है।**

> **आज का check-in पूरा करें।**

> **आपने इस week 4 sessions पूरे किए हैं।**

---

# 8. Hindi Terminology Guidelines

| Concept | Preferred Hindi UI |
|---|---|
| Recovery | Recovery / रिकवरी |
| Rehabilitation | Rehabilitation / रिहैबिलिटेशन |
| Exercise | Exercise / एक्सरसाइज़ |
| Progress | Progress / प्रोग्रेस |
| Goal | Goal / लक्ष्य |
| Check-in | Check-in |
| Mobility | Mobility |
| Strength | Strength / ताकत |
| Sleep | Sleep / नींद |
| Activity | Activity / गतिविधि |
| Heart | Heart / दिल |
| Kidney | Kidney / किडनी |
| Liver | Liver / लिवर |
| Stroke | Stroke / स्ट्रोक |
| Session | Session |
| Plan | Plan |
| Reminder | Reminder |
| Wellbeing | Wellbeing |
| Doctor | Doctor |
| Physiotherapist | Physiotherapist |

The final terminology should be validated with native Hindi speakers and qualified clinical reviewers.

---

# 9. Avoid Sanskritized Medical Language

Do not prioritize linguistic purity over comprehension.

### Avoid

> **हृदय पुनर्वास कार्यक्रम**

### Prefer

> **Heart Recovery Plan**

or:

> **Heart की Recovery**

### Avoid

> **वृक्क पुनर्वास**

### Prefer

> **Kidney Recovery**

### Avoid

> **यकृत पुनर्वास**

### Prefer

> **Liver Recovery**

The objective is:

> **Understanding first.**

---

# 10. English Login

```text
NIRVAN

Welcome back 👋

Log in to continue your recovery journey.

[ Continue with Google ]

[ Continue with Email ]

Don't have an account?
Sign Up
```

---

# 11. Hindi Login

```text
NIRVAN

वापसी पर आपका स्वागत है 👋

अपनी recovery journey जारी रखने के लिए login करें।

[ Google से जारी रखें ]

[ Email से जारी रखें ]

अकाउंट नहीं है?
Sign Up
```

Notice that common terms such as **login, recovery journey, Google, Email and Sign Up** can remain in English.

---

# 12. English Sign Up

```text
Create your NIRVAN account

Start your recovery journey.

Name
[ Your name ]

Email
[ Your email ]

[ Create Account ]

Already have an account?
Login
```

---

# 13. Hindi Sign Up

```text
अपना NIRVAN account बनाएँ

अपनी recovery journey शुरू करें।

Name
[ आपका नाम ]

Email
[ आपका email ]

[ Account बनाएँ ]

पहले से account है?
Login
```

---

# 14. Onboarding — English

### Welcome

> **Welcome to NIRVAN 👋**

> Your recovery is a journey. Let's understand where you'd like to go.

### Recovery pathway

> **What would you like support with?**

```text
❤️ Heart Recovery
🧠 Neuro Recovery
🫘 Kidney Recovery
🫀 Liver Recovery
```

### Goal

> **What would you like to improve?**

```text
○ Movement
○ Strength
○ Stamina
○ Independence
○ Daily activities
○ Overall wellbeing
```

### Personal goal

> **What matters most to you?**

Example:

> **I want to walk independently.**

---

# 15. Onboarding — Hindi

### Welcome

> **NIRVAN में आपका स्वागत है 👋**

> **आपकी recovery एक journey है। आइए समझते हैं कि आप कहाँ पहुँचना चाहते हैं।**

### Recovery pathway

> **आपको किस recovery में support चाहिए?**

```text
❤️ Heart Recovery

🧠 Neuro Recovery

🫘 Kidney Recovery

🫀 Liver Recovery
```

### Goal

> **आप क्या improve करना चाहते हैं?**

```text
○ Movement
○ Strength
○ Stamina
○ Independence
○ Daily activities
○ Overall wellbeing
```

### Personal goal

> **आपके लिए सबसे important क्या है?**

Example:

> **मैं बिना support के walk करना चाहता/चाहती हूँ।**

---

# 16. Home — English

```text
NIRVAN

Good morning 👋

One step at a time.

┌──────────────────────────────┐
│ TODAY'S RECOVERY             │
│                              │
│ 2 of 4 complete              │
│ ██████████░░░░               │
│                              │
│ Next: Mobility · 8 min       │
│                              │
│ [ START RECOVERY ]           │
└──────────────────────────────┘

YOUR GOAL

Walk independently

██████████░░ 80%

TODAY'S ACTIVITIES

✓ Breathing        5 min
✓ Check-in         2 min
○ Mobility         8 min
○ Walking         10 min

YOUR PROGRESS

12 Sessions · 82% Consistency
```

---

# 17. Home — Hindi

```text
NIRVAN

सुप्रभात 👋

एक कदम आगे बढ़ते हैं।

┌──────────────────────────────┐
│ आज की Recovery               │
│                              │
│ 4 में से 2 पूरी              │
│ ██████████░░░░               │
│                              │
│ अगला: Mobility · 8 मिनट      │
│                              │
│ [ Recovery शुरू करें ]       │
└──────────────────────────────┘

आपका Goal

बिना support के walk करना

██████████░░ 80%

आज की Activities

✓ Breathing        5 मिनट
✓ Check-in         2 मिनट
○ Mobility         8 मिनट
○ Walking         10 मिनट

आपकी Progress

12 Sessions · 82% Consistency
```

---

# 18. Exercise — English

```text
SIT TO STAND

[ VIDEO ]

Beginner
2 sets · 8 reps

Before you start:

• Keep your feet stable
• Move at a comfortable pace
• Do not rush

[ START ]

Need help?

How to perform
```

---

# 19. Exercise — Hindi

```text
SIT TO STAND

[ VIDEO ]

Beginner
2 sets · 8 reps

शुरू करने से पहले:

• अपने पैर stable रखें
• Movement comfortable रखें
• जल्दी न करें

[ START ]

Exercise समझ नहीं आ रही?

How to perform
```

During exercise:

```text
SIT TO STAND

5 / 8

● ● ● ● ● ○ ○ ○

00:42

[ Pause ]

आपको कैसा feel हो रहा है?

😊 Comfortable
😐 थोड़ा challenging
😟 Difficult
```

---

# 20. Daily Check-in — English

```text
How are you feeling today?

😊 Good
😐 Okay
😔 Low
😴 Tired
```

Then:

```text
How is your energy?

Low ─────●──── High

How was your sleep?

Poor ─────────● Good

How is your mood?

Low ────●────── Good
```

---

# 21. Daily Check-in — Hindi

```text
आज आप कैसा feel कर रहे हैं?

😊 Good
😐 ठीक
😔 Low
😴 Tired
```

Then:

```text
आज आपकी energy कैसी है?

Low ─────●──── High

आपकी sleep कैसी रही?

Poor ─────────● Good

आज आपका mood कैसा है?

Low ────●────── Good
```

---

# 22. Progress — English

```text
YOUR PROGRESS

This month

Recovery Sessions
12

Consistency
82%

Mobility
↑ Improving

Activity
↑ 14%

YOUR GOAL

"Walk independently"

██████████░░ 80%

YOUR WINS

✓ Completed 10 Recovery Sessions
✓ Improved activity consistency
✓ Completed mobility goal
✓ 4 weeks of regular practice
```

---

# 23. Progress — Hindi

```text
आपकी Progress

इस महीने

Recovery Sessions
12

Consistency
82%

Mobility
↑ Improving

Activity
↑ 14%

आपका Goal

"बिना support के walk करना"

██████████░░ 80%

आपकी Wins

✓ 10 Recovery Sessions पूरे किए
✓ Activity consistency बेहतर हुई
✓ Mobility goal पूरा हुआ
✓ 4 weeks से regular practice
```

---

# 24. Learn — English

```text
Learn

What would you like to learn?

[ Search recovery topics ]

Featured

❤️ Understanding Cardiac Rehab

🧠 Stroke Recovery Basics

🫘 Kidney Health & Movement

🫀 Liver Recovery & Strength

For You

3-minute read

"Why consistency matters
during recovery"
```

---

# 25. Learn — Hindi

```text
Learn

आप क्या जानना चाहते हैं?

[ Recovery topics खोजें ]

Featured

❤️ Cardiac Rehab को समझें

🧠 Stroke Recovery Basics

🫘 Kidney Health & Movement

🫀 Liver Recovery & Strength

आपके लिए

3-minute read

"Recovery में consistency
क्यों important है?"
```

---

# 26. Writing Rules

## Rule 1 — Keep sentences short

English:

> Your recovery plan is ready.

Hindi:

> आपका Recovery Plan तैयार है।

## Rule 2 — Use familiar English healthcare terms

Good:

> Recovery Plan

> Exercise

> Check-in

> Progress

> Mobility

> Session

## Rule 3 — Use Hindi for natural context

Good:

> **आज थोड़ा मुश्किल दिन है? कोई बात नहीं।**

> **हर छोटा step matter करता है।**

## Rule 4 — Do not force translation

Avoid:

> **आपने आज की शारीरिक पुनर्वास गतिविधि पूरी कर ली है।**

Prefer:

> **आपने आज की activity पूरी कर ली है।**

---

# 27. Preferred Hindi Sentence Style

NIRVAN Hindi should follow:

```text
Natural Hindi
      +
Familiar English terms
      +
Short sentences
      +
Clear healthcare meaning
```

Example:

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

This is the reference style for Hindi UX.

---

# 28. Gender-Neutral Language

Avoid unnecessary gender assumptions.

Instead of:

> आप क्या करना चाहते हैं?

Prefer:

> **आपका Goal क्या है?**

Instead of:

> आप थक गए हैं?

Prefer:

> **आज आपकी energy कैसी है?**

When gender is necessary, support appropriate Hindi grammatical forms.

---

# 29. Voice & Accessibility

Future voice capabilities can support:

- Hindi
- English
- Exercise instructions
- Daily recovery summary
- Voice check-in
- Voice navigation
- Read article aloud

Example:

User:

> **आज मेरा recovery plan क्या है?**

NIRVAN:

> **आज आपके 3 activities हैं। पहली Mobility exercise है, जो लगभग 8 minutes की है।**

Voice should always be optional.

---

# 30. Text-to-Speech

Support:

- English
- Hindi

Exercise screens should support:

```text
🔊 Instructions सुनें
```

or:

```text
🔊 Play Instructions
```

This can help users who have difficulty reading while performing exercises.

---

# 31. Language Switching

Allow language switching at:

```text
Profile
  ↓
Settings
  ↓
Language
  ↓
English
हिन्दी
```

Changing language should update the UI without requiring a new account.

---

# 32. Localization Architecture

Use localization from day one:

```text
locales/
├── en-IN.json
└── hi-IN.json
```

Example:

```json
{
  "home.greeting": {
    "en-IN": "Good morning",
    "hi-IN": "सुप्रभात"
  },
  "home.recovery": {
    "en-IN": "Today's Recovery",
    "hi-IN": "आज की Recovery"
  },
  "home.start": {
    "en-IN": "Start Recovery",
    "hi-IN": "Recovery शुरू करें"
  }
}
```

---

# 33. Firebase User Preference

Recommended conceptual structure:

```text
users/
  {uid}/
    preferences/
      language: "hi-IN"
```

---

# 34. Pre-Authentication Storage

Before authentication:

```text
App
 ↓
Language Selection
 ↓
Local Storage
 ↓
Login / Signup
 ↓
Firebase Authentication
 ↓
Sync preference
 ↓
Firestore
```

This ensures the selected language is retained through authentication.

---

# 35. Returning User

After the first selection:

```text
App Start
 ↓
Read local language
 ↓
Splash
 ↓
Home
```

Do not show language selection every time.

Show it only when:

- First launch
- Language is not set
- User changes language
- App data is reset

---

# 36. Marketing Website

The NIRVAN website should initially support:

```text
English
Hindi
```

Possible structure:

```text
/
├── English
└── /hi/
```

Localize:

- Landing pages
- Recovery guides
- FAQs
- Blog/newsletter
- Educational resources
- App download pages
- Privacy/help content

Do not simply translate English marketing copy.

---

# 37. App Store / Play Store Localization

Prepare localized:

- App name
- Subtitle / short description
- Full description
- Screenshots
- Keywords
- Promotional copy

Create native-language marketing copy rather than direct machine translation.

---

# 38. Medical Translation Workflow

Use:

```text
English Source
      ↓
Medical Writer
      ↓
Hindi Translator
      ↓
Clinical Reviewer
      ↓
Native User Review
      ↓
Localization QA
      ↓
Production
```

Machine translation can assist, but should not be the final workflow for medical content.

---

# 39. Hindi Content Review

Review Hindi with:

- Native Hindi speakers
- Indian healthcare users
- Clinical reviewers
- Users from different age groups

Test:

- Naturalness
- Comprehension
- Medical accuracy
- Cultural appropriateness
- Readability
- Pronunciation

---

# 40. Accessibility

Ensure:

- Devanagari renders correctly
- Text resizing works
- Screen readers work correctly
- No text clipping
- No hard-coded text inside images
- Buttons remain large
- Mixed Hindi/English text does not break layouts

Test on low-end Android devices and modern iPhones.

---

# 41. Future Language Roadmap

### Phase 1 — MVP

**English + Hindi**

### Phase 2

**Marathi**

### Phase 3

**Tamil + Telugu + Bengali**

### Phase 4

**Gujarati + Kannada + Malayalam + Punjabi + Odia**

The localization architecture should support additional Indian languages without redesigning the application.

---

# 42. Recommended Startup Experience

```text
                 NIRVAN
                   │
                   ↓
          Choose your language
                   │
              ┌────┴────┐
              ↓         ↓
          English      हिन्दी
              │         │
              └────┬────┘
                   ↓
             Sign Up / Login
                   ↓
               Onboarding
                   ↓
            Recovery Path
                   ↓
               Your Goal
                   ↓
           Today's Recovery
```

---

# 43. Final Recommendation

For the Indian MVP, use only:

> **English**

> **हिन्दी**

Hindi should be **natural modern Hindi with familiar English healthcare/product terminology**, not formal or Sanskritized Hindi.

The reference sentence for the entire Hindi UX is:

> **आपने आज की दो activities पूरी कर ली हैं। आपकी mobility exercise अभी बाकी है।**

Keep:

**NIRVAN**

Pronunciation:

> **Ree-vee-ya / री-वी-या**

Keep the global tagline:

> **Move Forward. Live Better.**

---

# 44. Final UX Statement

> **NIRVAN should speak the user's language — clearly, naturally and respectfully.**

Whether the user chooses English or Hindi, the experience should remain:

**Clear. Calm. Human. Respectful. Easy to understand.**

# NIRVAN
## **Move Forward. Live Better.**
