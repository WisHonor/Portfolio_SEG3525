export const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL']
const PRICE_ORDER = ['0$-50$', '50$-100$', '100$-200$', '200$+']

export const FACET_CONFIG = [
  { key: 'category', label: 'Catégorie' },
  { key: 'color', label: 'Couleur' },
  { key: 'size', label: 'Taille' },
  { key: 'material', label: 'Matière' },
  { key: 'priceRange', label: 'Prix' },
]

function uniqueValues(products, key) {
  const set = new Set()
  products.forEach(p => {
    const v = p[key]
    if (Array.isArray(v)) v.forEach(x => set.add(x))
    else set.add(v)
  })
  return [...set]
}

export function getFacetOptions(products) {
  const options = {}
  FACET_CONFIG.forEach(({ key }) => {
    let vals = uniqueValues(products, key)
    if (key === 'size') vals = vals.sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b))
    else if (key === 'priceRange') vals = vals.sort((a, b) => PRICE_ORDER.indexOf(a) - PRICE_ORDER.indexOf(b))
    else vals = vals.sort((a, b) => a.localeCompare(b, 'fr'))
    options[key] = vals
  })
  return options
}

export function filterProducts(products, activeFilters) {
  return products.filter(product =>
    Object.entries(activeFilters).every(([facet, values]) => {
      if (!values || values.length === 0) return true
      const field = product[facet]
      if (Array.isArray(field)) return values.some(v => field.includes(v))
      return values.includes(field)
    })
  )
}

export function sortProducts(products, sortKey) {
  const copy = [...products]
  switch (sortKey) {
    case 'price-asc': return copy.sort((a, b) => a.price - b.price)
    case 'price-desc': return copy.sort((a, b) => b.price - a.price)
    case 'rating': return copy.sort((a, b) => b.rating - a.rating)
    default: return copy
  }
}

export function countActiveFilters(activeFilters) {
  return Object.values(activeFilters).reduce((n, vals) => n + (vals?.length || 0), 0)
}
