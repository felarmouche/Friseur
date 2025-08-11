import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#d4af37', // gold accent from logo wreath
          50: '#fff7d9',
        },
        gold: '#D4AF37',
        'gold-ring': 'rgba(212,175,55,0.35)',
        background: '#0b0b0c',
        surface: '#111113',
        foreground: '#e5e7eb',
      },
      container: { center: true, padding: '1rem' },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'gold-soft': '0 0 0 1px rgba(212,175,55,.22), 0 10px 30px rgba(212,175,55,.08)',
        'inner-glow': 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        aurora: 'aurora 18s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
