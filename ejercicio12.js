const tipoDato = (arg) => typeof arg;

console.log(tipoDato("Hola")); // Devuelve "string"
console.log(tipoDato(123)); // Devuelve "number"
console.log(tipoDato(true)); // Devuelve "boolean"
console.log(tipoDato(null)); // Devuelve "object"
console.log(tipoDato(undefined)); // Devuelve "undefined"