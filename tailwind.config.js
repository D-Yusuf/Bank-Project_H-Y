/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //https://coolors.co/dbcdf0-2d3142-0e7c7b 
        "main" : "#DBCDF0", // thristle
        "secondary" : "#2D3142", // gunmetal (-kinda black)
        "accent" : "#0E7C7B" // teal
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        fadeInDelay: 'fadeIn 2s ease-in-out',
        slideInLeft: 'slideInLeft 1.2s ease-out',
        slideInRight: 'slideInRight 1.2s ease-out',
        bounce: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    
     
    },
  },
  plugins: [],
};
