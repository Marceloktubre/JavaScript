// Crear el arreglo A de 50 números reales y llenarlo con valores aleatorios
const A = [];
for (let i = 0; i < 50; i++) {
  A.push(Math.random() * 100); // Generar un número aleatorio entre 0 y 100
}

// Mostrar el arreglo A por pantalla
console.log("Arreglo A sin ordenar: " + A.join(", "));

// Ordenar el arreglo A de menor a mayor
A.sort((a, b) => a - b);

// Crear el arreglo B de 20 números reales
const B = [];

// Copiar los primeros 10 números ordenados del arreglo A al arreglo B
for (let i = 0; i < 10; i++) {
  B.push(A[i]);
}

// Rellenar los últimos 10 elementos del arreglo B con el valor 0.5
for (let i = 10; i < 20; i++) {
  B.push(0.5);
}

// Mostrar los dos arreglos resultantes
console.log("Arreglo A ordenado: " + A.join(", "));
console.log("Arreglo B combinado: " + B.join(", "));