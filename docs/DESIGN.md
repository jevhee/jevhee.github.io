# Design System & Guidelines (jevhee.github.io)

This document serves as the single source of truth for the visual design, spacing, typography, and component structures of this project. AI Agents MUST refer to these guidelines before implementing new UI or modifying existing ones to ensure consistency.

## 1. Design Tokens

All design tokens are strictly defined in `tailwind.config.js`. Do not invent new tokens without updating the config.

### A. Color Palette (Catppuccin)

We use a subset of the Catppuccin palette, supporting opacity modifiers (e.g. `bg-macchiato-base/50`):

- **Backgrounds**: `macchiato-base`
- **Surfaces**: `macchiato-surface0`, `macchiato-surface1`, `macchiato-surface2`
- **Overlays**: `macchiato-overlay0`
- **Text**: `macchiato-text` (Primary), `macchiato-subtext0`, `macchiato-subtext1` (Secondary/Tertiary)
- **Accents**: `macchiato-blue`, `macchiato-sapphire`, `macchiato-yellow`

### B. Spacing Tokens

While standard Tailwind spacing (e.g., `mb-6`, `gap-8`) is used for general layout, the following semantic spacing tokens are available for UI components:

- `space-2xs` (0.25rem / 4px)
- `space-xs` (0.5rem / 8px)
- `space-sm` (0.75rem / 12px)
- `space-md` (1rem / 16px)
- `space-lg` (1.5rem / 24px)
- `space-xl` (2rem / 32px)
- `space-2xl` (3rem / 48px)
- `space-3xl` (4rem / 64px)
- `gutter-mobile` (1.25rem)
- `gutter-desktop` (1.5rem)

### C. Border Radius Tokens

- `rounded` (0.25rem / 4px) - Default for small elements.
- `rounded-lg` (0.5rem / 8px) - Used for cards or containers.
- `rounded-xl` (0.75rem / 12px) - Used for larger containers.
- `rounded-full` (9999px) - Used for circular elements (e.g., avatar, ping dot).

### D. Font Family Tokens

- `font-ui` (Outfit, Inter) - The default sans-serif font for the UI.
- `font-handwriting` (Caveat, cursive) - Used for decorative accents or signatures.

### E. Font Size Tokens

There are no custom font-size variables defined in `tailwind.config.js`. AI Agents MUST use standard Tailwind font sizes (e.g., `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`). Do NOT invent arbitrary pixel values.

---

## 2. Typography

- **Primary Font**: `Outfit` (`font-ui`) - Used for all general text and headings.
- **Accent Font**: `Caveat` - Used for signatures or handwritten-style text.
- **Icons**: `Material Symbols Outlined` - Used for UI icons.

### Heading Sizes:

- **Section Titles**: `text-3xl font-bold tracking-tight leading-tight text-macchiato-text`
- **Item Titles (e.g. Project Name)**: `text-lg font-bold text-macchiato-text`

### Paragraphs & Subtitles:

- **Section Subtitles**: Wrapped in `<div class="prose prose-xl max-w-none text-macchiato-text"><p>...</p></div>`
- **Description Text**: `text-[15px] sm:text-base text-macchiato-subtext0 leading-relaxed` (or `leading-snug` for compact lists).

---

## 3. Layout & Spacing

### Main Container

The website uses a compact, text-focused layout.

- **Max Width**: `max-w-[640px]`
- **Alignment**: Centered (`mx-auto`)
- **Global Gap**: Sections are spaced using `gap-8` on the main wrapper.

### Standard Section Structure

When creating a new section, ALWAYS use this exact HTML structure for the wrapper and header:

```html
<section class="flex scroll-mt-20 flex-col" id="section-name">
  <!-- Header -->
  <div class="mb-6 flex flex-col gap-1">
    <h2 class="text-3xl font-bold leading-tight tracking-tight text-macchiato-text sm:text-3xl">
      Section Title
    </h2>
    <div class="prose prose-xl relative max-w-none overflow-hidden text-macchiato-text">
      <p>Section Subtitle</p>
    </div>
  </div>

  <!-- Content -->
  <div class="flex flex-col">
    <!-- Items go here -->
  </div>
</section>
```

---

## 4. Component Styles

### Lists (Timeline, Now, Log)

- **Container**: `flex flex-col gap-1.5` (for items with borders) or `ul space-y-1.5` (for compact text lists).
- **Icons**: Always aligned to the top `items-start`. Use `mt-[1px]` to perfectly align the icon with the first line of text.
- **Dates / Meta**: `text-[14px] font-medium text-macchiato-subtext0`.

### Links

Links use a thick underline that animates on hover.
**Standard Link Classes**:
`text-macchiato-blue hover:text-macchiato-sapphire dark:text-macchiato-yellow dark:hover:text-macchiato-sapphire transition-colors duration-200 underline decoration-2 underline-offset-4 decoration-macchiato-surface2 hover:decoration-macchiato-blue dark:hover:decoration-macchiato-yellow`

### Decorative Elements

- **Background Pattern**: `bg-dot-pattern` (defined in `input.css`).
- **Dashed Lines**: `border-dashed border-macchiato-surface2` (used as separators in Timeline).
- **Pinging Dot (Live Indicator)**:

```html
<div class="relative flex h-3 w-3 shrink-0">
  <span
    class="absolute inline-flex h-full w-full animate-ping rounded-full bg-macchiato-blue/60 dark:bg-macchiato-yellow/60"
  ></span>
  <span
    class="relative inline-flex h-3 w-3 rounded-full bg-macchiato-blue dark:bg-macchiato-yellow"
  ></span>
</div>
```

---

## 5. Animations

- **Theme Toggle**: The website uses the native `View Transitions API` for theme toggling.
  - Mobile & Desktop: `Pure Crossfade` (handled by default CSS view-transitions).
  - Desktop-only Override: Circle wipe reveal (`html.transition-circle`).
- **General Transitions**: Use `transition-colors duration-300` for smooth color swapping.

---

_Note to Agents: When updating the UI, always read this file first. A consistent visual language is more important than subjective improvements._
