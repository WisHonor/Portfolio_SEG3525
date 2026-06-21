# Portfolio — SEG3525 (Wissam Elmasry)

Portfolio personnel et prototypes haute-fidélité réalisés dans le cadre du cours
**SEG3525 – Design de l'interaction** (Université d'Ottawa). Application unique
**React + Vite + Tailwind CSS**, chaque devoir étant un sous-projet accessible
depuis la page d'accueil (section « Études de cas »).

| Devoir | Projet | Route |
|--------|--------|-------|
| Devoir 2 | **PhysioNova** — site de clinique + réservation | `/physionova` |
| Devoir 3 | **MémoVague** — jeu de mémoire (paires) | `/memovague` |

---

## MémoVague — jeu de mémoire (Devoir 3)

Jeu de cartes où l'on retrouve des paires identiques dans une grille. Il teste la
mémoire humaine et propose **deux niveaux** et **quatre thèmes** configurables.

- **Niveaux :** Débutant (grille 4 × 4 = 8 paires) · Avancé (grille 6 × 6 = 18 paires)
- **Thèmes :** Animaux · Fruits · Nature · Voyage (emoji, ≥ 18 symboles distincts chacun)
- **Retour de performance :** minuteur discret (temps écoulé, sans compte à rebours),
  compteur de coups, paires trouvées, et **records personnels** sauvegardés localement.
- **Feedback :** retournement 3D doux ; halo vert sur une paire trouvée ; les cartes
  non appariées se retournent après un court délai (jamais brusque).

### Structure des composants (`src/memovague/`)

| Fichier | Rôle |
|---------|------|
| `MemoVague.jsx` | Racine + **machine à états** de navigation : `config → play → results` |
| `ConfigScreen.jsx` | Choix du niveau et du thème |
| `GameBoard.jsx` | Plateau, logique de jeu, minuteur et tableau de bord (HUD) |
| `Card.jsx` | Une carte (retournement 3D, états caché / retourné / apparié) |
| `ResultsScreen.jsx` | Écran de fin : résultats + rejouer / changer d'options |
| `themes.js` | Niveaux, thèmes (emoji) et records personnels (localStorage) |

### Principes de Gestalt (commentés dans le code)

- **Similarité** — dos de carte identiques (`Card.jsx`) → ensemble perçu comme un tout.
- **Proximité** — contrôles regroupés par fonction (`ConfigScreen.jsx`), HUD regroupé (`GameBoard.jsx`).
- **Figure-fond** — dos de carte teal sur fond clair (`Card.jsx`).
- **Continuité** — gap uniforme + cellules carrées alignées (`GameBoard.jsx`) → grille 6 × 6 ordonnée.

---

## Lancer le projet

Prérequis : **Node.js 18+** et npm.

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement → http://localhost:5173
npm run build      # build de production → dossier dist/
npm run preview    # prévisualiser le build de production
```

Le jeu MémoVague est ensuite accessible à l'adresse `http://localhost:5173/memovague`.

## Déploiement

Le projet est un site statique Vite, déployable tel quel sur **Vercel**, **Netlify**
ou **GitHub Pages**.

**Vercel (recommandé, déjà utilisé pour ce portfolio) :**

1. Importer le dépôt GitHub dans Vercel.
2. Framework détecté : *Vite*. Build : `npm run build`. Output : `dist`.
3. Chaque `git push` sur `main` redéploie automatiquement.

> Pour un routage SPA correct (React Router) sur Vercel, les routes profondes comme
> `/memovague` sont servies via `index.html` (réécriture par défaut du preset Vite).

## Stack technique

React 18 · React Router · Vite 5 · Tailwind CSS 3 · (emoji natifs — aucune dépendance d'icônes ajoutée)
