import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar.jsx'
import { useCart } from '../CartContext.jsx'
import { validateInfo, validatePayment } from '../lib/validation.js'

const STEPS = ['Panier', 'Informations', 'Paiement', 'Confirmation']

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [info, setInfo] = useState({ name: '', email: '', address: '' })
  const [pay, setPay] = useState({ card: '', expiry: '', cvv: '' })
  const [errors, setErrors] = useState({})

  const shipping = subtotal >= 75 ? 0 : 9.99
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-lg font-semibold text-nord-ink">Votre panier est vide.</p>
        <Link to="/nordstyle/shop" className="mt-4 inline-block font-bold text-nord-accent">← Magasiner</Link>
      </section>
    )
  }

  const next = () => {
    if (step === 1) {
      const e = validateInfo(info)
      setErrors(e)
      if (Object.keys(e).length) return
    }
    if (step === 2) {
      const e = validatePayment(pay)
      setErrors(e)
      if (Object.keys(e).length) return
      const ref = 'NS-' + Math.random().toString(36).slice(2, 6).toUpperCase() + new Date().getFullYear()
      const order = { ref, items, subtotal, shipping, total, name: info.name, email: info.email }
      clear()
      navigate('/nordstyle/confirmation', { state: { order } })
      return
    }
    setErrors({})
    setStep(s => s + 1)
  }
  const back = () => { setErrors({}); setStep(s => Math.max(0, s - 1)) }

  const field = (label, value, onChange, err, placeholder) => (
    <label className="block">
      <span className="text-sm font-semibold text-nord-ink">{label}</span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={'mt-1 w-full rounded-lg border px-3 py-2.5 ' + (err ? 'border-red-500' : 'border-nord-gray')}
      />
      {err && <span className="mt-1 block text-sm font-semibold text-red-600">{err}</span>}
    </label>
  )

  return (
    <section className="mx-auto max-w-3xl px-5 py-10">
      <ProgressBar steps={STEPS} currentStep={step} />

      {step === 0 && (
        <div>
          <h1 className="font-playfair text-2xl font-extrabold text-nord-ink">Voici votre commande</h1>
          <p className="mt-1 text-nord-muted">Vérifiez vos articles avant de continuer.</p>
          <div className="mt-5 space-y-3">
            {items.map(i => (
              <div key={i.id + i.size} className="flex justify-between rounded-xl border border-nord-gray bg-white p-3 text-sm">
                <span className="text-nord-ink">{i.name} · {i.size} × {i.qty}</span>
                <span className="font-bold text-nord-ink">{(i.price * i.qty).toFixed(2)} $</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-nord-gray pt-3 font-bold text-nord-ink">
            <span>Total ({shipping === 0 ? 'livraison gratuite' : 'livraison 9,99 $'})</span>
            <span>{total.toFixed(2)} $</span>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <h1 className="font-playfair text-2xl font-extrabold text-nord-ink">Vos informations</h1>
          {field('Nom complet', info.name, e => setInfo({ ...info, name: e.target.value }), errors.name, 'Jean Tremblay')}
          {field('Courriel', info.email, e => setInfo({ ...info, email: e.target.value }), errors.email, 'jean@exemple.ca')}
          {field('Adresse de livraison', info.address, e => setInfo({ ...info, address: e.target.value }), errors.address, '123 rue Principale, Ottawa')}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h1 className="font-playfair text-2xl font-extrabold text-nord-ink">Paiement</h1>
          <p className="inline-flex items-center gap-2 rounded-lg bg-nord-success/10 px-3 py-2 text-sm font-semibold text-nord-success">
            🔒 Paiement 100 % sécurisé
          </p>
          {field('Numéro de carte', pay.card, e => setPay({ ...pay, card: e.target.value }), errors.card, '4111 1111 1111 1111')}
          <div className="grid grid-cols-2 gap-4">
            {field('Expiration (MM/AA)', pay.expiry, e => setPay({ ...pay, expiry: e.target.value }), errors.expiry, '12/28')}
            {field('CVV', pay.cvv, e => setPay({ ...pay, cvv: e.target.value }), errors.cvv, '123')}
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <button
          onClick={back}
          disabled={step === 0}
          className="rounded-xl border border-nord-gray px-5 py-2.5 font-bold text-nord-ink disabled:opacity-40"
        >
          ← Retour
        </button>
        <button onClick={next} className="rounded-xl bg-nord-navy px-6 py-2.5 font-bold text-white hover:bg-nord-navy-soft">
          {step === 2 ? 'Payer maintenant' : 'Suivant →'}
        </button>
      </div>
    </section>
  )
}
