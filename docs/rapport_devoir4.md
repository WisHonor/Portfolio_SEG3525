# Rapport — Devoir 4 SEG3525
# Site de commerce électronique — NordStyle

---

## Section 1 — Concepteur

**Nom :** Wissam Elmasry
**Numéro d'étudiant :** [à compléter]

---

## Section 2 — Objectif du commerce électronique

### 2a. Nom et type d'e-commerce

Mon site s'appelle **NordStyle**. Il s'agit d'une boutique en ligne de **vêtements et accessoires d'hiver** (manteaux, doudounes, tuques, bottes, gants, chandails, écharpes) ciblant les **adultes de 18 à 35 ans** qui achètent en ligne et recherchent des vêtements fonctionnels et stylés adaptés au climat canadien.

### 2b. Sites d'inspiration

> *(À ajuster selon les sites que tu as réellement consultés.)*

| Site | URL | Comment utilisé pour l'inspiration |
|---|---|---|
| Simons | https://www.simons.ca | Structure de la page boutique : sidebar de filtres à facettes à gauche, grille de produits à droite, compteur de résultats. |
| Canada Goose | https://www.canadagoose.com | Direction visuelle hivernale (palette froide bleu/marine), cartes produit épurées, page de détail avec sélection de taille et guide des tailles. |

---

## Section 3 — Réflexion / Conception

### (A) Conception des processus interactifs et image du système

#### 3a. Processus de suivi des instructions (checkout multi-étapes)

Pour le processus d'achat, j'ai implémenté une **barre de progression à 4 étapes** (Panier → Informations → Paiement → Confirmation) affichée en haut de chaque écran du checkout. L'étape active est mise en évidence avec la **couleur accent bleue** du site, les étapes complétées affichent une **coche verte (✓)**, et les étapes futures restent **grisées**. Des boutons **« Suivant »** et **« Retour »** sont présents à chaque étape.

Cette rétroaction visuelle permet à l'utilisateur de savoir à tout moment **où il se trouve**, **ce qu'il a déjà accompli** et **ce qu'il lui reste à faire**. Le ton du texte s'adapte à l'étape : informatif au panier (« Voici votre commande »), rassurant au paiement (« Paiement 100 % sécurisé 🔒 »), positif à la confirmation (« Merci pour votre commande ! »).

#### 3b. Processus d'exploration (recherche à facettes)

Pour la boutique NordStyle, j'ai identifié à partir d'un réseau sémantique les caractéristiques que les utilisateurs emploient pour affiner leur recherche de vêtements d'hiver. Les **5 facettes** retenues sont :

| Facette | Valeurs possibles | Justification |
|---|---|---|
| Catégorie | Manteaux, Doudounes, Tuques, Bottes, Gants, Chandails, Écharpes | Filtrage de premier niveau, dimension la plus évidente pour trouver un type de produit. |
| Couleur | Bleu marine, Noir, Gris, Beige, Rouge, Vert forêt | Critère visuel important dans le choix d'un vêtement. |
| Taille | XS, S, M, L, XL | Critère fonctionnel indispensable ; trié logiquement (XS < S < M < L < XL), pas alphabétiquement. |
| Matière | Laine, Duvet, Polaire, Cuir, Coton | Pertinent pour l'hiver : la chaleur et l'entretien dépendent de la matière. |
| Prix | 0-50 $, 50-100 $, 100-200 $, 200 $+ | Aide l'utilisateur à filtrer selon son budget. |

La logique de filtrage est de type **AND** entre facettes (un produit doit correspondre à **toutes** les facettes sélectionnées) et **OR** à l'intérieur d'une même facette. Le filtrage est en **temps réel** (aucun rechargement), un **compteur « X produits trouvés »** se met à jour instantanément, un bouton **« Effacer les filtres »** apparaît dès qu'un filtre est actif, et un message **« Aucun produit ne correspond à vos critères. »** s'affiche s'il n'y a aucun résultat.

#### 3c. Processus de communication (sondage post-achat)

