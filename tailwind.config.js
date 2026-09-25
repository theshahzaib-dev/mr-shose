/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          gold: 'var(--color-accent)',
          'gold-hover': 'var(--color-accent-hover)',
          'gold-light': 'var(--color-accent-light)',
          surface: 'var(--color-surface)',
          'surface-dark': 'var(--color-surface-dark)',
        },
      },
    },
  },
  plugins: [],
};