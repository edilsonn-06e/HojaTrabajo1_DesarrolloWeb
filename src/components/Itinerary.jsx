const itinerario = [
  { fecha: 'Viernes 14 de agosto', horario: '5:00 a. m.', actividad: 'Reunión de participantes', lugar: 'Ciudad de Guatemala' },
  { fecha: 'Viernes 14 de agosto', horario: '5:30 a. m.', actividad: 'Salida hacia Alta Verapaz', lugar: 'Ciudad de Guatemala' },
  { fecha: 'Viernes 14 de agosto', horario: '1:00 p. m.', actividad: 'Almuerzo y llegada al hospedaje', lugar: 'Lanquín' },
  { fecha: 'Sábado 15 de agosto', horario: '9:00 a. m.', actividad: 'Caminata hacia el mirador', lugar: 'Semuc Champey' },
  { fecha: 'Sábado 15 de agosto', horario: '1:30 p. m.', actividad: 'Natación en piscinas naturales', lugar: 'Semuc Champey' },
  { fecha: 'Domingo 16 de agosto', horario: '8:30 a. m.', actividad: "Visita a las cuevas de K'an Ba", lugar: 'Lanquín' },
  { fecha: 'Domingo 16 de agosto', horario: '7:00 p. m.', actividad: 'Finalización de la excursión', lugar: 'Ciudad de Guatemala' },
]

function Itinerary() {
  return (
    <section id="itinerario">
      <h2>Tabla de itinerarios</h2>

      <p>La excursión tendrá una duración de tres días y dos noches.</p>

      <table border="1">
        <caption>Itinerario de la excursión a Semuc Champey</caption>

        <thead>
          <tr>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Actividad</th>
            <th>Lugar</th>
          </tr>
        </thead>

        <tbody>
          {itinerario.map((fila) => (
            <tr key={`${fila.fecha}-${fila.horario}`}>
              <td>{fila.fecha}</td>
              <td>{fila.horario}</td>
              <td>{fila.actividad}</td>
              <td>{fila.lugar}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default Itinerary
