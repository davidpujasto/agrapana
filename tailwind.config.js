/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    
    gridAutoColumns: {
      '2fr': 'minmax(0, 2fr)',
    },
    
    container: {
      center: true,
      padding: '16px',  
    },
    extend: {
      colors: { 
        primary: '#0f172a',
        primary1: '#f97316',
        secondary1: '#ea580c',
        secondary: '#4b5563',
        dark: '#0f172a',
        
     },
     fontFamily: {
      'segoe': [ 'Amazon Ember', 'sans-serif'],
      'segoe1': ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },

     screens: {
      'xl': '1320px',
     },
   },
  },
  plugins: [],
}



