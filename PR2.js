// Parent Class
class Pegawai {
  constructor(idPegawai, nama, golongan, tanggalLahir) {
    this.idPegawai = idPegawai;
    this.nama = nama;
    this.golongan = golongan;
    this.tanggalLahir = new Date(tanggalLahir);
  }

  getUsia() {
    const today = new Date();
    let usia = today.getFullYear() - this.tanggalLahir.getFullYear();
    const bulan = today.getMonth() - this.tanggalLahir.getMonth();
    if (bulan < 0 || (bulan === 0 && today.getDate() < this.tanggalLahir.getDate())) {
      usia--;
    }
    return usia;
  }

  getGajiPokok() {
    const usia = this.getUsia();

    if (this.golongan === 1) {
      return usia < 40 ? 3500000 : 4500000;
    }

    if (this.golongan === 2) {
      return usia < 40 ? 5000000 : 6000000;
    }

    return 0;
  }

  getTunjanganPegawai() {
    return 0; // dioverride
  }

  getTotalGaji() {
    return 0; // dioverride
  }
}
//class untuk dosen=============================================================================================
class Dosen extends Pegawai {
  constructor(idPegawai, nama, golongan, tanggalLahir, nidn) {
    super(idPegawai, nama, golongan, tanggalLahir);
    this.nidn = nidn;
  }

  getTunjanganPegawai() {
    return 1500000;
  }

  getTunjanganFungsional() {
    return this.getUsia() < 40 ? 1700000 : 2000000;
  }

  getTotalGaji() {
    return (
      this.getGajiPokok() +
      this.getTunjanganPegawai() +
      this.getTunjanganFungsional()
    );
  }
}
// class nondosen============================================================================================================
class NonDosen extends Pegawai {
  constructor(idPegawai, nama, golongan, tanggalLahir) {
    super(idPegawai, nama, golongan, tanggalLahir);
  }

  getTunjanganPegawai() {
    return 1000000;
  }

  getTotalGaji() {
    return this.getGajiPokok() + this.getTunjanganPegawai();
  }
}
const dosen1 = new Dosen(
  "D001",
  "Andi",
  2,
  "1985-05-10",
  "123456789"
);

console.log("Nama:", dosen1.nama);
console.log("Usia:", dosen1.getUsia());
console.log("Total Gaji Dosen:", dosen1.getTotalGaji());

const staff1 = new NonDosen(
  "N001",
  "Budi",
  1,
  "1995-08-20"
);

console.log("Nama:", staff1.nama);
console.log("Usia:", staff1.getUsia());
console.log("Total Gaji NonDosen:", staff1.getTotalGaji());
