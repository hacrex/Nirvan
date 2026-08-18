# REVIA Homepage Copy, Wireframe & Design System

**Working draft for implementation**  
**Prepared by Manus AI · 18 August 2026**

## 1. Design decision in one sentence

The new REVIA homepage should sell **clarity and confidence between appointments**, not a long list of features. It should lead with a human recovery moment, let visitors choose the pathway or problem that feels relevant, show one believable product workflow, establish clinical and privacy trust, and then invite a transparent early-access action.

This direction follows the repository’s existing UX north star: “Make recovery feel understandable, achievable and meaningful — one step at a time.” It also preserves the product’s documented boundary: REVIA supports education, rehabilitation routines, wellbeing, and progress; it does not diagnose, prescribe, replace clinicians, or provide emergency care.[1] [2]

> **Primary homepage promise:** Recovery continues at home. REVIA helps make the next step clearer.

## 2. Conversion strategy

The homepage should serve four visitor questions in order. First: “Is this for someone like me?” Second: “What would REVIA help me do?” Third: “Can I trust it?” Fourth: “What happens if I join?” The page should not force a pre-launch visitor to pretend that the app is already available. Its main action should therefore be **Join early access**, with the supporting action **Explore recovery pathways**.

| Visitor question | Homepage answer | Primary proof |
| --- | --- | --- |
| Is this relevant to me? | Four recovery pathways plus wellbeing support | Pathway selector with plain-language outcomes |
| What does it help me do? | Know today’s next step, follow guidance, check in, and see meaningful progress | Product walkthrough based on “Today’s Recovery” |
| Can I trust it? | Clinician-reviewed content, transparent boundaries, readable design, and privacy choices | Trust module with named workflow and links |
| What happens next? | Join the list for practical resources and early-access updates | Pathway-aware waitlist with explicit expectations |

The page should use one persistent CTA label before launch: **Join early access**. Context-specific links can use **Explore cardiac recovery**, **See how today’s recovery works**, **Read a recovery guide**, and **Read the safety boundary**. The repository’s growth strategy explicitly recommends solving a recovery problem before asking people to install or buy the app, so the education and pathway routes should remain prominent rather than subordinated to the waitlist.[3]

## 3. Section-by-section wireframe

### 3.1 Header and navigation

**Purpose:** Establish a calm, premium first impression and orient visitors without presenting the full sitemap at once.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  R  REVIA                  Recovery   Wellbeing   Learn   About     Join early access │
└──────────────────────────────────────────────────────────────────────────────┘
```

The desktop header should use a transparent or cream background at the top of the page and become a lightly blurred cream surface after scrolling. The left side contains the REVIA wordmark. The center navigation contains **Recovery**, **Wellbeing**, **Learn**, and **About**. The right side contains a single filled CTA, **Join early access**. “Exercises,” “Blog,” “News,” and detailed pathways remain available through the relevant menu or footer rather than competing for first-glance attention.

**Mobile behavior:** Show the wordmark, one compact menu trigger, and a persistent bottom CTA labeled **Join early access**. The menu should expose **Recovery pathways**, **Wellbeing**, **Learn**, **For families**, **About**, **Privacy**, and **Medical boundary**.

### 3.2 Hero: the emotional promise

**Purpose:** Make the visitor feel recognized before explaining the product.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  [small eyebrow] FOR THE DAYS BETWEEN APPOINTMENTS                            │
│                                                                              │
│  Recovery continues                                                        │
│  at home.                                                                  │
│                                                                              │
│  A calmer way to know what to do next, keep moving safely, and notice        │
│  the progress that matters to you.                                          │
│                                                                              │
│  [ Join early access ]   Explore recovery pathways                           │
│                                                                              │
│  Clinician-reviewed education  ·  Gentle daily guidance  ·  Support, not diagnosis │
│                                                        [human image + phone UI]│
└──────────────────────────────────────────────────────────────────────────────┘
```

**Eyebrow:** For the days between appointments  
**Headline:** Recovery continues at home.  
**Body:** A calmer way to know what to do next, keep moving safely, and notice the progress that matters to you.  
**Primary CTA:** Join early access  
**Secondary CTA:** Explore recovery pathways  
**Trust line:** Clinician-reviewed education · Gentle daily guidance · Support, not diagnosis

