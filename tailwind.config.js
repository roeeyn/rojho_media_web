/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F7',
        charcoal: '#1C1917',
        rojho: {
          DEFAULT: '#E05252',
          light: '#F0B5B5',
          dark: '#A63636',
        },
        dark: {
          DEFAULT: '#0F0B0B',
          card: '#171212',
          lighter: '#211919',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'orb-drift': 'orb-drift 20s ease-in-out infinite',
        'orb-drift-reverse': 'orb-drift-reverse 25s ease-in-out infinite',
        'orb-drift-slow': 'orb-drift-slow 30s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orb-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -40px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(40px, 10px) scale(1.02)' },
        },
        'orb-drift-reverse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-40px, 30px) scale(0.97)' },
          '50%': { transform: 'translate(25px, -35px) scale(1.04)' },
          '75%': { transform: 'translate(-15px, -20px) scale(0.98)' },
        },
        'orb-drift-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(20px, -25px) scale(1.03)' },
          '66%': { transform: 'translate(-30px, 15px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
}
