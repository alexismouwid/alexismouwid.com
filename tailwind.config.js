/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Asegúrate de ajustar la ruta según tu proyecto
  ],
  theme: {
    extend: {
      screens: {
        // Nest Hub: ancho típico 1024px, altura más baja
        'nest-hub': { raw: '(min-width: 1024px) and (max-height: 800px)' },

        // iPad Pro: mismo ancho, altura mayor
        'ipad-pro': { raw: '(min-width: 1024px) and (min-height: 1080px)' },

        // Altura genérica para otros casos
        'tall': { raw: '(min-height: 900px)' },
        'short': { raw: '(max-height: 800px)' },
      },
    },
  },
}

