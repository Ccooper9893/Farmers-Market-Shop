/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1f2937",
          secondary: "#d1d5db",
          accent: "#f59e0b",
          neutral: "#3D4451",
        },
      },
    ],
  },
}