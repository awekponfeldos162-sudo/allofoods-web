import { MapPin, Clock, Star } from 'lucide-react'

const tags = ['Poulet', 'Attiéké', 'Pizza', 'Burger', 'Sushi', 'Brochettes']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f7] pt-16"
    >
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full opacity-40 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-semibold text-brand">
                Disponible à Cotonou, Porto-Novo & Abomey-Calavi
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Vos plats préférés,{' '}
              <span className="text-brand relative">
                livrés chez vous
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9C50 3 150 1 298 9"
                    stroke="#F26522"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Découvrez les meilleurs restaurants de votre ville. Commandez en
              quelques clics et faites-vous livrer rapidement à Cotonou,
              Porto-Novo et Abomey-Calavi.
            </p>

            {/* Search bar */}
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-2xl p-2 shadow-md max-w-md">
              <div className="flex items-center gap-2 flex-1 px-2">
                <MapPin size={18} className="text-brand shrink-0" />
                <input
                  type="text"
                  placeholder="Votre adresse de livraison…"
                  className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button className="bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors whitespace-nowrap">
                Commander
              </button>
            </div>

            {/* Popular tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-gray-400 self-center">Populaires :</span>
              {tags.map(t => (
                <button
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-brand hover:text-brand transition-colors"
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Mini stats */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-orange-200 flex items-center justify-center text-xs font-bold text-brand"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">+200 clients</p>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={10} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200" />
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brand" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Livraison 30 min</p>
                  <p className="text-xs text-gray-400">En moyenne</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — food image placeholder */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px]">
              {/* Circular bg */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-100 to-orange-50" />

              {/* Main food image */}
              <img
                src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=500&auto=format&fit=crop"
                alt="Plat africain"
                className="absolute inset-4 rounded-full object-cover w-[calc(100%-32px)] h-[calc(100%-32px)] shadow-2xl"
              />

              {/* Floating card 1 */}
              <div className="absolute -left-4 top-12 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 w-44 animate-fade-up">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <span className="text-lg">🍽️</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Chez Mama</p>
                  <p className="text-xs text-gray-400">⭐ 4.8 · 25 min</p>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 w-48 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <span className="text-lg">✅</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Commande livrée !</p>
                  <p className="text-xs text-gray-400">Il y a 2 minutes</p>
                </div>
              </div>

              {/* Floating card 3 */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white rounded-2xl shadow-xl px-4 py-2.5 flex items-center gap-2" style={{ animationDelay: '0.4s' }}>
                <span className="text-sm">🛵</span>
                <p className="text-xs font-semibold text-gray-700">Livreur à 5 min</p>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
