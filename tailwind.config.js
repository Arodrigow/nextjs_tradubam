/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',        
        'white': '#ffffff',
        'black': '#000000',
        'mainColor': '#000F23',
        'accentColor': '#E05414',
      },
  },
  plugins: [],
}

