/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./markdown/**/*.{md,mdx,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: '#2d3142'
      },
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
    require("@tailwindcss/typography"),
  ],
};
