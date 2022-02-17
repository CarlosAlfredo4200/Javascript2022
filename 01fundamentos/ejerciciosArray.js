//Suma de los elementos de un array

let array = [3, 5, 9, 13];
let suma = 0;

for (let k = 0; k < array.length; k++) {
    suma += array[k];
}

console.log('La suma es: ' + suma);

//------Suma de elementos positivos-----------

let base = [1, -2, 3, 4, -5, 7, -9];
let sumaP = 0;

function positivos(base) {
    for (let k =0; k < base.length; k++) {
        if (base[k] > 0) {
            sumaP += base[k];
        }
    }
    return sumaP;
}

console.log('La suma de los positivos es: ' + positivos(base));


//-------Version flecha ------------------------

let baseb = [1, -2, 3, 4, -5, 7, -9];
let sumab = 0;

const positivosb = (baseb) => {
    for (let k = 0; k < baseb.length; k++) {
        if (baseb[k] > 0) {
            sumab += baseb[k];
        }
    }
    return sumab;
};

console.log('La suma de los positivos es: ' + positivosb(baseb));

//----------Promedio con promedios --------------
let basec = [1, -2, 3, 4, -5, 7, -9,10];
let sumac = 0;
let conter = 0;
let promedio = 0;
const promeArray = (basec) => {

    for (let k = 0; k < basec.length; k++) {
        if (basec[k] > 0) {
            conter = conter +1;
            sumac += basec[k];
            promedio = sumac / conter;

        }

    }
    return sumac;
}
promeArray(basec)

console.log(`La suma es : ${sumac} y el promedio es : ${promedio}`);
console.log('El contador es : ' + conter);

//-----validacion si es un array ---------------


let valArray = 5;
const validaarray = () => {
    if (Array.isArray(valArray)) {
        console.log('Es un array');
    }
    else {
        console.log('Ingresa un array');
    }
};
 
validaarray(valArray)
console.log();

//----------//-------sumar solo los pares ------------------------

let based = [1, -2, 3, 4, -5, 7, -9];
let sumad = 0;

const sumaPares = (based) => {
    for (let k = 0; k < based.length; k++) {
        if (based[k] %2 == 0) {
            sumad += based[k];
        }
    }
    return sumad;
};

console.log('La suma de los pares es: ' + sumaPares(based));

//--------Ordenar datos de un array con sort() miArray.sort(funcion(a,b))-------

let arrayNumber = [4, 8, 5, 7, 3, 5, 6, 4, 1,];
arrayNumber.sort((a, b) => {
    
    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
})

console.log('El array ordenado seria: ' + arrayNumber);

//------------Ordenar String ------------
let arrayString = ['a','f','e','d','s','b','c','Casa','hola'];
arrayString.sort((a, b) => {

    if (a == b) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;
})

console.log('El array ordenado seria: ' + arrayString);

//---------- Ordenar nùmeros decenas. centenas, 

let deceCente = [103, 57, 156, 3, ,1234, 459];
deceCente.sort((a, b) => {
    if (a <= 1000 ) {
        return 1;
    }
    return -1;
});
 
console.log('El array ordenado seria: ' + deceCente);

//------------ Ordenar propiedades internas array-----

const personas = [

    {
        name: 'Carlos',
        edad:43
    },

    {
        name: 'Andrea',
        edad: 42
    },

    {
        name: 'Juan',
        edad: 17
    },

    {
        name: 'Joel',
        edad: 12
    },

];

personas.sort((a, b) => {

    if (a.edad > b.edad) {
        return 1;
    }
    if (a.edad < b.edad) {
        return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
    }
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
    }
    return 0;
});
 console.log(personas);

