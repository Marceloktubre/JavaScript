const vector1 = [];
const vector2 = [];

// Rellenar los vectores con valores aleatorios
for (let i = 0; i < 5; i++) {
  const valorAleatorio = Math.floor(Math.random() * 100); // Generar un valor aleatorio entre 0 y 99
  vector1.push(valorAleatorio);
  vector2.push(valorAleatorio * 2); // El segundo vector es el doble del primero
}

// Mostrar los vectores por pantalla
console.log("Vector 1: " + vector1.join(", "));
console.log("Vector 2: " + vector2.join(", "));