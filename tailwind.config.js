/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // Adicione os caminhos corretos
  theme: {
    extend: {
      colors: {
        buttonColor: '#D7FF7B',
      },
      width: {
        '452':'452px'
      },
      height: {
        '692':'692px'
      }
    },
  },
  plugins: [],
};