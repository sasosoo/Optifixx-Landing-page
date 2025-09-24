/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: '#dbeafe', // blue-100
        background: '#ffffff', // white
        foreground: '#1e3a8a', // blue-900
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f8fafc',
          100: '#e2e8f0',
          500: '#6366f1',
          600: '#4f46e5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'wellness-gradient': 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
        'tech-gradient': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'hero-overlay': 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.6) 100%)',
      },
      borderRadius: {
        'wellness': '60% 40% 30% 70% / 60% 30% 70% 40%',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-blue': 'pulse-blue 2s infinite',
        'fadeInDown': 'fadeInDown 1s ease-out',
      }
    },
  },
  plugins: [],
};
