// Solicitar al usuario que ingrese un valor límite positivo
var limite = parseInt(prompt("Ingrese un valor límite positivo:"));

// Validar que el límite sea positivo
while (limite <= 0) {
  limite = parseInt(prompt("El valor límite debe ser positivo. Ingrese nuevamente:"));
}

// Solicitar números al usuario hasta que la suma supere el límite
var suma = 0;
var numero;
while (suma <= limite) {
  numero = parseInt(prompt("Ingrese un número:"));
  suma += numero;
}

// Mostrar el resultado por pantalla
console.log("La suma de los números introducidos supera el límite inicial.");
console.log("Suma total: " + suma);