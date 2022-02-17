//Determinar si un pedido es postre o torta. Y agregar descuento.



let valorPostre = 35000;
let valorTorta = 50000;
const descuento = 10000;


const total = valorTorta - descuento;

const tienda = (producto) => {
    const compra = (producto === 'Postre') ? (
        `Su compra es un postre y cuesta ${valorPostre}`) : (
        `Su compra es una torta y con descuento queda en : ${total}`);
    return compra;


}

console.log(tienda('Postre'));

//------------------------------------

arrayConcierto = {
    medellin: 'Agosto 18',
    bogota: 'Agosto 11',
    cali: 'Agosto 15',
    barranquilla: 'Agosto 28',
}

const consultaconciento = (ciudad) => ciudad === 'Medellin' ? 'La fecha del concierto es el 18 de Agosto' :
    ciudad === 'Bogota' ? 'La fecha del concierto es el 11 de Agosto' :
        ciudad === 'Cali' ? 'La fecha del concierto es el 15 de Agosto' :
            ciudad === 'Barranquilla' ? 'La fecha del concierto es el 28 de Agosto' : 'No hay fecha definida para esa ciudad';

console.log(consultaconciento('x'));

//------------------------------------

const d = document;

const captura = () => {
    let nombre = d.getElementById('nombre').value; 
    let apellido = d.getElementById('apellido').value; 
    let telefono = d.getElementById('telefono').value; 
    let cantidad = parseFloat(d.getElementById('cantidad').value); 
    let tribuna = d.getElementById('tribuna').value; 
    let total;
    let valorAbonoSurNorte = 144000;
    let v;

    let abonos = tribuna === 'Sur-Norte' ? (144000 - cantidad): 
                 tribuna === 'Oriental' ? (215000 - cantidad): 
            tribuna === 'Occidental' ? (444000 - cantidad) : ('');
    
    let valorAbonos = tribuna === 'Sur-Norte' ? (144000) :
                      tribuna === 'Oriental' ? (215000) :
                      tribuna === 'Occidental' ? (444000) : ('');
    
     
     
     

    d.getElementById('resulNom').innerHTML = (`Hola ${nombre} ${apellido}`);
    d.getElementById('resulApe').innerHTML = (`Los datos de tus abonos son :`);
    d.getElementById('resulTel').innerHTML = (`Teléfono : ${telefono}`);
    d.getElementById('resulTotal').innerHTML = (`Costo total del abono : ${valorAbonos}`);
    d.getElementById('resulCan').innerHTML = (abonos ? (`Abono $: ${cantidad} y restan $: ${abonos}`): ('Debe ingresar los datos'));
    d.getElementById('resulTri').innerHTML = (`Tribuna : ${tribuna}`);
/*
  / --------------------------------------------------------
    let arrayInput = new Array();
    let input = d.getElementsByClassName('dato'), namesValues = [].map.call(input, (dataInput) => {
        arrayInput.push(dataInput.value);
        
    }) 
    d.getElementById('resul').innerHTML = arrayInput;
    limpiar();
    */

    
   

   
}

const limpiar = () => {
      d.getElementById('nombre').value='';
    d.getElementById('apellido').value='';
     d.getElementById('telefono').value='';
     d.getElementById('cantidad').value='';
     d.getElementById('tribuna').value=''; 
}