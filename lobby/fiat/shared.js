// Variable global para el saldo disponible
var saldoDisponible = 10000; // Saldo inicial de $10,000

// Función para obtener el saldo disponible
function getSaldoDisponible() {
    return saldoDisponible;
}

// Función para formatear el saldo como texto
function formatSaldo(saldo) {
    return `${saldo} USDT`;
}

// Función para actualizar el saldo disponible
function actualizarSaldo(nuevoSaldo) {
    saldoDisponible = nuevoSaldo;
}
