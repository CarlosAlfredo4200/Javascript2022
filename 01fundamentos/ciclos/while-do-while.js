const carros = ['Ford','Mazda','Honda','Toyota'];


let k=0;
let i=0;
let j=0;
//la condicion interna debe ser verdadera (Diferentes de =undefined, null, false)

console.warn('While tradicional');
while( k < carros.length){
    console.log(carros[k]);
    //incrementar la k
    //k = k + 1;
    k++;

}

//------------------
console.warn('while corto');
while(carros[i]){
    console.log(carros[i]);
    //incrementar la k
    //k = k + 1;
    i++;

}

//----------Do while---------------

console.warn('Do while');
do{
    console.log(carros[j]);
    j++;
}while (carros[j]) 