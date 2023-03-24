/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        15: "0.9375rem",
        32: "2rem",
      },
      colors: {
        veryLightGrayishBlue: "hsl(240, 78%, 98%)",
        lightGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        darkGrayishBlue: "hsl(232, 13%, 33%)",
        linearGradient: {
          from: "hsl(236, 72%, 79%)",
          to: "hsl(237, 63%, 64%)",
        },
      },
    },
  },
  plugins: [],
};
