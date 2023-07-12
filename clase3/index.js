const alumnos = [
    {
      nombre: "Jose",
      nota: 10,
    },
    {
      nombre: "pepe",
      nota: 5,
    },
    {
      nombre: "Carlos",
      nota: 1,
    },
    {
      nombre: "Maria",
      nota: 9,
    },
  ];

const arr =  [3, 23, 11, 15, 6, 19, 32, 9];

const string ='LaCrOmbiNeTa';

//1

function students(students){
    let copy = students;
    copy.sort((a,b) => b.nota - a.nota);
    let best = copy[0]
    let filtrados = copy.filter((f) => f.nota == best.nota);
    console.log(filtrados);
    let i = students.length -1 ;
    let worst = students[i];
    return [filtrados , worst] ;
}

//2

function sorted (arr){
    let aux;
    let copy = arr
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i+1]) {
            aux = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = aux;
        }
    }
    while (arr.toString() !== copy.sort((a, b) => b -a).toString()){
        sorted(arr);
    }
    return arr;
}

//3

function upperCases(string){
    let uppcaseLetters='';
    for (let i = 0; i < string.length; i++) {
        if(string[i] == string[i].toUpperCase()){
            uppcaseLetters += string[i]
        }
    }
    return uppcaseLetters;
}

/*con regex 
console.log(string.replace(/[^A-Z]/g, ''))
*/

console.log(students(alumnos));
console.log(sorted(arr));
console.log(upperCases(string));