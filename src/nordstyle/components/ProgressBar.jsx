export default function ProgressBar({ steps, currentStep }) {
  return (
    <ol className="mx-auto mb-10 flex max-w-2xl items-center">
      {steps.map((label, i) => {
        const done = i < currentStep
        const active = i === currentStep
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center">
              <span
                className={
                  'grid h-9 w-9 place-items-center rounded-full text-sm font-bold ' +
                  (done ? 'bg-nord-success text-white'
                    : active ? 'bg-nord-accent text-white'
                    : 'bg-nord-gray text-nord-muted')
                }
              >
                {done ? '✓' : i + 1}
              </span>
              <span className={'mt-1 text-xs font-semibold ' + (active ? 'text-nord-accent' : 'text-nord-muted')}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className={'mx-2 h-0.5 flex-1 ' + (done ? 'bg-nord-success' : 'bg-nord-gray')} />
            )}
          </li>
        )
      })}
    </ol>
  )
}
