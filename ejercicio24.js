const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const diametro = parseFloat(document.querySelector('#diametro').value);
  const radio = diametro / 2;
  
  resultado.textContent = radio.toFixed(2);
});