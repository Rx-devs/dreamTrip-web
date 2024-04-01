/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [require("daisyui")],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    themes: ["light", "dark"],
  },
};
