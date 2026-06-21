import { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfigScreen from './ConfigScreen.jsx';
import GameBoard from './GameBoard.jsx';
import ResultsScreen from './ResultsScreen.jsx';
import { LEVELS, THEMES, loadBest, saveBest } from './themes.js';

/**
 * MemoVague — racine du jeu et MACHINE À ÉTATS de navigation.
 *
 * Un unique état `phase` pilote tout le flux, comme demandé :
 *
 *     config  ──►  play  ──►  results  ──┐
 *        ▲                                │
 *        └────────────────────────────────┘  (Changer de niveau / thème)
 *                     └──► play  (Rejouer)
 *
 * Les réglages (niveau, thème) sont remontés ici ; GameBoard gère la partie en
 * cours et renvoie ses statistiques via onComplete.
 */
export default function MemoVague() {
  const [phase, setPhase] = useState('config');
  const [level, setLevel] = useState(LEVELS.debutant);
  const [theme, setTheme] = useState(THEMES.animaux);
  const [result, setResult] = useState(null);
  const [round, setRound] = useState(0); // change de valeur → GameBoard se remonte (paquet neuf)

  const start = (lvl, thm) => {
    setLevel(lvl);
    setTheme(thm);
    setRound((r) => r + 1);
    setPhase('play');
  };

  // À la fin d'une partie, on compare au record stocké AVANT de l'écraser
  // (gestionnaire d'évènement : exécuté une seule fois, robuste en StrictMode).
  const finish = (stats) => {
    const prev = loadBest(level, theme);
    const isRecord = !prev || stats.time < prev.time;
    const best = isRecord ? { time: stats.time, moves: stats.moves } : prev;
    if (isRecord) saveBest(level, theme, best);
    setResult({ ...stats, isRecord, best });
    setPhase('results');
  };

  const replay = () => {
    setResult(null);
    setRound((r) => r + 1);
    setPhase('play');
  };

  const reconfig = () => {
    setResult(null);
    setPhase('config');
  };

  return (
    <div className="min-h-screen bg-mv-bg font-poppins text-mv-ink">
      {/* Barre minimale + retour vers le portfolio (cohérent avec le reste du site) */}
      <header className="sticky top-0 z-40 border-b border-mv-neutral/15 bg-mv-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-mv-primary text-sm font-black text-white">
              M
            </span>
            <span className="font-extrabold tracking-tight text-mv-ink">
              Mémo<span className="text-mv-primary">Vague</span>
            </span>
          </span>
          <Link
            to="/"
            className="rounded-lg px-3 py-1.5 text-sm font-semibold text-mv-neutral no-underline transition hover:text-mv-ink"
          >
            ← Portfolio
          </Link>
        </div>
      </header>

      <main>
        {phase === 'config' && (
          <ConfigScreen initialLevel={level} initialTheme={theme} onStart={start} />
        )}
        {phase === 'play' && (
          <GameBoard key={round} level={level} theme={theme} onComplete={finish} onQuit={reconfig} />
        )}
        {phase === 'results' && result && (
          <ResultsScreen
            result={result}
            level={level}
            theme={theme}
            onReplay={replay}
            onReconfig={reconfig}
          />
        )}
      </main>
    </div>
  );
}
