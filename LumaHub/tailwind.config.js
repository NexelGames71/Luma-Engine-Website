/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-black': '#0A0A0A',
        'electric-violet': '#8A2BE2',
        'luminite-blue': '#00C6FF',
        'luma-orange': '#FF8C42',
        'luma-amber': '#FFA500',
        'dark-surface': '#1A1A1A',
        'darker-surface': '#141414',
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'luma-gradient': 'linear-gradient(135deg, #8A2BE2 0%, #00C6FF 100%)',
        'surface-gradient': 'linear-gradient(135deg, #1A1A1A 0%, #141414 100%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
