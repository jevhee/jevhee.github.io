# Product Requirements Document (PRD): Jevi Saputra - Personal Website

## 1. Overview
**Project Name:** Personal Website (Jevi Saputra)
**Project Type:** Web Application
**Design Theme:** Developer Minimalist (Dark/Light mode support via Catppuccin Macchiato & Latte)

This project aims to build an austere, highly refined, developer-centric personal website for Jevi Saputra. It will serve as an interactive portfolio and open notebook, targeting engineering leads, founders, and recruiters.

## 2. Target Audience
- Engineering leads
- Founders
- Recruiters
- Fellow craftspeople seeking high-caliber mobile systems and client architecture

## 3. Core Features & Requirements
### 3.1. Theming & Aesthetics
- **Color Modes:** Must support both Dark Mode (Catppuccin Macchiato) and Light Mode (Catppuccin Latte).
- **Design Movement:** "Developer Minimalism" - Form follows content. No heavy drop shadows or ornamental fills. Clean typographic hierarchy.
- **Typography:** 
  - `Geist` for display, headings, and narrative copy.
  - `JetBrains Mono` for code, tags, dates, and technical descriptors.
- **Layout:** A single, rigorously centered reading column capped at `580px` for optimal readability.

### 3.2. Key Components
1. **Navigation Bar:**
   - Centered, floating, or top-pinned single bar adhering to the 580px column.
   - Includes a theme switcher (icon-only button) for seamless Light/Dark mode transitions.
   - Semi-transparent background with backdrop blur (`backdrop-filter: blur(12px)`).
2. **Project & Experience Rows:**
   - List model with Project/Company Name, Tech Stack/Role, and Year/External Arrow.
   - Hover state includes an expanding transparent mantle pill behind the row.
3. **Tech Stack Chips & Code Badges:**
   - Compact monospace tags (`label-sm`).
   - Mantle background with subtle borders and category-based accent dots.
4. **Status Indicator (Availability Badge):**
   - Pulsing 6px dot (Catppuccin Teal) to indicate current availability (e.g., "Available for Q2 projects").
5. **Contact / Input Fields:**
   - Focused inputs transition the border to blue with a zero-offset 2px soft ring.

### 3.3. Responsive Design
The platform must be responsive and optimized for both Desktop and Mobile devices.
- **Mobile Screens:** Enforce a `1.25rem` (20px) safe margin.
- **Tablet/Desktop Screens:** Rely on centered auto-margins with a fallback `1.5rem` minimum.

## 4. Technical Constraints
- The UI should implement precise hairline dividers, sub-pixel borders, tactile focus rings, and expressive monospaced accents.
- Do not use stark blacks (`#000000`) or blinding whites (`#ffffff`); stick strictly to the defined Catppuccin palette.
- Hover transitions should signal interaction through luminescence rather than displacement (zero layout shift).

## 5. Success Metrics
- Seamless, zero-layout-shift UI interactions.
- Flawless transitions between dark and light modes.
- High readability scores on both desktop and mobile environments.
