const revertirPalabra = (palabra) => {
    // Convertir la palabra en un arreglo de caracteres, invertirlo y unirlo nuevamente
    const palabraRevertida = palabra.split('').reverse().join('');
    return palabraRevertida;
  };
  
  // Ejemplo de uso
  const palabra = 'Hola';
  const palabraRevertida = revertirPalabra(palabra);
  console.log(palabraRevertida);