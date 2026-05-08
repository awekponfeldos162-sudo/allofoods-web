import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 200,   suffix: '+',  label: 'Restaurants partenaires' },
  { value: 50000, suffix: '+',  label: 'Livraisons effectuées'   },
  { value: 3,     suffix: '',   label: 'Villes couvertes'        },
  { value: 98,    suffix: '%',  label: 'Clients satisfaits'      },
]

function useCountUp(target: number, started: boolean, duration = 1400) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, started, duration])
  return count
}

function StatItem({ value, suffix, label }: typeof stats[0]) {
  const ref  = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  const count = useCountUp(value, on)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } },
      { threshold: 0.5 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4">
      <span className="text-3xl sm:text-4xl font-black text-white">
        {count.toLocaleString('fr-FR')}{suffix}
      </span>
      <span className="text-sm text-orange-200 mt-1 font-medium">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-brand py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-orange-400/30">
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
