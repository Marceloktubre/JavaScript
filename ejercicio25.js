function getFormValores() {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const apellido = document.querySelector('input[name="apellido"]').value;
    
    console.log(`Nombre: ${nombre} | Apellido: ${apellido}`);
  }