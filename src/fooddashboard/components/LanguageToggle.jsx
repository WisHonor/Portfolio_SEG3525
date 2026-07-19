// Bascule de langue. Le bouton annonce la langue CIBLE (nom natif + code ISO),
// pas la langue courante — l'usager voit où il va, pas où il est.
export default function LanguageToggle({ t, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={t.toggleAria}
      className="inline-flex items-center gap-2 rounded-full border border-fp-line bg-fp-surface px-4 py-2 text-sm font-semibold text-fp-ink no-underline shadow-sm transition hover:border-fp-accent hover:text-fp-accent"
    >
      <i className="bi bi-translate text-base" aria-hidden="true" />
      <span>{t.toggleName}</span>
      <span className="rounded-md bg-fp-ink/[0.06] px-1.5 py-0.5 text-[0.68rem] font-bold tracking-wide text-fp-muted">
        {t.toggleCode}
      </span>
    </button>
  )
}
