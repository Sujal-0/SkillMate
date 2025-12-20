/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    scroll: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    scrollReverse: {
      "0%": { transform: "translateX(-50%)" },
      "100%": { transform: "translateX(0)" },
    },
  },
  animation: {
    scroll: "scroll 25s linear infinite",
    "scroll-reverse": "scrollReverse 30s linear infinite",
  },
},

  },
  plugins: [],
}