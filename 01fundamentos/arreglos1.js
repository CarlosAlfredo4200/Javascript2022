
//------Arreglos = lista de información com la del supermecado---------//

const DiosArr = new Array(3);
console.log(DiosArr);

const Dios = ["DIOS", "Jesús", "Espiritu santo"];
console.log({ Dios });
console.log(Dios);
console.log('Imp posición 0: ' + Dios[0]);

const arrCosas = [
    'Carro',
    true,
    123,
    5 * 4,
    function () {},
    () => { },
    {
        a: 1,
        b: 2,
        c: 4 + 6
    },
    ["cero", "uno", "dos", ['x', 'y']]

];
 console.log('Array completo: '+ arrCosas);
 console.log('Propiedad 4: '+ arrCosas[4]);
 console.log('Objeto dntro : '+ arrCosas[7][3][1]);

//--iterar el arreglo con for in--------------
 
for (propiedades in arrCosas) {
    console.log(propiedades);
    console.log(arrCosas[propiedades]);
}
