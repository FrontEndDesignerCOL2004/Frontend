/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeUp: "fadeUp 0.5s ease-out forwards",
        fadeRigth: "fadeRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
