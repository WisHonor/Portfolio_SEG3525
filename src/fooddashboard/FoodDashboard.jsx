import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ITEMS, MONTHS_LONG, itemStats, monthExtremes, cap } from './data.js'
import { T, STATCAN_URL } from './translations.js'
import LanguageToggle from './components/LanguageToggle.jsx'
import SyntheticDataBanner from './components/SyntheticDataBanner.jsx'
import KpiSummary from './components/KpiSummary.jsx'
import LineChart from './components/LineChart.jsx'
import BarChart from './components/BarChart.jsx'
import './FoodDashboard.css'

// Tableau de bord bilingue des prix des denrées alimentaires (SEG3525 — Devoir 5).
export default function FoodDashboard() {
  const [lang, setLang] = useState('fr') // français par défaut
  const [item, setItem] = useState('tomatoes') // aliment de la courbe + des KPI
  const [month, setMonth] = useState(0) // mois du bar chart (0 = janvier)
  const t = T[lang]

  // Reflète la langue sur <html lang> et la restaure en quittant la page.
  useEffect(() => {
    const previous = document.documentElement.lang
    document.documentElement.lang = lang
    return () => { document.documentElement.lang = previous }
  }, [lang])

  const idx = ITEMS.keys.indexOf(item)
  const s = itemStats(item)
  const lineInsight = t.line.insight({
    label: ITEMS.labels[lang][idx],
    maxMonth: MONTHS_LONG[lang][s.maxMonth], // minuscule en FR — dans une phrase
    maxVal: t.price(s.max),
    minMonth: MONTHS_LONG[lang][s.minMonth],
    minVal: t.price(s.min),
    pct: Math.round((s.amplitude / s.min) * 100),
  })

  const ext = monthExtremes(month)
  const barInsight = t.bar.insight({
    month: MONTHS_LONG[lang][month],
    hiLabel: ITEMS.labels[lang][ext.hiIndex],
    hiVal: t.price(ext.hiVal),
    loLabel: ITEMS.labels[lang][ext.loIndex],
    loVal: t.price(ext.loVal),
  })

  return (
    <div className="fp-scope min-h-screen bg-fp-bg font-poppins text-fp-ink" dir={t.dir}>
      {/* ── En-tête ── */}
      <header className="sticky top-0 z-30 border-b border-fp-line bg-fp-surface/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">

          <LanguageToggle t={t} onToggle={() => setLang(lang === 'fr' ? 'en' : 'fr')} />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 pt-10">
        {/* ── Titre + texte explicatif ── */}
        <p className="mb-2 flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-fp-accent">
          <span aria-hidden="true" className="h-px w-7 bg-fp-accent" />
          {t.eyebrow}
        </p>
        <h1 className="max-w-3xl font-playfair text-3xl font-bold leading-tight text-fp-ink sm:text-[2.6rem]">
          {t.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-fp-muted">{t.intro}</p>

        <div className="mt-6">
          <SyntheticDataBanner t={t} />
        </div>

        {/* ── Cartes KPI ── */}
        <div className="mt-9">
          <KpiSummary t={t} lang={lang} item={item} />
        </div>

        {/* ── Grille des graphiques (2 colonnes ≥ 860px, 1 colonne en dessous) ── */}
        <div className="mt-6 grid gap-6 min-[860px]:grid-cols-2">
          {/* Courbe */}
          <section className="rounded-2xl border border-fp-line bg-fp-surface p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-playfair text-lg font-bold text-fp-ink">{t.line.title}</h2>
                <p className="mt-1 text-sm text-fp-muted">{t.line.hint}</p>
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold text-fp-ink">
                <span className="whitespace-nowrap">{t.line.selectLabel}</span>
                <select value={item} onChange={(e) => setItem(e.target.value)} className="fp-select">
                  {ITEMS.keys.map((k, i) => (
                    <option key={k} value={k}>{ITEMS.labels[lang][i]}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-4">
              <LineChart lang={lang} item={item} t={t} />
            </div>
            <p className="mt-3 flex gap-2 text-sm leading-relaxed text-fp-muted">
              <i className="bi bi-lightbulb-fill mt-0.5 shrink-0 text-fp-accent" aria-hidden="true" />
              <span>{lineInsight}</span>
            </p>
          </section>

          {/* Barres */}
          <section className="rounded-2xl border border-fp-line bg-fp-surface p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-playfair text-lg font-bold text-fp-ink">{t.bar.title}</h2>
                <p className="mt-1 text-sm text-fp-muted">{t.bar.hint}</p>
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold text-fp-ink">
                <span className="whitespace-nowrap">{t.bar.selectLabel}</span>
                <select value={month} onChange={(e) => setMonth(Number(e.target.value))} className="fp-select">
                  {MONTHS_LONG[lang].map((m, i) => (
                    <option key={i} value={i}>{cap(m)}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mt-4">
              <BarChart lang={lang} month={month} t={t} />
            </div>
            <p className="mt-3 flex gap-2 text-sm leading-relaxed text-fp-muted">
              <i className="bi bi-lightbulb-fill mt-0.5 shrink-0 text-fp-accent" aria-hidden="true" />
              <span>{barInsight}</span>
            </p>
          </section>
        </div>

        {/* ── Pied de page : source d'inspiration + rappel synthétique ── */}
        <footer className="mt-12 border-t border-fp-line pt-6 text-sm text-fp-muted">
          <p>
            {t.footer.source} —{' '}
            <a
              href={STATCAN_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-fp-accent underline decoration-fp-accent/40 underline-offset-2 transition hover:decoration-fp-accent"
            >
              {t.footer.sourceLabel}
            </a>
          </p>
          <p className="mt-1">{t.footer.note}</p>
        </footer>
      </main>
    </div>
  )
}
