let contador = 0;

document
  .getElementById("mostrarDatosBtn")
  .addEventListener("click", function () {
    contador++;
    switch (contador) {
      case 1:
        // Acción para el primer clic
        document.querySelector(".d-cliente").classList.add("d-none");
        document.querySelector(".d-servicio").classList.remove("d-none");
        break;
      case 2:
        // Acción para el segundo clic
        document.querySelector(".d-valor").classList.remove("d-none");
        document.querySelector(".d-servicio").classList.add("d-none");
        document
          .querySelector('button[type="submit"]')
          .classList.remove("d-none");
        document.querySelector('button[type="button"]').classList.add("d-none");
        break;
      default:
        contador = 0;
    }
  });

const nombreCliente = document.getElementById("serviceName");
const rutCliente = document.getElementById("serviceRut");
const contactoCliente = document.getElementById("serviceContacto");
const tipoServicio = document.getElementById("serviceType");
const tipoDispositivo = document.getElementById("mobileType");
const fechaServicio = document.getElementById("serviceFecha");
const valorServicio = document.getElementById("serviceValor");
const detallesServicio = document.getElementById("serviceDetalles");
const btnRegister = document.getElementById("btnRegistrar");

if (btnRegister) {
  btnRegister.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      !nombreCliente.value ||
      !rutCliente.value ||
      !contactoCliente.value ||
      !tipoServicio.value ||
      !tipoDispositivo.value ||
      !fechaServicio.value ||
      !valorServicio.value ||
      !detallesServicio.value
    ) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const servicio = {
      nombre: nombreCliente.value,
      rut: rutCliente.value,
      contacto: contactoCliente.value,
      tipoServicio: tipoServicio.value,
      tipoDispositivo: tipoDispositivo.value,
      fecha: fechaServicio.value,
      valor: valorServicio.value,
      detalles: detallesServicio.value,
    };
    alert("Servicio registrado exitosamente");
  });
}
