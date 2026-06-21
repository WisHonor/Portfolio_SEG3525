/**
 * Card — une seule carte du plateau.
 *
 * GESTALT · SIMILARITÉ : toutes les cartes partagent EXACTEMENT le même dos
 * (même surface indigo-navy, même rayon, même « ? »). Cette uniformité les fait
 * percevoir comme un seul ensemble cohérent — « ceci est le jeu de cartes » —
 * plutôt que comme des éléments disparates.
 *
 * GESTALT · FIGURE-FOND : le dos en surface (#2E2F52) se détache du fond navy
 * plus sombre (#1A1B2E), renforcé par un liseré indigo. Les cartes ressortent
 * comme « figures » sur le « fond » et se lisent comme objets interactifs.
 */
export default function Card({ card, flipped, matched, disabled, onFlip }) {
  const faceUp = flipped || matched;
  return (
    <button
      type="button"
      aria-label={faceUp ? `Carte ${card.symbol}` : 'Carte cachée'}
      disabled={disabled || faceUp}
      onClick={onFlip}
      className="group relative aspect-square w-full rounded-2xl [perspective:1000px] focus:outline-none focus-visible:ring-2 focus-visible:ring-mv-accent focus-visible:ring-offset-2 focus-visible:ring-offset-mv-bg"
    >
      {/* Conteneur 3D qui pivote selon l'état (transition douce, non agressive) */}
      <div
        className={
          'relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] ' +
          (faceUp ? '[transform:rotateY(180deg)]' : '')
        }
      >
        {/* DOS — visible quand la carte est cachée */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-mv-surface shadow-sm ring-1 ring-mv-primary/40 transition [backface-visibility:hidden] group-hover:ring-2 group-hover:ring-mv-primary/70 group-active:scale-95">
          <span className="select-none text-2xl font-black text-mv-primary/70">?</span>
        </div>

        {/* FACE — visible quand la carte est retournée (claire pour faire ressortir l'emoji) */}
        <div
          className={
            'absolute inset-0 flex items-center justify-center rounded-2xl bg-mv-face [transform:rotateY(180deg)] [backface-visibility:hidden] ' +
            // MATCH : liseré vert = feedback de succès clair mais calme.
            (matched
              ? 'ring-2 ring-mv-success shadow-[0_0_0_3px_rgba(6,214,160,0.22)]'
              : 'ring-2 ring-mv-primary shadow-sm')
          }
        >
          <span className="select-none text-[clamp(1.25rem,5.5vw,2.4rem)] leading-none">
            {card.symbol}
          </span>
        </div>
      </div>
    </button>
  );
}
