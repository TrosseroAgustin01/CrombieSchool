/*Ejercicio 3: Crear un tipo Merge :advertencia:
En este ejercicio, crearás un tipo de utilidad llamado Merge que tomará dos tipos y los combinará.*/
type Personas<T>={ // la T refiere a que el valor que me va a llegar al momento de definir un objeto de tipo persona pueda ser de cualquier tipo
    nombre: string;
    age: number;
    cursos: Array<T>;
}

const personas: Personas<number> ={
    nombre: 'Marta',
    age : 10,
    cursos: [90]
}

type Hobbies = {
    name : string;
    startingYear : number;
}

type Merge<UNO, DOS> = UNO & DOS // el & nos sirve para decir que el tipo merge extiende de dos tipos

type Mergeado = Merge<Hobbies, Personas<number | string>>

const unido: Mergeado = {
    name: 'unido',
    age: 0,
    cursos: [90],
    nombre  : 'nombre',
    startingYear : 0
}

type Personajes = Record<string, string | number>;

const personajes : Personajes = {
    hola: 'hola',
    perro: 'perro',
}



