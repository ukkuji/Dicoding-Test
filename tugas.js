const nilaiSemester = [85, 90, 78.5, 92.25, 67.5, 75.27, 85, 97.25];

function hitungNilaiSemester(data = []) {
  // jika array kosong
  if (data.length === 0) {
    return {
      totalNilaiSemesterGenap: 0,
      totalNilaiSemesterGanjil: 0,
      rataRataNilaiSemesterGenap: 0,
      rataRataNilaiSemesterGanjil: 0
    };
  }

  let totalGenap = 0;
  let totalGanjil = 0;
  let countGenap = 0;
  let countGanjil = 0;

  data.forEach((nilai, index) => {
    const semester = index + 1; // semester dimulai dari 1

    if (semester % 2 === 0) {
      totalGenap += nilai;
      countGenap++;
    } else {
      totalGanjil += nilai;
      countGanjil++;
    }
  });

  return {
    totalNilaiSemesterGenap: totalGenap,
    totalNilaiSemesterGanjil: totalGanjil,
    rataRataNilaiSemesterGenap: countGenap === 0 ? 0 : totalGenap / countGenap,
    rataRataNilaiSemesterGanjil: countGanjil === 0 ? 0 : totalGanjil / countGanjil
  };
}

console.log(hitungNilaiSemester(nilaiSemester));
console.log(hitungNilaiSemester()); // array kosong
