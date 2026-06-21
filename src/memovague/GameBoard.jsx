import { useState, useEffect, useRef, useCallback } from 'react';
import Card from './Card.jsx';

// Fisher–Yates : mélange honnête et uniforme du paquet.
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Construit le paquet : on tire `pairs` symboles distincts du thème (mélangés,
// donc variés d'une partie à l'autre), on les double, puis on mélange le tout.
function buildDeck(theme, pairs) {
  const pool = shuffle(theme.emojis).slice(0, pairs);
  const deck = pool.flatMap((symbol, i) => [
    { id: `${i}-a`, pairId: i, symbol },
    { id: `${i}-b`, pairId: i, symbol },
  ]);
  return shuffle(deck);
}

function Stat({ label, value }) {
  return (
    <div className="min-w-[62px] rounded-xl bg-mv-surface px-3 py-2 text-center shadow-sm ring-1 ring-white/10">
      <p className="text-[0.62rem] font-bold uppercase tracking-wide text-mv-neutral">{label}</p>
      <p className="mt-0.5 text-lg font-extrabold leading-none tabular-nums text-mv-ink">{value}</p>
    </div>
  );
}

export default function GameBoard({ level, theme, onComplete, onQuit }) {
  const [deck] = useState(() => buildDeck(theme, level.pairs));
  const [flipped, setFlipped] = useState([]);   // cartes face visible en cours d'évaluation
  const [matched, setMatched] = useState([]);   // pairId déjà appariés
  const [moves, setMoves] = useState(0);
  const [elapsed, setElapsed] = useState(0);     // secondes écoulées
  const [locked, setLocked] = useState(false);   // verrou pendant l'évaluation d'une paire
  const startRef = useRef(Date.now());

  // Minuteur DISCRET : compte le temps écoulé (jamais de compte à rebours).
  // Informatif pour Marc-André, sans la pression anxiogène que fuit Camille.
  useEffect(() => {
    const t = setInterval(
      () => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)),
      1000,
    );
    return () => clearInterval(t);
  }, []);

  const isOver = matched.length === level.pairs;

  // Fin de partie : on laisse la dernière paire s'animer, puis on remonte les
  // stats au parent (la machine à états).
  useEffect(() => {
    if (!isOver) return;
    const time = Math.floor((Date.now() - startRef.current) / 1000);
    const t = setTimeout(() => onComplete({ moves, time }), 650);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOver]);

  const handleFlip = useCallback(
    (card) => {
      if (locked || flipped.some((c) => c.id === card.id)) return;
      const next = [...flipped, card];
      setFlipped(next);
      if (next.length < 2) return;

      setMoves((m) => m + 1);
      setLocked(true);
      if (next[0].pairId === next[1].pairId) {
        // MATCH — court délai pour laisser voir, puis on fige les cartes.
        setTimeout(() => {
          setMatched((m) => [...m, next[0].pairId]);
          setFlipped([]);
          setLocked(false);
        }, 420);
      } else {
        // MISMATCH — on montre brièvement puis on retourne (feedback non brusque).
        setTimeout(() => {
          setFlipped([]);
          setLocked(false);
        }, 820);
      }
    },
    [flipped, locked],
  );

  const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const ss = String(elapsed % 60).padStart(2, '0');
  const cols = level.cols === 6 ? 'grid-cols-6' : 'grid-cols-4';

  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:px-5">
      {/* ── HUD : indicateurs de performance REGROUPÉS (Gestalt · proximité) ──
          Temps + coups + paires forment un tableau de bord unique, en haut.
          Clair et mesurable (objectif Marc-André) mais calme : aucun compte à
          rebours, aucune couleur d'alerte (objectif Camille). */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div className="flex gap-2">
          <Stat label="Temps" value={`${mm}:${ss}`} />
          <Stat label="Coups" value={moves} />
          <Stat label="Paires" value={`${matched.length}/${level.pairs}`} />
        </div>
        <button
          type="button"
          onClick={onQuit}
          className="rounded-xl px-3 py-2 text-sm font-semibold text-mv-neutral transition hover:text-mv-ink"
        >
          Quitter
        </button>
      </div>

      {/* ── PLATEAU ──────────────────────────────────────────────────────────
          GESTALT · CONTINUITÉ : gap uniforme + cellules `aspect-square`
          identiques produisent des lignes et colonnes parfaitement alignées.
          L'œil suit des rangées régulières, ce qui garde même la grille 6×6
          ordonnée et lisible plutôt qu'écrasante. */}
      <div className={`grid ${cols} gap-2 sm:gap-3`}>
        {deck.map((card) => (
          <Card
            key={card.id}
            card={card}
            flipped={flipped.some((c) => c.id === card.id)}
            matched={matched.includes(card.pairId)}
            disabled={locked}
            onFlip={() => handleFlip(card)}
          />
        ))}
      </div>
    </section>
  );
}
