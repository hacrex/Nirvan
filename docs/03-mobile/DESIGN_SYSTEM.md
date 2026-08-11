# REVIA — Design System

## 1. Design Direction

REVIA should feel:

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

Final colors should be established through the brand identity process and accessibility testing.

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

Support Dynamic Type / system font scaling.

## 5. Spacing

Use a consistent spacing scale, for example:

```text
4
8
12
16
24
32
48
64
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

Use subtle transitions.

Provide a reduced-motion option.

## 12. Component Governance

Every reusable component should have:

- Usage guidance
- Accessibility behavior
- Error behavior
- Mobile constraints
- Test coverage

