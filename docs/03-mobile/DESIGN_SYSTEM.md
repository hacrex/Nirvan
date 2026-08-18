# NIRVAN — Shared Design System

## 1. Design Direction

NIRVAN should feel:

- Calm
- Human
- Encouraging
- Trustworthy
- Modern
- Accessible

Avoid a hospital-dashboard aesthetic and avoid childish gamification.

## 2. Visual Concept

The visual language should communicate:

- Forward movement
- Recovery
- Progress
- Human connection
- Vitality

## 3. Color System

Define semantic tokens rather than hardcoding colors:

```text
primary
primaryContainer
secondary
background
surface
surfaceVariant
textPrimary
textSecondary
success
warning
error
info
```

The current shared semantic palette is:

| Token | Value | Usage |
| --- | --- | --- |
| `canvas` | `#F8F5EF` | Default background |
| `canvasWarm` | `#F2E9DC` | Warm section surface |
| `ink` | `#1F2A24` | Primary text |
| `inkSoft` | `#46514A` | Supporting text |
| `forest` | `#285B4A` | Primary action and selected states |
| `forestDeep` | `#173D32` | Dark sections and footer |
| `sage` | `#DCE8DF` | Selected/supportive surface |
| `sageLight` | `#EEF4EE` | Subtle surface |
| `clay` | `#C66B4A` | Warm accent and focus support |
| `clayLight` | `#F5DED2` | Accent surface |
| `mistBlue` | `#DCE9EA` | Information state |
| `white` | `#FFFFFF` | Card and input surface |

All final colors must be validated through accessibility testing. Important status must never be communicated by color alone.

## 4. Typography

Use a highly readable sans-serif system.

Define:

```text
Display
Headline
Title
Body
Label
Caption
```

Support Dynamic Type / system font scaling. The marketing website may use Manrope or an equivalent humanist sans-serif for display headlines while retaining Atkinson Hyperlegible for body text and patient-facing content.

## 5. Spacing

Use a consistent spacing scale:

```text
4
8
12
16
24
32
48
64
80
96
128
```

## 6. Components

Core components:

- Button
- IconButton
- TextField
- SearchField
- Card
- ProgressCard
- ExerciseCard
- MetricCard
- GoalCard
- Timeline
- Chip
- BottomSheet
- Dialog
- Toast/Snackbar
- EmptyState
- ErrorState
- LoadingSkeleton
- ProductFrame
- TrustModule
- PathwayCard
- ArticleCard
- EarlyAccessForm

## 7. Status

Never communicate important health-related status by color alone.

Use:

```text
Icon + Color + Text
```

## 8. Charts

Charts should be:

- Simple
- Accessible
- Clearly labeled
- Interpretable without medical expertise

## 9. Video

Exercise videos should support:

- Captions
- Play/pause
- Replay
- Speed control where appropriate
- Full screen
- Audio guidance

## 10. Dark Mode

Support dark mode after validating contrast and media behavior.

## 11. Motion

Use subtle transitions. Use motion to communicate progress, completion, navigation, and state change. Provide a reduced-motion option. Do not use motion to create pressure, delay task completion, or imply a clinical outcome.

## 12. Component Governance

Every reusable component should have:

- Usage guidance
- Accessibility behavior
- Error behavior
- Mobile constraints
- Test coverage

## 13. Marketing Website Parity

The marketing website must share the mobile app’s semantic language and recovery principles. Its homepage should reflect the same product truths:

- **Today’s Recovery:** show what matters today rather than a dense dashboard.
- **Meaning over metrics:** show personal goals and understandable progress before raw health data.
- **Progress without pressure:** avoid shame, leaderboards, lost-streak language, and implied recovery timelines.
- **Human before AI:** introduce the recovery experience before optional technology or AI capabilities.
- **Education before promotion:** give visitors useful recovery information before asking for early access.

The website homepage source of truth is `docs/06-website/HOMEPAGE_COPY_WIREFRAME_DESIGN_SYSTEM.md`. The implementation should use the same spacing, radius, status, accessibility, and motion rules as the mobile product wherever the platform allows.

## 14. Web Component States

Marketing components should define the same minimum states as product components:

- Default
- Hover
- Pressed
- Focus-visible
- Disabled
- Loading
- Success
- Error
- Reduced motion

Interactive website elements must remain understandable when JavaScript is unavailable or motion is disabled. Product screenshots and prototypes must be labelled clearly when they do not represent a currently available feature.
