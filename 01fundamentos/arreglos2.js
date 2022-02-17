// Propiedades(variable dentrode los arreglos) y métodos(funciones internas)

let intrumentos = [
    'Guitarra',
    'Flauta',
    'Bateria',
    'Saxo'];

console.log(`El tamaño es: ${intrumentos.length}`);

let primero = intrumentos[0];
let ultimo = intrumentos[intrumentos.length-1];

console.log(`El primero es: ${primero}`);
console.log(`El ultimo es: ${ultimo}`);
console.log(primero, ultimo);


//--------Recorrerlo---------------------
intrumentos.forEach((e, indice, tamañoArr) => {
    console.log({e, indice, tamañoArr});
})

//-------insertar elemento al final--------------
const addInstrumAlfinal = intrumentos.push('Piano','Congas','tuba');
console.log(intrumentos);

//-------insertar elemento al inicio--------------
const addInstrumAlinicio = intrumentos.unshift('Cello','Trampeta');
console.log(intrumentos);


//-------eliminar ultimo elemento --------------
const DeleteultimoInstrum = intrumentos.pop();
console.log({DeleteultimoInstrum});

//-------eliminar posición espesifica del elemento  (apartir posiscion, hasta la posicion ...)--------------
const DeletePosicionEspesicifaInstrum = intrumentos.splice( 2,1);
console.log(intrumentos);

//-------eliminar posición espesifica del elemento  (apartir posiscion, cuantos)
 
const buscarIndice = intrumentos.indexOf('Cello');
console.log(buscarIndice);


