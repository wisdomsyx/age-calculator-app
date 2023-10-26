/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "Poppins",
        mathlete: "Mathlete",
      },
      colors: {
        "purple-custom": "hsl(259, 100%, 65%)",
        "red-custom": "hsl(0, 100%, 67%)",
        "black-custom": "hsl(0, 0%, 8%)",
        "grey-custom": "hsl(0, 0%, 86%)",
      },
    },
  },
  plugins: [],
};
