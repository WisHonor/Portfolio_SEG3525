import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'

function Placeholder({ label }) {
  return <div className="grid min-h-[50vh] place-items-center text-nord-muted">NordStyle — {label}</div>
}

export default function NordStyle() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-nord-bg font-poppins text-nord-ink">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<Placeholder label="Boutique" />} />
          <Route path="product/:id" element={<Placeholder label="Produit" />} />
          <Route path="cart" element={<Placeholder label="Panier" />} />
          <Route path="checkout" element={<Placeholder label="Checkout" />} />
          <Route path="confirmation" element={<Placeholder label="Confirmation" />} />
          <Route path="survey" element={<Placeholder label="Sondage" />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  )
}
