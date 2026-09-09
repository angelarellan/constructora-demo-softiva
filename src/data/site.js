export const SITE = {
  name: 'Constructora Demo',
  slogan: 'Transformamos tus espacios con excelencia',
  tagline: 'Calidad y garantía en obras',
  summary:
    'En Constructora Demo somos una empresa dedicada al sector de la construcción, desarrollando proyectos con un fuerte compromiso en la calidad, los tiempos de ejecución, los costos y el cumplimiento de cada objetivo. Adaptamos cada trabajo a las necesidades de nuestros clientes, brindando soluciones personalizadas y utilizando procesos que priorizan la seguridad, el cuidado del medio ambiente y el trabajo responsable.',
  address: {
    line: 'Pasaje 1878, N° 3660',
    city: 'Rosario',
    province: 'Santa Fe',
    country: 'Argentina',
    full: 'Pasaje 1878, N° 3660, Rosario, Santa Fe, Argentina',
  },
  phone: {
    display: '(0341) 15-692-8482',
    href: 'tel:+5493416928482',
  },
  whatsapp: {
    number: '5493416928482',
    url: 'https://wa.me/5493416928482',
    urlWithMessage:
      'https://wa.me/5493416928482?text=' +
      encodeURIComponent('Hola Constructora Demo, quiero pedir un presupuesto sin cargo.'),
  },
  email: 'contacto@constructorademo.com',
  hours: [
    { day: 'Lunes a Viernes', time: '8:00 – 18:00' },
    { day: 'Sábados', time: '9:00 – 13:00' },
    { day: 'Domingos', time: 'Cerrado' },
  ],
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Pasaje+1878+3660,+Rosario,+Santa+Fe,+Argentina&output=embed',
  mapsLinkUrl:
    'https://www.google.com/maps/search/?api=1&query=Pasaje+1878+3660,+Rosario,+Santa+Fe,+Argentina',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

export const GALLERY_IMAGES = [
  {
    src: '/assets/construccionesrolon1.jpg',
    alt: 'Colocación de porcelanato en obra de Constructora Demo, Rosario',
    label: 'Colocación de Porcelanatos',
  },
  {
    src: '/assets/construccionesrolon2.jpg',
    alt: 'Instalaciones eléctricas en interior de vivienda, Constructora Demo',
    label: 'Instalaciones',
  },
  {
    src: '/assets/construccionesrolon3.jpg',
    alt: 'Fachada de vivienda en construcción realizada por Constructora Demo',
    label: 'Fachadas',
  },
  {
    src: '/assets/construccionesrolon4.jpg',
    alt: 'Construcción de piscina en Rosario por Constructora Demo',
    label: 'Piscinas',
  },
  {
    src: '/assets/construccionesrolon5.jpg',
    alt: 'Casa terminada con galería y columnas, obra de Constructora Demo',
    label: 'Casas',
  },
]