Le sondage est proposé **après la confirmation de commande**, via un lien invitant (« Donnez-nous votre avis (30 s) → ») — jamais en popup intrusif. Il est **court (4 questions)** et **varié** : une notation par **étoiles (1 à 5)**, une question à **choix multiple** (« Comment nous avez-vous trouvés ? »), une **question ouverte** (textarea), et une question de recommandation. La participation est **entièrement optionnelle** et l'utilisateur peut continuer ses achats à tout moment. Après soumission, un **message de remerciement chaleureux** s'affiche (« Merci pour votre retour ! Votre avis nous aide à vous offrir une meilleure expérience. »).

---

### (B) Conception de la communication verbale

**Modèle rédacteur/lecteur**

Le site s'adresse aux utilisateurs en utilisant le **« vous »** de façon cohérente sur l'ensemble des pages, ce qui reflète le positionnement soigné mais accessible de la boutique. Pour créer un **effet de conversation** sur certaines pages (confirmation, sondage), le site adopte ponctuellement un ton plus personnel à la première personne du pluriel : « Nous sommes ravis… », « Votre avis nous aide… », renforçant le lien avec le client.

**Les 3 objectifs de communication**

| Objectif | Localisation sur le site | Exemple de phrase utilisée | Type de phrase |
|---|---|---|---|
| **Inciter à l'action** | Bannière promo (page d'accueil) | « ❄️ Soldes d'hiver — jusqu'à −40 % sur les manteaux ! Profitez-en maintenant » | Exclamative, impérative |
| **Informer** | Page produit (composition, guide des tailles) | « Matière : Laine. Couleur : Bleu marine. Guide des tailles : XS (34) · S (36-38) · M (40-42)… » | Déclarative, neutre |
| **Établir une connexion** | Confirmation + sondage | « Votre avis nous aide à vous offrir une meilleure expérience. Merci ! » | Positive, engageante |

---

## Section 4 — Prototype haute-fidélité

### 4a. Choix de conception visuelle

**Palette de couleurs** — thème « Minimaliste nordique » (froid, hivernal) :

- **Couleur principale :** `#1A1A2E` (bleu marine profond) — évoque la nuit d'hiver, la fiabilité et le haut de gamme ; utilisée pour la navigation, le pied de page et le texte.
- **Couleur accent :** `#2C7DA0` (bleu océan) — utilisée pour les **CTA et éléments actifs** (boutons, liens, étape active, cases cochées) ; contraste AA sur blanc.
- **Couleurs secondaires :** `#4F8FB5` (bleu glacier) et `#EAF3F9` (bleu givré très pâle) — accents et fonds « givrés » qui renforcent l'ambiance hivernale.
- **Neutres :** `#E8E8E8` (gris clair, bordures/fonds) et blanc `#FFFFFF` (fond des cartes).

La palette est **cohérente sur toutes les pages** (bleu + blanc + marine, sans couleur superflue).

**Typographie**

J'utilise **Playfair Display** (serif) pour les titres — personnalité et caractère — et **Poppins** (sans-serif) pour le texte courant — lisibilité. La hiérarchie visuelle est assurée par la différence de **taille et de graisse** entre titres, sous-titres et corps de texte.

**Mise en page**

La page boutique utilise un **layout en deux colonnes** : une **sidebar de facettes (~240 px)** à gauche et une **grille de produits** à droite (`grid` CSS, `repeat(auto-fill, minmax(220px, 1fr))`). L'espace négatif est généreux pour réduire la charge cognitive. Sur **mobile (< 768 px)**, la sidebar se replie **au-dessus** de la grille (`flex-direction: column`). Le site est responsive de 375 px (mobile) à 1200 px (desktop).

**Gestalt et principes visuels**

