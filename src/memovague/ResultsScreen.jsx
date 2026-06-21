// ResultsScreen — écran de fin : résultats + relance.
// L'échelle des chiffres (gros, gras, tabular-nums) traduit leur importance ;
// le temps et le nombre de coups sont les deux mesures clés (objectif des deux
// personas). Les actions de relance sont nettement hiérarchisées.

function fmt(t) {
  const m = String(Math.floor(t / 60)).padStart(2, '0');
  const s = String(t % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function ResultStat({ label, value, sub }) {
  return (
    <div className="rounded-2xl bg-mv-surface px-4 py-5 text-center shadow-sm ring-1 ring-white/10">
      <p className="text-xs font-bold uppercase tracking-wide text-mv-neutral">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tabular-nums text-mv-ink">{value}</p>
      {sub && <p className="mt-1 text-xs font-semibold text-mv-neutral">{sub}</p>}
    </div>
  );
}

export default function ResultsScreen({ result, level, theme, onReplay, onReconfig }) {
  const { time, moves, isRecord, best } = result;

  return (
    <section className="mx-auto max-w-md px-5 py-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mv-success/15 text-3xl">
        🎉
      </div>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-mv-ink">Partie terminée&nbsp;!</h2>
      <p className="mt-2 text-mv-neutral">
        {theme.label} · {level.label} ({level.blurb})
      </p>

      {isRecord && (
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-mv-accent/15 px-3 py-1 text-sm font-bold text-mv-accent">
          ✨ Nouveau record personnel&nbsp;!
        </p>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3">
        <ResultStat label="Temps" value={fmt(time)} sub={best ? `Record ${fmt(best.time)}` : null} />
        <ResultStat label="Coups" value={moves} sub={best ? `Record ${best.moves}` : null} />
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          onClick={onReplay}
          className="rounded-2xl bg-mv-accent px-6 py-3.5 font-extrabold text-mv-bg shadow-lg shadow-mv-accent/30 transition hover:-translate-y-0.5 hover:bg-mv-accent-dark active:translate-y-0"
        >
          Rejouer
        </button>
        <button
          type="button"
          onClick={onReconfig}
          className="rounded-2xl border-2 border-mv-primary/50 bg-mv-primary/10 px-6 py-3.5 font-bold text-mv-ink transition hover:border-mv-primary hover:bg-mv-primary/20"
        >
          Changer de niveau ou de thème
        </button>
      </div>
    </section>
  );
}
