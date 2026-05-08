import { Apple, Play } from 'lucide-react'

export default function AppDownload() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden relative">

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center px-8 sm:px-12 lg:px-16 py-14">
            {/* Left */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-green-300">iOS & Android — Gratuit</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Commandez encore plus<br />
                <span className="text-brand">facilement avec notre app</span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Téléchargez l'application AlloFoods pour profiter d'une
                expérience de commande encore plus rapide, des offres exclusives
                et un suivi en temps réel de vos livraisons.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <Apple size={22} className="text-gray-800" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Disponible sur</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white text-gray-900 px-5 py-3 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <Play size={20} className="text-green-600 fill-green-600" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Disponible sur</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Mini features */}
              <div className="flex flex-wrap gap-4 pt-2">
                {['Suivi GPS en direct', 'Paiement Mobile Money', 'Historique des commandes'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-brand">✓</span> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-56">
                {/* Phone frame */}
                <div className="bg-gray-700 rounded-[2.5rem] p-2 shadow-2xl border border-white/10">
                  <div className="bg-gray-900 rounded-[2rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="h-7 bg-gray-900 flex items-center justify-center">
                      <div className="w-20 h-4 bg-gray-800 rounded-full" />
                    </div>
                    {/* Screen */}
                    <div className="h-96 bg-gray-800 flex flex-col">
                      {/* Header */}
                      <div className="bg-brand px-4 py-3">
                        <p className="text-white text-xs font-black">allofoods</p>
                        <p className="text-orange-200 text-[10px]">Bonjour, Jean 👋</p>
                      </div>
                      {/* Content */}
                      <div className="p-3 space-y-2.5 flex-1">
                        <div className="bg-gray-700 rounded-xl h-24 flex items-center justify-center overflow-hidden">
                          <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&auto=format&fit=crop"
                            alt=""
                            className="w-full h-full object-cover opacity-70"
                          />
                        </div>
                        {[1, 2, 3].map(i => (
                          <div key={i} className="bg-gray-700 rounded-lg p-2 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gray-600 flex-shrink-0" />
                            <div className="space-y-1 flex-1">
                              <div className="h-2 bg-gray-600 rounded w-3/4" />
                              <div className="h-1.5 bg-gray-600/70 rounded w-1/2" />
                            </div>
                            <div className="text-brand text-xs font-bold">4.{7+i}★</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* QR code */}
                <div className="absolute -right-12 bottom-8 bg-white rounded-2xl p-3 shadow-xl border border-gray-100 hidden lg:block">
                  <div className="w-16 h-16 grid grid-cols-4 gap-0.5">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${[0,1,2,4,5,7,8,11,13,14,15].includes(i) ? 'bg-gray-900' : 'bg-gray-200'}`}
                      />
                    ))}
                  </div>
                  <p className="text-[9px] text-gray-400 text-center mt-1.5 font-medium">Scanner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
