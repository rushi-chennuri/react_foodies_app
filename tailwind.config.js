/** @type {import('tailwindcss').Config} */
module.exports = {
  // scan HTML and JS/JSX files in project root and src for Tailwind classes
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

