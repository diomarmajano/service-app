let contador = 0;

document.getElementById('mostrarDatosBtn').addEventListener('click', function() {
    contador++;
    switch (contador) {
        case 1:
            // Acción para el primer clic
            document.querySelector('.d-cliente').classList.add('d-none');
            document.querySelector('.d-servicio').classList.remove('d-none');
            break;
        case 2:
            // Acción para el segundo clic
            document.querySelector('.d-valor').classList.remove('d-none');
            document.querySelector('.d-servicio').classList.add('d-none');
            document.querySelector('button[type="submit"]').classList.remove('d-none');
            document.querySelector('button[type="button"]').classList.add('d-none');
            break;
        default:
            contador = 0;
    }
});