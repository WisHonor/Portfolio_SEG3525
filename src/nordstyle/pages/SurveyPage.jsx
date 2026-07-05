import Survey from '../components/Survey.jsx'

export default function SurveyPage() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-12">
      <div className="mb-6 text-center">
        <h1 className="font-playfair text-3xl font-extrabold text-nord-ink">Votre avis compte</h1>
        <p className="mt-2 text-nord-muted">
          Aidez-nous à nous améliorer — quelques secondes suffisent, et ça fait toute la différence pour nous.
        </p>
      </div>
      <Survey />
    </section>
  )
}
