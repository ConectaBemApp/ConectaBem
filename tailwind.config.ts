/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teste: "#F3F5FA",
        button: '#D7FF7B',
        "input-code-border": '#253E99',
        inputCodeText: "#9790A2"
      }
    }
  },
  plugins: [],
};