# Agent Rules & Guidelines (AGENTS)

This file serves as behavioral constraints and guidelines for AI Agents (like Antigravity) working on this project.

## 1. Architectural Constraints
- **Tailwind CSS:** USE Tailwind CLI (via Bun) to style the application. We use a compiled `dist/output.css`. DO NOT use Tailwind CDN for production to avoid JIT compilation performance issues and missing dynamic classes.
- **Component-Based Architecture:** The UI is split into Vanilla JS components (in `components/`) that return template literals. Content is strictly separated and resides in `data/content.js`.
- **No Complex Build Tools:** Avoid introducing Webpack, Vite, or React unless explicitly requested by the user. Keep it simple and static for GitHub Pages.
- **GitHub Pages Compatibility:** Ensure all asset paths are relative or correctly root-relative so they work flawlessly on GitHub Pages. Use cache-busting (e.g., `?v=2`) for CSS files when updating styles.

## 2. Styling & Aesthetic Rules
- **Color Palette:** Strictly use the custom Catppuccin colors defined in the Tailwind configuration.
- **Typography:** Use the configured Tailwind font families (e.g., `font-body-md`, `font-headline-sm`) that map to `Geist` and `JetBrains Mono`.
- **Dynamic Classes:** Be very careful when using dynamic template literals for Tailwind classes (e.g., `bg-${item.color}`). Ensure that the `tailwind.config.js` `safelist` regex covers all possible dynamic class names, including opacity modifiers (`/15`, `/25`) and variants (`hover:`, `group-hover:`).

## 3. Workflow
- When implementing a feature, update the relevant component in `components/` or data in `data/content.js`.
- Always run `bun run build:css` after updating any classes or the `safelist` in `tailwind.config.js`.
- Update `PLAN.md` and `task.md` accordingly when a phase is completed.
