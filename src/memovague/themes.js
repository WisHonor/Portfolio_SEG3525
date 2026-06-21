// MémoVague — données du jeu (niveaux, thèmes) + petit utilitaire de records.
// Source de vérité unique : ConfigScreen, GameBoard et ResultsScreen lisent
// tous d'ici, pour rester cohérents.

// Deux niveaux de difficulté imposés par le concept du jeu.
//   Débutant : grille 4×4 = 16 cartes = 8 paires.
//   Avancé   : grille 6×6 = 36 cartes = 18 paires.
export const LEVELS = {
  debutant: { id: 'debutant', label: 'Débutant', cols: 4, pairs: 8,  blurb: '4 × 4 · 8 paires' },
  avance:   { id: 'avance',   label: 'Avancé',   cols: 6, pairs: 18, blurb: '6 × 6 · 18 paires' },
};

// Chaque thème fournit AU MOINS 18 symboles visuellement distincts, pour que le
// niveau Avancé (18 paires) n'ait jamais à réutiliser ni quasi-dupliquer une
// icône. Les emoji trop proches (ex. 🐶/🐺, 🍎/🍏) sont volontairement évités.
export const THEMES = {
  animaux: {
    id: 'animaux', label: 'Animaux', icon: '🐾',
    emojis: ['🐶','🐱','🦊','🐻','🐼','🐨','🦁','🐯','🐸','🐵','🐰','🐹','🐮','🐷','🐔','🐧','🦉','🦄','🐝','🦋','🐢','🐬'],
  },
  fruits: {
    id: 'fruits', label: 'Fruits', icon: '🍓',
    emojis: ['🍎','🍌','🍇','🍓','🍑','🍒','🍍','🥝','🥥','🍊','🍋','🥑','🍅','🍆','🥕','🌽','🥦','🍔','🍕','🍩'],
  },
  nature: {
    id: 'nature', label: 'Nature', icon: '🌿',
    emojis: ['🌿','🌸','🌺','🌻','🌹','🍀','🌳','🌵','🍁','🍄','⭐','🌙','☀️','🌈','☁️','⚡','❄️','💧','🔥','🌊'],
  },
  voyage: {
    id: 'voyage', label: 'Voyage', icon: '🧭',
    emojis: ['🚀','🛸','✈️','🚁','🚂','🚗','🏎️','🚲','🛵','⛵','🚤','🏍️','🚠','🗺️','🧭','🎒','🏕️','⛺','🏔️','🗽'],
  },
};

// ── Records personnels (localStorage) ────────────────────────────────────────
// Soutient l'objectif de Camille (améliorer son temps) et celui de Marc-André
// (retour de performance clair). Échoue en silence si le stockage est indispo.
const bestKey = (level, theme) => `memovague:best:${level.id}:${theme.id}`;

export function loadBest(level, theme) {
  try {
    const raw = localStorage.getItem(bestKey(level, theme));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveBest(level, theme, stats) {
  try {
    localStorage.setItem(bestKey(level, theme), JSON.stringify(stats));
  } catch {
    /* stockage indisponible — on ignore */
  }
}
