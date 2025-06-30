/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screens: {
        'se': '375px',      // iPhone SE
        'iphone': '390px',  // iPhone 12/13/14
        'pixel': '412px',   // Pixel 7
        'ipad-mini': '768px',
      },
    },
  },
};
