import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00BFFF',
        'primary': '#00BFFF',
        'secondary': '#0088FF',
        'dark-bg': '#050B1A',
        'card-bg': '#0D1326',
      },
      boxShadow: {
        'neon': '0 0 30px rgba(0, 191, 255, 0.5)',
        'neon-lg': '0 0 60px rgba(0, 191, 255, 0.4)',
        'glow': '0 0 20px rgba(0, 191, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 191, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
