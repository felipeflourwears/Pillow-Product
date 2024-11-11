// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Para incluir el archivo HTML
    "./src/**/*.{js,ts,jsx,tsx}", // Para incluir todos los archivos de la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#040259',
        'custom-gray': '#D4E0E6'
      },
      fontFamily: {
        lunara: ['Lunara', 'sans-serif'], // Añadimos la tipografía 'Lunara' personalizada
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(15deg)' },
        },
      },
      animation: {
        floating: 'floating 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
