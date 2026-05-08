import { Star, Clock, ChevronRight } from 'lucide-react'

const restaurants = [
  {
    name: 'Chez Mama',
    cuisine: 'Cuisine africaine',
    rating: 4.8,
    time: '20–30 min',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop',
    badge: 'Populaire',
    badgeColor: 'bg-brand',
  },
  {
    name: 'Grill House',
    cuisine: 'Grillades & Brochettes',
    rating: 4.6,
    time: '25–40 min',
    img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop',
    badge: 'Top Noté',
    badgeColor: 'bg-amber-500',
  },
  {
    name: "Saveurs d'Afrique",
    cuisine: 'Plats traditionnels',
    rating: 4.7,
    time: '30–45 min',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop',
    badge: 'Nouveau',
    badgeColor: 'bg-green-500',
  },
  {
    name: 'Pizza City',
    cuisine: 'Pizza & Fast food',
    rating: 4.5,
    time: '20–35 min',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop',
    badge: '',
    badgeColor: '',
  },
]

function RestaurantCard({ name, cuisine, rating, time, img, badge, badgeColor }: typeof restaurants[0]) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100">
      <div className="relative h-44 overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {badge && (
          <span className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base">{name}</h3>
        <p className="text-sm text-gray-400 mt-0.5">{cuisine}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star size={13} className="fill-amber-400 text-amber-400" />
            <span className="text-sm font-semibold text-gray-700">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Clock size={13} />
            <span className="text-xs">{time}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">
              Nos partenaires
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
              Les meilleurs restaurants<br />
              <span className="text-brand">près de chez vous</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
          >
            Voir tout <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map(r => <RestaurantCard key={r.name} {...r} />)}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a href="#" className="text-sm font-semibold text-brand flex items-center justify-center gap-1">
            Voir tous les restaurants <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
