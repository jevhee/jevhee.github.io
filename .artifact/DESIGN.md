---
name: Developer Minimalist
colors:
  surface: '#0f1224'
  surface-dim: '#0f1224'
  surface-bright: '#35384c'
  surface-container-lowest: '#0a0d1f'
  surface-container-low: '#171a2d'
  surface-container: '#1b1e31'
  surface-container-high: '#26293c'
  surface-container-highest: '#313447'
  on-surface: '#dfe1fa'
  on-surface-variant: '#c3c6d2'
  inverse-surface: '#dfe1fa'
  inverse-on-surface: '#2c2f43'
  outline: '#8d909b'
  outline-variant: '#434750'
  surface-tint: '#adc7ff'
  primary: '#b0c9ff'
  on-primary: '#002e68'
  primary-container: '#8aadf4'
  on-primary-container: '#143f7f'
  inverse-primary: '#395d9f'
  secondary: '#d9b9ff'
  on-secondary: '#401d6b'
  secondary-container: '#573583'
  on-secondary-container: '#caa4fb'
  tertiary: '#8cd6cb'
  on-tertiary: '#003732'
  tertiary-container: '#71bab0'
  on-tertiary-container: '#004a43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc7ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#1c4585'
  secondary-fixed: '#eedcff'
  secondary-fixed-dim: '#d9b9ff'
  on-secondary-fixed: '#2a0054'
  on-secondary-fixed-variant: '#573583'
  tertiary-fixed: '#a6f0e5'
  tertiary-fixed-dim: '#8ad4c9'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#0f1224'
  on-background: '#dfe1fa'
  surface-variant: '#313447'
  latte-base: '#eff1f5'
  latte-mantle: '#e6e9ef'
  latte-text: '#4c4f69'
  latte-subtext: '#6c6f85'
  latte-blue: '#1e66f5'
  latte-mauve: '#8839ef'
  latte-peach: '#fe640b'
  latte-teal: '#179299'
  macchiato-base: '#24273a'
  macchiato-mantle: '#1e2030'
  macchiato-text: '#cad3f5'
  macchiato-subtext: '#a5adcb'
  macchiato-blue: '#8aadf4'
  macchiato-mauve: '#c6a0f6'
  macchiato-peach: '#f5a97f'
  macchiato-teal: '#8bd5ca'
typography:
  headline-lg:
    fontFamily: geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: geist
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-md:
    fontFamily: geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: geist
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.01em
  label-sm:
    fontFamily: jetbrainsMono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  code-inline:
    fontFamily: jetbrainsMono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  container-max: 580px
  gutter-mobile: 1.25rem
  gutter-desktop: 1.5rem
---

## Brand & Style

This design system targets an austere, highly refined, developer-centric personal brand. It embodies quiet confidence, technical craftsmanship, and intentional restraint—evoking the aesthetic lineage of Paco Coursey, Lee Robinson, and the craft-first web engineering community.

### Target Audience & Emotional Tone
- **Audience:** Engineering leads, founders, recruiters, and fellow craftspeople seeking high-caliber mobile systems and client architecture.
- **Emotional Response:** Intimate, precise, uncluttered, and lightweight. The interface feels less like marketing and more like an open notebook or meticulously maintained workspace.

### Design Movement: Developer Minimalism
- **Form Follows Content:** Structural decorations, heavy drop shadows, and ornamental fills are eliminated. Meaningful layout rhythm, typographic hierarchy, and micro-interactions carry the entire visual weight.
- **Monochrome Foundation with Intentional Color Highlights:** The system relies on soothing pastel accents derived strictly from the Catppuccin color system to surface metadata, tech badges, and inline status markers.
- **Craft Details:** Precise hairline dividers, sub-pixel borders, tactile focus rings, and expressive monospaced accents.

## Colors

The color architecture is built strictly upon **Catppuccin Macchiato** (default dark theme) paired with **Catppuccin Latte** (light alternative).

### Color Philosophy
- **Surfaces & Atmosphere:** The canvas uses pure `base` tones with subtle elevations stepped to `mantle`. Avoid high-contrast stark blacks (`#000000`) or blinding whites (`#ffffff`); instead, embrace the soft, warm pastels of the palette.
- **Text & Contrast:** Primary text (`text`) commands crisp readability, while supporting captions, dates, and meta tags leverage `subtext` to create an effortless hierarchy without visual fatigue.
- **Chromatic Accents:** 
  - **Blue (`#8aadf4` / `#1e66f5`):** Reserved for primary interactive elements, links, and active states.
  - **Mauve (`#c6a0f6` / `#8839ef`):** Used for featured project titles, key highlights, and active filter states.
  - **Teal (`#8bd5ca` / `#179299`):** Indicates stable systems, live deployments, availability indicators, and commit statuses.
  - **Peach (`#f5a97f` / `#fe640b`):** Subtle callouts, experiment badges, or current reading/learning tags.

## Typography

The typographic balance pairs `Geist` (clean, mechanical yet human neutral sans-serif) for editorial and narrative passages with `JetBrains Mono` for code, tags, dates, and technical descriptors.

