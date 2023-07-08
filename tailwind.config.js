/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Calvier: ["Calvier", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
      colors: {
        Red: "rgb(202, 51, 50)",
        LightColor: "#fff9ee",
        Separator: "#dfd6c6",
        TextColor: "#160100",
        DarkRed: "#160101",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
