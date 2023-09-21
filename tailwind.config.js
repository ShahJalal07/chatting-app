/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary_poppins: ["Poppins', sans-serif"],
      secondary_roboto: ["Roboto', sans-serif"],
    },
    extend: {
      colors: {
        "primary-white": "#Ffff",
        "secondary-light-blue": "#21529a",
        "third-blue": "#27c3f4",
      },
    },
  },
  plugins: [],
};
