import { Link } from 'react-router-dom'
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react'

const SocialFb = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const SocialIg = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)
const SocialX = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const legalLinks: Record<string, string> = {
  'Conditions d\'utilisation': '/conditions-utilisation',
  'Politique de confidentialité': '/politique-de-confidentialite',
  'Cookies': '/cookies',
}

const nav = {
  Navigation: ['Accueil', 'Restaurants', 'Comment ça marche', 'Témoignages'],
  Informations: ['À propos', 'Blog', 'Carrières', 'Presse'],
  Légal: ['Conditions d\'utilisation', 'Politique de confidentialité', 'Cookies'],
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <ShoppingBag size={16} className="text-white" />
              </div>
              <span className="text-xl font-black">
                allo<span className="text-brand">foods</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              La plateforme de livraison de repas numéro 1 au Bénin. Commandez
              en quelques clics, recevez en 30 minutes.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-brand shrink-0" />
                Cotonou, Bénin
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-brand shrink-0" />
                +229 01 00 00 00
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-brand shrink-0" />
                contact@allofoods.bj
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { icon: <SocialFb />, href: '#' },
                { icon: <SocialIg />, href: '#' },
                { icon: <SocialX />,  href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav cols */}
          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    {legalLinks[l] ? (
                      <Link to={legalLinks[l]} className="text-sm text-gray-400 hover:text-white transition-colors">
                        {l}
                      </Link>
                    ) : (
                      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {l}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AlloFoods. Tous droits réservés. Cotonou, Bénin.
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Tous les systèmes opérationnels
          </div>
        </div>
      </div>
    </footer>
  )
}
