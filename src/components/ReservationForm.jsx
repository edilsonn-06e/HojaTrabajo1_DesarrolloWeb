import { useState } from 'react'

function ReservationForm() {
  const [nombre, setNombre] = useState('')
  const [personas, setPersonas] = useState('')
  const [mensaje, setMensaje] = useState(null)

  const handleSubmit = (evento) => {
    evento.preventDefault()

    const nombreLimpio = nombre.trim()

    if (nombreLimpio === '' || personas === '') {
      setMensaje({ texto: 'Por favor, complete todos los campos.', tipo: 'error' })
      return
    }

    if (Number(personas) <= 0) {
      setMensaje({ texto: 'Ingrese una cantidad válida de personas.', tipo: 'error' })
      return
    }

    setMensaje({
      texto: `¡Gracias ${nombreLimpio}, tu solicitud para ${personas} personas ha sido registrada!`,
      tipo: 'exito',
    })

    setNombre('')
    setPersonas('')
  }

  return (
    <section id="reservacion">
      <h2>Reservación de la excursión</h2>

      <p>Completa tus datos para registrar una solicitud de reservación.</p>

      <form id="formularioReserva" onSubmit={handleSubmit}>
        <label htmlFor="nombreReserva">Nombre:</label>

        <input
          type="text"
          id="nombreReserva"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
        />

        <br /><br />

        <label htmlFor="personasReserva">Número de personas:</label>

        <input
          type="number"
          id="personasReserva"
          min="1"
          placeholder="Ej. 2"
          value={personas}
          onChange={(evento) => setPersonas(evento.target.value)}
        />

        <br /><br />

        <button type="submit">Enviar reservación</button>
      </form>

      {mensaje && <p id="mensajeReserva" className={mensaje.tipo}>{mensaje.texto}</p>}

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default ReservationForm
