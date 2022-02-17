/* Los en semana se abre 11am
   Fin de semana se abre 9

   Consultar si esta abierto
 */

const dia = 1;//domingo
const horaActual = 11;

let horaApertura;
let mensaje; //Esta abierto, cerrado, hoy abrimos a las 11...

//Primero se determina si es fin  de semana
if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
    console.log('Hora de apertura :' + horaApertura + 'am');
}
else {
    console.log('Semana');
    horaApertura = 11;
    console.log('Hora de apertura :' + horaApertura + 'am');
}

//ahora contrastar con la ora actual

if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto'
}
else
{
    mensaje = `Está cerrado, y abrimos a las ${horaApertura}`
}

console.log({ horaApertura, mensaje });

//------------mejor version -----------------
let mensaje2;

horaApertura = ([0, 6].includes(dia)) ? (9) : (11);
mensaje2 = (horaActual >= horaApertura) ? ('Esta abierto') : (`Está cerrado, y abrimos a las ${horaApertura}`);
console.log(mensaje2);