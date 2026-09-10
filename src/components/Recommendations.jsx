const items = [
  'Ropa cómoda y fresca.',
  'Traje de baño.',
  'Zapatos adecuados para caminar.',
  'Sandalias resistentes al agua.',
  'Toalla.',
  'Protector solar.',
  'Repelente de insectos.',
  'Gorra o sombrero.',
  'Botella de agua.',
  'Dinero en efectivo.',
  'Bolsa impermeable.',
  'Medicamentos personales.',
]

function Recommendations() {
  return (
    <section id="recomendaciones">
      <h2>Recomendaciones para la excursión</h2>

      <p>Para disfrutar de la excursión se recomienda llevar:</p>

      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>

      <aside>
        <h3>Importante</h3>
        <p>
          Los visitantes deben respetar las indicaciones de los guías,
          evitar dejar basura y proteger las áreas naturales.
        </p>
      </aside>

      <p><a href="#inicio">Regresar al índice</a></p>
    </section>
  )
}

export default Recommendations
