# NIRVAN — Marketing Website Specification

## 1. Purpose

The website is the public acquisition, education, trust and communication layer for NIRVAN.

## 2. Stack

- Next.js
- TypeScript
- Tailwind CSS
- MDX or headless CMS
- SEO tooling
- Analytics
- Newsletter provider

## 3. Sitemap

```text
/
├── rehabilitation
│   ├── cardiac
│   ├── neuro
│   ├── stroke
│   ├── paralysis
│   ├── kidney
│   └── liver
├── wellbeing
├── exercises
├── resources
├── blog
├── news
├── newsletter
├── about
├── contact
├── faq
├── privacy
├── terms
└── medical-disclaimer
```

## 4. Homepage

The homepage should lead with a human recovery moment and one clear pre-launch action. Its narrative is **Recovery continues at home**: NIRVAN helps people know what to do next, keep moving safely, and notice meaningful progress between appointments.

Sections:

1. Header with Recovery, Wellbeing, Learn, About, and Join early access.
2. Human hero for the days between appointments.
3. Intent-led pathway selector for Heart, Neuro & Stroke, Kidney, Liver, and Wellbeing.
4. “Today’s Recovery” product walkthrough showing the recovery loop.
5. Human benefit section connecting recovery to everyday life.
6. Clinical, privacy, accessibility, and safety trust modules.
7. Recovery education cards with reviewer and review-date metadata where applicable.
8. Early-access form with pathway preference, success/error states, and privacy copy.
9. FAQ and medical boundary.
10. Footer with pathways, learning, family support, legal links, and access status.

The current homepage section components may be reused, but generic feature grids and duplicate explanatory sections should be merged into the more focused narrative above.

## 5. CTA

Before launch, use:

Primary:

> Join early access

Secondary:

> Explore recovery pathways

Context-specific links may use:

- Explore cardiac recovery
- Explore neuro recovery
- See today’s recovery
- Read a recovery guide
- Read the safety boundary

The homepage must make pre-launch status explicit and must not imply that the app is already available for download.

## 6. Homepage copy baseline

Eyebrow:

> For the days between appointments

Headline:

> Recovery continues at home.

Supporting copy:

> A calmer way to know what to do next, keep moving safely, and notice the progress that matters to you.

Trust line:

> Clinician-reviewed education · Gentle daily guidance · Support, not diagnosis

Closing line:

> Every step forward matters.

## 7. Visual design system

The visual system should remain aligned with the mobile design language while using a more editorial marketing expression. Use the semantic palette below:

| Token | Value | Intended use |
| --- | --- | --- |
| `canvas` | `#F8F5EF` | Default page background |
| `canvas-warm` | `#F2E9DC` | Warm editorial bands |
| `ink` | `#1F2A24` | Primary text and dark sections |
| `ink-soft` | `#46514A` | Supporting body copy |
| `forest` | `#285B4A` | Primary action and selected states |
| `forest-deep` | `#173D32` | Footer and high-contrast sections |
| `sage` | `#DCE8DF` | Selected and supportive surfaces |
| `sage-light` | `#EEF4EE` | Subtle surfaces and hover states |
| `clay` | `#C66B4A` | Warm accent and focus support |
| `clay-light` | `#F5DED2` | Accent surfaces |
| `mist-blue` | `#DCE9EA` | Optional information state |
| `white` | `#FFFFFF` | Cards and form surfaces |

Keep Atkinson Hyperlegible for body copy and introduce Manrope or an equivalent humanist sans-serif for display headlines only if font loading and accessibility review approve it. Use a 4px spacing scale, 16px standard card radius, 12px button radius, 24px feature-frame radius, visible focus rings, 48px minimum controls, and reduced-motion support.

## 8. Content Pages

Each medical topic should contain:

- Clear educational introduction
- Who it may be relevant to
- General rehabilitation information
- Lifestyle/wellbeing information
- Resources
- Medical disclaimer
- Review metadata where appropriate

## 9. SEO

Use:

- Semantic HTML
- Structured metadata
- Canonicals
- Sitemap
- Robots
- Open Graph
- Schema.org where appropriate
- Fast Core Web Vitals
- Internal linking

## 10. Content Governance

Clinical content requires appropriate review before publication. Where applicable, expose author, clinical reviewer, review date, version, sources, and next review date.

The recommended workflow is:

```text
Research → Draft → Clinical Review → Fact Check → SEO Review → Publish → Periodic Review
```

## 11. Accessibility

Target WCAG-aligned accessible design. Homepage interactions must support keyboard navigation, visible focus, readable contrast, mobile reflow, dynamic text, screen readers, captions or alternatives for media, reduced motion, and no color-only status indicators.

## 12. Clinical and marketing boundaries

NIRVAN may describe clinician-reviewed educational content, rehabilitation routines within defined product boundaries, user-entered activity, selected health metrics, adherence tracking, reminders, progress, and supportive wellbeing content.

NIRVAN must not diagnose, prescribe medication, change dosage, independently prescribe treatment, override clinician instructions, claim to replace care, provide false emergency reassurance, claim that a disease is cured, make unsupported medical claims, or present AI output as clinical fact.

The homepage must include a visible link to the medical boundary and a clear statement that NIRVAN is not an emergency service.

## 13. Source document

The full homepage copy deck, section wireframes, responsive behavior, design tokens, component system, motion guidance, implementation map, and content guardrails live in:

`docs/06-website/HOMEPAGE_COPY_WIREFRAME_DESIGN_SYSTEM.md`

## 14. Performance

- Static generation where possible
- Optimized images
- Lazy loading
- Responsive images
- Minimal JavaScript
- CDN delivery
