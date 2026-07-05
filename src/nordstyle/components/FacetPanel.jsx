import { FACET_CONFIG } from '../lib/facets.js'

export default function FacetPanel({ options, active, onToggle, onClear, activeCount }) {
  return (
    <aside className="w-full shrink-0 md:w-60">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-playfair text-lg font-extrabold text-nord-ink">Filtres</h2>
        {activeCount > 0 && (
          <button onClick={onClear} className="text-xs font-bold text-nord-accent hover:underline">
            Effacer les filtres ({activeCount})
          </button>
        )}
      </div>
      <div className="space-y-5">
        {FACET_CONFIG.map(({ key, label }) => (
          <fieldset key={key} className="rounded-xl border border-nord-gray bg-white p-4">
            <legend className="px-1 text-sm font-bold text-nord-ink">{label}</legend>
            <div className="mt-2 space-y-1.5">
              {options[key].map(value => (
                <label key={value} className="flex cursor-pointer items-center gap-2 text-sm text-nord-muted">
                  <input
                    type="checkbox"
                    checked={active[key].includes(value)}
                    onChange={() => onToggle(key, value)}
                    className="h-4 w-4 accent-nord-accent"
                  />
                  {value}
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>
    </aside>
  )
}
