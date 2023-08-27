// Solicitar una frase al usuario
var frase = prompt("Ingrese una frase:");

// Crear una variable para almacenar la frase con espacios entre cada letra
var fraseConEspacios = "";

// Recorrer cada letra de la frase
for (var i = 0; i < frase.length; i++) {
  // Agregar la letra actual a la frase con espacios
  fraseConEspacios += frase.charAt(i);

  // Agregar un espacio después de la letra, excepto en el último carácter
  if (i !== frase.length - 1) {
    fraseConEspacios += " ";
  }
}

// Mostrar la frase con espacios entre cada letra
console.log(fraseConEspacios);