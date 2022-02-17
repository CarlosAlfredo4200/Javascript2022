// Siempre hacer referencia con this...

const andrea = {
    nombre: 'Andrea',
    edad: 41,
    imprimir(){
        console.log(`Nombre: ${ this.nombre} y su  edad es ${ this.edad}`);
    }
}

andrea.imprimir()

//Funcion de clase y es la forma mas antigua
function Persona( nombre, edad) {
     
    this.nombre = nombre;
    this.edad = edad;
    this. imprimir = function (){
        console.log(`Nombre: ${this.nombre} y su  edad es ${this.edad}`);
    }
}

const Maria = new Persona('Maria', 42);
console.log(Maria);
Maria.imprimir();

// forma correcta de las clases ---------------------

class PersonaNatural {

    // Inicializando propiedades de clase es opcional
    nombre  = '';
    codigo  = '';
    frase = '';
    comida = '';

    constructor( nombre, codigo, frase) {
        console.log('Hola desde constructor');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;                

    }


    // set y gets y parametros unicos set establecer valor

    set comidaFavorita( comida) {
        this.comida = comida.toUpperCase();
    }

    //recuperar un valor y utilizar el retunr

    get comidaFavirita() {
        return `La comida favorita de  ${this.nombre} es ${ this.comida}`
    }




    // metodos basico sin argumentos y regresa undefined

    quienSoy() {
        console.log(`Soy  ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log('Mi frase');
    }
}


// crear nueva instancia
const spiderMan = new PersonaNatural('Peter', '1234', 'Soy spiderman');
const estudiante = new PersonaNatural('Carlos', '4200', 'Soy estudiante');
console.log(spiderMan);
console.log(estudiante);
 
 
        

//spiderMan.quienSoy();
//estudiante.quienSoy();
//estudiante.miFrase();

estudiante.comidaFavorita = 'El pastel de manzanas';
console.log(estudiante);

console.log(estudiante.comidaFavirita);




