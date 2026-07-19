// ─────────────────────────────────────────────────────────────────────────────
// Données du tableau de bord — prix des denrées alimentaires (Canada)
//
// ⚠️  DONNÉES SYNTHÉTIQUES. Les valeurs ci-dessous sont ILLUSTRATIVES : elles
//     imitent la STRUCTURE des séries de Statistique Canada (prix mensuels moyens,
//     en dollars canadiens) mais ne sont PAS extraites de StatCan.
//     Source d'inspiration : statcan.gc.ca/fr/themes-debut/prix-aliments
// ─────────────────────────────────────────────────────────────────────────────

// Mois abrégés (axe des graphiques)
export const MONTHS = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['Janv', 'Févr', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
}

// Mois au long (menu déroulant + phrases d'insight). En français : minuscules.
export const MONTHS_LONG = {
  en: ['January', 'February', 'March', 'April', 'May', 'June',
       'July', 'August', 'September', 'October', 'November', 'December'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
       'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
}

export const ITEMS = {
  keys: ['tomatoes', 'broccoli', 'cucumbers', 'apples', 'bread'],
  labels: {
    en: ['Tomatoes', 'Broccoli', 'Cucumbers', 'Apples', 'Bread'],
    fr: ['Tomates', 'Brocolis', 'Concombres', 'Pommes', 'Pain'],
  },
  // Unité de vente (affichée en contexte, jamais laissée ambiguë)
  units: {
    en: ['per lb', 'per head', 'each', 'per lb', 'per loaf'],
    fr: ['la livre', 'la pièce', 'la pièce', 'la livre', 'la miche'],
  },
  // Couleur d'IDENTITÉ (vive) — barres, points, pastilles de légende.
  // Palette validée pour le daltonisme via scripts/validate_palette.js (dataviz).
  // Choix intuitif : tomates = rouge, brocolis = vert.
  colors:  ['#EF4444', '#10B981', '#2563EB', '#F59E0B', '#8B5CF6'],
  // Variante ASSOMBRIE — trait des courbes / bordure des barres. Le vert et l'ambre
  // vifs passent sous 3:1 sur fond clair ; ces teintes plus foncées rétablissent
  // un contraste lisible tout en conservant la même identité de couleur.
  strokes: ['#DC2626', '#059669', '#1D4ED8', '#B45309', '#7C3AED'],
  // Prix mensuels moyens (CAD), janvier → décembre. Variation saisonnière plausible.
  prices: {
    tomatoes:  [4.10, 4.25, 3.95, 3.60, 3.20, 2.85, 2.55, 2.60, 2.90, 3.35, 3.80, 4.15],
    broccoli:  [3.45, 3.55, 3.30, 3.10, 2.80, 2.65, 2.60, 2.70, 2.95, 3.15, 3.35, 3.50],
    cucumbers: [1.95, 2.05, 1.85, 1.65, 1.45, 1.25, 1.15, 1.20, 1.40, 1.60, 1.80, 1.95],
    apples:    [2.35, 2.40, 2.45, 2.55, 2.60, 2.55, 2.45, 2.25, 1.95, 1.85, 2.05, 2.25],
    bread:     [3.15, 3.18, 3.22, 3.25, 3.28, 3.30, 3.35, 3.38, 3.42, 3.48, 3.52, 3.58],
  },
}

// Statistiques d'un aliment sur les 12 mois (pour les cartes KPI + les insights).
export function itemStats(key) {
  const arr = ITEMS.prices[key]
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length
  return {
    min,
    max,
    avg,
    amplitude: max - min,
    minMonth: arr.indexOf(min),
    maxMonth: arr.indexOf(max),
  }
}

// Denrée la plus chère / la moins chère pour un mois donné (insight du bar chart).
export function monthExtremes(monthIndex) {
  let hi = 0
  let lo = 0
  ITEMS.keys.forEach((key, i) => {
    const p = ITEMS.prices[key][monthIndex]
    if (p > ITEMS.prices[ITEMS.keys[hi]][monthIndex]) hi = i
    if (p < ITEMS.prices[ITEMS.keys[lo]][monthIndex]) lo = i
  })
  return {
    hiIndex: hi,
    loIndex: lo,
    hiVal: ITEMS.prices[ITEMS.keys[hi]][monthIndex],
    loVal: ITEMS.prices[ITEMS.keys[lo]][monthIndex],
  }
}

// Majuscule initiale (mois français au long dans les menus / débuts de phrase).
export const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

// #RRGGBB → rgba(...) pour les remplissages translucides.
export function hexToRgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}
