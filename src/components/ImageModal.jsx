function ImageModal({ image, onClose }) {
  if (!image) return null

  const handleOverlayClick = (evento) => {
    if (evento.target === evento.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal mostrar" onClick={handleOverlayClick}>
      <div className="modal-contenido">
        <button type="button" onClick={onClose} aria-label="Cerrar imagen">
          X
        </button>

        <img src={image.src} alt={image.alt} />

        <p>{image.descripcion}</p>
      </div>
    </div>
  )
}

export default ImageModal
