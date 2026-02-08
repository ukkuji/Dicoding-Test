/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {
  // tulis code di sini
  let newArr= [...arr];
  let actualRotation = num % newArr.length;
  for (let index = 0; index < actualRotation; index++) {
    let last = newArr.pop() // ambil paling belakang masukkan ke last
    newArr.unshift(last) //isi last taroh ke depan deret array
  }
  return newArr;
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)
console.log('rotasi ke-89999999 : ', rotate(angka, 89999999)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)
