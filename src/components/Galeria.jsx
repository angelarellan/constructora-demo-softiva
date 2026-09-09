import { useMemo, useState } from 'react'
import { GALLERY_IMAGES, SITE } from '../data/site'

function Galeria() {
  const [filter, setFilter] = useState('Todos')

  const filters = useMemo(() => ['Todos', ...new Set(GALLERY_IMAGES.map((img) => img.label))], [])

  const visibleImages = useMemo(
    () => (filter === 'Todos' ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.label === filter)),
    [filter],
  )

  return (
    <section id="galeria" aria-labelledby="galeria-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-gold-dark">Galería</p>
          <h2 id="galeria-heading" className="text-3xl font-bold text-navy-dark sm:text-4xl">
            Trabajos Reales de {SITE.name}
          </h2>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filtrar galería de obras por categoría"
        >
          {filters.map((label) => {
            const isActive = filter === label
            return (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-navy text-white'
                    : 'bg-slate-100 text-navy-dark hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleImages.map((image) => (
            <figure
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/0 to-navy-dark/0" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
