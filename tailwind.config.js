/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#3b82f6",
        'secondary-gray': "#202020",
        'tertiary-gray': "#F0F0F0",
      }
    },
  },
  plugins: [],
}

