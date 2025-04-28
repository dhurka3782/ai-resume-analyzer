/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const theme = {
  extend: {
    colors: {
      primary: '#3b82f6',
      bgDark: '#0f172a',
      bgLight: '#1e293b',
      textLight: '#f1f5f9',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
};
export const plugins = [];