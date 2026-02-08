class Hewan {
  constructor(nama, breed, usia, gender) {
    this.breed = breed;
    this.usia = usia;
    this.gender = gender;
    this.nama = nama;
  }
  makeSound() {
    return "Hewan mengeluarkan suara";
  }
}
class Kucing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(nama, breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4;
  }
  makeSound() {
    return "Meong";
  }
}
class Sapi extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4;
  }
  makeSound() {
    return "Moooo";
  }
}
class Anjing extends Hewan {
  constructor(nama, breed, usia, gender) {
    super(breed, usia, gender);
    this.nama = nama;
    this.jumlahKaki = 4;
  }
  makeSound() {
    return "Guk Guk";
  }
}
const kucing = new Kucing("Milo", "Persia", 2, "Jantan");
const sapi = new Sapi("Lembu", "Simental", 5, "Betina");
const anjing = new Anjing("Bolt", "Husky", 3, "Jantan");

console.log(kucing.makeSound()); // Meong
console.log(sapi.makeSound());   // Moooo
console.log(anjing.makeSound()); // Guk Guk
