document.addEventListener("DOMContentLoaded", function () {


    // GALERÍA DE IMÁGENES


    const imagenesGaleria =
        document.querySelectorAll("#galeria figure img");

    const modal =
        document.getElementById("modalImagen");

    const imagenModal =
        document.getElementById("imagenModal");

    const tituloModal =
        document.getElementById("tituloModal");

    const cerrarModal =
        document.getElementById("cerrarModal");


    imagenesGaleria.forEach(function (imagen) {

        imagen.addEventListener("click", function () {

            imagenModal.src = imagen.src;

            imagenModal.alt = imagen.alt;


            const figura =
                imagen.closest("figure");


            const descripcion =
                figura.querySelector("figcaption").textContent;


            tituloModal.textContent =
                descripcion;


            modal.classList.add("mostrar");

        });

    });



    cerrarModal.addEventListener("click", function () {

        modal.classList.remove("mostrar");

    });



    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {

            modal.classList.remove("mostrar");

        }

    });



    // CALCULADORA DE COTIZACIÓN


    const asistentes =
        document.getElementById("asistentes");

    const paquete =
        document.getElementById("paquete");

    const transporte =
        document.getElementById("transporte");

    const alimentacion =
        document.getElementById("alimentacion");

    const equipo =
        document.getElementById("equipo");

    const calcularTotal =
        document.getElementById("calcularTotal");

    const resultadoCotizacion =
        document.getElementById("resultadoCotizacion");



    calcularTotal.addEventListener("click", function () {


        const cantidad =
            Number(asistentes.value);


        if (cantidad <= 0) {

            resultadoCotizacion.textContent =
                "Ingrese una cantidad válida de asistentes.";

            return;

        }



        let precioPersona = 850;



        if (paquete.value === "aventura") {

            precioPersona = 1000;

        }



        if (paquete.value === "completo") {

            precioPersona = 1200;

        }



        let total =
            precioPersona * cantidad;



        if (transporte.checked) {

            total =
                total + (150 * cantidad);

        }



        if (alimentacion.checked) {

            total =
                total + (100 * cantidad);

        }



        if (equipo.checked) {

            total =
                total + (75 * cantidad);

        }



        resultadoCotizacion.textContent =
            "Precio total estimado: Q" + total.toFixed(2);

    });



    // BUSCADOR DE ACTIVIDADES


    const buscador =
        document.getElementById("buscadorActividades");


    const listaActividades =
        document.querySelectorAll("#listaActividades li");



    buscador.addEventListener("input", function () {


        const texto =
            buscador.value.toLowerCase();



        listaActividades.forEach(function (actividad) {


            const nombreActividad =
                actividad.textContent.toLowerCase();



            if (nombreActividad.includes(texto)) {

                actividad.classList.remove("oculto");

            }

            else {

                actividad.classList.add("oculto");

            }


        });


    });



    // FORMULARIO DE RESERVACIÓN


    const formularioReserva =
        document.getElementById("formularioReserva");


    const mensajeReserva =
        document.getElementById("mensajeReserva");



    formularioReserva.addEventListener("submit", function (evento) {


        evento.preventDefault();



        const nombre =
            document.getElementById("nombreReserva").value.trim();


        const correo =
            document.getElementById("correoReserva").value.trim();


        const personas =
            document.getElementById("personasReserva").value;



        if (
            nombre === "" ||
            correo === "" ||
            personas === ""
        ) {


            mensajeReserva.textContent =
                "Por favor, complete todos los campos.";


            mensajeReserva.classList.add("error");

            mensajeReserva.classList.remove("exito");


            return;

        }



        if (Number(personas) <= 0) {


            mensajeReserva.textContent =
                "Ingrese una cantidad válida de personas.";


            mensajeReserva.classList.add("error");

            mensajeReserva.classList.remove("exito");


            return;

        }



        mensajeReserva.textContent =
            "¡Gracias " +
            nombre +
            ", tu solicitud para " +
            personas +
            " personas ha sido registrada!";



        mensajeReserva.classList.remove("error");

        mensajeReserva.classList.add("exito");



        formularioReserva.reset();


    });



    // RESEÑAS ALEATORIAS


    const nombres = [

        "Ana Gómez",

        "Carlos López",

        "María Rodríguez",

        "José Hernández",

        "Sofía Martínez"

    ];



    const comentarios = [

        "Una experiencia increíble, las piscinas son hermosas.",

        "El viaje estuvo muy bien organizado y el paisaje es impresionante.",

        "Me encantó subir al mirador y conocer Semuc Champey.",

        "Las actividades fueron muy divertidas y los guías muy amables.",

        "Definitivamente volvería a realizar esta excursión."

    ];



    const nombreResena =
        document.getElementById("nombreResena");


    const comentarioResena =
        document.getElementById("comentarioResena");


    const nuevaResena =
        document.getElementById("nuevaResena");



    function mostrarResena() {


        const posicionNombre =
            Math.floor(
                Math.random() * nombres.length
            );


        const posicionComentario =
            Math.floor(
                Math.random() * comentarios.length
            );



        nombreResena.textContent =
            nombres[posicionNombre];


        comentarioResena.textContent =
            comentarios[posicionComentario];


    }



    nuevaResena.addEventListener("click", function () {

        mostrarResena();

    });



    mostrarResena();


});