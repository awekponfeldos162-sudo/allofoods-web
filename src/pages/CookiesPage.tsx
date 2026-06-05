import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const cookieTypes = [
  {
    name: 'Cookies essentiels',
    badge: 'Toujours actifs',
    badgeColor: 'bg-green-100 text-green-700',
    description:
      'Ces cookies sont indispensables au fonctionnement de la plateforme. Ils permettent la gestion de votre session, la sécurisation de votre connexion et le maintien de votre panier. Sans ces cookies, certaines fonctionnalités essentielles seraient indisponibles.',
    examples: ['Session utilisateur', 'Sécurité CSRF', 'Panier de commande', 'Préférences de langue'],
  },
  {
    name: 'Cookies de performance',
    badge: 'Optionnels',
    badgeColor: 'bg-gray-100 text-gray-600',
    description:
      'Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre plateforme en collectant des informations de manière anonyme (pages visitées, temps passé, erreurs rencontrées). Ces données nous permettent d\'améliorer continuellement nos services.',
    examples: ['Google Analytics', 'Mesure de performance', 'Détection d\'erreurs', 'Heatmaps anonymes'],
  },
  {
    name: 'Cookies fonctionnels',
    badge: 'Optionnels',
    badgeColor: 'bg-gray-100 text-gray-600',
    description:
      'Ces cookies permettent de mémoriser vos préférences pour personnaliser votre expérience : adresses de livraison favorites, restaurants préférés, historique de recherche, préférences alimentaires. Ils ne sont pas indispensables mais améliorent significativement votre expérience.',
    examples: ['Adresses sauvegardées', 'Restaurants favoris', 'Historique de commandes', 'Préférences d\'affichage'],
  },
  {
    name: 'Cookies marketing',
    badge: 'Optionnels',
    badgeColor: 'bg-gray-100 text-gray-600',
    description:
      'Ces cookies sont utilisés pour vous présenter des publicités et des offres pertinentes, en fonction de vos centres d\'intérêt et de votre navigation. Ils peuvent également être utilisés pour limiter le nombre de fois qu\'une publicité vous est présentée.',
    examples: ['Publicités personnalisées', 'Retargeting', 'Partage sur réseaux sociaux', 'Suivi de campagnes'],
  },
]

const sections = [
  {
    title: 'Qu\'est-ce qu\'un cookie ?',
    content:
      'Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone, tablette) lors de votre visite sur notre plateforme. Les cookies servent à mémoriser des informations relatives à votre navigation afin d\'améliorer votre expérience et de vous proposer des contenus adaptés. Ils ne contiennent aucun virus et ne peuvent pas accéder à d\'autres informations sur votre appareil.',
  },
  {
    title: 'Durée de conservation',
    content:
      'Les cookies de session sont supprimés automatiquement à la fermeture de votre navigateur. Les cookies persistants ont une durée de vie variable : les cookies essentiels sont conservés jusqu\'à 12 mois, les cookies analytiques jusqu\'à 13 mois, et les cookies marketing jusqu\'à 90 jours. Ces durées sont conformes aux recommandations des autorités de protection des données.',
  },
  {
    title: 'Gestion de vos préférences',
    content:
      'Vous pouvez accepter ou refuser les cookies optionnels via notre bannière de consentement lors de votre première visite, ou à tout moment depuis les paramètres de votre compte. Vous pouvez également configurer votre navigateur pour bloquer les cookies ou être alerté lors de leur dépôt. Attention : le blocage de tous les cookies peut affecter certaines fonctionnalités de la plateforme.',
  },
  {
    title: 'Cookies tiers',
    content:
      'Certains cookies peuvent être déposés par des partenaires tiers (Google Analytics, Firebase, réseaux sociaux) lorsque vous utilisez des fonctionnalités intégrées à notre plateforme. Ces partenaires sont soumis à leurs propres politiques de confidentialité. AlloFoods n\'a pas de contrôle sur les cookies tiers une fois qu\'ils sont déposés sur votre appareil.',
  },
  {
    title: 'Comment refuser les cookies dans votre navigateur',
    content:
      'La plupart des navigateurs vous permettent de gérer vos préférences cookies. Voici comment accéder aux paramètres : Chrome : Paramètres > Confidentialité et sécurité > Cookies. Firefox : Options > Vie privée et sécurité > Cookies. Safari : Préférences > Confidentialité > Cookies. Edge : Paramètres > Cookies et autorisations de site.',
  },
]

export default function CookiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar simple */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <ShoppingBag size={16} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tight">
              allo<span className="text-brand">foods</span>
            </span>
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand transition-colors">
            <ArrowLeft size={15} />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-sm font-semibold text-brand uppercase tracking-wider mb-2">Légal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Politique de cookies
          </h1>
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : 1er juin 2026 &nbsp;·&nbsp; Version 1.0
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          <p className="text-gray-600 leading-relaxed">
            AlloFoods utilise des cookies et des technologies similaires sur sa plateforme web et
            mobile. Cette politique vous explique ce que sont les cookies, comment nous les utilisons
            et comment vous pouvez les gérer.
          </p>

          {/* Types de cookies */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Types de cookies utilisés</h2>
            <div className="space-y-4">
              {cookieTypes.map((c) => (
                <div key={c.name} className="border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-gray-900 text-sm">{c.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badgeColor}`}>
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.examples.map((ex) => (
                      <span key={ex} className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Autres sections */}
          {sections.map((s) => (
            <div key={s.title} className="border-l-4 border-brand pl-5">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-2">Contact</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pour toute question concernant notre utilisation des cookies ou pour exercer vos droits,
              contactez-nous à <span className="text-brand font-medium">privacy@allofoods.bj</span> ou
              consultez notre{' '}
              <Link to="/politique-de-confidentialite" className="text-brand hover:underline">
                politique de confidentialité
              </Link>.
            </p>
          </div>

          {/* Bottom links */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/conditions-utilisation" className="text-sm text-brand hover:underline">
              Conditions d'utilisation →
            </Link>
            <Link to="/politique-de-confidentialite" className="text-sm text-brand hover:underline">
              Politique de confidentialité →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
