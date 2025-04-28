/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        'dark-50': '#0D0D0D',
        'dark-100': '#171717',
        'dark-200': '#262626',
        primary: {
          DEFAULT: '#6366F1',
          50: '#EDEEFF',
          100: '#D6D8FE',
          200: '#A9ACFB',
          300: '#8185F7',
          400: '#6366F1',
          500: '#4145EC',
          600: '#1D22DB',
          700: '#161AB5',
          800: '#11148F',
          900: '#0C0F69',
        },
        secondary: {
          DEFAULT: '#22D3EE',
          50: '#E3FAFE',
          100: '#C7F4FD',
          200: '#8CE9FA',
          300: '#53DEF7',
          400: '#22D3EE',
          500: '#11B7D2',
          600: '#0D91A8',
          700: '#096D7E',
          800: '#064A55',
          900: '#03282D',
        },
        accent: {
          DEFAULT: '#F43F5E',
          50: '#FEE7EB',
          100: '#FECFD8',
          200: '#FC9BAF',
          300: '#FA6A87',
          400: '#F43F5E',
          500: '#E51138',
          600: '#B20D2B',
          700: '#7F0A1F',
          800: '#4C0612',
          900: '#1A0206',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};