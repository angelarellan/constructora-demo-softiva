/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1e3a5f',
          dark: '#132639',
          light: '#2d5480',
        },
        gold: {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
          deep: '#92400e',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(30, 58, 95, 0.25)',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wa-bounce': 'wa-bounce 2.6s ease-in-out infinite',
        kenburns: 'kenburns 20s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'wa-bounce': {
          '0%, 65%, 100%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-8px)' },
          '85%': { transform: 'translateY(0)' },
          '92%': { transform: 'translateY(-4px)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
