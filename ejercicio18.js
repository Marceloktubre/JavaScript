var valores = [true, 5, false, "hola", "adios", 2];

// a) Determinar cual de los dos elementos de texto es mayor
const texto1 = valores[3];
const texto2 = valores[4];
if (texto1.length > texto2.length) {
  console.log(texto1 + " es mayor que " + texto2);
} else if (texto2.length > texto1.length) {
  console.log(texto2 + " es mayor que " + texto1);
} else {
  console.log("Los textos son igual de largos");
}

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
const resultadoTrue = valores[0] || valores[2];
const resultadoFalse = valores[0] && valores[2];
console.log("Resultado true: " + resultadoTrue);
console.log("Resultado false: " + resultadoFalse);

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
const numero1 = valores[1];
const numero2 = valores[5];
console.log(numero1 + " + " + numero2 + " = " + (numero1 + numero2));
console.log(numero1 + " - " + numero2 + " = " + (numero1 - numero2));
console.log(numero1 + " * " + numero2 + " = " + (numero1 * numero2));
console.log(numero1 + " / " + numero2 + " = " + (numero1 / numero2));
console.log(numero1 + " % " + numero2 + " = " + (numero1 % numero2));