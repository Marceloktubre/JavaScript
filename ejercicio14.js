const libro = {
    ISBN: "",
    titulo: "",
    autor: "",
    numPaginas: 0,
    cargarLibro: function() {
      this.ISBN = prompt("Introduce el número ISBN del libro:");
      this.titulo = prompt("Introduce el título del libro:");
      this.autor = prompt("Introduce el autor del libro:");
      this.numPaginas = parseInt(prompt("Introduce el número de páginas del libro:"));
    },
    mostrarInformacion: function() {
      console.log("ISBN: " + this.ISBN);
      console.log("Título: " + this.titulo);
      console.log("Autor: " + this.autor);
      console.log("Número de páginas: " + this.numPaginas);
    }
  };
  
  // Cargar el libro pidiendo los datos al usuario
  libro.cargarLibro();
  
  // Mostrar la información del libro
  libro.mostrarInformacion();