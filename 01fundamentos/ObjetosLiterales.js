// Objetos literales : Variables con pares de valores

const personajes = {

    nombre: 'Carlos',
    casado: true,
    Apellido: 'Montoya',
    edad: 43,
    hijos: ['Juan Manuel', 'Joel'],

    talentos: {
        principal: 'Cantante',
        secundario: 'Pianista'
    }
};

console.log(personajes);
console.log('Nombre: ',
    personajes.nombre,
    personajes.Apellido + ' Y su edad es :' +
    personajes.edad + ' talentos: ' +
    personajes.talentos.principal);
console.log('Nº de hijos: ' + personajes.hijos.length);
console.log('Ultimo  hijo: ' + personajes.hijos[personajes.hijos.length - 1]);

const estadoCivil = 'casado';
console.log('estado Civil', personajes[estadoCivil]);

//-----mas detalles--------

//---Borrar propiedad----

delete personajes.edad;
console.log(personajes);

//---Leer el objeto en forma de arreglo (Barrer y objtener valores)

const entriesPares = Object.entries(personajes);
console.log(entriesPares);

//-----Bloqueo de propiedades. freeze sol conjelas pas prpopiedades directas mas no a los objetos dentro del objeto.---------

Object.freeze(personajes);

personajes.esposa = 'Andrea'
console.log(personajes);

personajes.talentos.principal = false;
console.log(personajes);

//----listar propiedades del objeto----

const propiedades = Object.getOwnPropertyNames(personajes);
console.log({ propiedades });

const valores = Object.values(personajes);
console.log({ valores });

//---------- Listar propiedades con for in ------------

const balones = {

    rojo: 20,
    verde: 15,
    azul: 35
};

let nomBalores = 0;
for (color in balones) {
    console.log(color);
    nomBalores += balones[color];
}
    
console.log('Sumatoria de los balones: '+ nomBalores);