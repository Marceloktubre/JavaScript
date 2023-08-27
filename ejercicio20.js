// Definir la matriz inicial
const matriz = [[3], [6], [9], [12], [15]];

// Crear un nuevo array a partir de los elementos de la matriz
const array = matriz.map(elemento => elemento[0] * 2 + 3);

// Mostrar el array resultante por pantalla
console.log(array);