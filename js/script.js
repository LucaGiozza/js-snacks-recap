// Snack 3
// Scrivere una funzione che accetti tre argomenti, 
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori
//  che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.


const numeri = [6,8,15,21,24,28,34];

let a = 8;
let b = 28;



// mi deve restituire i valori compresi tra 8 e 28 compresi
 let numeriTra = numeri.filter((element) => element > 6 && element < 34  );

console.log(numeriTra);



