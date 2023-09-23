/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1a2128",
        "light-gray": "#23313b",
        "dark-marmol": "#E5DED7",
        "light-marmol": "#fffaf5",
        "pseudo-black": "#221c1c",

        ivory: "#F5F9E9",
        sage: "#C2C1A5",
        feldgrau: "#466365",
        gunmetal: "#192424"
      }
    },
  },
  plugins: [],
}

