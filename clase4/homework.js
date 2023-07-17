const checkIfIsInterger = (int) => {
    if(Number.isInteger(int)){
        return true;
    }else false;
}

//  Crear una función que reciba un array y genere una copia del mismo pero con todos los elementos multiplicados por 5. Se debe usar la Asignación de multiplicación: x*=y (PPT Clase 3)

console.log(checkIfIsInterger(4,3))

const arrayMultiplayer = (arr) => {
    arr.map(e => e = e*5);
};

const arrProm = (arr,start,end) => {
    let acc = 0;

    for (let i = start; i < end; i++) {
        acc += arr[i];
    }
    return acc / (end - start);
};

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
function solution(inputString) {
      inputString=removeAccents(inputString);
      inputString=inputString.replace(/ /g,'');
      inputString=inputString.toUpperCase();
      let reverso = "";
      for(let i = inputString.length-1; i>=0; i--){
        reverso+=inputString[i];
      }
      console.log(reverso);
      console.log(inputString);
     return (reverso==inputString);
  }
  console.log(solution("Acaso hubo búhos acá"));

