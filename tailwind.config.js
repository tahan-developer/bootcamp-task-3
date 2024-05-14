/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center:true,
      padding:"1rem",
    },
    extend:{
      fontFamily:{
        Vazirmatn :["Vazirmatn"]
      },
    }
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}

