import { createContext, useContext, useEffect, useState } from 'react'
import { addToItems, updateItemQty, removeFromItems, cartCount, cartSubtotal } from './lib/cart.js'

const CartContext = createContext(null)
const STORAGE_KEY = 'nordstyle-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = {
    items,
    addItem: (product, size, qty = 1) => setItems(prev => addToItems(prev, product, size, qty)),
    updateQty: (id, size, qty) => setItems(prev => updateItemQty(prev, id, size, qty)),
    removeItem: (id, size) => setItems(prev => removeFromItems(prev, id, size)),
    clear: () => setItems([]),
    count: cartCount(items),
    subtotal: cartSubtotal(items),
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit être utilisé dans un CartProvider')
  return ctx
}
