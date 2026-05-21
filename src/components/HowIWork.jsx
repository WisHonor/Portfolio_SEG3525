function HowIWork() {
  return (
    <section id="how-i-work" className="bg-dark-bg py-28 font-poppins relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <p className="text-orange font-medium text-sm text-center mb-2 tracking-wide uppercase">Ma méthode</p>
        <h2 className="text-3xl font-bold text-white text-center mb-12 font-playfair">Comment je travaille</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/30 transition-colors">
            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
              <i className="bi bi-palette text-2xl text-orange"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Fondation en design UI/UX</h4>
            <p className="text-gray-400 leading-relaxed text-sm mb-3">
              Grâce au cours <strong className="text-gray-200">SEG3525 – Design UI/UX</strong> à
              l'<a href="https://www.uottawa.ca" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline font-medium">Université d'Ottawa</a>,
              j'ai développé une solide base en conception centrée sur l'utilisateur, évaluation heuristique et systèmes de design.
              J'applique les principes du{' '}
              <a href="https://www.nngroup.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline font-medium">Nielsen Norman Group</a>{' '}
              pour assurer l'utilisabilité et l'accessibilité dans chaque projet.
            </p>
            <p className="text-gray-500 italic text-sm">
              D'autres concepts de design — conception centrée utilisateur, évaluation heuristique, systèmes de design — seront ajoutés au cours du semestre.
            </p>
          </div>

          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange/30 transition-colors">
            <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
              <i className="bi bi-kanban text-2xl text-orange"></i>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">Agile et axé sur la qualité</h4>
            <p className="text-gray-400 leading-relaxed text-sm mb-3">
              Je suis la <strong className="text-gray-200">méthodologie Agile/Scrum</strong> avec un accent sur la livraison itérative et la collaboration interfonctionnelle.
              La qualité est essentielle — j'écris des tests unitaires et d'intégration pour maintenir la confiance à chaque livraison.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Lors de mon stage à <strong className="text-gray-200">Services publics et Approvisionnement Canada</strong>, j'ai appliqué ces pratiques
              dans un contexte gouvernemental réel, en collaborant avec plusieurs équipes pour livrer des logiciels fiables.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowIWork
