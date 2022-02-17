const Dios = ["DIOS", "Jesús", "Espiritu santo","Santo","Sublime"];

console.warn('For tradicional');

for (let k = 0; k < Dios.length; k++) {
     console.log(k, Dios[k]);
}

//-----------------------------

console.warn('For in');

for (const i in Dios) {
    console.log(i, Dios[i]);
    }

//---------------------------- obtener valores de arreglos mas sencillos


console.warn('For of');

for (const Dio of Dios) {
    console.log(Dio);
}




let ar = [];
let arb = {};

for (let k = 1; k <= 5; k++){
    ar.push(Math.round(Math.random() * 100000000))
    
}
console.log(ar);

for (let ars of ar) {
    console.log(ars);
}

const lista = document.createElement('ul');

console.log(Math.round(Math.random() * 100000000))

 