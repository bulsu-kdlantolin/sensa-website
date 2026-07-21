export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'float-blue': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(25px, 35px) scale(1.15)' },
        },
        'float-orange': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-25px, -35px) scale(1.15)' },
        },
        'logo-light-flow': {
          '0%': { filter: 'drop-shadow(0 0 0px transparent)', opacity: '0.95' },
          '25%': { filter: 'drop-shadow(-10px -10px 16px rgba(10, 68, 255, 0.65))', opacity: '1' },
          '50%': { filter: 'drop-shadow(0 0 24px rgba(10, 68, 255, 0.45))', opacity: '0.98' },
          '75%': { filter: 'drop-shadow(10px 10px 16px rgba(255, 122, 47, 0.65))', opacity: '1' },
          '100%': { filter: 'drop-shadow(0 0 0px transparent)', opacity: '0.95' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'wave-pulse': {
          '0%, 100%': { transform: 'scaleY(0.5)', opacity: '0.6' },
          '50%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'water-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'float-blue': 'float-blue 9s ease-in-out infinite',
        'float-orange': 'float-orange 9s ease-in-out infinite 0.5s',
        'logo-light': 'logo-light-flow 4.5s ease-in-out infinite',
        'pop': 'pop-in 0.6s cubic-bezier(0.23,1,0.32,1) forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'wave-pulse': 'wave-pulse 1.2s ease-in-out infinite',
        'water-flow': 'water-flow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
