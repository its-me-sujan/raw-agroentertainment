/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        khand: ["Khand"],
        mukta: ["Mukta", "serif"],
      },
      fontWeight: {
        "khand-light": 300,
        "khand-regular": 400,
        "khand-medium": 500,
        "khand-semibold": 600,
        "khand-bold": 700,
      },
      screens: {
        xxs: "380px",
        mxs: "425px",
        xs: "475px",
        xsm: "540px",
        sm: "670px",
        md: "800px",
        lg: "1038px",
        xl: "1280px",
        "2xl": "1550px",
      },
    },
  },
  plugins: [],
};
