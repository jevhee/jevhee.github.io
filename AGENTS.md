# Agent Rules

These rules dictate how the AI agent should behave when working on this repository, especially regarding the deployment and version control process.

## Pre-Deployment & Push Checklist

Whenever the user asks you to "deploy", "push", or "save" the code, you MUST follow this exact sequence:

1. **Rebuild CSS**: Always run `bun run build:css` first. This ensures that any new Tailwind utility classes added to the HTML or JavaScript components are compiled into `dist/output.css`.
2. **Clean Up**: Ensure there are no leftover temporary files (like `clean_app.js`) or testing console logs before committing.
3. **Format Code**: Run `bun run format` to ensure code is neatly structured using Prettier and Tailwind classes are sorted.
4. **Semantic Commits**: When committing, use strict semantic commit prefixes WITHOUT scopes.
   - **Correct**: `feat: improve spacing`
   - **Incorrect**: `feat(ui): improve spacing`
   - **Follow Common Prefixes (Conventional Commits)**:
     - `feat:` A new feature for users.
     - `fix:` A bug fix for users.
     - `docs:` Documentation changes only.
     - `style:` Code style changes (formatting, missing semicolons).
     - `refactor:` Code changes that neither fix bugs nor add features.
     - `test:` Adding or fixing tests.
     - `chore:` Maintenance tasks or updating build tasks.
5. **Sync Remote**: Always run `git pull --rebase` before pushing to avoid conflicts with remote changes.
6. **Push**: Execute `git push` to deploy the changes. Since this is a GitHub Pages repository, pushing to the `main` branch automatically triggers the deployment.

## Design Philosophy & Guidelines

- **Theme**: This project strictly uses the **Catppuccin** color palette (Macchiato for Dark Mode, Latte for Light Mode). Never use hardcoded colors; always use the established CSS variables (e.g., `bg-macchiato-base`, `text-macchiato-text`).
- **Minimalism**: Maintain a clean, text-focused, and premium aesthetic. Use subtle touches like the `bg-dot-pattern` or dashed dividers (`border-dashed border-macchiato-surface2`) instead of heavy, distracting elements.
