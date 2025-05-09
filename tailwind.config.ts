/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // class-based dark mode (required for next-themes)
    theme: {
      extend: {
        colors: {
          grey: {
            900: '#1C1C1C',
            600: '#636363',
          },
        },
      },
      screens: {
        'xs': '360px',
        'tablet': '576px',
        'ipad': '765px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
    plugins: [],
  };
  