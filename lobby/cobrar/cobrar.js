document.addEventListener('DOMContentLoaded', function() {
    const monedaSelect = document.getElementById('monedaSelect');
    const monedaImagen = document.getElementById('monedaImagen');
    const montoMXNInput = document.getElementById('montoMXN');
    const aceptarButton = document.getElementById('aceptarButton');
    const codigoQrContainer = document.getElementById('codigoQrContainer');
    const conversionResultado = document.getElementById('conversionResultado');

    // Objeto con valores de moneda para conversiones (manualmente ingresados)
    const valoresMonedas = {
        usdt: 17.16,
        btc: 1059776, 
        eth: 49660   
    };

    // Función para cargar la imagen correspondiente a la moneda seleccionada
    function cargarImagenMoneda() {
        const monedaSeleccionada = monedaSelect.value;
        const imagenSrc = `${monedaSeleccionada}.png`; // Ruta a las imágenes de las monedas
        monedaImagen.src = imagenSrc;
    }

    // Llamar a la función para cargar la imagen de la moneda al inicio de la página
    cargarImagenMoneda();

    // Evento al cambiar la selección de la moneda
    monedaSelect.addEventListener('change', function() {
        cargarImagenMoneda();
    });

    // Evento al hacer clic en el botón Aceptar
    aceptarButton.addEventListener('click', function() {
        const monedaSeleccionada = monedaSelect.value;
        const montoMXN = parseFloat(montoMXNInput.value);

        if (!isNaN(montoMXN) && montoMXN >= 0) {
            const cantidadMoneda = montoMXN / valoresMonedas[monedaSeleccionada];
            conversionResultado.textContent = `Cantidad equivalente: ${cantidadMoneda.toFixed(8)} ${monedaSeleccionada.toUpperCase()}`;

            // Llamada a mostrar el código QR
            mostrarCodigoQR();
        }
    });

    // Función para mostrar el código QR (simulada)
    function mostrarCodigoQR() {
        const codigoQRImagen = document.createElement('img');
        codigoQRImagen.src = 'qr.png'; 
        codigoQRImagen.alt = 'Código QR';

        // Limpiar contenido anterior y mostrar el código QR
        codigoQrContainer.innerHTML = ''; 
        codigoQrContainer.appendChild(codigoQRImagen);
    }
});

