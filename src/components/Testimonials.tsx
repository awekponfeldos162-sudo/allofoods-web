import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Judith A.',
    role: 'Cliente depuis 2024',
    avatar: 'J',
    rating: 5,
    text: "AlloFoods a complètement changé mes habitudes. Je commande presque tous les soirs et la livraison est toujours rapide. Jamais déçue !",
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: 'Frédéric D.',
    role: 'Client depuis 2024',
    avatar: 'F',
    rating: 5,
    text: "Pratique, rapide et les prix sont corrects. Le paiement Mobile Money est un vrai plus. Je recommande à tous mes collègues.",
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Marlène K.',
    role: 'Cliente depuis 2024',
    avatar: 'M',
    rating: 5,
    text: "Le suivi en temps réel du livreur est top ! On sait exactement quand notre commande va arriver. Super application.",
    color: 'bg-green-100 text-green-600',
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">Témoignages</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Ce que disent <span className="text-brand">nos clients</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote mark */}
              <span className="text-4xl text-brand/20 font-black leading-none">"</span>

              <p className="text-gray-700 text-sm leading-relaxed mt-1 mb-6">{r.text}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} font-black flex items-center justify-center text-sm`}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.role}</p>
                  </div>
                </div>
                <Stars n={r.rating} />
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-orange-50 rounded-2xl p-6 border border-orange-100">
          <div className="text-center">
            <p className="text-5xl font-black text-brand">4.9</p>
            <Stars n={5} />
            <p className="text-xs text-gray-400 mt-1">Note moyenne</p>
          </div>
          <div className="h-12 w-px bg-orange-200 hidden sm:block" />
          <div className="text-center sm:text-left">
            <p className="text-lg font-black text-gray-900">+500 avis vérifiés</p>
            <p className="text-sm text-gray-500 mt-1">
              98% de nos clients recommandent AlloFoods
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
