/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend Deca', ...require('tailwindcss/defaultTheme').fontFamily.sans],
      },
      animation: {
        'blob-move': "blob 7s infinite, move 20s infinite",
        'blob-move-delayed': "blob 7s infinite 2s, move 20s infinite 7s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
          },
          "33%": {
            transform: "translate(0, 0) scale(1.1)",
          },
          "66%": {
            transform: "translate(0, 0) scale(0.9)",
          },
          "100%": {
            transform: "translate(0, 0) scale(1)",
          },
        },
        move: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "25%": {
            transform: "translate(20px, 20px)",
          },
          "50%": {
            transform: "translate(-20px, 20px)",
          },
          "75%": {
            transform: "translate(-20px, -20px)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
