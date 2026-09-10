import { useState } from 'react'
import ImageModal from './ImageModal.jsx'
import piscinas from '../assets/piscinas.jpg'
import piscinas2 from '../assets/piscinas2.webp'
import mirador from '../assets/mirador.webp'
import cahabon from '../assets/cahabon.jpg'

const imagenes = [
  {
    src: piscinas,
    alt: 'Vista panorámica de las piscinas naturales de Semuc Champey',
    descripcion: 'Vista panorámica de las piscinas naturales de Semuc Champey.',
  },
  {
    src: piscinas2,
    alt: 'Piscinas naturales de agua turquesa',
    descripcion: 'Piscinas naturales de agua turquesa rodeadas de vegetación.',
  },
  {
    src: mirador,
    alt: 'Mirador de Semuc Champey',
    descripcion: 'Vista desde el mirador principal de Semuc Champey.',
  },
  {
    src: cahabon,
    alt: 'Río Cahabón',
    descripcion: 'El río Cahabón, uno de los principales atractivos de la región.',
  },
]

function Gallery() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  return (
    <section id="galeria">
      <h2>Galería de imágenes</h2>

      <p>Haz clic sobre cualquiera de las imágenes para verla en tamaño grande.</p>

      {imagenes.map((imagen) => (
        <figure key={imagen.src} onClick={() => setImagenSeleccionada(imagen)}>
          <img src={imagen.src} alt={imagen.alt} />
          <figcaption>{imagen.descripcion}</figcaption>
        </figure>
      ))}

      <ImageModal image={imagenSeleccionada} onClose={() => setImagenSeleccionada(null)} />

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default Gallery
