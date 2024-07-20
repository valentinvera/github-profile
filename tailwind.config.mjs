/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bvp: ["Be Vietnam Pro", "sans-serif"],
      },
      colors: {
        "dark-blue-gray": "#111729",
        "dark-indigo": "#1D1B48",
        "bright-blue": "#3662E3",
        "charcoal-blue": "#20293A",
        "slate-gray": "#364153",
        "slate-blue": "#4A5567",
        "pale-blue": "#CDD5E0",
      },
      fontSize: {
        "3.5xl": "32px",
        ...defaultTheme.fontSize,
      },
      backgroundImage: {
        "hero-pattern": "url(/src/assets/hero-image-github-profile.png)",
      },
    },
  },
  plugins: [],
}
