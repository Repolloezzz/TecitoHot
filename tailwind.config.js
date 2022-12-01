/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ps2': ["Press Start 2P", "cursive"],
      'silk': ["Silkscreen", "cursive"],
      'vt323': ["VT323", "monospace"],
    },
    colors: {
      none: "#00000000",
      main: {
        100: "#3c1642",
        200: "#370075",
        300: "#620097",
        400: "#731dd8",
        500: "#086375",
        600: "#1dd3b0",
        700: "#affc41",
        800: "#b2ff9e",
        900: "#fdba31",
        1000: "38b000",
      },
    },
    extend: {},
  },
  plugins: [],
};
