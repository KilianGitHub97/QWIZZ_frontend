/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
  
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
      themes: [
        {
          purpleTheme: {      
            "primary": "#793EF9",    
            "secondary": "#E9E9FE",
            "accent": "#E718EB",
            "neutral": "#2a323c",
            "base-100": "#F8F8FE",
            "info": "#3abff8",
            "success": "#36d399",
            "warning": "#fbbd23",     
            "error": "#f87272",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

