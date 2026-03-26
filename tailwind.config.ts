import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D1A',
        surface: '#0E1420',
        surface2: '#141B2A',
        border: 'rgba(255,255,255,0.07)',
        accent: '#3B82F6',
        accent2: '#06B6D4',
        accent3: '#8B5CF6',
        gold: '#F59E0B',
        text: '#E8EDF5',
        muted: '#7A8BA8'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      typography: {
        DEFAULT: {}
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease both',
        'fade-in': 'fadeIn 0.4s ease both'
      }
    }
  },
  plugins: []
};

export default config;

