/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 15px 40px -20px rgba(15, 23, 42, 0.4)",
      },
    },
  },
  plugins: [],
}
