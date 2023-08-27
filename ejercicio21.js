// Definir el objeto Persona
const persona = {
    nombre: "Marcos",
    edad: 30,
    sexo: "H",
    peso: 75,
    altura: 1.80
  };
  
  // Obtener un array con las propiedades del objeto Persona
  const propiedades = Object.keys(persona);
  
  // Mostrar el array resultante por pantalla
  console.log(propiedades);