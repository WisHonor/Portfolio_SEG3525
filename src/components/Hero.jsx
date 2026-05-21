import profileImg from '../assets/profile.jpg'

const techStack = [
  'Spring Boot', 'Java', 'React', 'Next.js', 'TypeScript',
  'Python', 'Node.js', 'PostgreSQL', 'REST APIs', 'Tailwind CSS',
  'Git', 'Agile/Scrum',
]

function Hero() {
  return (
    <section id="about" className="min-h-screen bg-white pt-24 pb-16 flex items-center font-poppins relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-7/12 text-center lg:text-left">
            <p className="text-orange font-medium text-sm mb-2 tracking-wide uppercase">Bonjour!</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-bg leading-tight mb-6 font-playfair">
              Je suis <span className="text-orange">Wissam Elmasry</span>,<br />
              Ingénieur Full-Stack
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Étudiant en génie logiciel à l'Université d'Ottawa. Je travaille actuellement pour le
              gouvernement du Canada en tant qu'ingénieur full-stack Spring Boot.
              Trilingue — français, anglais et arabe. Passionné par le développement de produits
              SaaS qui résolvent des problèmes concrets.
            </p>

            
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <a
                href="mailto:welma104@uottawa.ca"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-white text-sm font-medium hover:bg-orange/90 transition-colors no-underline shadow-lg shadow-orange/25"
              >
                <i className="bi bi-envelope"></i>
                welma104@uottawa.ca
              </a>
              <a
                href="https://github.com/WisHonor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-dark-bg text-dark-bg text-sm font-medium hover:bg-dark-bg hover:text-white transition-colors no-underline"
              >
                <i className="bi bi-github"></i>
                GitHub
              </a>
            </div>

            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-dark-bg px-3 py-1.5 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          
          <div className="lg:w-5/12 flex justify-center">
            <div className="relative">
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-full bg-orange/90"></div>
              </div>
              
              <div className="relative z-10 max-w-[280px] w-full">
                <img
                  src={profileImg}
                  alt="Wissam Elmasry"
                  className="rounded-2xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
