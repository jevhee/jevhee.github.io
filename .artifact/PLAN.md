# Implementation Plan (PLAN)

## Phase 1: Repository Setup & Skeleton ✅
1. Initialize Git repository and base folder structure.
2. Set up the foundational `index.html` with correct meta tags (viewport, description) for SEO.
3. Import required fonts (Geist, JetBrains Mono).

## Phase 2: Design System Integration (Tailwind) ✅
1. **Tailwind Config**: Configure `tailwind.config.js` with Catppuccin colors and typography system.
2. Define CSS variables in `src/input.css` to support Tailwind opacity modifiers (`/15`, `/25`) on custom colors.
3. Establish `bun run build:css` via Tailwind CLI to generate `dist/output.css`.
4. Configure aggressive `safelist` regex patterns for dynamically generated classes (e.g., `bg-${color}`).

## Phase 3: Core Architecture & Interactivity ✅
1. **Component-Based UI**: Split the monolithic HTML into modular Vanilla JS components (`components/*.js`).
2. **Data Decoupling**: Extract all textual and structural content into `data/content.js`.
3. **Application Core**: Implement `scripts/app.js` to render components dynamically into DOM containers.
4. **`theme.js`**: Implement the theme toggling logic using Tailwind's `dark` class strategy (System preference + localStorage).

## Phase 4: Polish & Refinement ✅
1. Verify that the UI looks identical to the original design specs.
2. Ensure all dynamic class bindings work correctly in production (fix Tailwind JIT pruning using exact variants in the safelist).
3. Test responsive behavior (Mobile and Desktop) based on Tailwind classes.
4. Add robust hover states and micro-interactions (e.g., pulsing availability dots, glow effects on banner).

## Phase 5: Deployment ✅
1. Configure GitHub repository settings to enable GitHub Pages.
2. Apply cache-busting to `index.html` CSS references.
3. Verify live deployment functionality and styling correctness.

## Phase 6: Maintenance & Content Updates (Ongoing)
- To update content, only `data/content.js` needs to be modified.
- To modify styles, update components and run `bun run build:css`.
