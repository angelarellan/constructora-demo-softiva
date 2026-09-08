import { BrickWall, Flame, HardHat, Layers, PaintRoller, Waves, Wrench, Zap } from 'lucide-react'

const SERVICIOS = [
  {
    icon: HardHat,
    title: 'Construcción en General y Obra Nueva',
    description: 'Proyectos de obra nueva llevados adelante de principio a fin, con planificación y control de calidad.',
  },
  {
    icon: BrickWall,
    title: 'Albañilería Tradicional y Durlock',
    description: 'Mampostería tradicional y sistemas en seco (durlock) para ampliaciones y divisiones de espacios.',
  },
  {
    icon: PaintRoller,
    title: 'Pintura Interior/Exterior & Revestimientos',
    description: 'Terminaciones de pintura y revestimientos que protegen y renuevan la estética de tu propiedad.',
  },
  {
    icon: Flame,
    title: 'Gasista Matriculado & Plomería',
    description: 'Instalaciones de gas con matrícula habilitante y trabajos de plomería con normas de seguridad.',
  },
  {
    icon: Zap,
    title: 'Electricidad Integral',
    description: 'Instalaciones eléctricas domiciliarias y comerciales, desde tableros hasta puntos de luz.',
  },
  {
    icon: Layers,
    title: 'Techos, Cubiertas & Zinguería',
    description: 'Construcción y reparación de techos, cubiertas y trabajos de zinguería con materiales durables.',
  },
  {
    icon: Waves,
    title: 'Construcción y Mantenimiento de Piscinas',
    description: 'Piscinas de obra a medida y mantenimiento integral para disfrutarlas todo el año.',
  },
  {
    icon: Wrench,
    title: 'Refacciones & Mantenimiento General',
    description: 'Reformas, arreglos y mantenimiento preventivo para mantener tu propiedad siempre en condiciones.',
  },
]

function Servicios() {
  return (
    <section id="servicios" aria-labelledby="servicios-heading" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-dark">Servicios</p>
          <h2 id="servicios-heading" className="text-3xl font-bold text-navy-dark sm:text-4xl">
            Todo lo que tu obra necesita, en un solo lugar
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100 transition-colors hover:ring-gold"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold-dark transition-colors group-hover:bg-gold-dark group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="text-base font-bold text-navy-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
