// Solicitar al usuario que ingrese un carácter
var caracter = prompt("Ingrese un carácter (S/N):");

// Verificar si el carácter ingresado es válido
if (caracter === 'S' || caracter === 'N') {
  console.log("CORRECTO");
} else {
  console.log("INCORRECTO");
}