import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:flex lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-10">
          <div className="lg:max-w-[220px]">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logorolon.webp"
                alt={`Logo de ${SITE.name}`}
                width={62}
                height={49}
                loading="lazy"
                className="h-14 w-auto shrink-0 rounded bg-white p-1.5 sm:h-16"
              />
              <div>
                <span className="block font-heading text-base font-bold">{SITE.name}</span>
                <span className="mt-1 block text-sm leading-relaxed text-white/70">{SITE.tagline}</span>
              </div>
            </div>
          </div>

          <nav aria-label="Enlaces de navegación en el pie de página" className="lg:max-w-[180px]">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:max-w-[260px]">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                <span className="text-sm text-white/70">{SITE.address.full}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                <a href={SITE.phone.href} className="text-sm text-white/70 hover:text-white hover:underline">
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-sm text-white/70 hover:text-white hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:max-w-[240px]">
            <h3 className="text-sm font-bold uppercase tracking-wide text-gold-light">Presupuesto</h3>
            <p className="mt-4 text-sm text-white/70">
              Escribinos por WhatsApp y recibí una respuesta sin cargo.
            </p>
            <a
              href={SITE.whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir presupuesto por WhatsApp (se abre en una pestaña nueva)"
              className="mt-4 inline-flex items-center rounded-full bg-gold-dark px-5 py-2.5 text-sm font-bold text-white hover:bg-gold-deep"
            >
              Pedir Presupuesto
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 md:flex-row">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-amber-400" aria-hidden="true" />
            Desarrollado por{' '}
            <a
              href="https://www.softivastudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Visitar Softiva Studio"
              className="font-semibold text-white underline decoration-amber-500/50 underline-offset-4 transition-colors hover:text-amber-400"
            >
              Softiva Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