**Hero visual direction:** Use one warm editorial image showing an ordinary recovery moment at home, such as a person preparing to walk with a support rail, completing a gentle seated movement, or reviewing a simple plan with a family member. Overlay one compact, clearly labelled product panel rather than a stack of floating cards. The UI panel should show **Today’s Recovery**, **2 of 4 completed**, **Next: Mobility · 8 min**, and a single **Continue recovery** button. If the product is still a prototype, label the image or UI as **Preview of the REVIA experience**.

**Alternative hero for a more brand-led campaign:**

> **Every step forward matters.**  
> REVIA brings recovery, wellbeing, education, and progress together for the journey home.

Use the alternative as a campaign or About-page lead, not as the primary homepage headline. The functional homepage headline should answer the visitor’s immediate need more directly.

### 3.3 Pathway selector: identify with a need

**Purpose:** Help patients and family members quickly find the route that feels closest to their situation.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  WHERE WOULD A LITTLE MORE SUPPORT HELP RIGHT NOW?                           │
│  Choose a pathway to explore the kind of guidance REVIA is being designed for.│
│                                                                              │
│  [ Heart ]   [ Neuro & stroke ]   [ Kidney ]   [ Liver ]   [ Wellbeing ]      │
│                                                                              │
│  Cardiac recovery                                                           │
│  Build confidence with gentle movement, energy-aware pacing, and clear      │
│  recovery education.                                                        │
│                                                                              │
│  Explore cardiac recovery →                                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Section eyebrow:** Find your next step  
**Heading:** Where would a little more support help right now?  
**Body:** REVIA keeps one calm design system while adapting the guidance, education, activities, and progress signals to your recovery pathway.

| Pathway | Card title | Description | CTA |
| --- | --- | --- | --- |
| Heart | Cardiac recovery | Build confidence with gentle movement, energy-aware pacing, and clear recovery education. | Explore cardiac recovery |
| Neuro | Neuro & stroke recovery | Practise small, repeatable movements and notice functional progress over time. | Explore neuro recovery |
| Kidney | Kidney recovery | Balance activity, fatigue, rest, and everyday routines at your own pace. | Explore kidney recovery |
| Liver | Liver recovery | Support strength, mobility, lifestyle education, and meaningful daily activity. | Explore liver recovery |
| Wellbeing | Wellbeing & sleep | Make room for rest, mood, energy, stress support, and healthier routines. | Explore wellbeing |

The tabs should be keyboard accessible, retain the selected state in the URL where practical, and show a small pathway-specific product preview. Do not use health conditions as decorative labels only; each selection should change the copy and image so the visitor understands that the pathway is meaningful.

### 3.4 Product walkthrough: “Today’s Recovery”

**Purpose:** Make the product tangible through one clear workflow rather than a feature catalogue.

```text
┌──────────────────────────────┬───────────────────────────────────────────────┐
│  [large phone / tablet frame]│  [eyebrow] THE REVIA RECOVERY LOOP             │
│                              │                                               │
│  Good morning, Maya          │  Know what matters today.                      │
│  One step at a time.         │  See how far you’ve come.                      │
│                              │                                               │
│  YOUR RECOVERY TODAY         │  REVIA turns a fragmented recovery routine     │
│  2 of 4 completed            │  into a few clear, manageable next steps.      │
│  Next: Mobility · 8 min      │                                               │
│  [ Continue recovery ]       │  01  Choose a goal                              │
│                              │  02  Follow today’s plan                       │
│                              │  03  Notice meaningful progress                 │
└──────────────────────────────┴───────────────────────────────────────────────┘
```

**Eyebrow:** The REVIA recovery loop  
**Heading:** Know what matters today. See how far you’ve come.  
**Body:** Recovery can feel fragmented between appointments. REVIA brings your plan, daily activities, wellbeing check-ins, education, and progress into one gentle rhythm.

**Step 1 title:** Choose a goal  
**Step 1 body:** Start with something that matters in everyday life, such as walking independently, moving with more confidence, or returning to a routine.

**Step 2 title:** Follow today’s plan  
**Step 2 body:** Begin with a clear next activity, supported by simple guidance, safety notes, captions, and audio where available.

