document.addEventListener('DOMContentLoaded', function() {
    const cantidadUSDTInput = document.getElementById('cantidadUSDT');
    const montoARecibirOutput = document.getElementById('montoARecibir');
    const saldoDisponibleSpan = document.getElementById('saldoDisponibleSpan');
    const mensajeExito = document.querySelector('.mensaje-exito');

    let tipoCambioUSDT_MXN = 17.15; // Inicializar el tipo de cambio USDT a MXN (fijo)

    // Función para actualizar el tipo de cambio de forma aleatoria cada 30 segundos
    function actualizarTipoCambio() {
        const cambio = (Math.random() * 0.1) - 0.05; // Número aleatorio entre -0.05 y 0.05
        tipoCambioUSDT_MXN += cambio; // Aplicar el cambio al tipo de cambio actual

        // Actualizar el texto del tipo de cambio en la interfaz
        const tipoCambioText = `1 USDT = ${tipoCambioUSDT_MXN.toFixed(2)} MXN`;
        document.getElementById('tipoCambio').textContent = tipoCambioText;

        // Volver a calcular y actualizar el monto a recibir si hay una cantidad ingresada
        const cantidadUSDT = parseFloat(cantidadUSDTInput.value);
        if (!isNaN(cantidadUSDT) && cantidadUSDT >= 0) {
            calcularMontoARecibir(cantidadUSDT);
        }
    }

    // Iniciar la actualización del tipo de cambio cada 30 segundos
    setInterval(actualizarTipoCambio, 15000);

    cantidadUSDTInput.addEventListener('input', function() {
        const cantidadUSDT = parseFloat(this.value); // Cantidad ingresada por el usuario en USDT
        calcularMontoARecibir(cantidadUSDT);
    });

    const aceptarButton = document.getElementById('aceptarButton');
    aceptarButton.addEventListener('click', function() {
        const cantidadUSDT = parseFloat(cantidadUSDTInput.value);
        const saldoDisponibleUSDT = obtenerSaldoDisponible(); // Obtener saldo disponible en USDT

        if (cantidadUSDT <= saldoDisponibleUSDT) {
            mensajeExito.style.display = 'block';
        }
    });

    function calcularMontoARecibir(cantidadUSDT) {
        if (isNaN(cantidadUSDT) || cantidadUSDT < 0) {
            montoARecibirOutput.textContent = '0 MXN';
            return;
        }

        const montoMXN = cantidadUSDT * tipoCambioUSDT_MXN; // Calcular el monto a recibir en MXN
        montoARecibirOutput.textContent = `${montoMXN.toFixed(2)} MXN`;
    }

    function obtenerSaldoDisponible() {
        const saldoText = saldoDisponibleSpan.textContent.trim();
        const saldoUSDT = parseFloat(saldoText.replace(/[^\d.-]/g, ''));
        return saldoUSDT;
    }
});
