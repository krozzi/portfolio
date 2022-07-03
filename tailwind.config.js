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
