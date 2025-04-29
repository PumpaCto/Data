/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Gold – MiraVerse ana rengi (ALTIN SARI)
        secondary: "#0f172a", // Lacivert – arka planlar için
        accent: "#22d3ee", // Turkuaz – vurgular için
        muted: "#64748b", // Açık gri – açıklamalar için
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "stars-pattern": "url('/images/background-stars.jpg')",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        flicker: "flicker 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 100%": { opacity: 1 },
          "20%, 21.999%, 63%, 63.999%": { opacity: 0 },
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 215, 0, 0.7)", // Gold renkli glow efekti
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
