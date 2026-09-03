# Agent Rules & Guidelines (AGENTS)

This file serves as behavioral constraints and guidelines for AI Agents (like Antigravity) working on this project.

## 1. Architectural Constraints
- **Tailwind CSS:** USE Tailwind CSS (via CDN) to style the application. We are aiming for 100% pixel-perfect matching with the original `stitch_personal_website` generated code.
- **No Complex Build Tools:** Avoid introducing Webpack, Vite, or React unless explicitly requested by the user. Keep it simple and static for GitHub Pages.
- **GitHub Pages Compatibility:** Ensure all asset paths are relative or correctly root-relative so they work flawlessly on GitHub Pages.

## 2. Styling & Aesthetic Rules
- **Color Palette:** Strictly use the custom Catppuccin colors defined in the Tailwind configuration within `index.html`.
- **Typography:** Use the configured Tailwind font families (e.g., `font-body-md`, `font-headline-sm`) that map to `Geist` and `JetBrains Mono`.
- **Migration Accuracy:** When adding or updating components, refer to the original `code.html` in the `stitch_personal_website` folder to ensure the exact same utility classes are used.

## 3. Workflow
- When implementing a feature, extract the relevant HTML/Tailwind block from the Stitch generated folders.
- Update `PLAN.md` and `task.md` accordingly when a phase is completed.
