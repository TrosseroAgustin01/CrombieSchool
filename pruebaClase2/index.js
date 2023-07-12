function circleArea (radius){
    return Math.PI * (Math.pow(radius, 2));
}
let profes = ["marta","juana" ,"tundra" ,"lara" ];
function profesorsList(array){
    let second=array[1];
    let last = array[array.length-1];

    let value = `${los profes son: second  y   last}` 
    return value;
}

console.log(profesorsList(profes));

let alumnos = {
    nombre: "Agustin",
    apellidos: "trossero",
    lenguajesProgramacion: "Ninguno soy un tronco",
    edad:21
};

function studentData(objparam){
    if(!objparam){
        return "plese give a properly param";
    }
    console.log(alumnos.nombre + " " + alumnos.objparam);
}

studentData(alumnos.error);
studentData(alumnos.lenguajesProgramacion)