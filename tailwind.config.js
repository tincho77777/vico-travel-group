/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta inspirada en la identidad visual de @vico.travelgroup
        brand: {
          50: "#eef2f6",
          100: "#d6dee7",
          200: "#a9b8c8",
          300: "#7a90a8",
          400: "#4f6a85",
          500: "#2c4a66",
          600: "#1c354c",
          700: "#142839",
          800: "#0e1f2c",
          900: "#0b1a26"
        },
        cream: {
          50: "#fbf7f0",
          100: "#f5efe2",
          200: "#ece2cc",
          300: "#dccfb1",
          400: "#c7b58e",
          500: "#a8946a"
        },
        accent: {
          400: "#e3b873",
          500: "#c89752",
          600: "#a87a3b"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "ui-serif", "Georgia", "serif"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        floaty: "floaty 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
