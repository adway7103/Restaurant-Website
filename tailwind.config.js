/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { 
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'display': ['Alfa Slab One', 'sans-serif'],
      }, 
      backgroundImage: theme => ({
        'burger': "url('/src/img/bg.jpg')",
      })
    }
  },
  plugins: [],
};
