/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        my: "url('/src/asset/bg-shadow.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
