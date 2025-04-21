/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        success: {
          500: '#22c55e', // Green
        },
        warning: {
          500: '#eab308', // Yellow
        },
        error: {
          500: '#ef4444', // Red
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0d1117',
          900: '#030712',
        },
        light: {
          100: '#ffffff',
          200: '#f9fafb',
          300: '#f3f4f6',
          400: '#e5e7eb',
          500: '#d1d5db',
          600: '#9ca3af',
          700: '#6b7280',
          800: '#4b5563',
          900: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '8': '2rem',
        '16': '4rem',
        '32': '8rem',
        '64': '16rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'card': '0 0 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 0 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};