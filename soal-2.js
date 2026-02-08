/**
 * Menggabungkan array
 */

let array2d = [[1,2,3],[4,5,6],[7,8,9]];

// tulis code di sini
// for (let index = 0; index < array2d.length; index++) {
const newArray2d = array2d.flat(); 
    
// }

console.log(newArray2d); // output: [1,2,3,4,5,6,7,8,9]
console.log(array2d); // output: [[1,2,3],[4,5,6],[7,8,9]] (tetap sama/tidak berubah)