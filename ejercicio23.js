// Obtener el párrafo por su id
const parrafo = document.getElementById("texto");

// Dividir el texto en palabras
const palabras = parrafo.innerText.split(" ");

// Recorrer cada palabra y resaltar las que tienen más de 8 caracteres
for (let i = 0; i < palabras.length; i++) {
  if (palabras[i].length > 8) {
    palabras[i] = "<span style='background-color: yellow'>" + palabras[i] + "</span>";
  }
}

// Unir las palabras de nuevo en un solo string y actualizar el HTML del párrafo
parrafo.innerHTML = palabras.join(" ");