**Step 3 title:** Notice your progress  
**Step 3 body:** Build confidence through consistency, personal milestones, and progress you can understand without clinical overload.

**Interactive behavior:** On desktop, the three steps can update the phone frame or screenshot caption. On mobile, stack the steps vertically and keep the screenshot above them. Avoid autoplay video unless it is muted, captioned, lightweight, and pauseable.

### 3.5 Human benefit section: from recovery to everyday life

**Purpose:** Connect product capability to the life the visitor wants to return to.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  [editorial image: everyday activity]                                        │
│                                                                              │
│  Recovery is not only about completing an exercise.                          │
│  It is about getting closer to everyday life.                                │
│                                                                              │
│  Move with more confidence.                                                   │
│  Build a steadier routine.                                                    │
│  Make space for rest and wellbeing.                                          │
│                                                                              │
│  [ Read how REVIA is designed ]                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Heading:** Recovery is not only about completing an exercise. It is about getting closer to everyday life.  
**Body:** One more step. One more repetition. One better night of sleep. One thing you can do more independently. REVIA is being designed to help you understand those moments and keep moving forward without pressure or comparison.

**Three supporting statements:**

| Label | Copy |
| --- | --- |
| Movement | Guided activity that fits into real days, not ideal ones. |
| Wellbeing | Simple check-ins for mood, sleep, energy, and rest. |
| Confidence | Progress that reflects what matters to you. |

### 3.6 Trust and clinical responsibility

**Purpose:** Convert cautious visitors by making the product’s boundaries and review process inspectable.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  DESIGNED WITH CARE                                                         │
│                                                                              │
│  Clear support. Clear boundaries.                                           │
│                                                                              │
│  [ Clinical content ] [ Privacy choices ] [ Accessible by design ]           │
│                                                                              │
│  REVIA supports recovery education and routines. It does not diagnose,       │
│  prescribe, replace your care team, or provide emergency services.            │
│                                                                              │
│  [ Meet the review process ]   [ Read the safety boundary ]                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Eyebrow:** Designed with care  
**Heading:** Clear support. Clear boundaries.  
**Body:** REVIA is being shaped around clinical responsibility, readable design, privacy choices, and the difficult days as well as the visible wins.

**Trust modules:**

| Module | Headline | Supporting copy | Proof link |
| --- | --- | --- | --- |
| Clinical content | Reviewed before it reaches you | Recovery education should be understandable, sourced, and reviewed before publication. | Learn about content review |
| Privacy choices | Your data should stay understandable too | See what information REVIA may use, why it may help, and how you can manage your choices. | Read privacy principles |
| Accessible by design | More ways to participate | Large readable type, captions, audio guidance, reduced motion, and language foundations are part of the design system. | Explore accessibility |

Do not publish a named clinician, patient testimonial, review count, or outcome statistic until it is real, consented, and verifiable. Until then, show the process rather than substituting placeholder social proof.

### 3.7 Education section: solve a recovery problem first

**Purpose:** Support SEO and trust while giving visitors a useful next step even before app launch.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  LEARN ABOUT YOUR RECOVERY                                  View all guides → │
│                                                                              │
│  [Article card]             [Article card]              [Article card]         │
│  Cardiac recovery            Neuro & stroke              Wellbeing             │
│  First 30 days               Moving after stroke        Sleep and fatigue     │
│  4 min read                  6 min read                 5 min read            │
│  Reviewed by …              Reviewed by …              Reviewed by …          │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Eyebrow:** Useful before anything else  
**Heading:** Understand your recovery in plain language.  
**Body:** Explore guides, explainers, and practical wellbeing resources created to help you ask better questions and feel more prepared between appointments.

**Article card metadata:** category, title, reading time, author, clinical reviewer where appropriate, review date, and a clear label such as **Educational guide**. Use no more than three cards on the homepage.

**Suggested article titles:**

| Category | Title | Description |
| --- | --- | --- |
| Cardiac | What to expect in the first weeks of cardiac recovery | A plain-language guide to routines, questions, and safe conversations with your care team. |
| Neuro & stroke | Why small, repeated movements matter | Understand how practice can fit into a longer recovery journey. |
| Wellbeing | When recovery affects sleep and energy | Gentle ways to notice patterns and prepare useful questions. |

