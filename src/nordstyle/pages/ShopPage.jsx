import { useMemo, useState } from 'react'
import FacetPanel from '../components/FacetPanel.jsx'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'
import { getFacetOptions, filterProducts, sortProducts, countActiveFilters, FACET_CONFIG } from '../lib/facets.js'

const emptyFilters = () => Object.fromEntries(FACET_CONFIG.map(f => [f.key, []]))

export default function ShopPage() {
  const options = useMemo(() => getFacetOptions(products), [])
  const [active, setActive] = useState(emptyFilters)
  const [sortKey, setSortKey] = useState('featured')

  const toggle = (key, value) =>
    setActive(prev => {
      const has = prev[key].includes(value)
      return { ...prev, [key]: has ? prev[key].filter(v => v !== value) : [...prev[key], value] }
    })
  const clear = () => setActive(emptyFilters())

  const activeCount = countActiveFilters(active)
  const results = useMemo(
    () => sortProducts(filterProducts(products, active), sortKey),
    [active, sortKey]
  )

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row">
      <FacetPanel options={options} active={active} onToggle={toggle} onClear={clear} activeCount={activeCount} />
      <div className="flex-1">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-nord-muted" aria-live="polite">
            {results.length} produit{results.length !== 1 ? 's' : ''} trouvé{results.length !== 1 ? 's' : ''}
          </p>
          <label className="text-sm text-nord-muted">
            Trier&nbsp;:
            <select
              value={sortKey}
              onChange={e => setSortKey(e.target.value)}
              className="ml-2 rounded-lg border border-nord-gray bg-white px-2 py-1 text-nord-ink"
            >
              <option value="featured">En vedette</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Mieux notés</option>
            </select>
          </label>
        </div>
        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-nord-gray bg-white p-12 text-center">
            <p className="text-lg font-semibold text-nord-ink">Aucun produit ne correspond à vos critères.</p>
            <button onClick={clear} className="mt-4 rounded-xl bg-nord-accent px-5 py-2.5 font-bold text-white">
              Effacer les filtres
            </button>
          </div>
        ) : (
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {results.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}
