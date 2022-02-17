//--funcion tradicional--

function saludar() {
    console.log('Hola desde función');
}

//----funcion anonima (al estar asignado a una constante no hay manerade la reutilización por seguridad)-----

const saludar2 = function (nombre) {
    console.log( arguments );
    console.log('Hola desde función anonima ' + nombre);
};


//----función de flecha--------

const saludosFlecha = (apellido) => console.log(apellido);



saludar();
saludar2('Carlos', 'Casado', 43);
saludosFlecha('Montoya')


//-------------Return-(puedo retornar cualquier cosa)-----------

function returnSaludo() {
    console.log('primero va esto y luegoel return');
    return 100;
}

const retorno = returnSaludo();
console.log(retorno);

function sumar(a, b) {
    console.log('Esto va a sumar');
    return a + b;
}

console.log(sumar(3, 5));

const sumarFlecha = (a, b) => a * b;
console.log('Suma desde flecha: ', sumarFlecha(5, 4));

const aleatorio = () => console.log( Math.random());
aleatorio();

