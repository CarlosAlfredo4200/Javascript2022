//Generar dinamincamente los codigos en array

let arCodigo = [];
let arb = {};

for (let k = 1; k <= 5; k++) {
    arCodigo.push(Math.round(Math.random() * 100000000))

}
console.log(arCodigo);

//Acceder a la tabla
let tablaCodigo = document.getElementById('codigos');
    
//Crear el elemento
let cuerpoTabla = document.createElement('tbody');

//Iterar los elementos  del array
 
arCodigo.forEach((e) => {
    console.log(e);
    let fila = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = 'Hola'
    
    let td = document.createElement('td');
    td.innerText = e;

    fila.appendChild(td)
     
    cuerpoTabla.appendChild(fila)

 });
tablaCodigo.appendChild(cuerpoTabla)
