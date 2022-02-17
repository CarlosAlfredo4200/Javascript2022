function esposa(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}
const miEsposa = esposa('Andrea', 'montoya');
console.log(miEsposa);



//--- desde el EM6 si el nombre de la propiedad es exactamente igual al nombre de la variable----(nombre: nombre,)

function esposa2(nombre, apellido) {
    return {nombre, apellido}
}
const miEsposa2 = esposa2('Andrea', 'montoya');
console.log(miEsposa2);

//---version flecha--------
const miEsposa3 = (nombre, apellido) => ({nombre, apellido});
const mami = miEsposa3('Surley', 'Montoya');

console.log(mami);

/*-------Argumentos desde flecha  se llaman con ...xxx Parametro Rest()
Cuando lo paso como argumento entre parentesis de una funcinón ...= une todos los argumentos 
en una sola variable y conviertelos en un arreglo, 
En cualquier otro lugar los ...= Spread Operator (...) y sinboliza separa los elementos y rompe la referencia de jsscript.



*/

const imprimArguments = (edad, ...args) => {
    console.log({ edad, args });
}
imprimArguments(10, true, false, 'Carlos', 'Hola')

//-----Destructuración (estraer valores facilmente)  ---------------------------

const imprimArgumentsDestructu = (edad, ...args) => {
    return args;
}
 
const [valor1, valor2, valor3, valor4, valor5] = imprimArgumentsDestructu(10, true, false, 'Carlos', 'Hola');
console.log({valor1, valor2, valor3, valor4, valor5});

//------antes---------

const familia = {
    padre: 'Carlos',
    madre: 'Andrea',
    abuela: 'Mercedes',
    hijo: 'Joel',
};

const imprimirFamilia = () => {
    console.log('El padre es: ', familia.padre);
    console.log('La madre es: ', familia.madre);
    console.log('La abuela es: ', familia.abuela);
    console.log('El hijo es: ', familia.hijo);
}

imprimirFamilia(familia);

//----VERSION 2:           con destructuración---------------

const familiab = {
    padres: 'Carlos',
    madres: 'Andrea',
    abuelas: 'Mercedes',
   // hijos: 'Joel',
};
 
                                                    //este valor es por defecto si no llega coloca Dos//
const imprimirFamiliab = ({ padres, madres, abuelas, hijos= 'Dos' }) => {
    console.log('Destructuración');
    console.log({padres});
    console.log({madres});
    console.log({abuelas});
    console.log({hijos});
}

imprimirFamiliab(familiab);
    

 



