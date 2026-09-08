import { Clock, Leaf, ShieldCheck, UsersRound } from 'lucide-react'

const PILARES = [
  {
    icon: ShieldCheck,
    title: 'Calidad de Ejecución',
    description: 'Estándares de obra rigurosos en cada etapa del proyecto, verificados de principio a fin.',
  },
  {
    icon: Clock,
    title: 'Tiempos y Costos',
    description: 'Planificación seria de plazos y presupuestos, para que cada obra cumpla lo acordado.',
  },
  {
    icon: Leaf,
    title: 'Seguridad y Medio Ambiente',
    description: 'Procesos que priorizan el trabajo responsable y el cuidado del entorno en cada obra.',
  },
  {
    icon: UsersRound,
    title: 'Soluciones Personalizadas',
    description: 'Cada trabajo se adapta a las necesidades reales del cliente, sin soluciones genéricas.',
  },
]

function Pilares() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-dark">Nosotros</p>
            <h2 id="nosotros-heading" className="text-3xl font-bold text-navy-dark sm:text-4xl">
              Compromiso con cada obra, de principio a fin
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              Construimos con rigor técnico, transparencia en costos y cumplimiento estricto de
              plazos. Nuestro equipo acompaña cada etapa de tu proyecto en Rosario y la región para
              garantizar resultados duraderos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PILARES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-navy-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pilares
