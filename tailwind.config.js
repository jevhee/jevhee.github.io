/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './components/**/*.js', './scripts/**/*.js', './data/**/*.js'],

  theme: {
    extend: {
      colors: {
        'macchiato-base': 'rgb(var(--color-base) / <alpha-value>)',
        'macchiato-surface0': 'rgb(var(--color-surface0) / <alpha-value>)',
        'macchiato-surface1': 'rgb(var(--color-surface1) / <alpha-value>)',
        'macchiato-surface2': 'rgb(var(--color-surface2) / <alpha-value>)',
        'macchiato-overlay0': 'rgb(var(--color-overlay0) / <alpha-value>)',
        'macchiato-subtext0': 'rgb(var(--color-subtext0) / <alpha-value>)',
        'macchiato-subtext1': 'rgb(var(--color-subtext1) / <alpha-value>)',
        'macchiato-text': 'rgb(var(--color-text) / <alpha-value>)',
        'macchiato-blue': 'rgb(var(--color-blue) / <alpha-value>)',
        'macchiato-sapphire': 'rgb(var(--color-sapphire) / <alpha-value>)',
        'macchiato-yellow': 'rgb(var(--color-yellow) / <alpha-value>)',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      spacing: {
        'space-2xs': '0.25rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4rem',
        'gutter-mobile': '1.25rem',
        'gutter-desktop': '1.5rem',
      },
      fontFamily: {
        ui: ['Outfit', 'Inter'],
        handwriting: ['Caveat', 'cursive'],
        serif: ['Outfit', 'Inter'],
        mono: ['Outfit', 'Inter'],
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(-14.0deg)' },
          '20%': { transform: 'rotate(8.0deg)' },
          '30%': { transform: 'rotate(-14.0deg)' },
          '40%': { transform: 'rotate(4.0deg)' },
          '50%': { transform: 'rotate(-10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        wave: 'wave 2s infinite',
      },
    },
  },
};
