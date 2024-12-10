import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-infinite": "spin 25s linear infinite",
        "spin-infinite-reverse": "spin 50s linear infinite reverse",
        "spin-half": "spin90Left 0.5s linear",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin90Left: {
          "0%": { transform: "rotate(-90deg)", opacity: "0" },
          "70%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(5deg)" },
          "90%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(0deg)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
