/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beauty: {
          dark: "#0a0a0a",
          gold: "#c9a96e",
          "gold-light": "#e8d5b0",
          cream: "#f5f0e8",
          charcoal: "#1a1a1a",
          rose: "#d4a5a5",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [],
};
