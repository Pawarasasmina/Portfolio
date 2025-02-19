/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#3B82F6', // blue-500
            dark: '#60A5FA', // blue-400
          },
        },
      },
    },
    plugins: [],
  };