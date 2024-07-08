import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#2A7FFF",
        black: "#222222",
        seondary: "#93c5fd",
        "gray-950": "#030712",
        "gray-800": "#1f2937",
        "gray-700": "#1f2937",
        "gray-600": "##475569",
        "gray-500": "#64748b",
        "gray-400": "#94a3b8",
        "gray-300": "#cbd5e1",
        "gray-200": "#e2e8f0",
        "gray-100": "#f1f5f9",
        "gray-50": "#f1f5f9",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
