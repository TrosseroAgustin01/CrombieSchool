let nombre = "agustin";
let nombre2 = "martin";

if(nombre == "agustin"){
    const nombre3 = "tango";
    console.log(nombre2);
}

// Clasica
const persona1 = {
    nombre: "Juani",
    edad: 24,
    saludar: function () {
      console.log("Hola me llamo ", this.nombre);
    },
  };
  persona1.saludar();
  // Funciones de flecha
  const persona2 = {
    nombre: "Juani",
    edad: 24,
    saludar: () => {
      console.log("Hola me llamo ", this.nombre);
    },
  };
  persona2.saludar();
  // Return implicito
  const persona3 = {
    nombre: "Juani",
    edad: 24,
    saludar: () => "Hola",
  };