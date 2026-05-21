import { Link } from 'react-router-dom'

const studies = [
  {
    id: 1,
    badge: 'Design 1',
    title: 'Site de Services',
    description: 'Bientôt disponible',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    badge: 'Design 2',
    title: 'Jeu de Mémoire',
    description: 'Bientôt disponible',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    badge: 'Design 3',
    title: 'Site E-Commerce',
    description: 'Bientôt disponible',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    badge: 'Design 4',
    title: 'Analyse & Visualisation',
    description: 'Bientôt disponible',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
]

function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-28 font-poppins">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-orange font-medium text-sm text-center mb-2 tracking-wide uppercase">Portfolio</p>
        <h2 className="text-3xl font-bold text-dark-bg text-center mb-3 font-playfair">Études de cas</h2>
        <p className="text-gray-500 text-center text-base max-w-xl mx-auto mb-12">
          4 études de cas à réaliser au cours du semestre — chaque devoir mène à un design/prototype.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="block no-underline group"
            >
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 h-full transition-all group-hover:scale-[1.02] group-hover:shadow-xl shadow-sm">
                <div className="h-40 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-orange text-white text-[0.7rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full mb-2">
                    {study.badge}
                  </span>
                  <h5 className="text-dark-bg font-semibold text-base mb-1">{study.title}</h5>
                  <p className="text-gray-500 text-sm">{study.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
