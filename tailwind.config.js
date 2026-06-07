/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio tokens
        orange: '#ff6b35',
        'dark-bg': '#2b2b2b',
        'light-bg': '#f9f9f9',
        // PhysioNova tokens — uses "accent" to avoid clash with Bootstrap's .bg-primary/.text-primary
        accent: '#ff6b35',
        'accent-dark': '#e55a28',
        'accent-soft': '#fff1ec',
        'bg-light': '#f9f9f9',
        'bg-dark': '#2b2b2b',
        ink: '#2b2b2b',
        muted: '#6b7280',
        line: '#e5e7eb',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      keyframes: {
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'float-soft': 'float-soft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
