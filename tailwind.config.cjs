/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'overpass' : "var(--overpass)",
        'ubuntu' : "var(--ubuntu)"
      },
      borderRadius: {
        "rd" : '8rem'
      },
    },
  },
  plugins: [],
};
