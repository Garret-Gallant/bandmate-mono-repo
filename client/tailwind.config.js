/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100%',
      '16': '4rem',
    },
    extend: {
      colors: {
        'green': 'emerald-500',
        'darkgreen': 'emerald-700'
      },
      backgroundImage: {
        'hero': "url('./assets/congruent_outline.png')",
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'sm': '650px',
      'md': '1030px',
      'lg': '1100px',
      'x-lg': '1300px',
      '2x-lg': '1500px'
    },
  },
  plugins: [],
}



