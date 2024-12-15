/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
        'plex': ["IBM Plex Sans"],
        'oswald': ["Oswald"],
    },
    container: {
      center: true, // Centers the container
      padding: '1rem', // Adds padding to the container
      screens: {
        sm: '100%', // Custom container width for small screens
        md: '768px', // Custom container width for medium screens
        lg: '1024px', // Custom container width for large screens
        xl: '1280px', // Custom container width for extra-large screens
      },
    },
  },
  plugins: [],
}