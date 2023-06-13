/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'my-image' : "url('./src/assets/background.jpg')" ,
      },
     
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}



