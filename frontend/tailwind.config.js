/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39ff14',
        synthPink: '#ff0080',
        synthBlue: '#00ffff',
        synthDark: '#1a1a2e',
      },
      fontFamily: {
        arcade: ['"Press Start 2P"', 'monospace'],
      },
    },
  },
  plugins: [],
  
}

