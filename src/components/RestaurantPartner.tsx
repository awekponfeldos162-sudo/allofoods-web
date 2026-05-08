import { TrendingUp, Users, BarChart2, CheckCircle } from 'lucide-react'

const benefits = [
  { icon: <TrendingUp size={18} />, text: 'Augmentez vos ventes jusqu\'à +40%' },
  { icon: <Users size={18} />,      text: 'Touchez des milliers de clients'    },
  { icon: <BarChart2 size={18} />,  text: 'Dashboard de gestion complet'       },
  { icon: <CheckCircle size={18} />,text: 'Onboarding gratuit et rapide'       },
]

export default function RestaurantPartner() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <span className="text-sm">🏪</span>
              <span className="text-xs font-semibold text-orange-300">Pour les restaurateurs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Développez votre restaurant<br />
              <span className="text-brand">avec AlloFoods</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Rejoignez notre réseau de restaurants partenaires et accédez à
              des milliers de clients à Cotonou, Porto-Novo et Abomey-Calavi.
              Gérez vos commandes depuis l'app dédiée aux restaurants.
            </p>

            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-brand">{b.icon}</span>
                  {b.text}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Devenir partenaire
              </a>
              <a
                href="#"
                className="border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/5 transition-colors"
              >
                En savoir plus
              </a>
            </div>
          </div>

          {/* Right — stats cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '+40%',    label: "de chiffre d'affaires moyen",   color: 'from-orange-500 to-orange-600' },
              { value: '200+',    label: 'restaurants partenaires actifs', color: 'from-blue-500 to-blue-600'    },
              { value: '0 FCFA',  label: "frais d'inscription",           color: 'from-green-500 to-green-600'  },
              { value: '24h',     label: "délai d'activation",            color: 'from-purple-500 to-purple-600' },
            ].map((c, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${c.color} rounded-2xl p-5 flex flex-col justify-between min-h-[120px]`}
              >
                <p className="text-3xl font-black text-white">{c.value}</p>
                <p className="text-xs text-white/70 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
