---
name: Serene Path
colors:
  surface: '#fdf9f3'
  surface-dim: '#dddad4'
  surface-bright: '#fdf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ed'
  surface-container: '#f1ede7'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e6e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#424841'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0ea'
  outline: '#737970'
  outline-variant: '#c2c8be'
  surface-tint: '#456646'
  primary: '#436444'
  on-primary: '#ffffff'
  primary-container: '#5b7d5b'
  on-primary-container: '#f7fff2'
  inverse-primary: '#abd0a9'
  secondary: '#8c4e33'
  on-secondary: '#ffffff'
  secondary-container: '#feae8c'
  on-secondary-container: '#793f25'
  tertiary: '#7f4e5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#9a6674'
  on-tertiary-container: '#fffbff'
  error: '#C0564B'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6edc4'
  primary-fixed-dim: '#abd0a9'
  on-primary-fixed: '#012108'
  on-primary-fixed-variant: '#2e4e30'
  secondary-fixed: '#ffdbcd'
  secondary-fixed-dim: '#ffb596'
  on-secondary-fixed: '#360f00'
  on-secondary-fixed-variant: '#6f371e'
  tertiary-fixed: '#ffd9e1'
  tertiary-fixed-dim: '#f4b6c6'
  on-tertiary-fixed: '#330f1c'
  on-tertiary-fixed-variant: '#673947'
  background: '#fdf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e6e2dc'
  primaryContainer: '#E1EADF'
  surfaceVariant: '#F2E8DA'
  success: '#4A7C59'
  warning: '#D99100'
  info: '#5B8FB9'
  textPrimary: '#2D2A26'
  textSecondary: '#66615C'
typography:
  display:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  title-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  caption:
    fontFamily: Atkinson Hyperlegible Next
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px
---

## Brand & Style

The design system is rooted in the "Human, Calm, and Encouraging" personality required for a rehabilitation journey. It moves away from clinical, high-friction interfaces toward a **Modern Minimalist** aesthetic with **Tactile** undertones. This approach prioritizes cognitive ease and emotional safety, ensuring the interface feels like a supportive companion rather than a medical monitor.

The style leverages generous whitespace, a soft and warm color palette, and clear, high-contrast typography to accommodate users who may be experiencing fatigue or limited dexterity. Visual weight is used intentionally to guide the eye toward the "next best action," reducing the mental load of recovery. The overall impression is one of grounded optimism and professional warmth.

## Colors

This design system utilizes a palette of organic, earthy tones to foster a sense of tranquility. The **Primary** color is a muted sage green, symbolizing growth and vitality without the clinical harshness of "hospital blue." The **Neutral** background is a warm "linen" white to reduce eye strain and provide a softer contrast than pure white.

### Color Principles
- **Warmth over Clinicality:** Avoid pure grays; use "surface" and "background" tokens with slight yellow or red undertones.
- **Functional Semantics:** All status-driven colors (Success, Warning, Error) are desaturated to remain accessible and calm while meeting WCAG AA contrast requirements.
- **Dark Mode:** In dark mode, the "Warm" characteristic is maintained by using deep charcoal with brown undertones rather than pure black.

## Typography

The chosen typeface is **Atkinson Hyperlegible Next**, specifically designed for greater legibility and distinction between similar character shapes. This is critical for a wellbeing platform where users may have visual impairments or cognitive fatigue.

### Typography Rules
- **Legibility First:** The minimum body size for main content is 18px to ensure effortless reading.
- **Hierarchy:** Clear weight distinctions (Bold for headlines, Regular for body) help users scan information quickly.
- **User Control:** Implementation must allow for system-level font scaling. Article views should include a specific toggle for "Comfortable" (18px) vs "Large" (22px) text sizes.

## Layout & Spacing

The layout follows a **Fluid Grid** model centered on a 4px base unit. This ensures a rhythmic consistency that feels organized and predictable.

### Spatial Logic
- **Margins & Gutters:** On mobile devices, use a standard 16px (`lg`) margin for screen edges and card gutters. 
- **Section Breathing Room:** Use 32px (`2xl`) or 48px (`3xl`) to separate distinct functional blocks (e.g., separating "Today's Progress" from "Exercise Library").
- **Touch Targets:** All interactive elements (buttons, chips, icons) must maintain a minimum hit area of **48x48px**, regardless of their visual size, to accommodate limited dexterity.
- **Mobile-First:** Designs are optimized for portrait orientation, with content reflowing into two columns on tablet breakpoints (600px+).

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a soft hierarchy that avoids the "flatness" of clinical dashboards.

- **Surface Tiers:** The background uses the `neutral` token, while primary interactive cards use the `surface` (white/off-white) token.
- **Shadow Profile:** Shadows are extremely diffused with low opacity (e.g., 8% opacity, 16px blur) and a slight tint of the `primary` color to maintain warmth.
- **Interactive Depth:** Upon press, cards should visually "sink" or lose their shadow to provide tactile feedback without requiring complex animations.
- **Z-Index Strategy:** 
  - Level 0: Background
  - Level 1: Standard Cards/Lists
  - Level 2: Navigation Bars / Floating Action Buttons
  - Level 3: Bottom Sheets and Dialogs (using a 40% opacity dimming overlay).

## Shapes

The shape language is defined by a **Rounded** philosophy. Large corner radii remove the "sharpness" associated with technical or medical equipment, contributing to the friendly and approachable brand personality.

### Shape Tokens
- **Cards & Selection UI:** 16px (`rounded-lg`) is the standard for all content containers and onboarding selection cards.
- **Buttons:** 12px for a slightly more compact, sturdy feel for primary actions.
- **Bottom Sheets:** 24px (`rounded-xl`) on top corners only, creating a soft "drawer" appearance.
- **Progress Elements:** All progress bars and trackers must use "rounded caps" to avoid harsh terminations.

## Components

### Buttons
- **Primary:** Solid `primary` color with white or high-contrast text. 12px roundedness.
- **Secondary:** Outlined with `primary` color and 2px stroke weight.
- **Tertiary:** Ghost buttons (text only) used for low-priority actions like "Cancel" or "Skip."

### Status Indicators
- **Rule:** Never use color alone. 
- **Format:** [Icon] + [Text Label] + [Color Tint]. For example, a "Completed" state uses a checkmark icon, the word "Complete," and the `success` green.

### Cards
- Standard cards use the 16px radius and a subtle ambient shadow. 
- **SurfaceVariant Cards:** Used for grouped items (e.g., a list of exercises within a module) to provide visual grouping without adding shadow layers.

### Input Fields
- Enclosed fields with a 12px radius. 
- Active states use a 2px `primary` border. 
- Labels always remain visible (no disappearing placeholders) to assist cognitive retention.

### Chips & Badges
- Used for difficulty levels (e.g., "Beginner") or categories. These use a pill-shape (full roundedness) and use the `primaryContainer` or `surfaceVariant` background for a subtle, non-intrusive appearance.

### Progress Bars
- Thick (min 8px height) with rounded end-caps. Use `primary` for the fill and a low-opacity version of the same hue for the track.