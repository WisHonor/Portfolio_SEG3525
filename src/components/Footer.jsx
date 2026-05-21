function Footer() {
  return (
    <footer className="bg-dark-bg py-10 font-poppins border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; 2026 Wissam Elmasry. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:welma104@uottawa.ca"
            className="text-gray-400 text-sm hover:text-orange transition-colors no-underline"
          >
            <i className="bi bi-envelope me-1"></i>
            Courriel
          </a>
          <a
            href="https://github.com/WisHonor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-orange transition-colors no-underline"
          >
            <i className="bi bi-github me-1"></i>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
