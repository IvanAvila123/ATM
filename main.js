const selector = document.getElementById("usuarios");
const cuentas = [
  { id: 10, nombre: "ivan", saldo: '900.00', pin: "0000" },
  { id: 24, nombre: "oscar", saldo: '990.00', pin: "1234" },
  { id: 11, nombre: "rodrigo", saldo: '200.00', pin: "9999" },
];

function solicitarPin() {
  const usuario = selector.value;

  // Buscar la cuenta del usuario en el array de cuentas
  const cuenta = cuentas.find(cuenta => cuenta.nombre === usuario);

  if (cuenta) {
    const pin = prompt("Ingresa tu PIN:");

    // Verificar el PIN ingresado
    if (pin === cuenta.pin) {
      // PIN correcto, abrir una nueva ventana con la información de la cuenta
      const url = "cuenta.html?usuario=" + cuenta.nombre + "&id=" + cuenta.id;
      window.location.href = url;
    } else {
      // PIN incorrecto, mostrar un mensaje de error
      alert("PIN incorrecto. Inténtalo de nuevo.");
    }
  } else {
    // Usuario no válido, mostrar un mensaje de error
    alert("Usuario no válido");
  }
}


