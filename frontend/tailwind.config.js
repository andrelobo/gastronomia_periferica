/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da Logo
        'brown-dark': '#201812',
        'pink-red': '#fc4b5c',
        'beige-light': '#f8dad0',
        'pink-medium': '#f2737b',
        'pink-light': '#f2a3a0',
        'pink-pale': '#f49c9f',
        
        // Cores do Site
        'beige-cream': '#f4e9de',
        'yellow-mustard': '#fec95f',
        'pink-red-alt': '#fc4c60',
        'brown-dark-alt': '#48362b',
        'green-dark': '#00492c',
        'gray-dark': '#333333',
        
        // Aliases para facilitar o uso
        primary: '#fc4b5c',
        secondary: '#201812',
        background: '#f4e9de',
        accent: '#fec95f',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

