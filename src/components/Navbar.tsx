import { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { label: 'Accueil',      href: '#hero' },
  { label: 'Restaurants',  href: '#restaurants' },
  { label: 'Menus',        href: '#why' },
  { label: 'À propos',     href: '#about' },
  { label: 'Blog',         href: '#blog' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <ShoppingBag size={16} className="text-white" />
            </div>
            <span className="text-xl font-black tracking-tight">
              allo<span className="text-brand">foods</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-brand transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <select className="text-sm text-gray-500 border-none bg-transparent cursor-pointer focus:outline-none">
              <option>Français</option>
              <option>English</option>
            </select>
            <a
              href="#download"
              className="bg-brand text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Télécharger l'app
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 shadow-lg">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 py-2 border-b border-gray-100 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="bg-brand text-white text-sm font-semibold px-4 py-3 rounded-lg text-center mt-2"
          >
            Télécharger l'app
          </a>
        </div>
      )}
    </header>
  )
}
