productos = [
    {
        "nombre": "Producto 1",
        "marca": "Marca 1",
        "precio": 10.99,
        "inventario": 50
    },
    {
        "nombre": "Producto 2",
        "marca": "Marca 2",
        "precio": 19.99,
        "inventario": 25
    },
    {
        "nombre": "Producto 3",
        "marca": "Marca 3",
        "precio": 5.99,
        "inventario": 100
    },
    {
        "nombre": "Producto 4",
        "marca": "Marca 4",
        "precio": 8.99,
        "inventario": 75
    },
    {
        "nombre": "Producto 5",
        "marca": "Marca 5",
        "precio": 14.99,
        "inventario": 40
    },
    {
        "nombre": "Producto 6",
        "marca": "Marca 6",
        "precio": 7.99,
        "inventario": 60
    },
    {
        "nombre": "Producto 7",
        "marca": "Marca 7",
        "precio": 12.99,
        "inventario": 30
    },
    {
        "nombre": "Producto 8",
        "marca": "Marca 8",
        "precio": 9.99,
        "inventario": 55
    },
    {
        "nombre": "Producto 9",
        "marca": "Marca 9",
        "precio": 6.99,
        "inventario": 80
    },
    {
        "nombre": "Producto 10",
        "marca": "Marca 1",
        "precio": 11.99,
        "inventario": 20
    }
];

function productPerOwnership(str,arr){
    let copy = [];
    arr.forEach(element => {
        if(element.marca === str){
            copy.push(element.nombre);
        }
    });

    return copy
}

function overPrice(val,arr) {
    if(typeof val !== "number"){
        console.log("introduzca un numero");
    }
    let copy = [];
    arr.forEach(element => {
        if (element.precio > val) copy.push(element.precio);
    });
    return copy;
}

function nameChanger(arr) {
    let str;
    arr.forEach(element => {
        str = element.marca;
        element.marca = str.concat(str);
    });
}

function priceParameters(arr) {
    let sum = 0;
    let max= 0;
    let promedio;
    let min = arr[0].precio
    for (let i = 0; i < arr.length; i++){
        sum += arr[i].precio;
        if(min > arr[i].precio){
            min = arr[i].precio;
        }
    }   
    arr.forEach(element => {
        if(element.precio > max){
            max = element.precio;
        }
    });
    promedio = sum / arr.length;

    return [promedio,max,min]
}

console.log(productPerOwnership("Marca 1",productos));
console.log(overPrice(10,productos));
console.log(nameChanger(productos));
console.log(priceParameters(productos));