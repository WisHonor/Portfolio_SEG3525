import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <div className="bg-nord-accent text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-5 py-2.5 text-center text-sm font-semibold">
        <span>❄️ Soldes d'hiver — jusqu'à −40 % sur les manteaux ! Profitez-en maintenant</span>
        <Link to="/nordstyle/shop" className="rounded-full bg-white px-3 py-1 text-nord-accent no-underline font-bold hover:bg-nord-gray">
          Magasiner →
        </Link>
      </div>
    </div>
  )
}
