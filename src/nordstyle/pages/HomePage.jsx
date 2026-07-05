import { Link } from 'react-router-dom'
import PromoBanner from '../components/PromoBanner.jsx'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.json'

export default function HomePage() {
  const featured = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4)
  return (
    <>
      <PromoBanner />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-nord-ice px-3 py-1 text-xs font-bold uppercase tracking-wide text-nord-sky-dark">
            ❄ Collection Hiver 2026
          </span>
          <h1 className="mt-4 font-playfair text-4xl font-extrabold leading-tight text-nord-ink sm:text-5xl">
            Restez au chaud, <span className="text-nord-accent">avec style.</span>
          </h1>
          <p className="mt-4 max-w-md text-lg text-nord-muted">
            Manteaux, doudounes et accessoires pensés pour les hivers nordiques. Qualité durable, coupe moderne.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/nordstyle/shop" className="rounded-xl bg-nord-accent px-6 py-3.5 text-base font-bold text-white no-underline transition hover:bg-nord-accent-dark">
              Magasiner la collection →
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border-4 border-nord-ice shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=800&h=800&fit=crop"
            alt="Collection d'hiver NordStyle"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-nord-ice py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-playfair text-2xl font-extrabold text-nord-ink">Les mieux notés</h2>
          <Link to="/nordstyle/shop" className="text-sm font-bold text-nord-accent no-underline hover:underline">
            Tout voir →
          </Link>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {featured.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
      </section>
    </>
  )
}
