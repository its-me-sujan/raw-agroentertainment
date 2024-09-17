/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand", "sans-serif"],
        mukta: ["Mukta", "serif"],
      },
      fontWeight: {
        "khand-regular": 400,
        "khand-bold": 700,
        "mukta-regular": 400,
        "mukta-bold": 700,
      },
    },
  },
  plugins: [],
};
