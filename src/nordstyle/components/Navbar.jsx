import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../CartContext.jsx'

const links = [
  ['Accueil', '/nordstyle'],
  ['Boutique', '/nordstyle/shop'],
]

export default function Navbar() {
  const { count } = useCart()
  return (
    <header className="sticky top-0 z-40 border-b border-nord-gray bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/nordstyle" className="flex items-center gap-2 no-underline">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-nord-navy text-white font-playfair font-bold">N</span>
          <span className="text-lg font-extrabold tracking-tight text-nord-ink font-playfair">
            Nord<span className="text-nord-accent">Style</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/nordstyle'}
              className={({ isActive }) =>
                'text-sm font-semibold no-underline transition ' +
                (isActive ? 'text-nord-accent' : 'text-nord-muted hover:text-nord-ink')
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/" className="hidden text-sm font-semibold text-nord-muted no-underline hover:text-nord-ink sm:block">
            ← Portfolio
          </Link>
          <Link to="/nordstyle/cart" className="relative rounded-xl bg-nord-navy px-4 py-2 text-sm font-bold text-white no-underline transition hover:bg-nord-navy-soft">
            Panier
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-nord-accent px-1 text-xs font-bold text-white">
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  )
}
