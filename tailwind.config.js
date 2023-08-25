/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151A2E",
        secondary: "#171E37",
        green: "#0BB885",
        orange: "#FF9F43",
      },
    },
  },
  plugins: [],
};
