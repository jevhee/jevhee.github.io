/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./components/**/*.js",
    "./scripts/**/*.js",
    "./data/**/*.js"
  ],
  safelist: [
    'w-1.5', 'h-1.5', 'w-2', 'h-2', 'w-2.5', 'h-2.5',
    {
      pattern: /^(bg|text|border)-macchiato-(lavender|blue|sapphire|sky|teal|green|yellow|peach|maroon|red|mauve|pink|flamingo|rosewater|text)$/,
      variants: ['hover', 'group-hover'],
    },
    {
      pattern: /^bg-macchiato-(lavender|blue|sapphire|sky|teal|green|yellow|peach|maroon|red|mauve|pink|flamingo|rosewater|text)\/(10|15)$/,
      variants: ['hover', 'group-hover'],
    },
    {
      pattern: /^border-macchiato-(lavender|blue|sapphire|sky|teal|green|yellow|peach|maroon|red|mauve|pink|flamingo|rosewater|text)\/20$/,
      variants: ['hover', 'group-hover'],
    }
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
        "body-sm": ["Geist", "-apple-system", "sans-serif"],
        "body-md": ["Geist", "-apple-system", "sans-serif"],
        "body-lg": ["Geist", "-apple-system", "sans-serif"],
        "headline-sm": ["Geist", "-apple-system", "sans-serif"],
        "headline-md": ["Geist", "-apple-system", "sans-serif"],
        "headline-lg": ["Geist", "-apple-system", "sans-serif"],
        "code-inline": ["JetBrains Mono", "monospace"],
        "label-sm": ["JetBrains Mono", "monospace"],
        "label-md": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "22px", letterSpacing: "-0.005em", fontWeight: "400" }],
        "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "headline-sm": ["16px", { lineHeight: "24px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.03em", fontWeight: "600" }],
        "code-inline": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        "label-sm": ["11px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "400" }],
        "label-md": ["13px", { lineHeight: "18px", letterSpacing: "-0.01em", fontWeight: "500" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