Les **cartes produits** appliquent le principe de **similitude** (même format, même ombre, même rayon d'arrondi) : la grille est perçue comme un ensemble cohérent. La **fermeture** (figure/fond) est assurée par des bordures et des fonds légèrement contrastés (cartes blanches sur fond gris givré). La **proximité** regroupe les contrôles par fonction (facettes, résumé du panier, étapes du checkout).

### 4b. Liens vers les portfolios

- **Portfolio :** [URL Vercel du portfolio — à compléter]
- **GitHub (code) :** https://github.com/WisHonor/Portfolio_SEG3525
- **Site déployé (NordStyle) :** [URL du portfolio]/nordstyle

> *Note : le portfolio (avec tous les devoirs) est déployé sur **Vercel**, chaque devoir étant une route. NordStyle est accessible à la route `/nordstyle` depuis la page d'accueil (section « Études de cas »).*

---

## Section 5 — Code

**Lien GitHub :** https://github.com/WisHonor/Portfolio_SEG3525

Module NordStyle : `src/nordstyle/` (`pages/`, `components/`, `lib/` — logique testée, `data/products.json`). Stack : React 18 · React Router · Vite 5 · Tailwind CSS · Vitest (tests unitaires de la logique de facettes, du panier et de la validation).

---

## Section 6 — Évaluation Heuristique (auto-évaluation)

**Heuristique : Visibilité de l'état du système**

*Définition : Le système informe toujours l'utilisateur de ce qui se passe, au moyen d'un retour approprié dans un délai raisonnable.*

Élément conforme : La **barre de progression** du checkout affiche les 4 étapes d'achat. L'étape active est mise en surbrillance en **bleu accent**, les étapes complétées affichent une **coche verte**, et les étapes restantes sont grisées. De plus, le **compteur « X produits trouvés »** et le **badge du panier** dans la navbar se mettent à jour en temps réel.

[Insérer capture d'écran : barre de progression]

---

**Heuristique : Correspondance avec le monde réel**

*Définition : Le système utilise le langage et les concepts familiers à l'utilisateur, dans son propre vocabulaire.*

Élément conforme : Les noms de facettes utilisent le vocabulaire naturel des acheteurs (« Couleur », « Taille », « Matière », « Prix ») plutôt que des termes techniques. Les **tailles** sont affichées dans l'ordre logique **XS < S < M < L < XL**, pas alphabétiquement.

[Insérer capture d'écran : panneau de facettes]

---

**Heuristique : Contrôle et liberté de l'utilisateur**

*Définition : L'utilisateur doit pouvoir annuler ou revenir en arrière facilement s'il fait une erreur.*

Élément conforme : Le bouton **« Effacer les filtres »** réinitialise tous les filtres actifs en un clic. Dans le checkout, un bouton **« Retour »** est disponible à chaque étape pour corriger une information.

[Insérer capture d'écran : bouton « Effacer les filtres » ou bouton « Retour » du checkout]

---

**Heuristique : Cohérence et standards**

*Définition : Les conventions de la plateforme sont respectées ; un même mot ou une même action produit toujours le même résultat.*

Élément conforme : La **barre de navigation** (logo, liens de pages, badge panier) est identique sur toutes les pages. Les boutons d'action primaire utilisent systématiquement la **même couleur accent bleue** et la même forme.

[Insérer capture d'écran : navbar sur deux pages différentes]

---

**Heuristique : Prévention des erreurs**

*Définition : Concevoir avec soin pour éviter que les problèmes ne surviennent.*

Élément conforme : Les **tailles épuisées** (et les produits en rupture de stock) sont affichées en **grisé et barré** et ne peuvent pas être sélectionnées. Dans le formulaire de checkout, les champs sont **validés en temps réel** avant de passer à l'étape suivante.

[Insérer capture d'écran : tailles grisées ou validation formulaire]

---

**Heuristique : Reconnaissance plutôt que rappel**

*Définition : Minimiser la charge de mémoire de l'utilisateur en rendant les objets, actions et options visibles.*

Élément conforme : Toutes les valeurs de facettes disponibles sont **affichées** dans le panneau latéral — l'utilisateur n'a pas à se souvenir des options. Un **fil d'Ariane** (Accueil · Boutique · Produit) indique la page actuelle sur la page produit.

[Insérer capture d'écran : panneau de facettes complet ou fil d'Ariane]

---

**Heuristique : Flexibilité et efficacité d'utilisation**

*Définition : Les accélérateurs permettent aux utilisateurs expérimentés d'aller plus vite.*

Élément conforme : Les facettes se combinent dans **n'importe quel ordre** (filtrer d'abord par couleur ou par prix, au choix). Une option de **tri des produits** (en vedette, prix croissant/décroissant, mieux notés) est disponible.

[Insérer capture d'écran : filtres combinés et options de tri]

---

**Heuristique : Design esthétique et minimaliste**

*Définition : Les interfaces ne doivent pas contenir d'informations non pertinentes.*

Élément conforme : Chaque **carte produit** affiche uniquement l'image, la catégorie, le nom, la note, le prix et un bouton d'accès — sans description longue ni badges superflus — pour réduire la charge cognitive.

[Insérer capture d'écran : grille de cartes produits]

---

**Heuristique : Aide à reconnaître, diagnostiquer et récupérer des erreurs**

*Définition : Les messages d'erreur doivent être exprimés en langage clair, indiquer le problème et suggérer une solution.*

Élément conforme : Si un champ du formulaire de paiement est mal rempli, un **message d'erreur explicite** apparaît sous le champ concerné (ex : « Numéro de carte invalide (16 chiffres). », « Date d'expiration invalide (MM/AA). »). Le message est **rouge, précis et actionnable**.

[Insérer capture d'écran : message d'erreur de formulaire]

---

**Heuristique : Aide et documentation**

*Définition : Il peut être nécessaire de fournir une aide, même si le système est utilisable sans documentation.*

Élément conforme : Un lien **« Guide des tailles »** est accessible depuis chaque page produit et depuis le **pied de page** (présent sur toutes les pages), qui contient aussi une section **FAQ** (livraison, retours). Sur le sondage, une phrase indique le temps requis (« quelques secondes »).

[Insérer capture d'écran : footer avec lien FAQ ou guide des tailles]

---

## Section 7 — Reconnaissance de l'IA générative

**Pour le code (prototype haute-fidélité) :**
- **Outils utilisés :** Claude (Claude Code).
- **Rôle :** génération de la structure des composants React (Navbar, FacetPanel, ProductCard, ProgressBar, pages), de la logique de filtrage à facettes, du panier (Context + localStorage), du checkout multi-étapes et de la validation de formulaire ; rédaction de tests unitaires (Vitest).
- **Interactions :** j'ai fourni les spécifications du devoir et mes choix (domaine, palette, facettes), puis j'ai fait générer les composants tâche par tâche, révisé et ajusté le code (couleurs, images, contenu) pour l'adapter à mon thème NordStyle et à mes données.

**Pour le rapport :**
- **Outils utilisés :** Claude.
- **Rôle :** aide à la structuration des sections et reformulation concise de mes choix de design.
- **Interactions :** j'ai fourni la structure imposée du rapport et mes décisions de conception ; l'IA les a formulées de façon concise, que j'ai relues et corrigées.

---

## Checklist rapport

- [x] Section 1 : Nom (+ numéro étudiant à compléter)
- [x] Section 2a : Nom du site, type, cible
- [x] Section 2b : 2 liens d'inspiration + descriptions
- [x] Section 3a : Barre de progression décrite
- [x] Section 3b : Tableau des facettes avec justifications
- [x] Section 3c : Sondage non intrusif décrit
- [x] Section 3B : Modèle rédacteur/lecteur + tableau des 3 objectifs
- [x] Section 4a : Palette, typographie, mise en page
- [x] Section 4b : Liens portfolio(s) (URL Vercel à compléter)
- [x] Section 5 : Lien GitHub
- [x] Section 6 : 10 heuristiques nommées avec exemples (captures à insérer)
- [x] Section 7 : IA générative documentée
- [ ] Convertir en PDF et soumettre sur Brightspace
