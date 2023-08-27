const circulo = {
    radio: 0,
    calcularArea: function() {
      return Math.PI * this.radio * this.radio;
    },
    calcularPerimetro: function() {
      return 2 * Math.PI * this.radio;
    }
  };
  
  // Pedir al usuario el valor del radio
  circulo.radio = parseFloat(prompt("Introduce el valor del radio del círculo:"));
  
  // Calcular el área y el perímetro del círculo
  const area = circulo.calcularArea();
  const perimetro = circulo.calcularPerimetro();
  
  // Mostrar los resultados en la consola
  console.log("El área del círculo es: " + area.toFixed(2));
  console.log("El perímetro del círculo es: " + perimetro.toFixed(2));