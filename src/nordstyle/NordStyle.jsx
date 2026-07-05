import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import ConfirmationPage from './pages/ConfirmationPage.jsx'
import SurveyPage from './pages/SurveyPage.jsx'

export default function NordStyle() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-nord-bg font-poppins text-nord-ink">
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="confirmation" element={<ConfirmationPage />} />
          <Route path="survey" element={<SurveyPage />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  )
}
