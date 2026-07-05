import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <div className="bg-gradient-to-r from-nord-navy via-nord-sky-dark to-nord-sky text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 py-2.5 text-center text-sm font-semibold">
        <span>❄️ Soldes d'hiver — jusqu'à −40 % sur les manteaux ! Profitez-en maintenant</span>
        <Link to="/nordstyle/shop" className="rounded-full bg-white px-3 py-1 text-nord-sky-dark no-underline font-bold transition hover:bg-nord-ice">
          Magasiner →
        </Link>
      </div>
    </div>
  )
}
