/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          cream: '#F7F3EE',      // Warm Cream
          white: '#FFFFFF',
          beige: '#F0EAE1',      // Soft Beige
          pink: '#E8D8CE',       // Soft Dusty Pink
          rose: '#D9A091',       // Rose Gold Accents
          gold: '#B88E8D',       // Rose Gold/Dusty Rose
          brown: '#8C7873',      // Light Brown
          charcoal: '#2C2523',   // Very dark brown/almost black
          wine: '#3B0910',       // Deep Wine Red / Burgundy
          burgundy: '#2B050B',   // Dark Burgundy Accent
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Didot', 'Bodoni MT', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.15em',
        editorial: '0.05em',
      },
    },
  },
  plugins: [],
}
