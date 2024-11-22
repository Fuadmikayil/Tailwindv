/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding:"6rem"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(0,0,0,1) 14%, rgba(0,212,255,0) 100%);',
      },
      
    },
  },
  plugins: [],
};
