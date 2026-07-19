// ─────────────────────────────────────────────────────────────────────────────
// Traductions FR / EN + formatage localisé des nombres.
//
// Tout ce qui est affiché passe par cet objet : titres, axes, légendes, tooltips,
// menus, boutons, insights. Les prix sont formatés via Intl.NumberFormat, donc la
// devise et le séparateur décimal suivent la langue : « 3,20 $ » (fr-CA) vs
// « $3.20 » (en-CA).
// ─────────────────────────────────────────────────────────────────────────────

// Formateurs de devise réutilisables (références stables → sûrs comme dépendances d'effet).
const cad = {
  fr: new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD' }),
  en: new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }),
}

export const T = {
  fr: {
    lang: 'fr',
    dir: 'ltr',
    // Bascule : le bouton annonce la langue CIBLE, pas la langue courante.
    toggleName: 'English',
    toggleCode: 'EN',
    toggleAria: 'Switch to English',

    backPortfolio: '← Portfolio',
    eyebrow: 'Prix des aliments · Canada',
    title: 'Tableau de bord des prix alimentaires',
    intro:
      "Suivez l'évolution des prix de cinq denrées sur une année, puis comparez-les mois par mois. " +
      'Choisissez un aliment ou un mois pour mettre les graphiques à jour.',

    banner: {
      label: 'Données synthétiques',
      text:
        "Les valeurs sont illustratives et générées à des fins pédagogiques. Elles imitent la " +
        'structure des séries de Statistique Canada, sans en reprendre les chiffres réels.',
    },

    kpi: {
      heading: 'Aperçu de l’année',
      forItem: (label) => `pour : ${label}`,
      min: 'Prix le plus bas',
      max: 'Prix le plus haut',
      avg: 'Prix moyen',
      amplitude: 'Écart saisonnier',
      inMonth: (m) => `en ${m}`,
      over12: 'moyenne sur 12 mois',
      maxMinusMin: 'du plus haut au plus bas',
    },

    line: {
      title: 'Évolution du prix sur 12 mois',
      hint: 'Un aliment à la fois — repérez le creux et le sommet saisonniers.',
      selectLabel: 'Aliment :',
      axisMonth: 'Mois',
      axisPrice: 'Prix (CAD)',
      tip: (label, price) => `${label} : ${price}`,
      insight: ({ label, maxMonth, maxVal, minMonth, minVal, pct }) =>
        `${label} : sommet en ${maxMonth} (${maxVal}), creux en ${minMonth} (${minVal}) — ` +
        `un écart de ${pct} % sur l'année.`,
    },

    bar: {
      title: 'Comparaison des prix pour un mois',
      hint: 'Les cinq denrées côte à côte pour le mois choisi.',
      selectLabel: 'Mois :',
      axisItem: 'Aliment',
      axisPrice: 'Prix (CAD)',
      tip: (label, price) => `${label} : ${price}`,
      insight: ({ month, hiLabel, hiVal, loLabel, loVal }) =>
        `En ${month}, l'aliment le plus cher est ${hiLabel} (${hiVal}) ; ` +
        `le moins cher, ${loLabel} (${loVal}).`,
    },

    footer: {
      source: 'Inspiré de la structure des données de Statistique Canada',
      sourceLabel: 'Prix des aliments — Statistique Canada',
      note: 'Données synthétiques · SEG3525, Université d’Ottawa',
    },

    // Formatage localisé
    price: (v) => cad.fr.format(v),
    percent: (v) => `${v} %`,
  },

  en: {
    lang: 'en',
    dir: 'ltr',
    toggleName: 'Français',
    toggleCode: 'FR',
    toggleAria: 'Passer en français',

    backPortfolio: '← Portfolio',
    eyebrow: 'Food prices · Canada',
    title: 'Canadian Food Price Dashboard',
    intro:
      'Track how five grocery items move in price across a year, then compare them month by month. ' +
      'Pick an item or a month to update the charts.',

    banner: {
      label: 'Synthetic data',
      text:
        'These values are illustrative and generated for coursework. They mirror the structure of ' +
        "Statistics Canada's series without reusing its real figures.",
    },

    kpi: {
      heading: 'Year at a glance',
      forItem: (label) => `for: ${label}`,
      min: 'Lowest price',
      max: 'Highest price',
      avg: 'Average price',
      amplitude: 'Seasonal spread',
      inMonth: (m) => `in ${m}`,
      over12: 'mean over 12 months',
      maxMinusMin: 'high minus low',
    },

    line: {
      title: 'Price trend over 12 months',
      hint: 'One item at a time — spot the seasonal low and high.',
      selectLabel: 'Item:',
      axisMonth: 'Month',
      axisPrice: 'Price (CAD)',
      tip: (label, price) => `${label}: ${price}`,
      insight: ({ label, maxMonth, maxVal, minMonth, minVal, pct }) =>
        `${label}: peaks in ${maxMonth} (${maxVal}), bottoms out in ${minMonth} (${minVal}) — ` +
        `a ${pct}% swing across the year.`,
    },

    bar: {
      title: 'Price comparison for one month',
      hint: 'All five items side by side for the chosen month.',
      selectLabel: 'Month:',
      axisItem: 'Item',
      axisPrice: 'Price (CAD)',
      tip: (label, price) => `${label}: ${price}`,
      insight: ({ month, hiLabel, hiVal, loLabel, loVal }) =>
        `In ${month}, the priciest item is ${hiLabel} (${hiVal}); ` +
        `the cheapest is ${loLabel} (${loVal}).`,
    },

    footer: {
      source: 'Inspired by the structure of Statistics Canada data',
      sourceLabel: 'Food prices — Statistics Canada',
      note: 'Synthetic data · SEG3525, University of Ottawa',
    },

    price: (v) => cad.en.format(v),
    percent: (v) => `${v}%`,
  },
}

// Lien vers la source d'inspiration (identique dans les deux langues, ancre FR).
export const STATCAN_URL = 'https://www.statcan.gc.ca/fr/themes-debut/prix-aliments'
