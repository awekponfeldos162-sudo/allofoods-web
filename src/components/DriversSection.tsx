import { Banknote, Clock, Smartphone, TrendingUp } from 'lucide-react'
import { Apple, Play } from 'lucide-react'

const perks = [
  { icon: <Banknote size={20} />, color: 'bg-green-100 text-green-600', title: 'Jusqu\'à 25 000 FCFA/jour', desc: 'Gagnez plus selon votre activité. Plus vous livrez, plus vous gagnez.' },
  { icon: <Clock size={20} />, color: 'bg-blue-100 text-blue-600',      title: 'Horaires 100% flexibles',  desc: 'Choisissez vos heures. Travaillez le matin, le soir ou le week-end.' },
  { icon: <Smartphone size={20} />, color: 'bg-brand/10 text-brand',    title: 'App dédiée iOS & Android', desc: 'Interface simple et intuitive pour gérer vos courses en temps réel.' },
  { icon: <TrendingUp size={20} />, color: 'bg-purple-100 text-purple-600', title: 'Suivi de vos gains',  desc: 'Tableau de bord clair : gains, livraisons, évaluations clients.' },
]

const steps = [
  { n: '1', txt: "Téléchargez l'app Livreur" },
  { n: '2', txt: 'Créez votre profil en 5 min' },
  { n: '3', txt: 'Validez votre moto & CNI' },
  { n: '4', txt: 'Commencez à livrer dès demain !' },
]

export default function DriversSection() {
  return (
    <section id="drivers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 px-3 py-1.5 rounded-full mb-4">
                <span className="text-sm">🛵</span>
                <span className="text-xs font-semibold text-brand">Devenez Livreur AlloFoods</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                Gagnez de l'argent à{' '}
                <span className="text-brand">votre rythme</span>
              </h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Rejoignez notre réseau de livreurs à Cotonou, Porto-Novo et
                Abomey-Calavi. Pas de patron, pas de contrainte — vous êtes libre.
              </p>
            </div>

            {/* Perks */}
            <div className="grid sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center mb-3`}>
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#" className="flex items-center gap-2.5 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                <Apple size={20} />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">App Livreur sur</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-2.5 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                <Play size={18} className="fill-green-400 text-green-400" />
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 leading-none">App Livreur sur</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — inscription steps */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-xl font-black text-gray-900">Comment démarrer ?</h3>

            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand text-white font-black flex items-center justify-center text-sm shrink-0 shadow-md shadow-orange-200">
                    {s.n}
                  </div>
                  <div className="flex-1 h-px bg-gray-100 hidden sm:block" style={{ display: 'none' }} />
                  <p className="font-medium text-gray-700 text-sm">{s.txt}</p>
                </div>
              ))}
            </div>

            {/* Earnings preview */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 mt-2">
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Exemple de gains</p>
              <div className="space-y-2.5">
                {[
                  { period: 'Par livraison',    amount: '500 – 1 500 FCFA' },
                  { period: 'En une journée',   amount: '8 000 – 25 000 FCFA' },
                  { period: 'En un mois',       amount: '150 000 – 500 000 FCFA' },
                ].map(e => (
                  <div key={e.period} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{e.period}</span>
                    <span className="text-sm font-bold text-gray-900">{e.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-3">*Estimations basées sur l'activité moyenne de nos livreurs. Les gains varient selon la zone et les heures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
