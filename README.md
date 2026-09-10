# Excursión a Semuc Champey — Versión React

Migración del sitio estático de la excursión turística a Semuc Champey hacia una
aplicación modular construida con **React** y **Vite**. Cada funcionalidad
interactiva se implementó como un componente independiente y reutilizable dentro
de `src/components/`.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL que indica la terminal (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
├── assets/              Imágenes de la excursión
├── components/          Componentes de React
│   ├── Header.jsx
│   ├── Description.jsx
│   ├── Gallery.jsx
│   ├── ImageModal.jsx
│   ├── Itinerary.jsx
│   ├── ActivityFilter.jsx
│   ├── QuoteCalculator.jsx
│   ├── ReservationForm.jsx
│   ├── Testimonials.jsx
│   ├── Recommendations.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx              Compone la página uniendo todos los componentes
├── main.jsx             Punto de entrada de React
└── index.css            Estilos globales del sitio
```

## Descripción de los componentes

- **Header.jsx**: encabezado principal con el título de la excursión y el
  índice de navegación de la página.
- **Description.jsx**: descripción general del destino turístico e información
  básica del lugar.
- **Gallery.jsx / ImageModal.jsx** — *Galería de imágenes interactiva*: muestra
  una cuadrícula con las fotografías de los atractivos de la excursión. Al hacer
  clic sobre una miniatura, `Gallery` guarda la imagen seleccionada en su estado
  y renderiza `ImageModal`, un visor ampliado con la imagen en tamaño grande, su
  descripción y un botón (además de un clic fuera del contenido) para cerrarlo.
- **Itinerary.jsx**: tabla con el itinerario de tres días de la excursión.
- **ActivityFilter.jsx** — *Filtro de actividades en tiempo real*: contiene un
  campo de texto que filtra dinámicamente, en cada tecla presionada, la lista de
  actividades disponibles según lo escrito por el usuario.
- **QuoteCalculator.jsx** — *Calculadora de cotización*: permite indicar el
  número de asistentes, elegir un tipo de paquete (`<select>`) y marcar
  servicios adicionales (`<checkbox>`). El precio total estimado se recalcula
  automáticamente mediante el estado de React cada vez que cambia cualquier
  opción, sin necesidad de recargar la página.
- **ReservationForm.jsx** — *Formulario de reservación*: solicita nombre
  completo y número de personas a reservar. Valida que ningún campo obligatorio
  quede vacío y que el número de personas no sea negativo ni cero; al enviarse
  correctamente muestra un mensaje de confirmación personalizado en pantalla.
- **Testimonials.jsx** — *Reseñas aleatorias*: utiliza dos arreglos internos (un
  arreglo de 5 nombres y un arreglo de 5 comentarios) y un botón "Mostrar otra
  opinión" que combina aleatoriamente un nombre y un comentario cada vez que se
  presiona.
- **Recommendations.jsx**: lista de recomendaciones y objetos a llevar durante
  la excursión.
- **Contact.jsx**: información de contacto, costos y cupos disponibles.
- **Footer.jsx**: pie de página con los datos del autor del sitio.

## Estudiante

**Nombre:** Edilson Enrique Garcia Villeda
**Carné:** 9490-23-2637
