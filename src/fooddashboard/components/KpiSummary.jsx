import { ITEMS, MONTHS_LONG, itemStats } from '../data.js'

// Cartes de synthèse : min, max, moyenne et écart saisonnier pour l'aliment
// sélectionné. Se met à jour en même temps que la courbe (vue liée). Chaque valeur
// est étiquetée par du texte — la pastille de couleur ne fait que rappeler l'identité.
export default function KpiSummary({ t, lang, item }) {
  const idx = ITEMS.keys.indexOf(item)
  const s = itemStats(item)
  const color = ITEMS.colors[idx]
  const label = ITEMS.labels[lang][idx]

  const tiles = [
    { k: 'min', label: t.kpi.min, value: t.price(s.min), sub: t.kpi.inMonth(MONTHS_LONG[lang][s.minMonth]) },
    { k: 'max', label: t.kpi.max, value: t.price(s.max), sub: t.kpi.inMonth(MONTHS_LONG[lang][s.maxMonth]) },
    { k: 'avg', label: t.kpi.avg, value: t.price(s.avg), sub: t.kpi.over12 },
    { k: 'amp', label: t.kpi.amplitude, value: t.price(s.amplitude), sub: t.kpi.maxMinusMin },
  ]

  return (
    <section aria-label={t.kpi.heading}>
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-fp-muted">{t.kpi.heading}</h2>
        <span className="text-sm font-semibold text-fp-ink">{t.kpi.forItem(label)}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 min-[560px]:grid-cols-4">
        {tiles.map((tile) => (
          <div key={tile.k} className="rounded-xl border border-fp-line bg-fp-surface p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-fp-muted">{tile.label}</p>
            <p className="mt-1 font-playfair text-2xl font-bold tabular-nums text-fp-ink">{tile.value}</p>
            <p className="mt-0.5 text-xs text-fp-muted">{tile.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
