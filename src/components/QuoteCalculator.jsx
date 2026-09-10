import { useState } from 'react'

const preciosPaquete = {
  basico: 850,
  aventura: 1000,
  completo: 1200,
}

const precioServicios = {
  transporte: 150,
  alimentacion: 100,
  equipo: 75,
}

function QuoteCalculator() {
  const [asistentes, setAsistentes] = useState(1)
  const [paquete, setPaquete] = useState('basico')
  const [servicios, setServicios] = useState({
    transporte: false,
    alimentacion: false,
    equipo: false,
  })

  const handleServicioChange = (servicio) => {
    setServicios((anterior) => ({ ...anterior, [servicio]: !anterior[servicio] }))
  }

  const cantidad = Number(asistentes) || 0

  let total = preciosPaquete[paquete] * cantidad

  Object.keys(precioServicios).forEach((servicio) => {
    if (servicios[servicio]) {
      total += precioServicios[servicio] * cantidad
    }
  })

  return (
    <section id="cotizacion">
      <h2>Calculadora de Cotización</h2>

      <p>Calcula el costo estimado de tu excursión.</p>

      <label htmlFor="asistentes">Número de asistentes:</label>

      <input
        type="number"
        id="asistentes"
        min="1"
        placeholder="Ej. 2"
        value={asistentes}
        onChange={(evento) => setAsistentes(evento.target.value)}
      />

      <br /><br />

      <label htmlFor="paquete">Tipo de paquete:</label>

      <select id="paquete" value={paquete} onChange={(evento) => setPaquete(evento.target.value)}>
        <option value="basico">Básico - Q850 por persona</option>
        <option value="aventura">Aventura - Q1000 por persona</option>
        <option value="completo">Completo - Q1200 por persona</option>
      </select>

      <h3>Servicios adicionales</h3>

      <label>
        <input
          type="checkbox"
          checked={servicios.transporte}
          onChange={() => handleServicioChange('transporte')}
        />
        Transporte adicional - Q150 por persona
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={servicios.alimentacion}
          onChange={() => handleServicioChange('alimentacion')}
        />
        Alimentación adicional - Q100 por persona
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={servicios.equipo}
          onChange={() => handleServicioChange('equipo')}
        />
        Equipo para actividades - Q75 por persona
      </label>

      <br /><br />

      <h3 id="resultadoCotizacion">
        {cantidad > 0
          ? `Precio total estimado: Q${total.toFixed(2)}`
          : 'Ingrese una cantidad válida de asistentes.'}
      </h3>

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default QuoteCalculator
