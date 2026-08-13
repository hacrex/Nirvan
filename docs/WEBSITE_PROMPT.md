# REVIA — Marketing Website Prompt (Antigravity + Stitch)

> **Copy this into Google Antigravity to build the REVIA marketing website.**
> **Prerequisites:** Stitch MCP configured (optional, for design generation).

---

## PROJECT OVERVIEW

Build the REVIA marketing website — the public acquisition, education, trust, and communication layer. The website should share the same brand system and color palette as the mobile app.

**Tech stack:** Next.js 14+, TypeScript, Tailwind CSS, MDX or headless CMS

---

## STEP 1: PROJECT SETUP

```
Create a Next.js project in the website/ directory:

npx create-next-app@latest website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

Install additional dependencies:
- @tailwindcss/typography (for blog/article prose styling)
- next-mdx-remote (for MDX content)
- sharp (for image optimization)
- lucide-react (for icons)
```

---

## STEP 2: DESIGN SYSTEM

Match the mobile app brand exactly. Use these tokens in Tailwind config:

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2A9D8F',
        light: '#E0F5F1',
        dark: '#1E7A6F',
      },
      secondary: {
        DEFAULT: '#E9C46A',
        light: '#F5E6B8',
        dark: '#C9A84E',
      },
      background: '#FAFAF8',
      surface: '#FFFFFF',
      surfaceVariant: '#F5F5F3',
      textPrimary: '#1A1A1A',
      textSecondary: '#6B6B6B',
      success: '#4CAF50',
      warning: '#FFA726',
      error: '#EF5350',
      info: '#42A5F5',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      card: '16px',
      button: '12px',
      sheet: '24px',
    },
  },
}
```

**Visual tone:**
- Calm, human, encouraging, trustworthy, modern
- Soft backgrounds, generous whitespace, rounded corners
- No hospital-dashboard aesthetic, no neon gradients, no aggressive colors
- Warm teal (#2A9D8F) as primary, warm amber (#E9C46A) as secondary

---

## STEP 3: SITE STRUCTURE

Create this sitemap:

```
/
├── rehabilitation/
│   ├── cardiac/
│   ├── neuro/
│   ├── stroke/
│   ├── paralysis/
│   ├── kidney/
│   └── liver/
├── wellbeing/
├── exercises/
├── resources/
├── blog/
├── news/
├── newsletter/
├── about/
├── contact/
├── faq/
├── privacy/
├── terms/
└── medical-disclaimer/
```

---

## STEP 4: COMPONENT LIBRARY

Build reusable components in `src/components/`:

```
src/components/
├── layout/
│   ├── Header.tsx          # Logo, nav, CTA
│   ├── Footer.tsx          # Links, newsletter, social, disclaimer
│   ├── MobileMenu.tsx      # Hamburger menu for mobile
│   └── PageContainer.tsx   # Max-width wrapper
├── ui/
│   ├── Button.tsx          # Primary, secondary, ghost variants
│   ├── Card.tsx            # Content card with image, title, description
│   ├── Badge.tsx           # Category/topic badges
│   ├── Input.tsx           # Text input, email input
│   ├── NewsletterSignup.tsx # Email capture form
│   ├── AppDownload.tsx     # App Store + Google Play buttons
│   └── MedicalDisclaimer.tsx # Reusable disclaimer block
├── sections/
│   ├── Hero.tsx            # Homepage hero
│   ├── RecoveryPaths.tsx   # 4 pathway cards
│   ├── WhyRevia.tsx        # Value proposition
│   ├── HowItWorks.tsx      # 3-step process
│   ├── Features.tsx        # Feature grid
│   ├── Testimonials.tsx    # Patient stories (placeholder)
│   ├── FAQ.tsx             # Accordion FAQ
│   └── CTA.tsx             # Download/newsletter CTA
└── content/
    ├── ArticleCard.tsx     # Blog/news card
    ├── CategoryFilter.tsx  # Topic filter
    └── TableOfContents.tsx # Article TOC
```

---

## STEP 5: HOMEPAGE

Build the homepage with these sections:

```
/ (Homepage)

1. HERO
   - Headline: "Move Forward. Live Better."
   - Subtext: "Rehabilitation is a journey, not a single exercise or appointment. REVIA brings recovery, wellbeing, education and progress together to help you move forward — one step at a time."
   - Primary CTA: "Start Your Journey" (links to download)
   - Secondary CTA: "Explore Rehabilitation" (links to /rehabilitation)
   - Background: Soft gradient or subtle illustration
   - App mockup/screenshot placeholder

