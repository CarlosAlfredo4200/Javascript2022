/* Al trabajar con primitivos cualquier tipo de asignación
como en el ejemplo o funcion como argumentos se es ta enviando por (VALOR).
*/

let a = 10;
let b = a;
a=30
console.log({ a, b });


//TODOS LOS OBJETOS son enviados por referencia.
let juan = { nombre: 'Juan' };
//let ana = juan; 
let ana = { ...juan };// Solusión al problema Spread Operator (...)
ana.nombre= 'ana'
console.log({juan, ana});

//Ejem 2

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tonny';
    return persona;
};
/*Se paso peter por referencia a la función y cualquier modificación al objeto
va a ser afectado si es retornado por es o es igual
 */

let peter = { nombre: 'Peter' };
let tonny = cambiarNombre(peter);

console.log({ peter, tonny });

//Ejem3

const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});


