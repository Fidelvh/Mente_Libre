// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5FA8F4', // azul suave
          600: '#4F9DD6',
        },
        copper: '#C18A39',
        accent: '#D5C2B2',
        mlbg: '#F1F6F9',
        mlmuted: '#D5C2B2',
        surface: {
          DEFAULT: '#ffffff',
          muted: '#f7f8fb'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        glass: '0 8px 30px rgba(18, 25, 36, 0.06)'
      },
      keyframes: {
        'bg-zoom': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.12)' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'bg-zoom-slow': 'bg-zoom 12s ease-in-out infinite alternate',
        'fade-up-fast': 'fade-up 0.7s ease-out both'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities, addComponents }) {
      // utility para nav-link
      addUtilities({
        '.nav-link': {
          '@apply text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors': {}
        },
        '.ml-btn': {
          '@apply inline-block px-4 py-2 rounded-md bg-primary text-white font-medium': {}
        }
      }, { variants: ['responsive', 'hover'] });

      // componente simple de container
      addComponents({
        '.ml-container': {
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }
      });
    })
  ]
}
