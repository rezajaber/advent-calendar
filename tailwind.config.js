/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      title: ['Festive', 'serif'],
      body: ['Nunito', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}