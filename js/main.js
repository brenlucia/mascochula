document.addEventListener("DOMContentLoaded", function () {
    // Variables para mantener el conteo de consultas
    let cantidadConsultasRegistradas = 0;
  
    // Función para actualizar el texto que muestra la cantidad de consultas
    function actualizarCantidadConsultas() {
      const cantidadConsultasElement = document.getElementById("cantidadConsultas");
      cantidadConsultasElement.textContent = `Cantidad de consultas registradas: ${cantidadConsultasRegistradas}`;
    }
  
    // Función para realizar la suma
    function sumar(a, b, c) {
      return a + b + c;
    }
  
    // Evento para capturar la consulta y aumentar el contador
    document.querySelector(".botonEnviar").addEventListener("click", function () {
      const nameInput = document.getElementById("floatingInput").value.trim();
      const emailInput = document.getElementById("floatingEmail").value.trim();
      const messageInput = document.getElementById("floatingTextarea").value.trim();
  
      // Validar que se hayan ingresado datos antes de contar la consulta
      if (nameInput !== "" && emailInput !== "" && messageInput !== "") {
        cantidadConsultasRegistradas++;
        actualizarCantidadConsultas();
  
        // Limpiar el formulario después de contar la consulta
        document.getElementById("floatingInput").value = "";
        document.getElementById("floatingEmail").value = "";
        document.getElementById("floatingTextarea").value = "";
  
        // Mostrar un mensaje de agradecimiento
        alert("Gracias por dejar tu consulta.");
      } else {
        // Mostrar un mensaje de error si no se han ingresado todos los datos requeridos
        console.log("Por favor, completa todos los campos antes de enviar la consulta.");
      }
    });
  
    // Pedir al usuario la cantidad de gatos, perros y conejos
    const cantidadGatos = parseFloat(prompt("Pequeño cuestionario ¿Cuántos gatos tienes?"));
    const cantidadPerros = parseFloat(prompt("¿Cuántos perros tienes?"));
    const cantidadConejos = parseFloat(prompt("¿Cuántos conejos tienes?"));
  
    // Ejemplo de uso de la función para realizar la suma con los valores ingresados por el usuario
    const resultadoSuma = sumar(cantidadGatos, cantidadPerros, cantidadConejos);
  
    // Mostrar el resultado en una ventana emergente
    alert(`Resultado suma de gatos, perros y conejos: ${resultadoSuma}`);
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Variables para mantener el conteo de consultas
    let cantidadConsultasRegistradas = 0;
  
    // Función para actualizar el texto que muestra la cantidad de consultas
    function actualizarCantidadConsultas() {
      const cantidadConsultasElement = document.getElementById("cantidadConsultas");
      cantidadConsultasElement.textContent = `Cantidad de consultas registradas: ${cantidadConsultasRegistradas}`;
    }
  
    // Función para realizar la suma
    function sumar(a, b, c) {
      return a + b + c;
    }
  
    // Evento para capturar la consulta y aumentar el contador
    document.querySelector(".botonEnviar").addEventListener("click", function () {
      const nameInput = document.getElementById("floatingInput").value.trim();
      const emailInput = document.getElementById("floatingEmail").value.trim();
      const messageInput = document.getElementById("floatingTextarea").value.trim();
  
      // Validar que se hayan ingresado datos antes de contar la consulta
      if (nameInput !== "" && emailInput !== "" && messageInput !== "") {
        cantidadConsultasRegistradas++;
        actualizarCantidadConsultas();
  
        // Limpiar el formulario después de contar la consulta
        document.getElementById("floatingInput").value = "";
        document.getElementById("floatingEmail").value = "";
        document.getElementById("floatingTextarea").value = "";
  
        // Mostrar un mensaje de agradecimiento
        alert("Gracias por dejar tu consulta.");
      } else {
        // Mostrar un mensaje de error si no se han ingresado todos los datos requeridos
        console.log("Por favor, completa todos los campos antes de enviar la consulta.");
      }
    });
  
    // Pedir al usuario la cantidad de gatos, perros y conejos
    const cantidadGatos = parseFloat(prompt("¿Cuántos gatos tienes?"));
    const cantidadPerros = parseFloat(prompt("¿Cuántos perros tienes?"));
    const cantidadConejos = parseFloat(prompt("¿Cuántos conejos tienes?"));
  
    // Ejemplo de uso de la función para realizar la suma con los valores ingresados por el usuario
    const resultadoSuma = sumar(cantidadGatos, cantidadPerros, cantidadConejos);
  
    // Mostrar el resultado en una ventana emergente
    alert(`Resultado suma de gatos, perros y conejos: ${resultadoSuma}`);
  });
  