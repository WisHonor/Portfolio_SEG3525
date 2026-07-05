export const lineId = (id, size) => `${id}__${size}`

export function addToItems(items, product, size, qty) {
  const key = lineId(product.id, size)
  const existing = items.find(i => lineId(i.id, i.size) === key)
  if (existing) {
    return items.map(i =>
      lineId(i.id, i.size) === key ? { ...i, qty: i.qty + qty } : i
    )
  }
  return [
    ...items,
    { id: product.id, name: product.name, price: product.price, image: product.image, size, qty },
  ]
}

export function updateItemQty(items, id, size, qty) {
  const key = lineId(id, size)
  if (qty <= 0) return removeFromItems(items, id, size)
  return items.map(i => (lineId(i.id, i.size) === key ? { ...i, qty } : i))
}

export function removeFromItems(items, id, size) {
  const key = lineId(id, size)
  return items.filter(i => lineId(i.id, i.size) !== key)
}

export const cartCount = items => items.reduce((n, i) => n + i.qty, 0)
export const cartSubtotal = items => items.reduce((s, i) => s + i.price * i.qty, 0)

export const FREE_SHIPPING_THRESHOLD = 75
export const SHIPPING_FEE = 9.99
export const shippingFor = (subtotal) =>
  subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE
