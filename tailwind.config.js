/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#23D997",
        secondary: "#004D72",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(300px, 1fr));",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
