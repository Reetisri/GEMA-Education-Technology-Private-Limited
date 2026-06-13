/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF8A5B",
          yellow: "#FFD166",
          blue: "#118AB2",
          green: "#06D6A0",
          purple: "#8338EC",
          pink: "#FF006E",
          dark: "#073B4C",
          cream: "#FFFDF9",
          softBlue: "#E0F2FE",
          softYellow: "#FEF3C7",
          softGreen: "#D1FAE5",
          softPink: "#FCE7F3",
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Fredoka', 'Quicksand', 'sans-serif'],
        playful: ['Fredoka', 'sans-serif'],
      },
      boxShadow: {
        'playful': '4px 4px 0px 0px #073B4C',
        'playful-lg': '8px 8px 0px 0px #073B4C',
        'playful-hover': '2px 2px 0px 0px #073B4C',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 0.5s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
