import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { ITEMS, MONTHS, MONTHS_LONG, itemStats, hexToRgba, cap } from '../data.js'

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Étiquette directement le creux et le sommet de la courbe : étiquetage SÉLECTIF
// (les 2 extrêmes seulement), pas un nombre sur chaque point. Révèle l'insight
// saisonnier et sert de relief de contraste pour les teintes claires.
function extremaLabels(minIdx, maxIdx, t, color) {
  return {
    id: 'extremaLabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart
      const meta = chart.getDatasetMeta(0)
      const draw = (i, place) => {
        const pt = meta.data[i]
        if (!pt) return
        ctx.save()
        ctx.font = '600 11px Poppins, system-ui, sans-serif'
        ctx.fillStyle = color
        ctx.textAlign = 'center'
        ctx.fillText(t.price(chart.data.datasets[0].data[i]), pt.x, place === 'top' ? pt.y - 12 : pt.y + 20)
        ctx.restore()
      }
      draw(maxIdx, 'top')
      draw(minIdx, 'bottom')
    },
  }
}

// Line chart : évolution du prix d'UN aliment sur 12 mois. Une seule série → pas de
// légende (le titre nomme l'aliment). Trait assombri pour le contraste, points dans
// la couleur d'identité vive.
export default function LineChart({ lang, item, t }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    const idx = ITEMS.keys.indexOf(item)
    const color = ITEMS.colors[idx]
    const stroke = ITEMS.strokes[idx]
    const s = itemStats(item)

    if (chartRef.current) chartRef.current.destroy() // toujours détruire avant de recréer
    const ctx = canvasRef.current.getContext('2d')

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: MONTHS[lang],
        datasets: [
          {
            label: ITEMS.labels[lang][idx],
            data: ITEMS.prices[item],
            borderColor: stroke,
            backgroundColor: hexToRgba(color, 0.12),
            pointBackgroundColor: color,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1.5,
            pointRadius: 4,
            pointHoverRadius: 7,
            borderWidth: 2,
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: reduceMotion ? false : { duration: 550, easing: 'easeOutQuart' },
        layout: { padding: { top: 22, right: 10, bottom: 2, left: 2 } },
        interaction: { mode: 'index', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#201E1B',
            padding: 10,
            cornerRadius: 8,
            displayColors: false,
            titleFont: { family: 'Poppins, sans-serif', weight: '600' },
            bodyFont: { family: 'Poppins, sans-serif' },
            callbacks: {
              title: (items) => cap(MONTHS_LONG[lang][items[0].dataIndex]),
              label: (c) => t.line.tip(ITEMS.labels[lang][idx], t.price(c.parsed.y)),
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: t.line.axisMonth, color: '#6C6862', font: { family: 'Poppins, sans-serif', weight: '600' } },
            grid: { display: false },
            border: { color: '#E8E4DD' },
            ticks: { color: '#6C6862', font: { family: 'Poppins, sans-serif' } },
          },
          y: {
            title: { display: true, text: t.line.axisPrice, color: '#6C6862', font: { family: 'Poppins, sans-serif', weight: '600' } },
            grid: { color: 'rgba(32,30,27,0.06)' },
            border: { display: false },
            ticks: { color: '#6C6862', font: { family: 'Poppins, sans-serif' }, maxTicksLimit: 6, callback: (v) => t.price(v) },
          },
        },
      },
      plugins: [extremaLabels(s.minMonth, s.maxMonth, t, stroke)],
    })

    return () => { chartRef.current?.destroy() } // nettoyage
  }, [lang, item, t]) // re-render si la langue OU l'aliment change

  return (
    <div className="fp-canvas">
      <canvas ref={canvasRef} role="img" aria-label={t.line.title} />
    </div>
  )
}
