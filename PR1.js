// Parent class
class Manusia {
  constructor(tinggiBadan) {
    this.tinggiBadan = tinggiBadan; // dalam cm
  }

  getTB() {
    return this.tinggiBadan;
  }
}

// Child class: Laki-laki
class Laki extends Manusia {
  constructor(tinggiBadan) {
    super(tinggiBadan);
  }

  getBBI() {
    const tb = this.getTB();
    const bbi = (tb - 100) - ((tb - 100) * 0.10);
    return bbi;
  }
}

// Child class: Perempuan
class Perempuan extends Manusia {
  constructor(tinggiBadan) {
    super(tinggiBadan);
  }

  getBBI() {
    const tb = this.getTB();
    const bbi = (tb - 100) - ((tb - 100) * 0.15);
    return bbi;
  }
}
const pria = new Laki(170);
console.log("TB Pria:", pria.getTB(), "cm");
console.log("BBI Pria:", pria.getBBI(), "kg");

const wanita = new Perempuan(160);
console.log("TB Wanita:", wanita.getTB(), "cm");
console.log("BBI Wanita:", wanita.getBBI(), "kg");
