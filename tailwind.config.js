/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx}', // Ajusta esta ruta según la estructura de tu proyecto

  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: '#9c8445',
        secondary: '#90723e',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
        'barley-corn': {
          '50': '#f8f7ee',
          '100': '#edead4',
          '200': '#dcd4ac',
          '300': '#c8ba7c',
          '400': '#b7a158',
          '500': '#9c8445',
          '600': '#90723e',
          '700': '#745834',
          '800': '#624931',
          '900': '#553f2e',
          '950': '#302118',
        },
      },
    },
  },
  plugins: [],
}