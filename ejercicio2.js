// Obtener el valor de PI
var PI = Math.PI;

// Solicitar al usuario que ingrese el valor del radio
var radio = prompt("Ingrese el valor del radio de la circunferencia:");

// Calcular el área y el perímetro
var area = PI * Math.pow(radio, 2);
var perimetro = 2 * PI * radio;

// Mostrar los resultados por pantalla
console.log("El área de la circunferencia es: " + area);
console.log("El perímetro de la circunferencia es: " + perimetro);