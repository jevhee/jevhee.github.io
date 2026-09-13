# Architecture Guidelines (jevhee.github.io)

This document outlines the technical architecture and data flow of this project. AI Agents MUST adhere to this architecture when modifying the codebase.

Do NOT introduce UI frameworks (React, Vue, Svelte) or complex build tools. This project is intentionally built with Vanilla JavaScript, Vite, and Tailwind CSS.

## 1. Project Structure

```text
├── components/       # UI Components (Vanilla JS functions returning HTML strings)
├── data/             # Single Source of Truth for content (content.js)
├── scripts/          # Application logic and entry points (app.js, theme.js)
├── src/              # Global styles (input.css)
├── index.html        # Main HTML skeleton
└── tailwind.config.js
```

## 2. Component Architecture (Vanilla JS)

This project does not use a virtual DOM. Components are pure JavaScript functions that take a data object as an argument and return an HTML string template literal.

**Component Rules:**

1. Components MUST be pure functions.
2. Components MUST NOT mutate the DOM directly inside the component file.
3. Use template literals (`\``) to interpolate data.
4. Export the function as the default export.

_Example Component (`components/Example.js`):_

```javascript
const Example = (data) => `
  <section id="example" class="...">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
  </section>
`;

export default Example;
```

## 3. State & Data Management

All dynamic content is strictly decoupled from the UI and centralized in `data/content.js`.

**Data Rules:**

1. Do not hardcode text content inside `components/` files.
2. If adding a new section or modifying content, update `data/content.js`.
3. The `SITE_CONTENT` object is exported and passed down to components via `scripts/app.js`.

## 4. Application Entry Point (`scripts/app.js`)

The `app.js` file acts as the controller. It:

1. Imports all necessary components.
2. Imports the `SITE_CONTENT` object from `data/content.js`.
3. Selects the target containers in `index.html` (e.g., `#page-content`).
4. Invokes the components, passing the appropriate data slices.
5. Joins the resulting HTML strings and injects them into the DOM using `innerHTML`.

_Example flow:_

```javascript
import { SITE_CONTENT } from '../data/content.js';
import Example from '../components/Example.js';

const contentContainer = document.getElementById('page-content');
contentContainer.innerHTML = [Example(SITE_CONTENT.exampleData)].join('');
```

## 5. Global Logic & Theming

- **Theming**: Handled exclusively by `scripts/theme.js`. It manages LocalStorage state, Tailwind's `dark` class, and the View Transitions API.
- **Styling**: Handled by Tailwind classes inline within components. Global or custom animations (like view transitions) belong in `src/input.css`.

---

_Note to Agents: Respect the simplicity of this architecture. Do not over-engineer solutions, and do not introduce state-management libraries._