### 3.8 Early-access conversion section

**Purpose:** Turn trust into a clear, low-pressure action with an honest value exchange.

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│  STAY CLOSE TO YOUR RECOVERY                                                 │
│                                                                              │
│  Join the early-access list.                                                 │
│  Receive practical recovery ideas, new resources, and an invitation when      │
│  your REVIA pathway is ready.                                                │
│                                                                              │
│  [ Email address                         ] [ Join early access ]               │
│                                                                              │
│  I’m most interested in: [ General ▾ ]                                       │
│  No pressure. Unsubscribe anytime. Read our privacy principles.               │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Eyebrow:** Stay close to your recovery  
**Heading:** Join the early-access list.  
**Body:** Receive one practical recovery idea, new resources, and product updates as REVIA grows. We will be clear about availability before asking you to download or pay.

**Form labels:** Email address; I’m most interested in; optional pathway selector.  
**Button:** Join early access  
**Consent note:** By joining, you agree to receive REVIA updates. You can unsubscribe anytime. Read our privacy principles.

**Success message:** You’re on the list. We’ll send useful recovery resources first, then let you know when early access opens for your pathway.

**Error message:** We couldn’t add you right now. Please check your email address and try again.

### 3.9 FAQ and safety boundary

**Purpose:** Resolve the final objections without making the homepage feel defensive.

**Heading:** Questions before you begin?  
**Body:** Here is what REVIA is, what it is not, and how we are approaching recovery support responsibly.

Recommended questions:

| Question | Answer direction |
| --- | --- |
| What is REVIA? | A digital recovery companion bringing rehabilitation, wellbeing, education, and progress together. |
| Is REVIA available now? | Explain current pre-launch status and what early access means. |
| Is REVIA a replacement for my doctor or physiotherapist? | No. It supports education and routines and does not replace professional care. |
| What pathways are being developed? | Heart, Neuro, Kidney, Liver, and wellbeing support, with scope clearly described. |
| What happens to my information? | Explain the waitlist data, future health-data choices, privacy, export, and deletion principles. |
| Can I use REVIA if I have accessibility needs? | Explain readable type, captions, audio, reduced motion, and language foundations. |

**Safety boundary callout:** REVIA is not for emergencies. If someone has severe or urgent symptoms, they should contact local emergency services or a qualified healthcare professional. Do not bury this wording in tiny footer text.

### 3.10 Footer

The footer should be visually quiet and structurally useful. It should include the REVIA wordmark, the line **Move Forward. Live Better.**, pathway links, wellbeing and education links, **For families**, **About**, **Privacy**, **Terms**, **Medical boundary**, and the early-access CTA. Social links should be included only when official accounts exist.

## 4. Complete homepage copy deck

### Metadata

**Title:** REVIA — A calmer way to continue recovery at home  
**Description:** REVIA brings recovery guidance, wellbeing check-ins, education, and understandable progress together for the days between appointments.  
**Open Graph title:** Recovery continues at home | REVIA  
**Open Graph description:** Know what to do next, keep moving safely, and notice the progress that matters to you.

### Primary copy hierarchy

| Level | Copy |
| --- | --- |
| Brand tagline | Move Forward. Live Better. |
| Homepage promise | Recovery continues at home. |
| Supporting promise | A calmer way to know what to do next, keep moving safely, and notice the progress that matters to you. |
| Functional explanation | REVIA brings rehabilitation, wellbeing, education, and progress together for the days between appointments. |
| Primary CTA | Join early access |
| Secondary CTA | Explore recovery pathways |
| Proof line | Clinician-reviewed education · Gentle daily guidance · Support, not diagnosis |
| Emotional close | Every step forward matters. |

### Short-form campaign variants

**Variant A — clarity-led:**  
> Know what matters today. See how far you’ve come.

**Variant B — life-led:**  
> Recovery is not only about getting stronger. It is about getting closer to everyday life.

**Variant C — family-led:**  
> Helping someone recover at home? Start with clear information, gentle routines, and progress you can understand.

**Variant D — clinician/partner-led:**  
> Support the journey that continues after the appointment.

Use Variant D on a future `/for-clinicians` or partnership page rather than the primary homepage hero.

