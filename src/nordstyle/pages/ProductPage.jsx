import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.json'
import { SIZE_ORDER } from '../lib/facets.js'
import { useCart } from '../CartContext.jsx'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = products.find(p => String(p.id) === String(id))
  const [size, setSize] = useState('')
  const [error, setError] = useState('')

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-lg font-semibold text-nord-ink">Produit introuvable.</p>
        <Link to="/nordstyle/shop" className="mt-4 inline-block font-bold text-nord-accent">← Retour à la boutique</Link>
      </div>
    )
  }

  const availableSizes = product.size
  const handleAdd = () => {
    if (!size) { setError('Veuillez choisir une taille.'); return }
    addItem(product, size, 1)
    navigate('/nordstyle/cart')
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-8">
      <nav className="mb-6 text-sm text-nord-muted">
        <Link to="/nordstyle" className="hover:text-nord-ink">Accueil</Link> ·{' '}
        <Link to="/nordstyle/shop" className="hover:text-nord-ink">Boutique</Link> ·{' '}
        <span className="text-nord-ink">{product.name}</span>
      </nav>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-nord-gray bg-white">
          <img src={product.image} alt={product.name} className="aspect-[3/4] w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-nord-muted">{product.category} · {product.brand}</p>
          <h1 className="mt-1 font-playfair text-3xl font-extrabold text-nord-ink">{product.name}</h1>
          <div className="mt-2 flex items-center gap-2 text-nord-muted">
            <span className="text-nord-accent">★</span> {product.rating.toFixed(1)}
            <span className={product.inStock ? 'ml-3 font-semibold text-nord-success' : 'ml-3 font-semibold text-nord-muted'}>
              {product.inStock ? 'En stock' : 'Rupture de stock'}
            </span>
          </div>
          <p className="mt-4 text-3xl font-extrabold text-nord-ink">{product.price.toFixed(2)} $</p>
          <p className="mt-4 text-nord-muted">{product.description}</p>

          {/* Informer : composition + guide des tailles */}
          <dl className="mt-5 grid grid-cols-2 gap-2 rounded-xl border border-nord-gray bg-white p-4 text-sm">
            <dt className="font-semibold text-nord-ink">Matière</dt><dd className="text-nord-muted">{product.material}</dd>
            <dt className="font-semibold text-nord-ink">Couleur</dt><dd className="text-nord-muted">{product.color}</dd>
          </dl>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-bold text-nord-ink">Taille</span>
              <a href="#guide-tailles" className="text-xs font-semibold text-nord-accent hover:underline">Guide des tailles</a>
            </div>
            <div className="flex flex-wrap gap-2">
              {SIZE_ORDER.map(s => {
                const available = availableSizes.includes(s) && product.inStock
                return (
                  <button
                    key={s}
                    disabled={!available}
                    onClick={() => { setSize(s); setError('') }}
                    className={
                      'h-10 w-12 rounded-lg border text-sm font-bold transition ' +
                      (!available
                        ? 'cursor-not-allowed border-nord-gray bg-nord-gray/50 text-nord-muted line-through'
                        : size === s
                        ? 'border-nord-accent bg-nord-accent text-white'
                        : 'border-nord-gray bg-white text-nord-ink hover:border-nord-accent')
                    }
                  >
                    {s}
                  </button>
                )
              })}
            </div>
            {error && <p className="mt-2 text-sm font-semibold text-red-600">{error}</p>}
          </div>

          <button
            onClick={handleAdd}
            disabled={!product.inStock}
            className="mt-6 w-full rounded-xl bg-nord-navy px-6 py-3.5 font-bold text-white transition hover:bg-nord-navy-soft disabled:cursor-not-allowed disabled:opacity-50"
          >
            {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
          </button>

          <div id="guide-tailles" className="mt-8 rounded-xl border border-nord-gray bg-white p-4 text-sm text-nord-muted">
            <p className="font-bold text-nord-ink">Guide des tailles</p>
            <p className="mt-1">XS (34) · S (36–38) · M (40–42) · L (44–46) · XL (48–50). En cas de doute, prenez la taille supérieure pour superposer une couche.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
