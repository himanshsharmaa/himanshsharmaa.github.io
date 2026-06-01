/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f12',
        surface: '#111827',
        surfaceAlt: '#1b2233',
        line: 'rgba(168, 85, 247, 0.16)',
        brand: '#a855f7',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(168, 85, 247, 0.18), 0 18px 60px rgba(168, 85, 247, 0.14)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(168, 85, 247, 0.16), transparent 48%)',
      },
    },
  },
  plugins: [],
};