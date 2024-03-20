/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1976d2",
        "secondary-gray": "#424242",
        "tertiary-brown": "#f9f3ec",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
