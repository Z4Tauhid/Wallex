// tailwind.config.js
import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Tailwind will scan these files
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: [] ,}
    },
  },
  darkMode: false, // disable Tailwind dark mode
  plugins: [daisyui],
  daisyui: {
    themes: ["light"], // ✅ only allow light
  },
};

