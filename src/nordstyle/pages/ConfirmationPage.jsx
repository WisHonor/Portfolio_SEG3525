import { Link, useLocation } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar.jsx'
import { lineId } from '../lib/cart.js'

const STEPS = ['Panier', 'Informations', 'Paiement', 'Confirmation']

export default function ConfirmationPage() {
  const order = useLocation().state?.order

  if (!order) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-lg font-semibold text-nord-ink">Aucune commande à afficher.</p>
        <Link to="/nordstyle/shop" className="mt-4 inline-block font-bold text-nord-accent">← Magasiner</Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-3xl px-5 py-10">
      <ProgressBar steps={STEPS} currentStep={3} />
      <div className="rounded-2xl border border-nord-gray bg-white p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-nord-success text-3xl text-white">✓</div>
        <h1 className="mt-4 font-playfair text-3xl font-extrabold text-nord-ink">Merci pour votre commande&nbsp;!</h1>
        <p className="mt-2 text-nord-muted">
          Vous allez adorer vos nouvelles pièces NordStyle, {order.name.split(' ')[0]}. Un courriel de confirmation a été envoyé à {order.email}.
        </p>
        <p className="mt-4 inline-block rounded-lg bg-nord-bg px-4 py-2 text-sm font-bold text-nord-ink">
          N° de commande&nbsp;: {order.ref}
        </p>

        <div className="mt-6 space-y-2 text-left">
          {order.items.map(i => (
            <div key={lineId(i.id, i.size)} className="flex justify-between border-b border-nord-gray py-2 text-sm">
              <span className="text-nord-ink">{i.name} · {i.size} × {i.qty}</span>
              <span className="font-semibold text-nord-ink">{(i.price * i.qty).toFixed(2)} $</span>
            </div>
          ))}
          <div className="mt-2 flex justify-between text-nord-muted">
            <span>Sous-total</span><span className="font-semibold text-nord-ink">{order.subtotal.toFixed(2)} $</span>
          </div>
          <div className="flex justify-between text-nord-muted">
            <span>Livraison</span><span className="font-semibold text-nord-ink">{order.shipping === 0 ? 'Gratuite' : '9,99 $'}</span>
          </div>
          <div className="flex justify-between border-t border-nord-gray pt-2 font-bold text-nord-ink">
            <span>Total</span><span>{order.total.toFixed(2)} $</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <Link to="/nordstyle/survey" className="rounded-xl bg-nord-accent px-6 py-3 font-bold text-white no-underline hover:bg-nord-accent-dark">
            Donnez-nous votre avis (30 s) →
          </Link>
          <Link to="/nordstyle/shop" className="text-sm font-semibold text-nord-muted no-underline hover:text-nord-ink">
            Continuer mes achats
          </Link>
        </div>
      </div>
    </section>
  )
}
