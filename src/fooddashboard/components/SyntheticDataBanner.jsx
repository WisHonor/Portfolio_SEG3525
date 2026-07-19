// Bandeau d'avertissement : les données sont synthétiques. Signalé par une icône
// ET un mot en gras (« Données synthétiques »), jamais par la couleur seule.
export default function SyntheticDataBanner({ t }) {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-xl border border-fp-warn-border bg-fp-warn-bg px-4 py-3"
    >
      <i className="bi bi-exclamation-triangle-fill mt-0.5 text-fp-warn-ink" aria-hidden="true" />
      <p className="text-sm leading-relaxed text-fp-warn-ink">
        <span className="font-bold">{t.banner.label} — </span>
        {t.banner.text}
      </p>
    </div>
  )
}
