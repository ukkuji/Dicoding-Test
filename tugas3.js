const arrayObjectSiswa = [ 
    { id: 1100, nama: "Budi", jurusan: "Sistem Komputer", nilaiNilai: [80, 90, 75] }, 
    { id: 1210, nama: "Siti", jurusan: "Teknik Informatika", nilaiNilai: [90, 100, 67] }, 
    { id: 1232, nama: "Andi", jurusan: "Sistem Informasi", nilaiNilai: [78, 80, 100] },
    { id: 4324, nama: "Dewi", jurusan: "Teknik Komputer", nilaiNilai: [88, 60, 50] }, 
    { id: 5612, nama: "Rina", jurusan: "Sistem Komputer", nilaiNilai: [92, 75, 78] }, 
    { id: 1645, nama: "Joko", jurusan: "Teknik Informatika", nilaiNilai: [80, 60, 90] }, 
    { id: 972, nama: "Sari", jurusan: "Sistem Informasi", nilaiNilai: [95, 100, 100] }, 
];

const processStudentData = (students, minAverage) => {
  return students
    // 1. map: hitung rata-rata & ubah nama jadi kapital
    .map(student => {
      const totalNilai = student.nilaiNilai.reduce(
        (sum, nilai) => sum + nilai,
        0
      );

      const rataRataNilai = totalNilai / student.nilaiNilai.length;

      return {
        ...student,
        nama: student.nama.toUpperCase(),
        rataRataNilai
      };
    })

    // 2. filter: rata-rata > minAverage
    .filter(student => student.rataRataNilai > minAverage)

    // 3. sort: descending berdasarkan id
    .sort((a, b) => b.id - a.id);
};

const result = processStudentData(arrayObjectSiswa, 85);
console.log(result);
