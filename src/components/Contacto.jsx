import { useState } from 'react'
import { Mail, Send } from 'lucide-react'
import { SITE } from '../data/site'

const INITIAL_FORM = { nombre: '', contacto: '', mensaje: '' }

function buildWhatsAppMessage({ nombre, contacto, mensaje }) {
  const lines = [
    `Hola ${SITE.name}, mi nombre es ${nombre}.`,
    contacto ? `Mi teléfono/email de contacto: ${contacto}.` : null,
    mensaje ? `Mensaje: ${mensaje}` : null,
  ].filter(Boolean)
  return `${SITE.whatsapp.url}?text=${encodeURIComponent(lines.join('\n'))}`
}

function buildMailtoLink({ nombre, contacto, mensaje }) {
  const subject = `Consulta desde la web - ${nombre || 'Sin nombre'}`
  const body = [`Nombre: ${nombre}`, `Contacto: ${contacto}`, '', mensaje].join('\n')
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function Contacto() {
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    window.open(buildWhatsAppMessage(form), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-dark">Contacto</p>
          <h2 id="contacto-heading" className="text-3xl font-bold text-navy-dark sm:text-4xl">
            Contanos sobre tu proyecto
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Completá el formulario y te respondemos por WhatsApp, o escribinos directamente por correo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6" noValidate>
          <div>
            <label htmlFor="nombre" className="mb-2 block text-sm font-semibold text-navy-dark">
              Nombre y apellido
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              value={form.nombre}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-navy-dark placeholder:text-slate-400 focus:border-gold focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="contacto" className="mb-2 block text-sm font-semibold text-navy-dark">
              Teléfono o email
            </label>
            <input
              id="contacto"
              name="contacto"
              type="text"
              autoComplete="tel"
              required
              value={form.contacto}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-navy-dark placeholder:text-slate-400 focus:border-gold focus:outline-none"
              placeholder="Ej: 341 555-1234"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="mb-2 block text-sm font-semibold text-navy-dark">
              Contanos qué necesitás
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required
              value={form.mensaje}
              onChange={handleChange}
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm text-navy-dark placeholder:text-slate-400 focus:border-gold focus:outline-none"
              placeholder="Describí brevemente tu proyecto o consulta"
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              aria-label="Enviar consulta por WhatsApp"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-dark px-6 py-4 text-sm font-bold text-white shadow-card transition-colors hover:bg-gold-deep"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Enviar por WhatsApp
            </button>
            <a
              href={buildMailtoLink(form)}
              aria-label="Enviar consulta por correo electrónico"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-4 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Enviar por Correo
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
