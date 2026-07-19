import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { ITEMS, MONTHS_LONG, hexToRgba, cap } from '../data.js'

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Étiquette la valeur au-dessus de chaque barre. Sert de « relief de contraste »
// exigé pour les teintes claires (vert, ambre < 3:1) et de contexte chiffré direct.
function barValueLabels(t) {
  return {
    id: 'barValueLabels',
    afterDatasetsDraw(chart) {
      const { ctx } = chart
      const meta = chart.getDatasetMeta(0)
      ctx.save()
      ctx.font = '600 12px Poppins, system-ui, sans-serif'
      ctx.fillStyle = '#201E1B'
      ctx.textAlign = 'center'
      meta.data.forEach((bar, i) => {
        ctx.fillText(t.price(chart.data.datasets[0].data[i]), bar.x, bar.y - 8)
      })
      ctx.restore()
    },
  }
}

// Bar chart : comparaison des 5 denrées pour UN mois. Les catégories sont sur l'axe
// des X (identité par étiquette, pas par couleur seule) ; la couleur reprend celle
// de chaque aliment (cohérence avec la courbe → similitude de Gestalt).
export default function BarChart({ lang, month, t }) {
  const canvasRef = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy()
    const ctx = canvasRef.current.getContext('2d')

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ITEMS.labels[lang],
        datasets: [
          {
            label: cap(MONTHS_LONG[lang][month]),
            data: ITEMS.keys.map((k) => ITEMS.prices[k][month]),
            backgroundColor: ITEMS.colors.map((c) => hexToRgba(c, 0.9)),
            borderColor: ITEMS.strokes,
            borderWidth: 1.5,
            borderRadius: 6,
            borderSkipped: false,
            maxBarThickness: 66,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: reduceMotion ? false : { duration: 550, easing: 'easeOutQuart' },
        layout: { padding: { top: 22 } },
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
              title: (items) => items[0].label,
              label: (c) => t.bar.tip(cap(MONTHS_LONG[lang][month]), t.price(c.parsed.y)),
            },
          },
        },
        scales: {
          x: {
            title: { display: true, text: t.bar.axisItem, color: '#6C6862', font: { family: 'Poppins, sans-serif', weight: '600' } },
            grid: { display: false },
            border: { color: '#E8E4DD' },
            ticks: { color: '#201E1B', font: { family: 'Poppins, sans-serif', weight: '500' } },
          },
          y: {
            beginAtZero: true,
            title: { display: true, text: t.bar.axisPrice, color: '#6C6862', font: { family: 'Poppins, sans-serif', weight: '600' } },
            grid: { color: 'rgba(32,30,27,0.06)' },
            border: { display: false },
            ticks: { color: '#6C6862', font: { family: 'Poppins, sans-serif' }, maxTicksLimit: 6, callback: (v) => t.price(v) },
          },
        },
      },
      plugins: [barValueLabels(t)],
    })

    return () => { chartRef.current?.destroy() }
  }, [lang, month, t])

  return (
    <div className="fp-canvas">
      <canvas ref={canvasRef} role="img" aria-label={t.bar.title} />
    </div>
  )
}
