import { describe, it, expect } from 'vitest'
import {
  SIZE_ORDER, getFacetOptions, filterProducts, sortProducts, countActiveFilters,
} from './facets.js'

const sample = [
  { id: 1, category: 'Manteaux', color: 'Noir', size: ['S', 'M'], material: 'Laine', priceRange: '100$-200$', price: 150, rating: 4.5 },
  { id: 2, category: 'Tuques', color: 'Rouge', size: ['M', 'L'], material: 'Polaire', priceRange: '0$-50$', price: 20, rating: 4.9 },
  { id: 3, category: 'Manteaux', color: 'Rouge', size: ['XS', 'S'], material: 'Duvet', priceRange: '200$+', price: 250, rating: 4.1 },
]
const empty = { category: [], color: [], size: [], material: [], priceRange: [] }

describe('facets', () => {
  it('sorts size options by SIZE_ORDER, not alphabetically', () => {
    expect(getFacetOptions(sample).size).toEqual(['XS', 'S', 'M', 'L'])
  })
  it('returns all products when no filter active', () => {
    expect(filterProducts(sample, empty)).toHaveLength(3)
  })
  it('applies AND across facets, OR within a facet, array-aware', () => {
    const f = { ...empty, category: ['Manteaux'], color: ['Rouge'] }
    expect(filterProducts(sample, f).map(p => p.id)).toEqual([3])
  })
  it('matches array size field with includes', () => {
    const f = { ...empty, size: ['L'] }
    expect(filterProducts(sample, f).map(p => p.id)).toEqual([2])
  })
  it('sorts by price ascending', () => {
    expect(sortProducts(sample, 'price-asc').map(p => p.id)).toEqual([2, 1, 3])
  })
  it('counts active filter values', () => {
    expect(countActiveFilters({ ...empty, color: ['Noir', 'Rouge'], size: ['M'] })).toBe(3)
  })
  it('SIZE_ORDER is XS..XL', () => {
    expect(SIZE_ORDER).toEqual(['XS', 'S', 'M', 'L', 'XL'])
  })
})
