import { describe, it, expect } from 'vitest'
import { addToItems, updateItemQty, removeFromItems, cartCount, cartSubtotal, shippingFor } from './cart.js'

const prod = { id: 1, name: 'Parka', price: 100, image: 'x' }

describe('cart', () => {
  it('adds a new line', () => {
    const items = addToItems([], prod, 'M', 2)
    expect(items).toHaveLength(1)
    expect(items[0]).toMatchObject({ id: 1, size: 'M', qty: 2, price: 100 })
  })
  it('merges quantity for same id+size', () => {
    let items = addToItems([], prod, 'M', 1)
    items = addToItems(items, prod, 'M', 2)
    expect(items).toHaveLength(1)
    expect(items[0].qty).toBe(3)
  })
  it('keeps different sizes as separate lines', () => {
    let items = addToItems([], prod, 'M', 1)
    items = addToItems(items, prod, 'L', 1)
    expect(items).toHaveLength(2)
  })
  it('updates quantity', () => {
    let items = addToItems([], prod, 'M', 1)
    items = updateItemQty(items, 1, 'M', 5)
    expect(items[0].qty).toBe(5)
  })
  it('removes line when qty <= 0', () => {
    let items = addToItems([], prod, 'M', 1)
    items = updateItemQty(items, 1, 'M', 0)
    expect(items).toHaveLength(0)
  })
  it('removes a line explicitly', () => {
    let items = addToItems([], prod, 'M', 1)
    items = removeFromItems(items, 1, 'M')
    expect(items).toHaveLength(0)
  })
  it('computes count and subtotal', () => {
    let items = addToItems([], prod, 'M', 2)
    items = addToItems(items, { id: 2, name: 'Tuque', price: 20, image: 'y' }, 'L', 1)
    expect(cartCount(items)).toBe(3)
    expect(cartSubtotal(items)).toBe(220)
  })
  it('is free shipping at/over the threshold, else a flat fee', () => {
    expect(shippingFor(74.99)).toBe(9.99)
    expect(shippingFor(75)).toBe(0)
    expect(shippingFor(200)).toBe(0)
  })
})
