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

### Typography

- **Long Text / Paragraphs**: All long descriptive text or standalone paragraphs (e.g., Prologue, Colophon, Contact descriptions, Build descriptions) MUST use the `text-justify` class to align text evenly on both the left and right margins. Short single-line list items (e.g. Now.js, Timeline.js) should remain left-aligned.

### Lists (Timeline, Now)

- **Container**: `flex flex-col gap-1.5` (for items with borders) or `ul space-y-1.5` (for compact text lists).
- **Icons**: Always aligned to the top `items-start`. Use `mt-[1px]` to perfectly align the icon with the first line of text.
- **Dates / Meta**: `text-[14px] font-medium text-macchiato-subtext0`.

### Lists with Dashed Dividers (Builds, Log, Contact)

To ensure consistent vertical spacing and border rendering, particularly on mobile, follow this exact structure:

- **Container**: `<ul class="list-none pl-0 m-0 space-y-1 -my-3">`
- **List Item (`<li>`)**: Must only act as a border container without padding. Use classes: `relative text-base text-macchiato-text border-b border-dashed border-macchiato-surface2 sm:border-none last:border-none`.
- **Inner Content Container**: The actual padding and layout must be placed on the immediate child element. Typically using `py-3` and flex column/row utilities.
- **Interactive Links**: If the list item is a full-row link (e.g. Log), the immediate child element MUST be an `<a class="group ... hover:bg-macchiato-surface1/40">`. Use `group-hover:text-macchiato-blue dark:group-hover:text-macchiato-yellow` on text elements inside to highlight them on hover, rather than using the standard inline text hyperlink style.
- **Visual Balance (Mobile)**: If the bottom-most element in the flex column (mobile view) is a solid container (like circular buttons) instead of text, add `mb-1 sm:mb-0` to it. This compensates for the missing line-height blank space that text naturally has, keeping the dash divider spacing visually centered.

### Links

Links use a thick underline that animates on hover.
**Standard Link Classes**:
`font-medium text-macchiato-blue dark:text-macchiato-yellow underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-macchiato-blue dark:hover:decoration-macchiato-yellow transition-colors duration-200`

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

### Buttons (Magnetic Effect)

Interactive buttons (e.g., primary call-to-actions, social links, theme toggles) use a JavaScript-driven magnetic hover effect. When creating a new magnetic button, use the following exact structure:

```html
<button
  class="magnetic-btn group relative flex items-center justify-center rounded-xl bg-macchiato-blue text-macchiato-base transition-all duration-300 hover:shadow-lg active:scale-95 dark:bg-macchiato-yellow"
>
  <!-- The inner span is required for the parallax effect -->
  <span
    class="magnetic-inner pointer-events-none flex items-center justify-center transition-transform duration-100 ease-out"
  >
    Button Text or Icon
  </span>
</button>
```

- **Required Classes**: `magnetic-btn` on the parent, `magnetic-inner` on the child.
- **Shape**: Use `rounded-xl` (rounded square) for buttons that contain text. Use `rounded-full w-11 h-11` (circle) for standalone icon buttons (like social links or contact send buttons).
- **Desktop Only**: The magnetic effect (`app.js`) is strictly configured to only run on desktop screens (>=768px). Do NOT attempt to apply it for mobile touch interactions, as it conflicts with scrolling and tap events.
- **Pointer Events**: The `pointer-events-none` class on the inner span is strictly necessary to prevent hover flickering when JavaScript calculates mouse coordinates.
- **Transform Overwrites**: Do NOT use CSS transforms (`translate`) directly on these two elements, as `initMagneticButtons()` overwrites them inline. If you need CSS-based rotation (e.g. for icons), wrap the icon in a _nested_ child span inside `magnetic-inner`.

---

## 5. Animations

- **Theme Toggle**: The website uses the native `View Transitions API` for theme toggling.
  - Mobile & Desktop: `Pure Crossfade` (handled by default CSS view-transitions).
  - Desktop-only Override: Circle wipe reveal (`html.transition-circle`).
- **Scroll Reveal**: Sections fade up dynamically as they enter the viewport using `IntersectionObserver` in `app.js`.
  - Hidden state: `opacity-0 translate-y-6`
  - Visible state: `opacity-100 translate-y-0`
  - Transition: `transition-all duration-700 ease-out`
  - Exception: The first section (`Prologue`) is excluded from the observer and is always visible on initial load.
- **General Transitions**: Use `transition-colors duration-300` for smooth color swapping.

---

_Note to Agents: When updating the UI, always read this file first. A consistent visual language is more important than subjective improvements._