2. RECOVERY PATHS
   - Section title: "Recovery Pathways"
   - 4 cards in a grid:
     - ❤️ Cardiac — "Heart attack recovery, cardiac rehabilitation, cardiovascular lifestyle management"
     - 🧠 Neuro — "Stroke, paralysis, mobility impairment, motor rehabilitation, balance, speech and cognitive recovery"
     - 🫘 Kidney — "Chronic kidney disease, dialysis rehabilitation, fatigue and physical-function support"
     - 🫀 Liver — "Cirrhosis-related functional decline, muscle preservation, nutrition education, physical rehabilitation"
   - Each card links to its dedicated page

3. WHY REVIA
   - Section title: "Why REVIA?"
   - 3-column grid:
     - "Your Recovery, Connected" — Recovery plans, exercises, wellbeing, education in one place
     - "Progress You Can See" — Track meaningful progress, not just numbers
     - "Built for Real Life" — Offline support, voice accessibility, multilingual

4. HOW IT WORKS
   - Section title: "How REVIA Works"
   - 3 steps:
     1. "Choose Your Path" — Select your recovery pathway and set your goals
     2. "Follow Your Plan" — Guided exercises, daily check-ins, education
     3. "See Your Progress" — Track milestones, build consistency, move forward

5. FEATURES
   - Section title: "Everything You Need to Recover"
   - Feature grid (2x3 or 3x2):
     - Personalized Recovery Plans
     - Exercise Library with Video
     - Daily Wellbeing Check-in
     - Progress Tracking
     - Health Data Integration
     - Educational Content

6. WELLBEING
   - Section title: "Recovery Is More Than Exercise"
   - Text + illustration
   - "Sleep, mood, nutrition, mindfulness — REVIA supports your whole journey."

7. EDUCATION
   - Section title: "Learn About Your Recovery"
   - Featured articles/guides
   - "Clinician-reviewed content you can trust."

8. APP DOWNLOAD CTA
   - "Start Your Recovery Journey"
   - App Store button + Google Play button
   - Phone mockup placeholder

9. NEWSLETTER
   - "Stay Informed"
   - "Get recovery tips, new articles, and product updates."
   - Email input + Subscribe button

10. FAQ
    - Section title: "Frequently Asked Questions"
    - 5-6 accordion items:
      - What is REVIA?
      - Is REVIA a replacement for my doctor?
      - Is REVIA free?
      - What conditions does REVIA support?
      - Does REVIA work offline?
      - How does REVIA protect my privacy?

11. MEDICAL DISCLAIMER
    - "REVIA provides clinician-reviewed educational content and rehabilitation support. It does not diagnose medical conditions, prescribe medication, replace healthcare professionals, or provide emergency services."

12. FOOTER
    - Logo + tagline
    - Navigation links
    - Rehabilitation pathways
    - Legal links (Privacy, Terms, Medical Disclaimer)
    - Social media placeholders
    - "Move Forward. Live Better."
```

---

## STEP 6: REHABILITATION PAGES

Build these pages with consistent layout:

```
/rehabilitation — Overview of all pathways
  - Hero: "Recovery Pathways"
  - 4 pathway cards (same as homepage)
  - "Each pathway provides personalized support for your recovery journey."

/rehabilitation/cardiac
  - Hero: "Cardiac Rehabilitation"
  - Content: What it covers, who it's for, key features
  - Modules: Walking, Aerobic activity, Mobility, Breathing, Strength, Education
  - CTA: "Start Your Cardiac Recovery"
  - Medical disclaimer

/rehabilitation/neuro
  - Hero: "Neuro Recovery"
  - Content: Stroke, paralysis, mobility, balance, speech, cognitive
  - Modules: Motor rehab, Functional rehab, Speech, Cognitive
  - CTA: "Start Your Neuro Recovery"

/rehabilitation/stroke
  - Hero: "Stroke Recovery"
  - Content: Specific to stroke rehabilitation
  - CTA: "Start Your Stroke Recovery"

/rehabilitation/paralysis
  - Hero: "Paralysis Recovery"
  - Content: Specific to paralysis rehabilitation
  - CTA: "Start Your Paralysis Recovery"

/rehabilitation/kidney
  - Hero: "Kidney Recovery"
  - Content: CKD, dialysis, fatigue, physical function
  - CTA: "Start Your Kidney Recovery"

/rehabilitation/liver
  - Hero: "Liver Recovery"
  - Content: Cirrhosis, muscle preservation, nutrition, lifestyle
  - CTA: "Start Your Liver Recovery"
```

Each page layout:
1. Hero section (headline, subtext, CTA)
2. What is [condition] recovery?
3. How REVIA helps
4. Key features/modules
5. App download CTA
6. Related articles
7. Medical disclaimer

---

## STEP 7: CONTENT PAGES

```
/wellbeing
  - "Recovery and Wellbeing"
  - Sleep, mood, nutrition, mindfulness, lifestyle
  - "Recover better. Live better."

/exercises
  - "Exercise Library"
  - Categories: Mobility, Strength, Balance, Walking, etc.
  - "Guided exercises with video, instructions, and progress tracking."

