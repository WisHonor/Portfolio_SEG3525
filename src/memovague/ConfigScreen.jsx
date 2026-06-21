import { useState } from 'react';
import { LEVELS, THEMES } from './themes.js';

/**
 * ConfigScreen — choix du niveau et du thème avant de jouer.
 *
 * GESTALT · PROXIMITÉ : les contrôles sont regroupés par fonction. Le bloc
 * « Niveau » et le bloc « Thème » sont deux groupes visuels distincts, séparés
 * par un généreux espace négatif. Le joueur perçoit deux décisions claires
 * plutôt qu'une masse d'options en vrac.
 */
export default function ConfigScreen({ initialLevel, initialTheme, onStart }) {
  const [level, setLevel] = useState(initialLevel);
  const [theme, setTheme] = useState(initialTheme);

  return (
    <section className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
      {/* En-tête : hiérarchie typographique forte (sur-titre → titre → sous-titre) */}
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-mv-primary">
          Jeu de mémoire
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-mv-ink sm:text-5xl">
          MémoVague
        </h1>
        <p className="mx-auto mt-3 max-w-md text-mv-neutral">
          Retournez les cartes et retrouvez toutes les paires. Prenez votre
          temps — ou battez votre record.
        </p>
      </div>

      {/* ── GROUPE 1 : NIVEAU (proximité) ── */}
      <fieldset className="mt-10">
        <legend className="text-sm font-bold uppercase tracking-wide text-mv-neutral">
          Niveau
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {Object.values(LEVELS).map((lvl) => {
            const active = lvl.id === level.id;
            return (
              <button
                key={lvl.id}
                type="button"
                aria-pressed={active}
                onClick={() => setLevel(lvl)}
                className={
                  'flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition ' +
                  (active
                    ? 'border-mv-primary bg-mv-primary/10 shadow-sm'
                    : 'border-white/10 bg-mv-surface hover:border-mv-primary/50')
                }
              >
                <span>
                  <span className="block text-lg font-bold text-mv-ink">{lvl.label}</span>
                  <span className="block text-sm text-mv-neutral">{lvl.blurb}</span>
                </span>
                {/* Aperçu miniature de la grille — rappelle (similarité) le plateau réel */}
                <span className={'grid gap-0.5 ' + (lvl.cols === 6 ? 'grid-cols-6' : 'grid-cols-4')}>
                  {Array.from({ length: lvl.cols * lvl.cols }).map((_, i) => (
                    <span
                      key={i}
                      className={'h-1.5 w-1.5 rounded-[2px] ' + (active ? 'bg-mv-primary' : 'bg-white/15')}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* ── GROUPE 2 : THÈME (proximité) ── */}
      <fieldset className="mt-8">
        <legend className="text-sm font-bold uppercase tracking-wide text-mv-neutral">
          Thème
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {Object.values(THEMES).map((thm) => {
            const active = thm.id === theme.id;
            return (
              <button
                key={thm.id}
                type="button"
                aria-pressed={active}
                onClick={() => setTheme(thm)}
                className={
                  'flex flex-col items-center gap-1.5 rounded-2xl border-2 px-3 py-4 transition ' +
                  (active
                    ? 'border-mv-accent bg-mv-primary/10 shadow-sm'
                    : 'border-white/10 bg-mv-surface hover:border-mv-primary/50')
                }
              >
                <span className="text-2xl leading-none">{thm.icon}</span>
                <span className="text-sm font-semibold text-mv-ink">{thm.label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* ── ACTION PRIMAIRE : or vif + échelle pour la hiérarchiser ── */}
      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => onStart(level, theme)}
          className="rounded-2xl bg-mv-accent px-10 py-4 text-lg font-extrabold text-mv-bg shadow-lg shadow-mv-accent/30 transition hover:-translate-y-0.5 hover:bg-mv-accent-dark active:translate-y-0"
        >
          Commencer&nbsp;→
        </button>
      </div>
    </section>
  );
}
