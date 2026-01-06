/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // White background as required by constitution
        background: '#FFFFFF',
        // Purple primary buttons as required by constitution
        primary: {
          500: '#9333EA',
          600: '#800080', // Purple as specified in requirements
        },
        // Pink detailing/accents as required by constitution
        accent: {
          400: '#F9A8D4',
          500: '#FF69B4', // Pink as specified in requirements
        },
      },
    },
  },
  plugins: [],
};