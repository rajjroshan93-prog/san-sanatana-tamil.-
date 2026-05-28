/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tamil: {
          gold: '#F59E0B',
          red: '#DC2626',
          saffron: '#EA580C',
          dark: '#1A0A00',
          cream: '#FEF3C7',
        },
      },
    },
  },
  plugins: [],
}