## 5. Visual design direction

The existing documentation is clear about the emotional territory: calm, human, modern, warm, and accessible. The new system should retain the existing warm palette family but increase contrast, introduce a darker ink tone for elegance, and create a more editorial relationship between cream surfaces, forest green anchors, and terracotta moments.[1] [4]

### 5.1 Color palette

| Token | Hex | Usage | Accessibility / behavior |
| --- | --- | --- | --- |
| `canvas` | `#F8F5EF` | Default page background | Use for large surfaces and whitespace. |
| `canvas-warm` | `#F2E9DC` | Warm section background | Use sparingly for pathway and editorial bands. |
| `ink` | `#1F2A24` | Primary text and dark hero backgrounds | Preferred text color on light surfaces. |
| `ink-soft` | `#46514A` | Secondary text, metadata, body support | Do not use for small text below accessible contrast. |
| `forest` | `#285B4A` | Primary brand action, selected states, trust modules | Use for primary buttons and key anchors. |
| `forest-deep` | `#173D32` | High-contrast dark sections, footer, hero overlay | Use with cream text. |
| `sage` | `#DCE8DF` | Soft selected state, pathway container, supportive fill | Do not rely on it alone to communicate status. |
| `sage-light` | `#EEF4EE` | Subtle surface, hover state | Pair with ink or forest text. |
| `clay` | `#C66B4A` | Warm accent, focus ring, editorial highlight | Use for emphasis rather than warnings. |
| `clay-light` | `#F5DED2` | Accent background, quote or note surface | Use with ink text. |
| `mist-blue` | `#DCE9EA` | Optional information state, health-data explanation | Keep secondary to forest and sage. |
| `success` | `#2F7256` | Positive confirmation | Pair with icon and text. |
| `warning` | `#A7651E` | Caution state | Pair with icon and text; never color alone. |
| `danger` | `#A7473D` | Safety or error state | Use only for genuine errors or urgent guidance. |
| `white` | `#FFFFFF` | Cards, input fields, image frames | Use with borders or shadows for separation. |

**Palette rationale:** The forest tones connect to recovery and trust without becoming hospital blue. The warm cream and clay preserve REVIA’s existing human softness. The deep ink replaces pure black for a more refined, less aggressive hierarchy. The blue is optional and reserved for informational system states rather than brand identity.

### 5.2 Gradients and textures

Use gradients as atmosphere, not decoration. The preferred hero gradient is `linear-gradient(135deg, #F8F5EF 0%, #EEF4EE 58%, #F2E9DC 100%)`. The preferred dark-section gradient is `linear-gradient(135deg, #173D32 0%, #285B4A 100%)`. Avoid neon gradients, glassmorphism, and large blurred color blobs behind every section.

A subtle paper-grain texture at 2–4% opacity may be used on editorial sections, but the base implementation should remain performant and readable. Do not apply texture behind small text, form controls, or medical disclaimer content.

## 6. Typography hierarchy

### 6.1 Recommended type roles

| Role | Font | Desktop size / line height | Mobile size / line height | Weight | Usage |
| --- | --- | --- | --- | --- | --- |
| Display | Manrope or equivalent modern humanist sans | 72 / 0.98 | 48 / 1.02 | 700–800 | Hero headline, one per page. |
| Headline 1 | Manrope | 56 / 1.04 | 40 / 1.08 | 700 | Major section headings. |
| Headline 2 | Manrope | 40 / 1.10 | 32 / 1.12 | 700 | Feature and editorial headings. |
| Title | Atkinson Hyperlegible | 24 / 1.20 | 22 / 1.24 | 700 | Card titles, pathway titles. |
| Body large | Atkinson Hyperlegible | 20 / 1.50 | 18 / 1.52 | 400 | Hero and section supporting copy. |
| Body | Atkinson Hyperlegible | 18 / 1.55 | 17 / 1.55 | 400 | Core patient-facing copy. |
| Label | Atkinson Hyperlegible | 14 / 1.25 | 14 / 1.25 | 700 | Buttons, form labels, metadata. |
| Eyebrow | Atkinson Hyperlegible | 12 / 1.20 | 11 / 1.20 | 700 | Uppercase section labels with 0.14em tracking. |
| Caption | Atkinson Hyperlegible | 13 / 1.35 | 12 / 1.35 | 400 | Source, review date, disclaimers. |

