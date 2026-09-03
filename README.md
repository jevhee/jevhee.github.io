# Jevi Saputra - Personal Portfolio

A minimalist, high-performance personal portfolio website built with a data-driven architecture. 

Designed for scalability, the UI is decoupled from the content using modular Vanilla JS components and styled with Tailwind CSS, utilizing the [Catppuccin Macchiato/Latte](https://github.com/catppuccin/catppuccin) color palette.

## 🚀 Features
- **Data-Driven Architecture:** All text, projects, and metadata are cleanly stored in `data/content.js`.
- **Modular Components:** UI sections are split into independent Javascript render functions (`components/`).
- **Tailwind CSS (CLI):** Fully optimized utility classes with dynamic theme variables and JIT compilation.
- **Dynamic Theme:** Smooth transition between Catppuccin Latte (Light Mode) and Macchiato (Dark Mode).
- **Responsive & Performant:** Mobile-first approach, zero layout shift, and extremely fast load times.

## 💻 Tech Stack
- **HTML5 & Vanilla JS (ES6)**
- **Tailwind CSS v3** (via Bun & PostCSS)
- **Geist & JetBrains Mono** Typography

## 🛠️ Local Development

### Prerequisites
Make sure you have [Bun](https://bun.sh/) installed.

### Setup
1. Clone the repository:
   ```bash
   git clone git@github.com:jevhee/jevhee.github.io.git
   cd jevhee.github.io
   ```
2. Install dependencies:
   ```bash
   bun install
   ```

### Running Locally
To start the Tailwind CSS watch process and generate the CSS output dynamically:
```bash
bun run dev
```

Since the project uses ES6 Modules or JS for rendering, it is recommended to run a local development server to avoid CORS issues when opening the `index.html` file directly:
- **VS Code:** Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
- **Terminal (Python):** `python3 -m http.server 8000`
- **Bun:** `bunx serve`

## 📝 Updating Content
To modify the website's text, projects, or links, simply edit **`data/content.js`**. You do not need to touch the HTML or CSS to update the portfolio.

## 📄 License
© 2026 Jevi Saputra. All Rights Reserved.
