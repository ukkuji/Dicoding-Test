/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini
let newSiswa = {
  ...siswa, 
  pekerjaan : 'programmer',
  umur : 23
}

// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
let {pekerjaan, ...sisanya} = newSiswa;
console.log(pekerjaan);
console.log(sisanya);

// soal C ekstrak berdasarkan  input user
// let yangMauDiekstrak = "nama" ;

let {["nama"]:y}=newSiswa;
console.log(y);
// console.log(rest);