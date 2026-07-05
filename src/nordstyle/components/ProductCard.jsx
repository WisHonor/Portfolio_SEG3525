import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/nordstyle/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-nord-gray bg-white no-underline shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-nord-gray">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-nord-navy px-2.5 py-1 text-xs font-bold text-white">
            Rupture de stock
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-nord-muted">{product.category}</p>
        <h3 className="mt-1 font-semibold text-nord-ink">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-nord-muted">
          <span className="text-nord-accent">★</span> {product.rating.toFixed(1)}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-extrabold text-nord-ink">{product.price.toFixed(2)} $</span>
          <span className="rounded-lg bg-nord-navy px-3 py-1.5 text-xs font-bold text-white transition group-hover:bg-nord-accent">
            Voir
          </span>
        </div>
      </div>
    </Link>
  )
}
