import { Zap, Shield, Smile, MapPin } from 'lucide-react'

const steps = [
  { icon: '📍', step: '01', title: 'Choisissez votre adresse', desc: 'Entrez votre adresse de livraison pour voir les restaurants disponibles près de chez vous.' },
  { icon: '🍽️', step: '02', title: 'Sélectionnez vos plats',  desc: 'Parcourez les menus, ajoutez vos plats préférés au panier en quelques secondes.' },
  { icon: '💳', step: '03', title: 'Payez facilement',         desc: 'Réglez via Mobile Money (MTN, Moov) ou carte bancaire en toute sécurité.' },
  { icon: '🛵', step: '04', title: 'Recevez votre commande',   desc: 'Un livreur AlloFoods récupère et vous livre votre commande en moins de 30 minutes.' },
]

const features = [
  { icon: <Zap size={22} />, color: 'bg-amber-100 text-amber-600',   title: 'Livraison express',    desc: 'Moins de 30 minutes en moyenne pour recevoir votre commande.'     },
  { icon: <Shield size={22} />, color: 'bg-green-100 text-green-600', title: 'Paiement sécurisé',   desc: 'Mobile Money, MTN, Moov et carte bancaire acceptés.'             },
  { icon: <Smile size={22} />, color: 'bg-blue-100 text-blue-600',   title: 'Satisfaction garantie', desc: '98% de nos clients recommandent AlloFoods à leur entourage.'   },
  { icon: <MapPin size={22} />, color: 'bg-rose-100 text-rose-600',  title: 'Suivi en temps réel',  desc: "Suivez votre livreur sur la carte jusqu'à votre porte."         },
]

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Comment ça marche */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">Simple & rapide</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Commander n'a jamais été <span className="text-brand">aussi facile</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-0.5 bg-orange-200 z-0" style={{ width: 'calc(100% - 80px)', left: 'calc(50% + 40px)' }} />
              )}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl mb-4 border border-orange-100">
                {s.icon}
              </div>
              <span className="text-xs font-black text-brand/40 mb-1">{s.step}</span>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
