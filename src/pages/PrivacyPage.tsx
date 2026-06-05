import { Link } from 'react-router-dom'
import { ShoppingBag, ArrowLeft } from 'lucide-react'
import Footer from '../components/Footer'

const sections = [
  {
    title: '1. Responsable du traitement',
    content: `AlloFoods, société opérant au Bénin, est responsable du traitement de vos données personnelles. Pour toute question relative à la protection de vos données, vous pouvez nous contacter à l'adresse : privacy@allofoods.bj ou à notre siège social à Cotonou, Bénin.`,
  },
  {
    title: '2. Données collectées',
    content: `Nous collectons les données que vous nous fournissez directement lors de la création de votre compte : nom, prénom, adresse e-mail, numéro de téléphone, adresses de livraison. Nous collectons également des données générées par votre utilisation de la plateforme : historique des commandes, préférences alimentaires, évaluations, données de navigation, adresse IP, identifiants de l'appareil et données de géolocalisation (avec votre consentement) pour faciliter la livraison.`,
  },
  {
    title: '3. Finalités du traitement',
    content: `Vos données sont utilisées pour : (i) la création et la gestion de votre compte, (ii) le traitement et le suivi de vos commandes, (iii) la communication relative à vos commandes et à nos services, (iv) l'amélioration de notre plateforme et de l'expérience utilisateur, (v) la prévention de la fraude et la sécurisation des transactions, (vi) l'envoi de promotions et offres spéciales (avec votre consentement), (vii) le respect de nos obligations légales et réglementaires.`,
  },
  {
    title: '4. Base légale du traitement',
    content: `Le traitement de vos données repose sur : l'exécution du contrat pour la gestion de vos commandes et de votre compte, notre intérêt légitime pour l'amélioration de nos services et la prévention de la fraude, votre consentement pour l'envoi de communications marketing et la géolocalisation, et nos obligations légales pour la conservation de certains documents comptables et fiscaux.`,
  },
  {
    title: '5. Partage des données',
    content: `AlloFoods peut partager vos données avec : les restaurants partenaires (nom, adresse, commande) pour la préparation de vos repas, les livreurs indépendants (nom, numéro de téléphone, adresse de livraison) pour assurer la livraison, nos prestataires techniques (hébergement, paiement, analyse) dans le cadre de contrats garantissant un niveau de protection adéquat. Nous ne vendons jamais vos données personnelles à des tiers à des fins commerciales.`,
  },
  {
    title: '6. Conservation des données',
    content: `Vos données de compte sont conservées pendant toute la durée de votre relation avec AlloFoods, puis archivées pour une durée de 3 ans après la clôture de votre compte. Les données de commande sont conservées 5 ans à des fins comptables et fiscales. Les données de navigation sont conservées 13 mois maximum.`,
  },
  {
    title: '7. Sécurité des données',
    content: `AlloFoods met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou altération : chiffrement des communications (HTTPS/TLS), hachage des mots de passe, contrôle strict des accès aux données, audits de sécurité réguliers. En cas de violation de données susceptible d'affecter vos droits, vous en serez informé dans les meilleurs délais.`,
  },
  {
    title: '8. Vos droits',
    content: `Conformément à la réglementation applicable, vous disposez des droits suivants sur vos données personnelles : droit d'accès, droit de rectification, droit à l'effacement (« droit à l'oubli »), droit à la limitation du traitement, droit à la portabilité des données, droit d'opposition et droit de retirer votre consentement à tout moment. Pour exercer ces droits, contactez-nous à privacy@allofoods.bj en joignant une copie de votre pièce d'identité. Nous répondrons dans un délai de 30 jours.`,
  },
  {
    title: '9. Transferts internationaux',
    content: `Certains de nos prestataires techniques (notamment Firebase de Google) peuvent traiter vos données en dehors du Bénin. Dans ce cas, nous veillons à ce que des garanties appropriées soient en place pour assurer un niveau de protection équivalent à celui applicable au Bénin.`,
  },
  {
    title: '10. Modifications de la politique',
    content: `AlloFoods se réserve le droit de modifier la présente politique à tout moment. Toute modification significative sera notifiée par e-mail ou par notification dans l'application au moins 15 jours avant son entrée en vigueur. La date de dernière mise à jour figure en haut de ce document.`,
  },
  {
    title: '11. Contact',
    content: `Pour toute question relative à la protection de vos données personnelles ou pour exercer vos droits, contactez notre responsable de la protection des données à : privacy@allofoods.bj. Vous pouvez également adresser une réclamation auprès de l'autorité de protection des données compétente au Bénin.`,
  },
]

export default function PrivacyPage() {
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
            Politique de confidentialité
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
            La protection de vos données personnelles est une priorité pour AlloFoods. Cette politique
            explique quelles données nous collectons, pourquoi nous les collectons et comment nous les
            utilisons.
          </p>

          {sections.map((s) => (
            <div key={s.title} className="border-l-4 border-brand pl-5">
              <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{s.content}</p>
            </div>
          ))}

          {/* Bottom links */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/conditions-utilisation" className="text-sm text-brand hover:underline">
              Conditions d'utilisation →
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
