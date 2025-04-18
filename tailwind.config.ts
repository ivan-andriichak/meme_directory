/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
