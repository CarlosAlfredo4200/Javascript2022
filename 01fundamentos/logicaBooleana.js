const regresaTrue = () => { 

    console.log('Regresa True');
    return true;
};

const regresaFalse = () => {

    console.log('Regresa False');
    return false;
};

console.warn('Not o la negación');
console.log(true);
console.log(!true);

console.log(!regresaTrue());
console.log(true && true);
 

console.log(regresaFalse() && regresaTrue());