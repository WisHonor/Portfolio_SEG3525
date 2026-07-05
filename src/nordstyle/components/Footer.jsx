import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-nord-navy py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:grid-cols-3">
        <div>
          <p className="font-playfair text-xl font-extrabold">Nord<span className="text-nord-accent">Style</span></p>
          <p className="mt-2 max-w-xs text-sm text-white/70">Vêtements d'hiver conçus pour affronter le froid avec style.</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-nord-accent">Aide</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/nordstyle/shop" className="no-underline text-white/80 hover:text-white">Boutique</Link></li>
            <li><a href="#guide-tailles" className="no-underline text-white/80 hover:text-white">Guide des tailles</a></li>
            <li><a href="#faq" className="no-underline text-white/80 hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div id="faq">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-nord-accent">FAQ</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><strong className="text-white/90">Livraison ?</strong> Gratuite dès 75 $, 2–5 jours ouvrables.</li>
            <li><strong className="text-white/90">Retours ?</strong> 30 jours, sans frais.</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} NordStyle · Prototype SEG3525 · Wissam Elmasry</p>
    </footer>
  )
}
