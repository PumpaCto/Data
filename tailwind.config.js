/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Altın sarısı
        secondary: "#1A1A1A", // Arka plan için koyu ton
        accent: "#FFFFFF" // Beyaz vurgu
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Oswald", "sans-serif"]
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter: "drop-shadow(0 0 1px #FFD700) drop-shadow(0 0 15px #FFD700)"
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none"
          }
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)"
          }
        }
      },
      animation: {
        flicker: "flicker 3s infinite",
        shimmer: "shimmer 2s infinite"
      }
    }
  },
  plugins: []
}
