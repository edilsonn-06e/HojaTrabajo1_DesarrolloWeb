import { useState } from 'react'

const nombres = [
  'Ana Gómez',
  'Carlos López',
  'María Rodríguez',
  'José Hernández',
  'Sofía Martínez',
]

const comentarios = [
  'Una experiencia increíble, las piscinas son hermosas.',
  'El viaje estuvo muy bien organizado y el paisaje es impresionante.',
  'Me encantó subir al mirador y conocer Semuc Champey.',
  'Las actividades fueron muy divertidas y los guías muy amables.',
  'Definitivamente volvería a realizar esta excursión.',
]

function obtenerResenaAleatoria() {
  const posicionNombre = Math.floor(Math.random() * nombres.length)
  const posicionComentario = Math.floor(Math.random() * comentarios.length)

  return {
    nombre: nombres[posicionNombre],
    comentario: comentarios[posicionComentario],
  }
}

function Testimonials() {
  const [resena, setResena] = useState(obtenerResenaAleatoria)

  return (
    <section id="resenas">
      <h2>Opiniones de nuestros visitantes</h2>

      <div id="tarjetaResena">
        <h3 id="nombreResena">{resena.nombre}</h3>
        <p id="comentarioResena">{resena.comentario}</p>
      </div>

      <button type="button" id="nuevaResena" onClick={() => setResena(obtenerResenaAleatoria())}>
        Mostrar otra opinión
      </button>

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default Testimonials
