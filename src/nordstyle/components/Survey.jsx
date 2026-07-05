import { useState } from 'react'
import { Link } from 'react-router-dom'

const SOURCES = ['Moteur de recherche', 'Réseaux sociaux', 'Un ami', 'Publicité', 'Autre']

export default function Survey() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [source, setSource] = useState('')
  const [comment, setComment] = useState('')
  const [recommend, setRecommend] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-2xl border border-nord-gray bg-white p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-nord-accent text-2xl text-white">♥</div>
        <h2 className="mt-4 font-playfair text-2xl font-extrabold text-nord-ink">Merci pour votre retour&nbsp;!</h2>
        <p className="mt-2 text-nord-muted">Votre avis nous aide à vous offrir une meilleure expérience. À très bientôt&nbsp;!</p>
        <Link to="/nordstyle" className="mt-6 inline-block rounded-xl bg-nord-navy px-6 py-3 font-bold text-white no-underline">
          Retour à l'accueil
        </Link>
      </div>
    )
  }

  return (
    <form
      onSubmit={e => { e.preventDefault(); setSubmitted(true) }}
      className="space-y-7 rounded-2xl border border-nord-gray bg-white p-8"
    >
      <div>
        <p className="font-semibold text-nord-ink">1. Comment évaluez-vous votre expérience d'achat&nbsp;?</p>
        <div className="mt-2 flex gap-1 text-3xl">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              className={(hover || rating) >= n ? 'text-nord-accent' : 'text-nord-gray'}
              aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-nord-ink">2. Comment nous avez-vous trouvés&nbsp;?</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {SOURCES.map(s => (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-sm text-nord-muted">
              <input type="radio" name="source" checked={source === s} onChange={() => setSource(s)} className="accent-nord-accent" />
              {s}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-semibold text-nord-ink">3. Des suggestions pour améliorer NordStyle&nbsp;?</p>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          rows={3}
          className="mt-2 w-full rounded-lg border border-nord-gray px-3 py-2"
          placeholder="Vos idées comptent pour nous…"
        />
      </div>

      <div>
        <p className="font-semibold text-nord-ink">4. Nous recommanderiez-vous&nbsp;?</p>
        <div className="mt-2 flex gap-4 text-sm text-nord-muted">
          {['Oui', 'Peut-être', 'Non'].map(r => (
            <label key={r} className="flex cursor-pointer items-center gap-2">
              <input type="radio" name="recommend" checked={recommend === r} onChange={() => setRecommend(r)} className="accent-nord-accent" />
              {r}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={rating === 0}
        className="w-full rounded-xl bg-nord-accent px-6 py-3.5 font-bold text-white transition hover:bg-nord-accent-dark disabled:opacity-50"
      >
        Envoyer mon avis
      </button>
    </form>
  )
}
