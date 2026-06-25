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
          black: "#0D0D0D",
          "black-soft": "#1A1A1A",
          charcoal: "#333333",
          graphite: "#4A4A4A",
          "gray-medium": "#666666",
          "gray-light": "#BABABA",
          "gray-border": "#D9D9D9",
          "gray-bg": "#E5E5E5",
          offwhite: "#FAFAFA",
          white: "#FFFFFF",
          gold: "#D4AF37",
          "gold-warm": "#CBA46A",
          "gold-dark": "#C9A227",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Montserrat", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
