function obtenerPalabraMasLarga(frase) {
    // Dividir la frase en palabras separadas por espacios
    const palabras = frase.split(' ');
  
    // Inicializar la variable para almacenar la palabra más larga
    let palabraMasLarga = '';
  
    // Recorrer cada palabra y actualizar la palabra más larga si corresponde
    for (let i = 0; i < palabras.length; i++) {
      const palabraActual = palabras[i];
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
      }
    }
  
    // Devolver la palabra más larga encontrada
    return palabraMasLarga;
  }
  
  // Ejemplo de uso
  const frase = 'Guia de JavaScript';
  const palabraMasLarga = obtenerPalabraMasLarga(frase);
  console.log(palabraMasLarga);