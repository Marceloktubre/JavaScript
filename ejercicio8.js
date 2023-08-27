// Declarar variables para el máximo, el mínimo y la suma
var maximo = Number.MIN_SAFE_INTEGER;
var minimo = Number.MAX_SAFE_INTEGER;
var suma = 0;
var contador = 0;

// Solicitar números enteros hasta que se ingrese cero
var numero = parseInt(prompt("Ingrese un número entero (0 para terminar):"));
while (numero !== 0) {
  // Actualizar el máximo y el mínimo
  if (numero > maximo) {
    maximo = numero;
  }
  if (numero < minimo) {
    minimo = numero;
  }

  // Sumar el número
  suma += numero;

  // Incrementar el contador
  contador++;

  // Solicitar el siguiente número
  numero = parseInt(prompt("Ingrese un número entero (0 para terminar):"));
}

// Calcular el promedio
var promedio = suma / contador;

// Mostrar resultados
console.log("Máximo: " + maximo);
console.log("Mínimo: " + minimo);
console.log("Promedio: " + promedio);