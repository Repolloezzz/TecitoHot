/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ps2: ["Press Start 2P", "cursive"],
        silk: ["Silkscreen", "cursive"],
        vt323: ["VT323", "monospace"],
      },
      colors: {
        none: "#00000000",
        tropical: {
          100: "#ff9f1c",
          200: "#ffbf69",
          300: "#ffffff",
          500: "#cbf3f0",
          600: "#2ec4b6",
        },
        nature: {
          100: "#0d0a0b",
          200: "#454955",
          300: "#f3eff5",
          400: "#72b01d",
          500: "#3f7d20",
          600: "#f2e8cf",
          700: "#bc4749",
        },
        ocean: {
          100: "#dcdcdd",
          200: "#c5c3c6",
          300: "#46494c",
          400: "#4c5c68",
          500: "#1985a1",
        },
        vector: {
          100: "#2d3142",
          200: "#bfc0c0",
          300: "#ffffff",
          400: "#ef8354",
          500: "#4f5d75",
        },
        cgreen: {
          100: "#3c1642",
          200: "#086375",
          300: "#1dd3b0",
          400: "#affc41",
          500: "#b2ff9e",
          600: "#1dd3b0",
        }
      },
    },
  },
  plugins: [],
};
