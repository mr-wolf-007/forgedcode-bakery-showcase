/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        // ForgeDCode Dashboard Colors
        fdc: {
          bg: '#0B0F19',
          card: '#131B2E',
          cardHover: '#1B253D',
          border: '#1E293B',
          accent: '#38BDF8',
          accentHover: '#0EA5E9',
          textMuted: '#94A3B8',
          textLight: '#F8FAFC'
        },
        // Demo 1: Maharaja Mithai House (Royal Indian Sweets)
        royal: {
          maroon: '#58111A',
          maroonDark: '#3A0B11',
          maroonLight: '#7A1C27',
          gold: '#C59B27',
          goldLight: '#E5C158',
          goldMuted: '#997A24',
          ivory: '#FFFDF9',
          ivoryDark: '#F5EFE6',
          brown: '#281712',
        },
        // Demo 2: Crumb & Co. (Artisan Bakery)
        artisan: {
          cream: '#FAF7F2',
          creamDark: '#EDE5D8',
          sage: '#526E48',
          sageDark: '#3D5336',
          sageLight: '#739072',
          sagePale: '#EBF1EB',
          terracotta: '#C86D51',
          terracottaDark: '#A85338',
          coffee: '#36271F',
          coffeeMuted: '#685449',
        },
        // Demo 3: Maison Éclair (Luxury Patisserie)
        luxury: {
          black: '#0D0D0F',
          noir: '#16161A',
          card: '#1F1F24',
          champagne: '#E5D3B3',
          champagneLight: '#F3E9D7',
          champagneDark: '#C7B18A',
          chocolate: '#271E1B',
          cream: '#FAF7F2',
          muted: '#8E8B85'
        },
        // Demo 4: Sugar Rush Bakery (Modern Local Bakery)
        sugar: {
          orange: '#FF6B35',
          orangeDark: '#E8531D',
          pink: '#FF3366',
          pinkLight: '#FFF0F3',
          yellow: '#FFD166',
          yellowLight: '#FFF8E7',
          cream: '#FFFBF5',
          dark: '#2B2625',
          card: '#FFFFFF'
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
}
