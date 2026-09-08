import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SITE } from '../data/site'

function Ubicacion() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-heading" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-dark">Ubicación</p>
          <h2 id="ubicacion-heading" className="text-3xl font-bold text-navy-dark sm:text-4xl">
            Dónde estamos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl shadow-card lg:col-span-3">
            <iframe
              src={SITE.mapsEmbedUrl}
              title={`Mapa de ubicación de ${SITE.name} en ${SITE.address.full}`}
              loading="lazy"
              fetchPriority="low"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0 sm:h-full sm:min-h-[420px]"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-navy p-8 text-white shadow-card lg:col-span-2">
            <div>
              <h3 className="text-xl font-bold">Datos de contacto</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <a
                    href={SITE.mapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed text-white/90 hover:text-white hover:underline"
                  >
                    {SITE.address.full}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <a href={SITE.phone.href} className="text-sm text-white/90 hover:text-white hover:underline">
                    {SITE.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <a href={`mailto:${SITE.email}`} className="text-sm text-white/90 hover:text-white hover:underline">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/15 pt-6">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold-light">
                <Clock className="h-4 w-4" aria-hidden="true" />
                Horarios de atención
              </h4>
              <ul className="mt-3 space-y-1.5">
                {SITE.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm text-white/90">
                    <span>{h.day}</span>
                    <span className="font-semibold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ubicacion
