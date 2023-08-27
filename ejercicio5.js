// Solicitar al usuario que ingrese dos valores numéricos
var valor1 = parseInt(prompt("Ingrese el primer valor numérico:"));
var valor2 = parseInt(prompt("Ingrese el segundo valor numérico:"));

// Solicitar al usuario que ingrese la operación deseada
var operacion = prompt("Ingrese la operación deseada (S para suma, R para resta, M para multiplicación, D para división):");

// Realizar la operación correspondiente
var resultado;
if (operacion === 'S' || operacion === 's') {
  resultado = valor1 + valor2;
} else if (operacion === 'R' || operacion === 'r') {
  resultado = valor1 - valor2;
} else if (operacion === 'M' || operacion === 'm') {
  resultado = valor1 * valor2;
} else if (operacion === 'D' || operacion === 'd') {
  resultado = valor1 / valor2;
} else {
  console.log("Operación inválida");
}

// Mostrar el resultado por pantalla
console.log("El resultado de la operación es: " + resultado);