Manrope is a recommendation for the display layer, not a requirement. If adding a second font is not desirable, use Atkinson Hyperlegible for all roles and create distinction through scale, measure, and spacing. Never use all-uppercase paragraphs. Use a maximum text measure of 62–70 characters for body copy and 12–16 words for large headlines.

### 6.2 Type usage rules

Use sentence case for all headings and buttons except the small eyebrow label. Use a single emphasis color or italic treatment in a headline, not multiple bright colors. Use `font-variant-numeric: tabular-nums` for progress numbers. Use `text-wrap: balance` for display headings and `text-wrap: pretty` for body copy where browser support permits.

## 7. Layout and spacing system

The spacing system follows the documented 4px base unit and keeps the marketing site compatible with the mobile app.

| Token | Value | Usage |
| --- | --- | --- |
| `space-1` | 4px | Icon-to-label gap, micro spacing |
| `space-2` | 8px | Chip padding, metadata gap |
| `space-3` | 12px | Button icon gap, compact card gap |
| `space-4` | 16px | Input padding, mobile page gutter minimum |
| `space-5` | 20px | Small card internals |
| `space-6` | 24px | Standard card padding, mobile section gap |
| `space-8` | 32px | Desktop card padding, small section gap |
| `space-10` | 40px | Tablet page gutter, component group gap |
| `space-12` | 48px | Major internal section spacing |
| `space-16` | 64px | Desktop section gap |
| `space-20` | 80px | Hero and major section padding |
| `space-24` | 96px | Large editorial separation |
| `space-32` | 128px | Maximum hero breathing room |

**Container:** `max-width: 1200px`; desktop horizontal padding 32px; tablet 24px; mobile 20px.  
**Grid:** 12 columns desktop, 8 columns tablet, 4 columns mobile.  
**Hero:** minimum height 720px desktop, 680px tablet, auto height mobile.  
**Section rhythm:** alternate between cream, white, and one deep-green band; do not use a new background color for every section.

## 8. Radius, border, and elevation tokens

| Token | Value | Usage |
| --- | --- | --- |
| `radius-sm` | 8px | Inputs, small chips, icon containers |
| `radius-md` | 12px | Buttons, compact cards |
| `radius-lg` | 16px | Standard content cards, screenshots |
| `radius-xl` | 24px | Hero media frame, feature panels |
| `radius-pill` | 999px | Tags, pathway filters, status pills |
| `border-subtle` | `1px solid #DCE4DC` | Inputs, cards on white, dividers |
| `border-strong` | `1px solid #B9CBBB` | Selected cards and focus-support states |
| `shadow-card` | `0 12px 32px rgba(31, 42, 36, .08)` | Large editorial card or screenshot frame |
| `shadow-float` | `0 20px 60px rgba(23, 61, 50, .16)` | Hero device frame, floating trust object |
| `focus-ring` | `0 0 0 3px #F5DED2, 0 0 0 5px #C66B4A` | Keyboard focus on light surfaces |

Avoid applying shadows to every small card. Use borders and surface contrast for most elements; reserve elevation for the hero frame, featured product walkthrough, and conversion module.

## 9. UI component system

### 9.1 `Button`

**Variants:** `primary`, `secondary`, `quiet`, `text`, `danger`.  
**Height:** 48px minimum; 52px for hero CTA.  
**Radius:** 12px.  
**Padding:** 16px horizontal minimum, 20px for hero CTA.  
**States:** default, hover, pressed, focus-visible, disabled, loading, success.  
**Rule:** Use one filled primary button per visual region. Use arrow icons only when they clarify navigation; avoid decorative icon clutter.

**Example labels:** Join early access; Explore recovery pathways; See today’s recovery; Read the safety boundary.

### 9.2 `PathwayCard`

Each card contains a pathway icon or abstract mark, title, one concrete outcome sentence, a small contextual label, and a text-link CTA. The selected state uses a 2px forest border and sage background; the unselected state uses white background and subtle border. Pathway status must be communicated by text and icon as well as color.

### 9.3 `ProductFrame`

