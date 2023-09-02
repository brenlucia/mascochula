// Obtener elementos del DOM
const nombreInput = document.getElementById('floatingInput');
const emailInput = document.getElementById('floatingEmail');
const mensajeTextarea = document.getElementById('floatingTextarea');
const botonEnviar = document.querySelector('.botonEnviar');
const botonReset = document.querySelector('.botonReset');
const cantidadConsultasSpan = document.getElementById('cantidadConsultas');
const listaPacientes = document.getElementById('listaPacientes'); // Agregamos un elemento para mostrar la lista de pacientes

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

// Función para obtener y mostrar datos ficticios de pacientes desde una API
async function obtenerPacientes() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de pacientes');
        }
        const pacientes = await response.json();
        mostrarPacientes(pacientes);
    } catch (error) {
        console.error('Error al obtener pacientes:', error);
    }
}

// Función para mostrar pacientes en el HTML
function mostrarPacientes(pacientes) {
    listaPacientes.innerHTML = ''; // Limpiamos cualquier contenido anterior

    // Aquí agregamos pacientes ficticios a la lista de pacientes
    const paciente1 = document.createElement('li');
    paciente1.textContent = 'Nombre: Juan Perez, Email: juan@example.com';

    const paciente2 = document.createElement('li');
    paciente2.textContent = 'Nombre: María García, Email: maria@example.com';

    // Agregamos los pacientes ficticios a la lista
    listaPacientes.appendChild(paciente1);
    listaPacientes.appendChild(paciente2);

    // Luego, agregamos los pacientes reales desde la API
    pacientes.forEach((paciente) => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${paciente.name}, Email: ${paciente.email}`;
        listaPacientes.appendChild(li);
    });
}
