//Estructuras de control

let a = 5;

if (a >= 10) {
    console.log('A es mayor a 10');
}
else {
    console.log('A es menor a 10');
}
 

const hoy = new Date();//Informacion del momento actual
console.log('Datos del día de hoy : ' + hoy);

let dia = hoy.getDay(); //numero del dia de hoy (0 Domingo)
console.log('El dia de hoy Martes: ' + dia);

dia = 3;
const semana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'];

    console.log(semana[dia] || 'Día no definido');