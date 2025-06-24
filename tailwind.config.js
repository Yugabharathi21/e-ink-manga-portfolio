/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crow: {
          black: 'var(--crow-black)',
          dark: 'var(--crow-dark)',
          'gray-dark': 'var(--crow-gray-dark)',
          'gray-medium': 'var(--crow-gray-medium)',
          'gray-light': 'var(--crow-gray-light)',
          silver: 'var(--crow-silver)',
          light: 'var(--crow-light)',
          white: 'var(--crow-white)',
        }
      },
    },
  },
  plugins: [],
};
