/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-black': '#0A0A0A',
        'electric-violet': '#8A2BE2',
        'luminite-blue': '#00C6FF',
        'luma-orange': '#FF8C42',
        'luma-amber': '#FFA500',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(135deg, #8A2BE2 0%, #00C6FF 100%)',
        'luma-accent': 'linear-gradient(135deg, #FF8C42 0%, #FFA500 100%)',
        'stripe-pattern': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 140, 66, 0.1) 10px, rgba(255, 140, 66, 0.1) 20px)',
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

