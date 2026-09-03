# Implementation Plan (PLAN)

## Phase 1: Repository Setup & Skeleton
1. Initialize Git repository and base folder structure.
2. Set up the foundational `index.html` with correct meta tags (viewport, description) for SEO.
3. Import Tailwind CSS CDN and required fonts (Geist, JetBrains Mono).

## Phase 2: Design System Integration (Tailwind)
1. **Tailwind Config**: Copy the exact Tailwind configuration (`tailwind.config`) from the `stitch_personal_website` generated code into `index.html`.
2. Ensure both Catppuccin Macchiato and Latte variables are accounted for if dark/light toggling is needed, or stick to the exact classes provided by Stitch.

## Phase 3: Core Interactions
1. **`theme.js`**: Implement the theme toggling logic using Tailwind's `dark` class strategy.
   - Read system preference (`prefers-color-scheme`).
   - Read saved preference from `localStorage`.
   - Apply or remove the `dark` class on the `<html>` element.
   - Bind click event to the theme switcher button.

## Phase 4: Component Construction (HTML Migration)
1. Copy the HTML structure directly from `stitch_personal_website/.../code.html`.
2. Migrate the Navigation Bar, Hero/Bio Section, Experience/Projects List, and Tech Stack Chips.
3. Adjust any static placeholder data to reflect the user's actual information (if provided) or keep dummy data for layout verification.

## Phase 5: Polish & Refinement
1. Verify that the UI looks 100% identical to the Stitch generated output.
2. Test responsive behavior (Mobile and Desktop) based on Tailwind classes.
3. Cross-device testing (Chrome, Safari).

## Phase 6: Deployment
1. Configure GitHub repository settings to enable GitHub Pages.
2. Set source to `main` branch root.
3. Verify live deployment functionality.
