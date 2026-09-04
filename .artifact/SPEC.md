# Technical Specification (SPEC)

## 1. Tech Stack
- **Core:** Semantic HTML5
- **Styling:** Tailwind CSS (via Tailwind CLI & Bun) to ensure optimal performance and minimal CSS footprint.
- **Interactivity & Templating:** Vanilla JavaScript (ES6+ Modules) using template literals for components.
- **Data Management:** Centralized data structure (`data/content.js`).
- **Hosting/Deployment:** GitHub Pages (Static Site).

## 2. Architecture & File Structure
The project uses a lightweight, component-driven Vanilla JS architecture without heavy frameworks like React:

```text
/
├── index.html             # Main entry point, loads CSS and scripts
├── tailwind.config.js     # Tailwind configuration including safelist for dynamic classes
├── package.json           # Bun scripts (build:css, dev)
├── src/
│   └── input.css          # Base Tailwind imports and Catppuccin CSS variables
├── dist/
│   └── output.css         # Compiled, minified Tailwind CSS
├── components/            # UI Components returning HTML string templates
│   ├── Header.js, About.js, Journeys.js, ...
├── data/
│   └── content.js         # Centralized text, projects, and metadata
└── scripts/
    ├── app.js             # Main application logic to render components
    └── theme.js           # Dark/Light mode toggle logic + localStorage
```

## 3. Theming Engine (Tailwind Config)
To implement the Catppuccin Macchiato (Dark) and Latte (Light) themes seamlessly:
- We use custom CSS variables for Catppuccin colors in `src/input.css`.
- Tailwind's `tailwind.config.js` maps these variables to custom utility classes (e.g., `bg-macchiato-blue`).
- We utilize Tailwind's `darkMode: "class"` feature.
- **Theme Switcher:** `scripts/theme.js` toggles the `dark` class on the `<html>` tag and saves the preference in `localStorage`.
- **Dynamic Favicon:** The theme switcher dynamically updates the `<link rel="icon">` in `index.html` to point to `assets/favicon-macchiato.svg` (Dark) or `assets/favicon-latte.svg` (Light) depending on the active theme.

## 4. Typography Integration
- **Geist (Sans-serif):** Headings and body copy.
- **JetBrains Mono (Monospace):** Tags, badges, and technical accents.
- Both fonts are imported via Google Fonts in the `<head>` of `index.html`.

## 5. Deployment Pipeline (GitHub Pages)
- Before deployment, the CSS must be compiled using `bun run build:css`.
- The site is deployed directly from the `main` branch root to GitHub Pages.
- A cache-buster query parameter (`?v=...`) is used on the CSS `<link>` in `index.html` to ensure immediate style updates upon deployment.
