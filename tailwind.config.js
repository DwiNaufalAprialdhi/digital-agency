/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'background' : '#FDFCFC',
        'text' : '#272D38',
        'brand' : '#8EADD5',
        'card' : '#F6F6F6',
      }
    },
  },
  plugins: [],
}
