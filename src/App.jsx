import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pilares from './components/Pilares'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Ubicacion from './components/Ubicacion'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import WhatsAppFloating from './components/WhatsAppFloating'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pilares />
        <Servicios />
        <Galeria />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  )
}

export default App
