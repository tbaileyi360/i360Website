/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ef',
          100: '#d4edd6',
          400: '#5cbf60',
          500: '#3da642',
          600: '#2e8a33',
          700: '#246b28',
          900: '#143a17',
        },
        navy: {
          500: '#1a5f9e',
          700: '#0f3d6b',
          900: '#0a2744',
          950: '#071a2d',
        },
        ink: {
          DEFAULT: '#0c1620',
          soft: '#2a3a4a',
          muted: '#5c6b7a',
        },
        line: '#d8e0e8',
        surface: {
          DEFAULT: '#f5f8fa',
          cream: '#f7faf7',
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '72rem',
      },
      boxShadow: {
        soft: '0 8px 30px rgb(12 22 32 / 8%)',
        'soft-lg': '0 24px 60px rgb(12 22 32 / 12%)',
        brand: '0 8px 24px rgb(61 166 66 / 28%)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'hero-zoom': {
          from: { transform: 'scale(1.04)' },
          to: { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
        'hero-zoom': 'hero-zoom 18s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate',
      },
    },
  },
  plugins: [],
};