A reusable frame for app screenshots or prototype previews. It includes a browser/device label, optional `Preview of the REVIA experience` badge, the screen image, caption, and a fallback text description. On mobile, it becomes a full-width image frame with no decorative floating cards.

### 9.4 `TrustModule`

A structured module with an eyebrow, title, one-sentence explanation, proof detail, and link. It supports variants `clinical`, `privacy`, `accessibility`, and `boundary`. Do not render unsupported ratings or placeholder testimonials.

### 9.5 `ArticleCard`

Each card contains category, title, excerpt, reading time, reviewer metadata if available, review date if applicable, and a visible text-link CTA. The card should not depend on color alone to distinguish clinical review status.

### 9.6 `EarlyAccessForm`

The form includes a visible label for email, an optional pathway select, consent copy, inline errors, a loading state, a success state, and a privacy link. The CTA remains **Join early access**. The form should use `autocomplete="email"`, correct input type, a server-safe submission state, and a non-blocking success message.

### 9.7 `ProgressPreview`

For marketing screenshots only. Show one goal, one progress indicator, one next action, and one small “win.” Example: **Walk independently · 78% building · 2 of 4 completed today · You showed up 4 times this week.** Avoid dense charts or medically interpretable thresholds.

### 9.8 `FAQAccordion`

Use native disclosure semantics where possible. Keep each answer short, use readable line length, and include a visible link to the full medical boundary or privacy page where relevant. Preserve keyboard focus and announce expanded state.

### 9.9 `StickyMobileCTA`

Use a 64–72px mobile footer bar with a single primary action, safe-area padding, and enough bottom spacing to prevent content overlap. The CTA should not appear until the hero CTA has scrolled out of view, and it should respect reduced-motion preferences.

## 10. Motion and interaction system

Motion should communicate progress, navigation, and state change, not create urgency. Use 180ms for hover and focus transitions, 240ms for card selection, and 420–600ms for section reveal. Use a soft ease-out curve such as `cubic-bezier(0.22, 1, 0.36, 1)`. Never make text or CTA availability depend on animation completion.

The hero product frame may use a very subtle 6–8px floating motion on a 6-second loop, but the core page should remain still under `prefers-reduced-motion: reduce`. Pathway selection should update content immediately, not through a slow carousel. Avoid autoplaying video with audio, parallax that changes reading position, or animated counters that imply unverified growth.

## 11. Responsive wireframe behavior

### Desktop, 1200px and above

Use a two-column hero with 5 columns for copy and 7 columns for the visual frame. Pathways can use a 5-card horizontal arrangement or a 2+3 editorial grid. The product walkthrough uses a sticky device frame on the left and copy/steps on the right. Trust modules use three columns. The early-access form is an inline horizontal arrangement.

### Tablet, 768–1199px

Use a two-column hero with reduced visual scale. Pathway cards use a 2x3 grid with wellbeing spanning the final row. Product walkthrough becomes image above, steps below. Trust modules use a 2+1 grid. Keep the header CTA visible.

### Mobile, below 768px

Use a single-column narrative. Place the human visual below the hero copy but before the CTA only if it does not push the CTA below the first screen; otherwise use the image as a right-side crop. Keep buttons full-width or near full-width. Use horizontal scroll for pathway tabs with visible labels and a non-scroll alternative via a select or stacked cards. Move the product frame before the step list. Use the sticky mobile CTA after the hero CTA leaves the viewport.

## 12. Implementation map to the current repository

