// PhysioNova — contenu statique de la clinique (services, équipe, horaires, contact).
// Centralisé ici pour que le formulaire de réservation, les cartes de tarifs
// et l'écran de confirmation lisent tous depuis la même source.

export const CLINIC = {
  name: "PhysioNova",
  tagline: "Physiothérapie & Réadaptation",
  promise: "Bougez mieux. Ressentez mieux. Vivez mieux.",
  phone: "(613) 555-0142",
  email: "bonjour@physionova.ca",
  address: "240 rue Bank, Bureau 300, Ottawa, ON K2P 1X4",
};

export const SERVICES = [
  {
    id: "physio",
    name: "Évaluation en physiothérapie",
    icon: "clipboard",
    duration: "60 min",
    price: 110,
    blurb:
      "Une évaluation complète de votre douleur, mobilité et posture, suivie d'un plan de traitement personnalisé.",
  },
  {
    id: "manual",
    name: "Thérapie manuelle",
    icon: "hands",
    duration: "45 min",
    price: 95,
    blurb:
      "Mobilisation articulaire et travail sur les tissus mous pour soulager la raideur et restaurer le mouvement.",
  },
  {
    id: "sport",
    name: "Réadaptation sportive",
    icon: "bolt",
    duration: "60 min",
    price: 120,
    blurb:
      "Récupération ciblée et renforcement pour permettre aux athlètes de reprendre l'entraînement en toute sécurité.",
  },
  {
    id: "dryneedling",
    name: "Aiguilletage à sec",
    icon: "needle",
    duration: "30 min",
    price: 75,
    blurb:
      "Thérapie par aiguilles fines qui libère les nœuds musculaires et atténue les tensions chroniques et douleurs dorsales.",
  },
  {
    id: "posture",
    name: "Posture & ergonomie",
    icon: "chair",
    duration: "45 min",
    price: 90,
    blurb:
      "Coaching axé sur les travailleurs de bureau pour corriger les habitudes à l'origine des douleurs au cou, aux épaules et au bas du dos.",
  },
  {
    id: "massage",
    name: "Massage thérapeutique",
    icon: "leaf",
    duration: "60 min",
    price: 100,
    blurb:
      "Massage profond et restaurateur qui améliore la circulation, réduit le stress et accélère la récupération.",
  },
];

export const THERAPISTS = [
  {
    id: "amelie",
    name: "Dre Amélie Tremblay",
    role: "Physiothérapeute principale",
    focus: "Réadaptation du dos et de la colonne",
    initials: "AT",
    bio: "12 ans d'expérience à aider les travailleurs de bureau à surmonter les douleurs chroniques au dos et au cou.",
  },
  {
    id: "marcus",
    name: "Marcus Chen, pht",
    role: "Physiothérapeute sportif",
    focus: "Blessures sportives & récupération",
    initials: "MC",
    bio: "Ancien thérapeute universitaire spécialisé dans le retour au jeu rapide et sécuritaire.",
  },
  {
    id: "sofia",
    name: "Sofia Rossi, TRM",
    role: "Thérapeute en massage enregistrée",
    focus: "Thérapie manuelle & massage",
    initials: "SR",
    bio: "Combine thérapie manuelle et massage pour un soulagement profond et durable des tensions.",
  },
  {
    id: "any",
    name: "Premier disponible",
    role: "Aucune préférence",
    focus: "Jumelé selon votre service",
    initials: "★",
    bio: "Nous vous associerons au thérapeute le mieux adapté à votre rendez-vous.",
  },
];

export const HOURS = [
  { day: "lundi", open: "7h00", close: "20h00" },
  { day: "mardi", open: "7h00", close: "20h00" },
  { day: "mercredi", open: "7h00", close: "20h00" },
  { day: "jeudi", open: "7h00", close: "20h00" },
  { day: "vendredi", open: "7h00", close: "18h00" },
  { day: "samedi", open: "8h00", close: "14h00" },
  { day: "dimanche", open: "Fermé", close: "" },
];

export const TIME_SLOTS = [
  "7h30",
  "9h00",
  "10h30",
  "12h00",
  "13h30",
  "15h00",
  "16h30",
  "18h00",
];
