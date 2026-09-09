import { useEffect, useRef } from 'react'
import { SITE } from '../data/site'

function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause()
    }
  }, [])

  return (
    <section
      id="inicio"
      aria-label="Presentación de Constructora Demo"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/assets/construccionesrolon3.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/75" aria-hidden="true" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern id="hero-blueprint-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-blueprint-grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block animate-fade-in-up rounded-full border border-gold/60 bg-gold/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-gold-light [animation-delay:100ms]">
            Constructora en Rosario, Santa Fe
          </p>
          <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight text-white [animation-delay:250ms] sm:text-5xl lg:text-6xl">
            Transformamos tus Espacios con Excelencia
          </h1>
          <p className="mt-6 max-w-2xl animate-fade-in-up text-base leading-relaxed text-white/90 [animation-delay:400ms] sm:text-lg">
            {SITE.summary}
          </p>

          <div className="mt-10 flex animate-fade-in-up flex-col gap-4 [animation-delay:550ms] sm:flex-row">
            <a
              href={SITE.whatsapp.urlWithMessage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar presupuesto sin cargo por WhatsApp (se abre en una pestaña nueva)"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-dark px-8 py-4 text-base font-bold text-white shadow-card transition-colors hover:bg-gold-deep"
            >
              Presupuesto Sin Cargo por WhatsApp
            </a>
            <a
              href="#galeria"
              aria-label="Ver galería de obras realizadas"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-navy-dark"
            >
              Ver Galería de Obras
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
