function pisahBilangan(...input) {
  // ambil angka terakhir sebagai batas akhir
  const batasAkhir = input[input.length - 1];

  // validasi minimal 10 elemen
  if (batasAkhir < 10) {
    return 
        console.log("error");
  }
  let arrayBilanganGenap = [];
  let arrayBilanganGanjil = [];

  for (let i = 1; i <= batasAkhir; i++) {
    if (i % 2 === 0) {
      arrayBilanganGenap.push(i);
    } else {
      arrayBilanganGanjil.push(i);
    }
  }
  return {
    arrayBilanganGenap,
    arrayBilanganGanjil
  };
}

console.log(pisahBilangan(1,4,7,13));