### Hierarchy & Application Rules
- **Display & Headings:** Set in `Geist` with optical negative letter spacing (`-0.02em` to `-0.03em`) and medium/semibold weights to ensure clean density at small sizes.
- **Narrative Copy:** Set in `body-lg` or `body-md` with relaxed line-heights (`1.6x` to `1.65x`) to optimize reading comfort across single-column essay formats.
- **Metadata & Technical Accents:** All tags, technical stacks, timestamps, git commits, and stats use `JetBrains Mono` (`label-sm` or `label-md`). This reinforces the identity of an active mobile developer.
- **Text Selection:** Selection backgrounds must use translucent blue (`rgba(138, 173, 244, 0.25)` in dark mode and `rgba(30, 102, 245, 0.18)` in light mode).

## Layout & Spacing

### The Centered Column Philosophy
The layout eschews complex multi-column grids in favor of a single, rigorously centered reading column capped at `580px`. This mimics the intimate, focused reading experience of top-tier personal engineering sites.

### Rhythm & Alignment
- **Max Width:** Strictly locked to `580px` for all core content (prose, project lists, credentials, footers).
- **Horizontal Padding:** Mobile screens enforce a `1.25rem` (`20px`) safe margin; tablet and desktop screens rely on centered auto-margins with a fallback `1.5rem` minimum.
- **Vertical Flow:**
  - Section-to-section breaks use `space-2xl` (`48px`) or `space-3xl` (`64px`).
  - Item lists (e.g., project rows, work history) use `space-sm` (`12px`) or `space-md` (`16px`) spacing.
  - Heading-to-body margin is compact (`space-xs` or `space-sm`) to keep context tightly bound.

## Elevation & Depth

Visual hierarchy is maintained without heavy drop shadows or skeuomorphic bevels. Instead, elevation relies on subtle surface contrast, low-opacity hairline dividers, and ambient background blurs.

### Surface Elevation Levels
- **Base (Canvas):** Uses the root background (`macchiato-base` / `latte-base`).
- **Mantle (Floating Panels / Tooltips):** Uses `macchiato-mantle` or `latte-mantle` with 1px hairline borders (`rgba(202, 211, 245, 0.08)` in dark mode; `rgba(76, 79, 105, 0.08)` in light mode).
- **Backdrop Blur:** The fixed navigation bar uses an ultra-fine backdrop filter (`backdrop-filter: blur(12px)`) overlaid on an 80% alpha base color (`rgba(36, 39, 58, 0.8)`), letting background scroll context peek through without impairing text legibility.
- **Hover Transitions:** Micro-cards and interactive rows transition their background fill to a 50% opacity mantle or a faint accent glow (`rgba(138, 173, 244, 0.06)`), signaling interaction through luminescence rather than displacement.

## Shapes

The design system employs a refined `Soft` shape language (`roundedness: 1`). Radii are subtle and restrained, emphasizing precision and structure.

### Corner Radii Guidelines
- **Badges, Tags & Chips:** `4px` (`0.25rem`) to maintain compact, tag-like sharpness.
- **Interactive Cards & Buttons:** `6px` to `8px` (`0.375rem` to `0.5rem`) for a tailored, tactile feel that feels native to modern developer tooling.
- **Pills / Status Dots:** Circular (`9999px`) reserved purely for live availability badges and profile avatars.

## Components

### 1. Navigation Bar
- **Structure:** Centered, floating, or top-pinned single bar adhering to the `580px` content column.
- **Styling:** Semi-transparent base background with backdrop blur. Nav links use `Geist` `body-sm`, rendering inactive links in `subtext` and active links in `text` with an animated subtle underline or faint background capsule.
- **Theme Switcher:** Discrete icon-only button triggering seamless Latte/Macchiato transitions.

### 2. Buttons & Micro-CTAs
- **Primary Action:** Mauve or Blue subtle border with faint alpha background (`rgba(138, 173, 244, 0.1)`), transitioning to `rgba(138, 173, 244, 0.2)` on hover. Monospaced or sans-medium typography.
- **Ghost / Minimal Button:** Transparent background, `subtext` color changing to `text` on hover with a 150ms ease transition.

### 3. Project & Experience Rows (The List Model)
- **Structure:** Clean rows containing: Project/Company Name (Left), Tech Stack / Role (Middle, monospace subtext), and Year / External Arrow (Right).
- **Hover State:** An expanding transparent mantle pill appears behind the row on hover with zero layout shift (`margin: -6px -8px; padding: 6px 8px`).

### 4. Tech Stack Chips & Code Badges
- **Display:** Compact monospace tags (`label-sm`).
- **Surface:** Mantle background with a subtle border (`1px solid rgba(165, 173, 203, 0.15)`).
- **Color Accents:** Category-based accent dots (e.g., Swift in Peach, Kotlin in Mauve, TypeScript in Blue).

### 5. Status Indicator (Availability Badge)
- **Element:** Pulsing 6px dot using Catppuccin Teal (`#8bd5ca` / `#179299`) alongside `label-sm` text indicating current status.

### 6. Inputs & Contact Fields
- **Surface:** `mantle` fill with 1px border. Focus states transition the border to `blue` with a zero-offset 2px soft ring (`rgba(138, 173, 244, 0.25)`).
