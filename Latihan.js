// Mendefinisikan Kelas
class Car {
    constructor(merk, color) {
        this.merk = merk;
        this.color = color;
    }
    // Metode
    Drive() {
        console.log(`${this.merk} berwarna ${this.color} sedang berjalan.`);
    }
}
// Pewarisan
class RacingCar extends Car {
    constructor(merk, color, maxixmumspeed) {
        super(merk, color); // Memanggil konstruktor kelas induk
        this.maxixmumspeed = maxixmumspeed;
    }
    // Overriding Metode
    Drive() {
        console.log(`${this.merk} balap berwarna ${this.color} berjalan dengan kecepatan maksimal ${this.maxixmumspeed} km/jam.`);
    }
}
// Membuat Objek
const mobil1 = new Car('Toyota', 'merah');
mobil1.Drive(); // Output: Toyota berwarna merah sedang berjalan.

const mobilBalap1 = new RacingCar('Ferrari', 'hitam', 350);
mobilBalap1.Drive(); // Output: Ferrari balap berwarna hitam berjalan dengan kecepatan maksimal 350 km/jam.
