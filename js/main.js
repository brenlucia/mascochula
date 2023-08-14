// Obtener elementos del DOM
const nombreInput = document.getElementById('floatingInput');
const emailInput = document.getElementById('floatingEmail');
const mensajeTextarea = document.getElementById('floatingTextarea');
const botonEnviar = document.querySelector('.botonEnviar');
const botonReset = document.querySelector('.botonReset');
const cantidadConsultasSpan = document.getElementById('cantidadConsultas');

// Agregar manejadores de eventos
botonEnviar.addEventListener('click', enviarFormulario);
botonReset.addEventListener('click', resetearFormulario);

// Función para manejar el envío del formulario
function enviarFormulario() {
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeTextarea.value;

    // Crear un objeto con los datos de la consulta
    const consulta = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    // Obtener consultas anteriores del localStorage
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

    // Agregar la nueva consulta al arreglo
    consultas.push(consulta);

    // Almacenar el arreglo actualizado en el localStorage
    localStorage.setItem('consultas', JSON.stringify(consultas));

    // Actualizar el contador de consultas
    cantidadConsultasSpan.textContent = `Cantidad de consultas registradas: ${consultas.length}`;

    // Limpiar los campos del formulario
    nombreInput.value = '';
    emailInput.value = '';
    mensajeTextarea.value = '';
}

// Función para resetear el formulario
function resetearFormulario() {
    nombreInput.value = '';
    emailInput.value = '';
    mensajeTextarea.value = '';
}

// Mostrar consultas almacenadas al cargar la página
function mostrarConsultasAlmacenadas() {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    cantidadConsultasSpan.textContent = `Cantidad de consultas registradas: ${consultas.length}`;
}

// Llamamos a la función al cargar la página
mostrarConsultasAlmacenadas();
