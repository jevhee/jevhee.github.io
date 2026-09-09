/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./index.html",
    "./components/**/*.js",
    "./scripts/**/*.js",
    "./data/**/*.js"
  ],

  theme: {
    extend: {
      colors: {
        "macchiato-base": "rgb(var(--color-base) / <alpha-value>)",
        "macchiato-mantle": "rgb(var(--color-mantle) / <alpha-value>)",
        "macchiato-crust": "rgb(var(--color-crust) / <alpha-value>)",
        "macchiato-surface0": "rgb(var(--color-surface0) / <alpha-value>)",
        "macchiato-surface1": "rgb(var(--color-surface1) / <alpha-value>)",
        "macchiato-surface2": "rgb(var(--color-surface2) / <alpha-value>)",
        "macchiato-overlay0": "rgb(var(--color-overlay0) / <alpha-value>)",
        "macchiato-subtext0": "rgb(var(--color-subtext0) / <alpha-value>)",
        "macchiato-subtext1": "rgb(var(--color-subtext1) / <alpha-value>)",
        "macchiato-text": "rgb(var(--color-text) / <alpha-value>)",
        "macchiato-lavender": "rgb(var(--color-lavender) / <alpha-value>)",
        "macchiato-blue": "rgb(var(--color-blue) / <alpha-value>)",
        "macchiato-sapphire": "rgb(var(--color-sapphire) / <alpha-value>)",
        "macchiato-sky": "rgb(var(--color-sky) / <alpha-value>)",
        "macchiato-teal": "rgb(var(--color-teal) / <alpha-value>)",
        "macchiato-green": "rgb(var(--color-green) / <alpha-value>)",
        "macchiato-yellow": "rgb(var(--color-yellow) / <alpha-value>)",
        "macchiato-peach": "rgb(var(--color-peach) / <alpha-value>)",
        "macchiato-maroon": "rgb(var(--color-maroon) / <alpha-value>)",
        "macchiato-red": "rgb(var(--color-red) / <alpha-value>)",
        "macchiato-mauve": "rgb(var(--color-mauve) / <alpha-value>)",
        "macchiato-pink": "rgb(var(--color-pink) / <alpha-value>)",
        "macchiato-flamingo": "rgb(var(--color-flamingo) / <alpha-value>)",
        "macchiato-rosewater": "rgb(var(--color-rosewater) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "space-2xs": "0.25rem",
        "space-xs": "0.5rem",
        "space-sm": "0.75rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2rem",
        "space-2xl": "3rem",
        "space-3xl": "4rem",
        "gutter-mobile": "1.25rem",
        "gutter-desktop": "1.5rem"
      },
      fontFamily: {
        "ui": ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        "handwriting": ["Caveat", "cursive"],
        "serif": ["Lora", "Georgia", "serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    }
  },
}
