/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        patrick: ["Patrick Hand", "cursive"],
        presst2: ["Press Start 2P", "cursive"],
        sharemono: ["Share Tech Mono", "monospace"],
        vt323: ["VT323", "monospace"],
        nabla: ["Nabla", "cursive"],
        dotgot: ["DotGothic16", "sans-serif"],
        concert: ["Concert One", "cursive"],
      },
      fontSize: {
        "1.5xl": "1.37rem",
      },
      backgroundImage: {
        clouds: "url('../public/backgrounds/City2.png')",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-bg-patterns"),
  ],
};
