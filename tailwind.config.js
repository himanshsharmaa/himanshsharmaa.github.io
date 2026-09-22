/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f12',
        surface: '#111827',
        surfaceAlt: '#1b2233',
        line: 'rgba(255, 255, 255, 0.10)',
        brand: '#ffffff',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 255, 255, 0.10), 0 18px 60px rgba(0, 0, 0, 0.22)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 48%)',
      },
    },
  },
  plugins: [],
};