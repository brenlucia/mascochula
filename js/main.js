document.addEventListener("DOMContentLoaded", function () {
    // Variables para mantener el conteo de consultas
    let cantidadConsultasRegistradas = 0;
  
    // Función para actualizar el texto que muestra la cantidad de consultas
    function actualizarCantidadConsultas() {
      const cantidadConsultasElement = document.getElementById("cantidadConsultas");
      cantidadConsultasElement.textContent = `Cantidad de consultas registradas: ${cantidadConsultasRegistradas}`;
    }
  
    // Función para realizar la suma
    function sumar(a, b) {
      return a + b;
    }
  
    // Función para realizar la resta
    function restar(a, b) {
      return a - b;
    }
  
    // Función para realizar la multiplicación
    function multiplicar(a, b) {
      return a * b;
    }
  
    // Función para realizar la división
    function dividir(a, b) {
      if (b === 0) {
        return "No se puede dividir por cero.";
      }
      return a / b;
    }
  
    // Función para calcular el porcentaje en comparación con un número objetivo
    function calcularPorcentaje(cantidad, objetivo) {
      return (cantidad / objetivo) * 100;
    }
  
    // Evento para capturar la consulta y aumentar el contador
    document.querySelector(".botonEnviar").addEventListener("click", function () {
      const nameInput = document.getElementById("floatingInput").value.trim();
      const emailInput = document.getElementById("floatingPassword").value.trim();
      const messageInput = document.getElementById("floatingTextarea").value.trim();
  
      // Validar que se hayan ingresado datos antes de contar la consulta
      if (nameInput !== "" && emailInput !== "" && messageInput !== "") {
        cantidadConsultasRegistradas++;
        actualizarCantidadConsultas();
  
        // Limpiar el formulario después de contar la consulta
        document.getElementById("floatingInput").value = "";
        document.getElementById("floatingPassword").value = "";
        document.getElementById("floatingTextarea").value = "";
  
        // Mostrar un mensaje de agradecimiento (puedes usar alert() o console.log())
        alert("Gracias por dejar tu consulta.");
      } else {
        // Mostrar un mensaje de error si no se han ingresado todos los datos requeridos
        alert("Por favor, completa todos los campos antes de enviar la consulta.");
      }
    });
  
    // Ejemplo de uso de las funciones para operaciones matemáticas
    const resultadoSuma = sumar(5, 3);
    const resultadoResta = restar(10, 4);
    const resultadoMultiplicacion = multiplicar(6, 2);
    const resultadoDivision = dividir(12, 3);
  
    console.log(`Resultado suma: ${resultadoSuma}`);
    console.log(`Resultado resta: ${resultadoResta}`);
    console.log(`Resultado multiplicación: ${resultadoMultiplicacion}`);
    console.log(`Resultado división: ${resultadoDivision}`);
  
    // Ejemplo de uso de la función para calcular porcentaje
    const objetivo = 100;
    const porcentaje = calcularPorcentaje(cantidadConsultasRegistradas, objetivo);
  
    console.log(`Porcentaje de consultas registradas: ${porcentaje}%`);
  });