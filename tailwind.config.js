/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '3/4': '75%',
      },
      colors: {
        googleBlue: '#4285F4',
        googleLightBlue: '#00A1F1',
      },
    },
  },
  plugins: [],
};
