import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label={`${SITE.name} - Inicio`}>
          <img
            src="/assets/logorolon.webp"
            alt={`Logo de ${SITE.name}`}
            width={62}
            height={49}
            fetchPriority="high"
            className="h-14 w-auto sm:h-16"
          />
          <span className="hidden font-heading text-lg font-bold leading-tight text-navy sm:block">
            Constructora
            <br className="leading-none" />
            Demo
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-navy-dark transition-colors hover:text-gold-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={SITE.whatsapp.urlWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir presupuesto por WhatsApp (se abre en una pestaña nueva)"
            className="inline-flex items-center rounded-full bg-gold-dark px-6 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-gold-deep"
          >
            Pedir Presupuesto
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          className="inline-flex items-center justify-center rounded-md p-2 text-navy lg:hidden"
        >
          {isOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white shadow-lg transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-3 text-base font-semibold text-navy-dark hover:bg-navy/5 hover:text-gold-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={SITE.whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              aria-label="Pedir presupuesto por WhatsApp (se abre en una pestaña nueva)"
              className="block rounded-full bg-gold-dark px-6 py-3 text-center text-sm font-bold text-white shadow-card hover:bg-gold-deep"
            >
              Pedir Presupuesto
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
