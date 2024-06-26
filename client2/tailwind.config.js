/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5', // Añade este color personalizado
        lightgray: '#d3d3d3', // Añade este color personalizado
      },
    },
  },
  plugins: [],
}

