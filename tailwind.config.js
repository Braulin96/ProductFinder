/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': "#1976d2",
        //'primary-sage': "#1976d2",
        'secondary-sage': "#c8d0ba",
        'secondary-gray': '#424242',
        
        'tertiary-gray': "#F0F0F0",
      }
    },
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
}

