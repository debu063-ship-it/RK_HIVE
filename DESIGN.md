# HIVE RK ENTERPRISES — DESIGN SYSTEM & TOKENS

This document defines the formal design language, typographic scale, motion thesis, and aesthetic standards established for the **HIVE RK Enterprises** portal, adhering strictly to the **Banham London** heritage editorial identity and **Impeccable** design guidelines.

---

## 1. Brand Identity & Visual World
- **Archetype**: Bespoke Luxury Enterprise / Curated Living & Hospitality
- **Reference**: Banham (1926 British Heritage Security & Design)
- **Tone**: Understated authority, tactile elegance, warm paper and deep British racing forest green tones, restrained brass accents.

---

## 2. Color Palette Tokens

| Token Name | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `--warm-paper` | `#F3F0E7` | Light luxury surface, warm card background |
| `--warm-paper-light`| `#FAF8F4` | Clean elevated card surface |
| `--warm-paper-dark` | `#E6E1D3` | Editorial body copy on dark backgrounds |
| `--warm-paper-subtle`| `#DCD6C5` | Subtle borders, meta text |
| `--hive-forest` | `#173D33` | Primary brand accent, primary CTA background |
| `--hive-forest-deep`| `#0F2620` | Modal container background, deep dark sections |
| `--quiet-brass` | `#B69B65` | Restrained metallic accent, focus ring, icons |
| `--quiet-brass-light`| `#C9B283` | Hover highlights |
| `--quiet-brass-subtle`| `rgba(182, 155, 101, 0.22)`| Delicate hairline rules & borders |
| `--charcoal-ink` | `#141716` | High-contrast headline typography |
| `--charcoal-soft` | `#4A504E` | Body text on white surfaces |

---

## 3. Typographic System

### Families
- **Headline Serif**: `IvarHeadline` (Regular 400) — Authority, British editorial distinction.
- **Body / Italic**: `IvarText` & `IvarItalic` (Regular 400).
- **Functional UI & Body**: `Neue Haas Grotesk Pro 55 Roman` (Regular 400 & Medium 500) — Precision grotesk legibility.

### Ramps & Rhythm
- **Hero Title**: `clamp(2.65rem, 5.4vw, 4.85rem)`, Line-Height: `0.94 - 1.05`, Letter-Spacing: `-0.015em`, `text-wrap: balance`
- **Section Titles**: `clamp(1.95rem, 3.2vw, 2.85rem)`, Line-Height: `1.05 - 1.15`, Letter-Spacing: `-0.015em`, `text-wrap: balance`
- **Card Titles**: `1.35rem - 1.45rem`, Line-Height: `1.22`, Letter-Spacing: `-0.01em`
- **Body Copy**: `clamp(0.875rem, 1vw, 0.95rem)`, Line-Height: `1.68 - 1.75`, Measure: `max-width: 65ch` (optimal eye tracking), `text-wrap: pretty` (prevents orphaned single words)
- **UI Nav / Actions**: `0.8125rem` (13px), Weight: `500`, Letter-Spacing: `0.02em - 0.04em`
- **Functional Small UI Floor**: `0.6875rem` (11px strict WCAG floor), Letter-Spacing: `0.14em - 0.18em`, Uppercase

---

## 4. Motion Thesis (Impeccable Guidelines)

### Thesis
- **Visitor Mode**: *Persuade + Experience*
- **Focal Moment**: Rehearsed hero entrance sequence upon arrival:
  1. Ambient cinematic video settle (`scale(1.04) -> scale(1.0)` over 1.6s).
  2. Headline masked reveal (`translateY(115%) -> translateY(0)` over 1.1s with `cubic-bezier(0.16, 1, 0.3, 1)`).
  3. Body copy and CTA confident fade-up.
- **Supporting Micro-Interactions**:
  - **Immediate feedback (100–150ms)**: Button active scale (`:active { transform: scale(0.98); }`).
  - **Routine state changes (150–250ms)**: Hover elevations (`translateY(-2px)`), card image subtle scale (`scale(1.025)`), underline micro-arrow translation (`translateX(4px)`).
  - **Layout & Overlays (250–350ms)**: Modal backdrop blur (`12px`) and drawer slide (`slideInLeft` with `cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Reduced Motion**: Graceful fallback via `@media (prefers-reduced-motion: reduce)` which zeroes spatial displacement while preserving opacity and state feedback.

---

## 5. Interaction & Accessibility Standards
- **Keyboard Navigation**: Highly visible `:focus-visible` ring (`2px solid var(--quiet-brass)`, `outline-offset: 3px`).
- **Touch Targets**: Minimum 44×44px accessible click/tap areas.
- **Contrast Ratios**: Strictly AAA/AA compliant for all text and UI elements.
- **Form Controls**: Crisp validation, inline feedback, accessible labels.
