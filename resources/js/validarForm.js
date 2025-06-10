//para las validaciones se van a utilizar funciones regex para comprobar que los campos tengan el tipo de dato esperado
document
  .getElementById("serviceForm")
  .addEventListener("submit", function (event) {
    let errores = [];

    const nombre = document.getElementById("serviceName").value.trim();
    const rut = document.getElementById("serviceRut").value.trim();
    const contacto = document.getElementById("serviceContacto").value.trim();
    const tipoServicio = document.getElementById("serviceType").value;
    const tipoDispositivo = document.getElementById("mobileType").value;
    const fecha = document.getElementById("serviceFecha").value;
    const valor = document.getElementById("serviceValor").value.trim();
    const detalles = document.getElementById("serviceDetalles").value.trim();

    if (!nombre) {
      errores.push("El nombre es obligatorio.");
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      errores.push("El nombre solo debe contener letras y espacios.");
    }

    if (!rut) {
      errores.push("El RUT es obligatorio.");
    } else if (!/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/.test(rut)) {
      errores.push("El RUT debe tener el formato 10.123.456-7.");
    }

    if (!contacto) {
      errores.push("El contacto es obligatorio.");
    } else if (!/^\d{9}$/.test(contacto)) {
      errores.push("El contacto debe tener 9 dígitos numéricos.");
    }
    if (!tipoServicio) errores.push("Debe seleccionar un tipo de servicio.");
    if (!tipoDispositivo)
      errores.push("Debe seleccionar un tipo de dispositivo.");

    if (!valor) {
      errores.push("El precio es obligatorio.");
    } else if (isNaN(valor) || Number(valor) <= 0) {
      errores.push("El precio debe ser un número positivo.");
    }

    if (detalles && !/^[\w\sáéíóúÁÉÍÓÚñÑ.,;:()\-]+$/.test(detalles)) {
      errores.push("Los detalles solo pueden contener texto y signos básicos.");
    }

    if (errores.length > 0) {
      event.preventDefault();
      alert(errores.join("\n"));
    }
  });