/resources
  - "Recovery Resources"
  - Links to articles, guides, videos, FAQs

/about
  - "About REVIA"
  - Brand story, mission, philosophy
  - "Every step forward matters."
  - Team/founders placeholder

/contact
  - Contact form (name, email, message)
  - Support email
  - "We'd love to hear from you."

/faq
  - Full FAQ page with all questions
  - Accordion format

/newsletter
  - Newsletter archive
  - Subscribe form
```

---

## STEP 8: LEGAL PAGES

```
/privacy
  - Privacy Policy
  - Data collection, usage, storage, deletion
  - Health data handling
  - Third-party services
  - Contact for questions

/terms
  - Terms of Service
  - Acceptable use
  - Intellectual property
  - Limitation of liability
  - Governing law

/medical-disclaimer
  - Full medical disclaimer
  - "REVIA is not a medical device"
  - "Always consult your healthcare professional"
  - "Not for emergency use"
  - Clinical content review process
```

---

## STEP 9: BLOG & NEWS

```
/blog
  - Blog listing page
  - Article cards: title, excerpt, category, date, read time
  - Category filter: Rehabilitation, Conditions, Wellness, Technology, Product News

/blog/[slug]
  - Article detail page
  - Title, author, date, category
  - "Reviewed by a qualified healthcare professional" badge
  - Clean reading layout (prose styling)
  - Table of contents (optional)
  - Related articles
  - Share buttons
  - Medical disclaimer at bottom

/news
  - News listing (same layout as blog)
  - Product updates, new features, research
```

---

## STEP 10: SEO

Implement on every page:

```
1. Semantic HTML (proper heading hierarchy, landmarks)
2. Metadata:
   - title template: "%s | REVIA - Move Forward. Live Better."
   - description (150-160 chars)
   - keywords
   - Open Graph (og:title, og:description, og:image, og:url)
   - Twitter card
3. Canonical URLs
4. Sitemap.xml (auto-generated)
5. Robots.txt
6. Schema.org structured data:
   - Organization (homepage)
   - MedicalWebPage (health content)
   - Article (blog posts)
   - FAQPage (FAQ page)
   - BreadcrumbList (all pages)
7. Image optimization (next/image, alt text, lazy loading)
8. Core Web Vitals optimization
9. Internal linking strategy
10. Clean URL structure
```

---

## STEP 11: ACCESSIBILITY

Target WCAG 2.1 AA:

```
- Semantic HTML (header, nav, main, footer, article, section)
- Proper heading hierarchy (h1 -> h2 -> h3)
- Alt text on all images
- Keyboard navigation (tab order, focus indicators)
- Color contrast ratios (4.5:1 text, 3:1 large text)
- Skip to content link
- ARIA labels on interactive elements
- Form labels and error messages
- Responsive text (rem-based)
- Reduced motion support (prefers-reduced-motion)
- Screen reader testing
```

---

## STEP 12: PERFORMANCE

```
- Static generation where possible (getStaticProps / generateStaticParams)
- Next/Image for all images (WebP, responsive sizes)
- Lazy loading for below-fold content
- Minimal JavaScript (tree shaking, code splitting)
- Font optimization (next/font)
- CDN delivery (Vercel/Cloudflare)
- Core Web Vitals targets:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
```

---

## STEP 13: NEWSLETTER & ANALYTICS

```
Newsletter:
- Email signup form (homepage, dedicated page)
- Success/error states
- Double opt-in (future)
- Unsubscribe mechanism
- GDPR-compliant consent

Analytics:
- Privacy-conscious (no PII tracking)
- Page views, newsletter signups, download clicks
- Avoid tracking health-related content consumption
```

---

## CONTENT GUIDELINES

**Use plain language:**
- "Why movement matters during recovery" NOT "Physiological implications of post-acute functional activity"
- Short paragraphs, bullets, visuals
- Examples and analogies

**Tone:**
- Human, calm, encouraging, trustworthy
- Never fear-based
- Never promise cures

**Clinical responsibility:**
- All health content reviewed before publication
- Medical disclaimers on all health pages
- No unsupported claims ("cures paralysis", "reverses heart disease")
- Evidence-based language

---

## BUILD ORDER

1. Project setup + design system
2. Layout components (Header, Footer, PageContainer)
3. UI components (Button, Card, Badge, Input)
4. Homepage (all 12 sections)
5. Rehabilitation pages (overview + 6 conditions)
6. Content pages (wellbeing, exercises, resources, about, contact, faq)
7. Legal pages (privacy, terms, medical-disclaimer)
8. Blog/news system
9. SEO implementation
10. Accessibility audit
11. Performance optimization
12. Newsletter + analytics

---

*REVIA — Move Forward. Live Better.*
