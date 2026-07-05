import { Routes, Route } from 'react-router-dom'

// Pages ajoutées au fur et à mesure des tâches suivantes.
function Placeholder({ label }) {
  return (
    <div className="min-h-screen grid place-items-center bg-nord-bg font-poppins text-nord-ink">
      <p className="text-xl font-semibold">NordStyle — {label}</p>
    </div>
  )
}

export default function NordStyle() {
  return (
    <Routes>
      <Route index element={<Placeholder label="Accueil" />} />
      <Route path="shop" element={<Placeholder label="Boutique" />} />
      <Route path="product/:id" element={<Placeholder label="Produit" />} />
      <Route path="cart" element={<Placeholder label="Panier" />} />
      <Route path="checkout" element={<Placeholder label="Checkout" />} />
      <Route path="confirmation" element={<Placeholder label="Confirmation" />} />
      <Route path="survey" element={<Placeholder label="Sondage" />} />
    </Routes>
  )
}
