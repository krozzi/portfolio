const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "spage": ["'Space Grotesk'", ...defaultTheme.fontFamily.sans],
        "pop": ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)'},
          '8.3%, 16.6%': { transform: 'translateX(1ch)' }, // d 
          '24.9%, 33.2%': { transform: 'translateX(2ch)' }, // d
          '41.5%, 49.8%': { transform: 'translateX(3ch)' }, // o
          '58.5%, 66.4%': { transform: 'translateX(3.8ch)' }, // z 
          '74.7%, 83%': { transform: 'translateX(4.6ch)'}, // z
          '91.7%, 100%': { transform: 'translateX(5ch)'},
        },
      },
    }
  },
  daisyui: {
    themes: [{
      mytheme: {
          "primary": "#3b82f6",
          "secondary": "#facc15",
          "accent": "#ef4444",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
      },}],
  },
  plugins: [require('daisyui'),  require("@tailwindcss/typography")],
};
