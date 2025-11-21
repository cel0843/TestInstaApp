/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          500: '#2563eb',
          600: '#1d4ed8'
        },
        slate: {
          950: '#020617'
        }
      }
    }
  },
  plugins: []
};
