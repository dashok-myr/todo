/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "bright-blue": "hsl(25, 100%, 94%)",
        "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(234, 39%, 85%)",
        "very-dark-grayish-blue": "hsl(234, 11%, 52%)",
        "dark-grayish-blue": "hsl(233, 14%, 35%)",
        "dark-grayish-blue1": "hsl(237, 14%, 26%)",
        "desaturated-blue": "hsl(235, 24%, 19%)",
        "very-dark-blue": "hsl(235, 21%, 11%)",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
