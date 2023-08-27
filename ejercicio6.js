// Solicitar al usuario que ingrese un número entero
var numero = parseInt(prompt("Ingrese un número entero:"));

// Verificar si el número es 0
if (numero === 0) {
  console.log("El número no es par ni impar");
} else if (numero % 2 === 0) {  // Verificar si el número es par
  console.log("El número es par");
} else {  // El número es impar
  console.log("El número es impar");
}