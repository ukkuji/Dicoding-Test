// // function tambahItem(...items) {
// //   const itemBaru = ['diskon', ...items];
// //   return itemBaru;
// // }

// const { map } = require("lodash");

// const { toUpper } = require("lodash");

// // const hasil = tambahItem('baju', 'celana', 'sepatu');
// // console.log(hasil);
// // const pesan = 'Selamat datang di aplikasi kami';
// // console.log(pesan);

// let items = ["Camera", "topi", "laptop", "PC","steamdeck" ];
// for (const [index,item] of items.entries()) {
//   if (index %2==0) {
//     console.log("item", item, "harganya 50000");  
//   } else {
//     console.log("item", item, "harganya 10000");
//   }
//   console.log("item pada index ke", index+1,"=>",item );
  
// }  

// // for (let index = 0; index < items.length; index++) {
// //   console.log(items[index]);
// //   items[2] = "wipol";
// //   if (items[index] == "PC"){
// //     break;
// //   }  
// // }

// // let a = "andi";
// // let b = "budi";
// // let c = "carlie";

// // // const gabungan = [].concat(a,b,c);
// // // console.log(gabungan);


// // const kelas = [
// //   ["Andi", "Budi", "Citra"],
// //   ["Dewi", "Eko", "Fajar"],
// //   ["Gita", "Hadi", "Intan"]
// // ];

// // for (let i = 0; i < kelas.length; i++) {
// //     for (let j = 0; j < kelas.length; j++) {
// //       if (kelas[i][j] ==  "Eko") {
// //         console.log("tampilkan index",i,"ke", j, kelas[i][j]);
// //       }
      
      
// //   }
// // }
  
// //   //   const element = array[j];
// //   //   const element = array[i];
// //   // }
  
// //materi object
// // const objectSmartPhone = {
// //   model: 'A300 Turbo',
// //   brand: 'Samsingsung',
// //   battery: '10.000 mAh',
// //   price: 9500000,
// //   camera: ['4.85 MP', '12.0 MP', '34.5 MP'],
// // };

// // const modelSmartphone = objectSmartPhone.model;
// // console.log(`model hp yg sy beli ${modelSmartphone}`);

// // function and lodash=========================================
// // const menghitungRataRataNilai = (arrayNilai) => {
// //   const rataRataNilai = arrayNilai.reduce((totalNilaiSaatIni, nilaiArrayItem) => {
// //       return (totalNilaiSaatIni += nilaiArrayItem);
// //     }, 0) / arrayNilai.length;

// //   return rataRataNilai;
// // };
// // const menentukanGradeSiswa = function (rataRataNilai) {
// //   if (rataRataNilai > 100) {
// //     return 'Rata-rata nilai tidak valid!';
// //   } else if (rataRataNilai >= 90) {
// //     return 'A';
// //   } else if (rataRataNilai >= 80) {
// //     return 'B';
// //   } else {
// //     return 'C';
// //   }
// // };
// // const nilaiSiswa = [80, 85, 90, 95, 87.5];

// // const rataRataNilaiSiswa = menghitungRataRataNilai(nilaiSiswa);
// // const gradeSiswa = menentukanGradeSiswa(rataRataNilaiSiswa);
// // console.log('Rata-rata nilai siswa:', rataRataNilaiSiswa);
// // console.log('Grade siswa:', gradeSiswa);

// const keranjang = [
//   { nama: 'Buku' , harga: 12000, qty: 2 },
//   { nama: 'Pulpen' , harga: 5000, qty: 3 },
//   { nama: 'Tas' , harga: 75000, qty: 1 },
// ];

// const buah = ['apel', 'mangga', 'jeruk'];  //contoh penggunaan map
// const buahBaru1 = buah.map((item) => {
//   return item.toUpperCase();
// });
// console.log(buahBaru1);

// const buahBaru2 = buah.map((item) => item.toUpperCase());
// console.log(buahBaru2);


// const siswa = [
//   { nama: 'Andi', umur: 20 },
//   { nama: 'Budi', umur: 22 },
//   { nama: 'Citra', umur: 21 },
// ];

// const siswaBaru1 = siswa.map((orang) => orang.nama.toUpperCase());
// console.log(siswaBaru1);

// const siswaBaru2 = siswa.map((orang) => {
//   return orang.nama;
// })
// console.log(siswaBaru2);

class manusia {
  nama;
  #usia;
  #gender;
  #totalEnergy;
  mkn&mnm(
    if (usia<=) {
      
    }
  )

}
