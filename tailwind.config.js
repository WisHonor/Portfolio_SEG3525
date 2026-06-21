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
        // MémoVague tokens (Devoir 3) — palette Scénarimage B (sombre, navy/indigo/or).
        // Préfixe "mv-" pour ne pas entrer en collision avec les tokens existants.
        'mv-bg': '#1A1B2E',        // fond navy profond du jeu
        'mv-surface': '#2E2F52',   // panneaux / dos de carte / boîtes de stats
        'mv-face': '#ECECFF',      // face révélée d'une carte (claire → l'emoji ressort)
        'mv-primary': '#6C63FF',   // indigo — sélection, bordures, « ? », progression
        'mv-primary-dark': '#5B52E6',
        'mv-accent': '#FFD166',    // or — action primaire
        'mv-accent-dark': '#EEBE4D',
        'mv-success': '#06D6A0',   // vert — feedback de paire trouvée
        'mv-neutral': '#9B9DC9',   // gris-indigo clair — texte secondaire
        'mv-ink': '#FFFFFF',       // texte principal clair sur fond sombre
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
