import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg font-poppins">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white no-underline">
          Wissam<span className="text-orange">.</span>
        </Link>

        
        <button
          className="lg:hidden p-2 rounded border border-gray-600 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Basculer la navigation"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-orange transition-colors text-sm">
              À propos
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('how-i-work')} className="text-gray-300 hover:text-orange transition-colors text-sm">
              Ma méthode
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo('case-studies')} className="text-gray-300 hover:text-orange transition-colors text-sm">
              Études de cas
            </button>
          </li>
          <li>
            <a
              href="mailto:welma104@uottawa.ca"
              className="bg-orange text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-orange/90 transition-colors no-underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      
      {isOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-gray-700 px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            <li>
              <button onClick={() => scrollTo('about')} className="text-gray-300 hover:text-orange transition-colors">
                À propos
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('how-i-work')} className="text-gray-300 hover:text-orange transition-colors">
                Ma méthode
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('case-studies')} className="text-gray-300 hover:text-orange transition-colors">
                Études de cas
              </button>
            </li>
            <li>
              <a
                href="mailto:welma104@uottawa.ca"
                className="inline-block bg-orange text-white px-5 py-2 rounded-full text-sm font-medium no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
