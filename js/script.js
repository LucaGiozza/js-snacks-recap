// Snack 3
// Scrivere una funzione che accetti tre argomenti, 
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori
//  che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// function miaFunction(array,a ,b){

// }
const numeri = [6,8,15,21,24,28, 34];


let numeriTra = numeri.filter((element) => element > 6  );
 numeriTra = numeri.filter((element) => element < 34  );
console.log(numeriTra);