| New homepage module | Existing component to adapt | Recommended action |
| --- | --- | --- |
| Header | `layout/Header.tsx` | Reduce primary nav to Recovery, Wellbeing, Learn, About; use a single pre-launch CTA. |
| Hero | `sections/Hero.tsx` | Replace dashboard stack with editorial image plus one `ProductFrame`; update copy and launch-state CTA. |
| Pathway selector | `sections/RecoveryPaths.tsx` | Add wellbeing as a fifth intent and make each tab change copy, visual, and CTA. |
| Product walkthrough | `sections/ProductShowcase.tsx` + `sections/HowItWorks.tsx` | Merge into a single recovery-loop section based on Today’s Recovery. |
| Human benefit | `sections/WhyRevia.tsx` + `sections/WellbeingSection.tsx` | Replace generic feature cards with a life-oriented editorial section and three concise outcomes. |
| Trust | `sections/TrustStrip.tsx` + `sections/Testimonials.tsx` | Convert labels into inspectable trust modules; remove any placeholder testimony until real consented stories exist. |
| Education | `sections/EducationSection.tsx` | Add reviewer/review-date metadata and limit the homepage to three high-value cards. |
| Early access | `sections/CTA.tsx` + newsletter UI | Rename the CTA, clarify the pre-launch exchange, and add robust success/error states. |
| FAQ | `sections/FAQSection.tsx` | Add availability, privacy, accessibility, and medical-boundary answers. |
| Footer | `layout/Footer.tsx` | Add pathway, family, privacy, and medical-boundary routes; remove inactive social links. |
| Shared tokens | `app/globals.css` | Introduce the new semantic palette, typography roles, spacing, radius, border, shadow, and focus tokens. |
| Assets | `public/illustrations/` and new media directory | Reuse `walking-together.svg`, `goals.svg`, and `relaxing-outdoors.svg` selectively; add a coherent editorial image set and clearly labelled product previews. |

## 13. Content guardrails

REVIA should sound like a trusted guide, not an authority making promises. Prefer “support,” “help you understand,” “designed for,” “may help you prepare,” and “follow the plan provided by your healthcare professional.” Avoid “cure,” “reverse,” “guarantee,” “fix,” “clinically proven” unless the claim is supported by appropriate evidence and review. Avoid language that implies failure, delay, competition, or a universal timeline.

The homepage should distinguish between **clinician-reviewed content** and **clinician-prescribed care**. It should also distinguish between **health information** and **medical advice**. The safety boundary should be linked from the hero trust line, the trust section, the FAQ, and the footer—not only displayed at the bottom of the page.

## 14. First implementation sprint

The first sprint should not build all new sections from scratch. It should create the tokens and two reusable primitives, then replace the top of the homepage where conversion impact is highest.

| Sprint task | Definition of done |
| --- | --- |
| Add semantic design tokens | Colors, typography roles, spacing, radii, shadows, focus, and motion are available in CSS/Tailwind. |
| Create `ProductFrame` | Supports image, prototype label, caption, fallback text, responsive sizing, and reduced motion. |
| Create `TrustModule` | Supports clinical, privacy, accessibility, and boundary variants. |
| Rewrite header and hero | New pre-launch CTA, new hero copy, human visual placeholder, and one product frame. |
| Rewrite pathway section | Five pathways, intent-led copy, responsive tabs/cards, contextual CTAs. |
| Merge product showcase and how-it-works | Three-step recovery loop with one visual state. |
| Update early-access flow | Clear labels, pathway select, success/error states, and privacy copy. |
| Run content and accessibility QA | No unsupported claims, correct heading order, keyboard navigation, focus states, mobile reflow, and reduced-motion validation. |

## 15. Source alignment

The specification above is based on the repository’s product, UX, brand, website, content, SEO, and Stitch UI documents. The most important inherited constraints are: **Today’s Recovery**, **meaning over metrics**, **progress without pressure**, **human before AI**, **education before promotion**, **trust before conversion**, and **transparent pre-launch access**.[1] [2] [3] [4] [5] [6]

## References

[1]: https://github.com/hacrex/Revia/blob/main/docs/REVIA_UIUX.md "REVIA UI/UX Strategy & Product Design Specification"
[2]: https://github.com/hacrex/Revia/blob/main/docs/REVIA_Brand_Story.md "REVIA Brand Story"
[3]: https://github.com/hacrex/Revia/blob/main/docs/REVIA_User_Acquisition_Growth_Strategy.md "REVIA User Acquisition & Growth Strategy"
[4]: https://github.com/hacrex/Revia/blob/main/docs/06-website/CONTENT_STRATEGY.md "REVIA Content Strategy"
[5]: https://github.com/hacrex/Revia/blob/main/docs/06-website/PHASE_2_MARKETING_EXPANSION_PLAN.md "REVIA Phase 2 Marketing Website Expansion Plan"
[6]: https://github.com/hacrex/Revia/blob/main/docs/08-ui/google_stitch_prompt.md "REVIA Google Stitch UI/UX Generation Prompt"
