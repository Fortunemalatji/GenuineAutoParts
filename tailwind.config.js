/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'premium-black': '#0a0a0a',
        'deep-blue': '#0f172a', /* darker, richer blue */
        'gold-accent': '#d4af37', /* metallic gold */
        'gold-hover': '#b5952f',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
