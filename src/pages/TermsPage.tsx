import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Objet et acceptation',
    content: `Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme AlloFoods, accessible via l'application mobile et le site web allofoods.bj. En accédant à nos services, vous reconnaissez avoir lu, compris et accepté sans réserve l'ensemble de ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.`,
  },
  {
    title: '2. Description du service',
    content: `AlloFoods est une plateforme de mise en relation entre des clients, des restaurants partenaires et des livreurs indépendants opérant principalement à Cotonou et dans les grandes villes du Bénin. Nous facilitons la commande et la livraison de repas, sans être directement responsables de la préparation des aliments. AlloFoods se réserve le droit de modifier ou d'interrompre tout ou partie de ses services à tout moment.`,
  },
  {
    title: '3. Inscription et compte utilisateur',
    content: `Pour passer commande, vous devez créer un compte en fournissant des informations exactes, complètes et à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toute activité effectuée sous votre compte. Tout signalement d'utilisation non autorisée de votre compte doit être immédiatement notifié à AlloFoods via notre service client. AlloFoods se réserve le droit de suspendre ou supprimer tout compte en cas de violation de ces CGU.`,
  },
  {
    title: '4. Commandes et paiement',
    content: `Les prix affichés sur la plateforme sont en francs CFA (FCFA) et incluent les taxes applicables. AlloFoods accepte les paiements par Mobile Money (MTN MoMo, Moov Money) et en espèces à la livraison. Toute commande passée constitue une offre d'achat ferme. AlloFoods et/ou le restaurant partenaire se réservent le droit d'annuler une commande en cas d'indisponibilité d'un article ou de suspicion de fraude. Les remboursements sont traités dans un délai de 5 jours ouvrés.`,
  },
  {
    title: '5. Livraison',
    content: `Les délais de livraison sont estimatifs et peuvent varier en fonction de la distance, des conditions de circulation et de l'affluence. AlloFoods ne peut être tenu responsable des retards indépendants de sa volonté (conditions météorologiques, événements exceptionnels, etc.). La livraison est effectuée à l'adresse indiquée lors de la commande. En cas d'absence du client, le livreur vous contactera. Une commande non récupérée après deux tentatives de contact peut être annulée sans remboursement.`,
  },
  {
    title: '6. Responsabilités',
    content: `AlloFoods agit en tant qu'intermédiaire entre les clients et les restaurants partenaires. La responsabilité d'AlloFoods est limitée aux services de mise en relation et de livraison. La qualité et la conformité des plats relèvent de la seule responsabilité du restaurant partenaire. AlloFoods ne saurait être tenu responsable en cas de dommages indirects, perte de données ou interruption de service. Notre responsabilité totale est plafonnée au montant de la commande concernée.`,
  },
  {
    title: '7. Propriété intellectuelle',
    content: `L'ensemble des éléments constituant la plateforme AlloFoods (logo, design, textes, images, code source) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation non autorisée est strictement interdite. Les marques, noms commerciaux et logos des restaurants partenaires restent la propriété exclusive de leurs détenteurs respectifs.`,
  },
  {
    title: '8. Comportement des utilisateurs',
    content: `Vous vous engagez à utiliser la plateforme AlloFoods de manière licite et respectueuse. Il est interdit d'utiliser nos services à des fins frauduleuses, de passer des commandes factices, de harceler les livreurs ou les équipes d'AlloFoods, ou de diffuser des avis faux ou trompeurs. Tout manquement à ces règles peut entraîner la suspension immédiate de votre compte.`,
  },
  {
    title: '9. Modifications des CGU',
    content: `AlloFoods se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés de toute modification significative par notification dans l'application ou par e-mail. La poursuite de l'utilisation de nos services après notification vaut acceptation des nouvelles conditions.`,
  },
  {
    title: '10. Droit applicable et litiges',
    content: `Les présentes CGU sont régies par le droit béninois. En cas de litige, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. À défaut d'accord amiable, tout litige sera soumis aux tribunaux compétents de Cotonou, Bénin.`,
  },
  {
    title: '11. Contact',
    content: `Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse suivante : legal@allofoods.bj ou par courrier à AlloFoods, Cotonou, Bénin. Notre service client est disponible du lundi au samedi de 8h à 20h.`,
  },
]

export default function TermsPage() {
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
            Conditions d'utilisation
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
            Bienvenue sur AlloFoods. Avant d'utiliser notre plateforme, veuillez lire attentivement
            les présentes conditions. Elles définissent vos droits et obligations ainsi que les nôtres.
          </p>

          {sections.map((s) => (
            <div key={s.title} className="border-l-4 border-brand pl-5">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}

          {/* Bottom links */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/politique-de-confidentialite" className="text-sm text-brand hover:underline">
              Politique de confidentialité →
            </Link>
            <Link to="/cookies" className="text-sm text-brand hover:underline">
              Politique cookies →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
