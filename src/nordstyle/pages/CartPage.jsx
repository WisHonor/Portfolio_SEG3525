import { Link } from 'react-router-dom'
import { useCart } from '../CartContext.jsx'
import { lineId, shippingFor } from '../lib/cart.js'

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="font-playfair text-3xl font-extrabold text-nord-ink">Votre panier est vide</h1>
        <p className="mt-3 text-nord-muted">Parcourez la collection et trouvez votre prochaine pièce préférée.</p>
        <Link to="/nordstyle/shop" className="mt-6 inline-block rounded-xl bg-nord-accent px-6 py-3 font-bold text-white no-underline">
          Magasiner →
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="mb-6 font-playfair text-3xl font-extrabold text-nord-ink">Votre panier</h1>
        <div className="space-y-4">
          {items.map(item => (
            <div key={lineId(item.id, item.size)} className="flex gap-4 rounded-2xl border border-nord-gray bg-white p-4">
              <img src={item.image} alt={item.name} className="h-24 w-20 rounded-lg object-cover" />
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-nord-ink">{item.name}</p>
                    <p className="text-sm text-nord-muted">Taille&nbsp;: {item.size}</p>
                  </div>
                  <p className="font-bold text-nord-ink">{(item.price * item.qty).toFixed(2)} $</p>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div className="inline-flex items-center rounded-lg border border-nord-gray">
                    <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="px-3 py-1 text-lg font-bold text-nord-muted">−</button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="px-3 py-1 text-lg font-bold text-nord-muted">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id, item.size)} className="text-sm font-semibold text-red-600 hover:underline">
                    Retirer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <aside className="h-fit rounded-2xl border border-nord-gray bg-white p-6">
        <h2 className="font-playfair text-xl font-extrabold text-nord-ink">Résumé</h2>
        <div className="mt-4 flex justify-between text-nord-muted">
          <span>Sous-total</span><span className="font-semibold text-nord-ink">{subtotal.toFixed(2)} $</span>
        </div>
        <div className="mt-1 flex justify-between text-nord-muted">
          <span>Livraison</span><span className="font-semibold text-nord-success">{shippingFor(subtotal) === 0 ? 'Gratuite' : '9,99 $'}</span>
        </div>
        <Link to="/nordstyle/checkout" className="mt-6 block rounded-xl bg-nord-navy px-6 py-3.5 text-center font-bold text-white no-underline hover:bg-nord-navy-soft">
          Passer à la caisse →
        </Link>
        <Link to="/nordstyle/shop" className="mt-3 block text-center text-sm font-semibold text-nord-muted no-underline hover:text-nord-ink">
          Continuer mes achats
        </Link>
      </aside>
    </section>
  )
}
