const multiplos3 = [];
const multiplos5 = [];

for (let k = 0; k <= 100; k++){

    console.log(k,
        (k % 3 == 0) ? ('Fizz') :
        (k % 5 == 0) ? 'Bazz' : '',
        (k % 3 == 0 && k % 5 == 0) ? ' Bazz' : ''
    
    );
    
    
}

 
  