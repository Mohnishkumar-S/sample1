import('tailwindcss').Config


module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Make sure this matches your project
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      animation: {
        bounceOnce: 'bounceOnce 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
