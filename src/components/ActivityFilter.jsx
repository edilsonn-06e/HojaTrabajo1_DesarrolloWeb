import { useState } from 'react'

const actividades = [
  'Nadar en las piscinas naturales.',
  'Realizar caminatas por senderos naturales.',
  'Subir al mirador de Semuc Champey.',
  "Visitar las cuevas de K'an Ba.",
  'Realizar tubing en el río Cahabón.',
  'Tomar fotografías del paisaje.',
  'Observar diferentes especies de plantas y animales.',
  'Conocer las comunidades cercanas.',
  'Comprar artesanías elaboradas por habitantes locales.',
  'Disfrutar de la gastronomía de Alta Verapaz.',
  'Realizar recorridos guiados.',
  'Descansar en las áreas cercanas a las piscinas.',
]

function ActivityFilter() {
  const [busqueda, setBusqueda] = useState('')

  const actividadesFiltradas = actividades.filter((actividad) =>
    actividad.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <section id="actividades">
      <h2>Lista de actividades</h2>

      <p>Utiliza el buscador para encontrar una actividad.</p>

      <label htmlFor="buscadorActividades">Buscar actividad:</label>

      <input
        type="text"
        id="buscadorActividades"
        placeholder="Ej. nadar, mirador, cuevas..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

      <ul id="listaActividades">
        {actividadesFiltradas.length > 0 ? (
          actividadesFiltradas.map((actividad) => <li key={actividad}>{actividad}</li>)
        ) : (
          <li>No se encontraron actividades que coincidan con la búsqueda.</li>
        )}
      </ul>

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default ActivityFilter
