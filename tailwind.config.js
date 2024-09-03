/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //https://coolors.co/dbcdf0-2d3142-0e7c7b 
        "main" : "#DBCDF0", // thristle
        "secondary" : "#2D3142", // gunmetal (black -kinda)
        "accent" : "#0E7C7B" // teal
      }
    },
  },
  plugins: [],
};
