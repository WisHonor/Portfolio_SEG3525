import { useParams, Link } from 'react-router-dom'

const caseStudies = {
  1: {
    title: 'Design 1 — Site de Services',
    description: 'Un site web pour un service local (ex. : dentiste, réparateur de vélos, coiffeur).',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5z" />
      </svg>
    ),
  },
  2: {
    title: 'Design 2 — Jeu de Mémoire',
    description: 'Un jeu de mémoire interactif avec une interface engageante.',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 2-2V5.116zm4.561 2.884A2 2 0 0 0 13.68 6.243l.311-1.242A1 1 0 0 0 13.02 4H10.72a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h.84z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
      </svg>
    ),
  },
  3: {
    title: 'Design 3 — Site E-Commerce',
    description: 'Une plateforme e-commerce avec un parcours utilisateur optimisé.',
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    ),
  },
  4: {
    title: 'Design 4 — Analyse et Visualisation',
    description: "Un site d'analyse et de visualisation de données (BI/sport/finances).",
    icon: (
      <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
      </svg>
    ),
  },
}

function CaseStudy() {
  const { id } = useParams()
  const study = caseStudies[id]


  return (
    <div className="font-poppins">
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-dark-bg no-underline">
            Wissam Elmasry
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded border border-dark-bg text-dark-bg text-sm hover:bg-orange hover:border-orange hover:text-white transition-colors no-underline"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </Link>
        </div>
      </nav>

      
      <section className="min-h-screen bg-light-bg pt-28 pb-20 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="text-orange mb-6">{study.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-bg mb-4 font-playfair">{study.title}</h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8">{study.description}</p>
          <span className="inline-flex items-center gap-2 bg-orange text-white px-6 py-2.5 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Bientôt disponible
          </span>
        </div>
      </section>
    </div>
  )
}

export default CaseStudy
